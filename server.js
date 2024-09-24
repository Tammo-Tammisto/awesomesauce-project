const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Enable CORS to allow communication from file://
app.use(cors());

// Middleware to parse incoming requests as JSON
app.use(bodyParser.json());

// Create or connect to SQLite database
const db = new sqlite3.Database('./db.sqlite', (err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to SQLite database.');
        db.run(`
            CREATE TABLE IF NOT EXISTS feedback (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                subject TEXT NOT NULL,
                subject_rating INTEGER NOT NULL,
                teacher TEXT NOT NULL,
                teacher_rating INTEGER NOT NULL,
                comment TEXT,
                student_name TEXT NOT NULL,
                student_group TEXT NOT NULL
            )
        `);
    }
});

// Route to handle feedback submission
app.post('/submit_feedback', (req, res) => {
    const { subject, subject_rating, teacher, teacher_rating, comment, student_name, student_group } = req.body;

    const query = `
        INSERT INTO feedback (subject, subject_rating, teacher, teacher_rating, comment, student_name, student_group)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.run(query, [subject, subject_rating, teacher, teacher_rating, comment, student_name, student_group], function (err) {
        if (err) {
            return res.status(500).json({ status: 'error', message: 'Database error' });
        }
        res.json({ status: 'success', message: 'Feedback submitted successfully!' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
