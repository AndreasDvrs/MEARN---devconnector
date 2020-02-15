const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API RUNNING"));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
