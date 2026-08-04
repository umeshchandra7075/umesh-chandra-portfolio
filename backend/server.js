const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Allow requests from both Localhost and Vercel
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://umesh-chandra-portfolio.vercel.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Umesh Chandra Portfolio API is running 🚀",
    status: "OK",
  });
});

// Contact API
app.use("/api/contact", require("./routes/contact.routes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});