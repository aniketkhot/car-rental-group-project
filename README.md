# Car Rental System

This is a full-stack car rental management system built using Node.js, Express, MongoDB, and React. It allows users to browse and rent cars, while admins can manage vehicles, view rentals, and handle payment processes. The backend supports authentication, role-based access control, and dynamic pricing based on different strategies.

## Features

- User registration and login with JWT authentication
- Role-based access (admin vs normal user)
- CRUD operations for cars, rentals, and payments
- Dynamic pricing strategy based on rental type, duration, and season
- Secure and centralized payment service using singleton
- Observer-based receipt notification after payment
- API access protected via middleware
- Swagger API documentation
- Deployment-ready backend (used on AWS EC2)

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for Authentication
- Swagger for API docs
- Postman for testing

## Object-Oriented Principles

This project applies key OOP concepts:

- **Classes & Objects**: All main entities (User, Car, Rental, Payment) are implemented as Mongoose schema models and used as instantiated objects across the app.
- **Encapsulation**: Business logic is separated into services (e.g., rentalService, paymentService), keeping controllers focused and clean.
- **Inheritance**: Different pricing strategy classes extend a common pricing base class to reuse logic and override behavior.
- **Polymorphism**: Strategy classes override the same method `calculate()` with different internal logic, allowing behavior to vary based on object type.

## Design Patterns Implemented

- **Factory Pattern**: Used for creating car and rental objects using a centralized factory method for consistent instantiation.
- **Strategy Pattern**: Different pricing rules are applied using interchangeable strategy classes.
- **Singleton Pattern**: Payment service is created as a single instance to handle all payment logic and event subscriptions.
- **Observer Pattern**: Receipt generation and other post-payment actions are triggered via observer callbacks.
- **Proxy Pattern**: Role-based access control is handled using middleware that filters requests based on user permissions.

## Folder Structure

/backend
├── controllers/
│ ├── authController.js
│ ├── carController.js
│ ├── paymentController.js
│ └── rentalController.js
├── middleware/
│ ├── authMiddleware.js
│ └── authorize.js
├── models/
│ ├── User.js
│ ├── Car.js
│ ├── Rental.js
│ └── Payment.js
├── routes/
│ ├── authRoutes.js
│ ├── carRoutes.js
│ ├── rentalRoutes.js
│ └── paymentRoutes.js
├── services/
│ ├── rentalService.js
│ ├── paymentService.js
│ ├── pricingStrategy.js
│ └── userRoles.js
├── utils/
│ ├── factory.js
│ └── adapters/ (Stripe, PayPal, Razorpay)
├── swaggerOptions.js
├── server.js


## Getting Started

### 1. Clone the Repository

  git clone https://github.com/aniketkhot/car-rental-group-project.git
 
  cd car-rental-group-project/backend


### 2. Install Dependencies


  npm install

  
### 3. Create `.env` File in the `backend/` Folder


MONGO_URI=<your_mongodb_atlas_uri>
JWT_SECRET=<your_jwt_secret>
PORT=5001

### 4. Start the Backend Server

npm start
The server will run on http://localhost:5001

###5. Access Swagger API Docs
http://localhost:5001/api-docs

### API Testing via Postman
All secured routes require a JWT token in the Authorization header.

Format:

Authorization: Bearer <your_token>
Example endpoints:

POST /api/auth/register – register a new user

POST /api/auth/login – get JWT token

POST /api/car – add a car (admin only)

POST /api/rental – create rental (authenticated users)

POST /api/payment/pay – process a payment




### Author & Usage
This system was developed as part of the IFN636 – Software Development, Testing and Configuration coursework at Queensland University of Technology.

For academic use only. 
