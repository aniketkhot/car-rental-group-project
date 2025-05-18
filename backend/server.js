const dotenv = require('dotenv');
const express = require('express');

const cors = require('cors');
const connectDB = require('./config/db');
const landingbookRoutes = require('./routes/landingbook');

dotenv.config();

const app = express();



app.use(cors({
  origin: "http://localhost:3000", //allow frontend origin
  credentials: true,               // required if using cookies/session in future
}));

app.use(express.json()); 

app.use('/api/auth', require('./routes/authRoutes'));

app.use('/api/car', require('./routes/carRoutes'));
app.use('/api/user', require('./routes/userRoutes')); 
app.use('/api/rental', require('./routes/rentalRoutes'));
app.use('/api/landingbook', landingbookRoutes);


app.get('/hello', (req, res) => {
  res.send("Hello World!");
});
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend is working 1212✅" });
});

app.get('/api/debug/routes', (req, res) => {
  const listEndpoints = require('express-list-endpoints');
  res.json(listEndpoints(app));
});


const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerOptions'); 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


connectDB().then(() => {
  console.log('Database connected');
  
  if (require.main === module) {
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}).catch((err) => {
  console.error('Failed to connect DB:', err);
});

module.exports = app;
