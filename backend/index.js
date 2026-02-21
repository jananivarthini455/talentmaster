import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "talentmaster"
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("MySQL connected successfully");
  }
});

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
