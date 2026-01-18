const express = require("express");
const path = require("path");

const app = express();

// Serve files from /public
app.use(express.static(path.join(__dirname, "public")));

app.get("/about", (req, res) => {
  res.send("<h1>About page ✅</h1><a href='/'>Back</a>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
