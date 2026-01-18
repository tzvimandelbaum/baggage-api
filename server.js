const express = require("express");
const path = require("path");

const app = express();

// Serve all static files from /public
app.use(express.static(path.join(__dirname, "public")));

// FORCE /about to load about.html
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Clean 404 (no ugly Cannot GET)
app.use((req, res) => {
  res.status(404).send(`
    <!doctype html>
    <html>
      <head><title>404</title></head>
      <body style="font-family:Arial; padding:40px;">
        <h1>Page not found</h1>
        <p><a href="/">Go back home</a></p>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
