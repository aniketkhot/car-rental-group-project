
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const landingbookRoutes = require('./routes/landingbook');

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/authRoutes'));
//app.use('/api/tasks', require('./routes/taskRoutes'));

app.use('/api/cars', require('./routes/carRoutes'));
app.use('/api/customers', require('./routes/customerRoutes'));


app.get('/hello', (req, res) => {
  res.send("Hello World!");
});
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend is working 1212✅" });
});

app.use('/api/rentals', require('./routes/rentalRoutes'));

app.use('/api/landingbook', landingbookRoutes);
// Export the app object for testing
if (require.main === module) {
    connectDB();
    // If the file is run directly, start the server
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }


module.exports = app
