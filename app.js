const express = require("express");
const path = require("path");

const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Sample data for books
const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10 },
  { id: 2, title: "1984", author: "George Orwell", price: 15 },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", price: 12 },
];

// API endpoint to fetch books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
