import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";


dotenv.config();

const app = express();
// const PORT = 5050;
const PORT = process.env.PORT || 5050;


// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "talentmaster"
// });

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("MySQL connected successfully");
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("TalentMaster backend is running!");
});

// Submit form
app.post("/api/enter-now", (req, res) => {
  const {
    name,
    email,
    phone,
    category,
    facebookId,
    instagramId,
    mediaLinks
  } = req.body;

  const sql = `
    INSERT INTO talents
    (name, email, phone, category, facebookId, instagramId, mediaLinks)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, email, phone, category, facebookId, instagramId, mediaLinks],
    (err, result) => {
      if (err) {
        console.error("Insert error:", err);
        return res.status(500).json({ error: "Database insert failed" });
      }

      res.status(201).json({
        message: "Talent registered successfully"
      });
    }
  );
});

// Get all talents
app.get("/api/talents", (req, res) => {
  db.query("SELECT * FROM talents", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch data" });
    }
    res.json(results);
  });
});

// Increment votes
app.post("/api/votes/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "UPDATE talents SET votes = votes + 1 WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Vote update failed" });
      }

      res.json({ message: "Vote counted" });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
