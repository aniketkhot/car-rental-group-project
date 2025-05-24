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

## Design Patterns Implemented

- **Factory Pattern**:
The factory pattern is used to centralize the creation of complex objects, such as car and
rental instances. Instead of constructing these objects directly within controllers or services,
a factory function handles the creation process, allowing for consistent structure and easier
future customization.
In the project, a createRental factory function is defined and used inside the rental service to
instantiate rental objects with all required fields. Similarly, a createCar function is used to
build car entries in a standardized format.
This pattern fits the project well because it decouples the object creation logic from business
operations, making it easier to modify object construction in one place without affecting the
rest of the system. It also improves testability and code reuse.
![image](https://github.com/user-attachments/assets/b9119b59-c847-4b05-96cb-3b5b8f394ebf)


- **Strategy Pattern**:
The strategy pattern is applied to handle dynamic pricing logic. A base pricing strategy class
defines a standard interface for calculating rental prices, and multiple subclasses implement
different pricing algorithms based on business rules.
For example, the project includes distinct strategy classes for standard pricing, corporate
discounts, long-term rentals, weekend rates, and peak season surcharges. Each class
overrides the same calculate method to apply its specific logic.
The strategy pattern is ideal in this context because it allows rental pricing to be selected
dynamically at runtime based on rental parameters such as duration, customer type, or
season. It provides a clean way to encapsulate conditional logic without cluttering the
controller or service.

 ![image](https://github.com/user-attachments/assets/3d9c9baa-c64f-4809-a1e6-51d49c274bd7)

- **Singleton Pattern**:
  The singleton pattern is used to ensure that the payment service operates as a single shared
instance throughout the system. The payment service is responsible for processing
transactions, selecting the appropriate payment gateway, and triggering observer actions
upon successful payments.
Only one instance of the service is initialized and reused across the application. This is crucial
because the payment service needs to maintain consistent internal configuration, observer
registrations, and gateway dispatching logic.
Using the singleton pattern guarantees controlled access to a centralized payment module
and avoids the risks of inconsistent state or duplicated logic. It also aligns with how stateful
services like payment processors are handled in real-world applications.
![image](https://github.com/user-attachments/assets/9cea1ec3-de4f-45e8-bebf-648ac054710d)


- **Observer Pattern**:

The observer pattern is implemented to allow side effects to occur automatically when a
payment is successfully processed. After the payment is completed and saved, the system
notifies multiple observers such as a simulated email receipt sender and a logger that
records the transaction.
Each observer is subscribed to a subject (the payment service), and they are notified
through a publish-subscribe mechanism when payment events occur. This loose coupling
allows new observers to be added or existing ones modified independently.
The observer pattern is particularly well-suited for post-payment workflows that require
additional non-blocking operations, such as sending notifications, updating external systems,
or writing audit logs. It improves separation of concerns and aligns with event-driven
architectural principles.
![image](https://github.com/user-attachments/assets/8df7a3f7-ffea-4990-ace6-d67678e399c6)


- **Proxy Pattern**:
  The proxy pattern is used to control access to protected routes based on user roles. A proxy
middleware intercepts requests to sensitive endpoints and determines whether the current
user has the necessary permissions to proceed. This includes checks for actions like viewing
financial data, managing users, or accessing admin-level resources.
Role-based access logic is encapsulated within the proxy and authorization files, which act as
gatekeepers to the actual route handlers.
This pattern is appropriate because it centralizes and enforces access control logic,
improving security and reducing duplication. It also allows permission policies to evolve
without requiring changes to individual routes.
![image](https://github.com/user-attachments/assets/9de730e1-b8ac-412f-96ed-a0665033ff25)


## Object-Oriented Principles

This project applies key OOP concepts:

- **Classes & Objects**: 
        The project models all core entities such as users, cars, rentals, and payments using
        Mongoose schemas. These schemas serve as class definitions that encapsulate both data
        attributes and behaviours such as validation, default values, and references to related
        collections.
        For example, the Car schema defines a car's brand, model, pricing, features, and availability.
        Each new car created using this schema becomes a distinct object. Similarly, Rental and
        Payment are treated as real-world constructs, with Rental representing a booking instance
        and Payment storing transaction information. The code uses object instantiation like new
        Rental({}) throughout the application when creating new entries.
        Using object-based modeling provides a consistent and intuitive structure that mirrors how
        users and developers understand the domain. It also aligns with typical software engineering
        practice where data and behavior are bundled together under shared definitions
  
![image](https://github.com/user-attachments/assets/635447f7-498e-4059-bd71-7963f8d9667c)

- **Encapsulation**:
  
    By separating business logic from the routing and controller layers. Core processing logic
    related to pricing, payment handling, and object creation is abstracted into service files.
    For example, the rental creation process involves calculating rental duration, selecting the
    correct pricing strategy, computing the total price, and constructing a rental object. All of
    this logic is encapsulated inside a dedicated rental service file, rather than being directly
    handled within the controller. This keeps the controller clean and focused on input validation
    and response formatting.
    Similarly, the payment service file is designed as a singleton and contains all logic related to
    dispatching payments to different gateways, saving transactions to the database, and
    notifying observers. Controllers merely pass the required input to this service without
    concerning themselves with the specifics of how payments are processed or recorded.
    By encapsulating business logic in this way, the project achieves a clean separation of
    concerns. Each service is responsible for its own domain, reducing coupling and improving
    testability. This also enhances maintainability, as changes to logic in one area (e.g., pricing
    rules) do not require changes elsewhere in the application.

  ![image](https://github.com/user-attachments/assets/e0975fc2-ddc7-4931-87a5-224696770ef5)



- **Inheritance**:
Inheritance is implemented through the pricing strategy system. A base class is created to
represent the general structure of a pricing strategy. Specific pricing strategies such as
 IFN636: Software Life Cycle Management – Week3 Page 15 of 40
 This document is copyright protected. Do not copy. Do not share (online and offline).
corporate pricing, long-term discounts, peak-season pricing, and weekend pricing—extend
this base class and override its methods with their own logic.
Each subclass inherits the interface of the base pricing class but applies a different formula
for calculating the final rental cost. For instance, the corporate pricing strategy applies a flat
discount, while the peak season strategy adds a surcharge during a predefined date range.
This shared interface and customized behavior reduce code duplication and centralize
shared logic.
Inheritance ensures that new pricing strategies can be added in the future with minimal
effort. A new class simply needs to extend the base class and override the necessary
method. The rest of the system can continue to work without modification, thanks to the
consistency provided by the inheritance structure.
- ![image](https://github.com/user-attachments/assets/b585bcc3-31ae-4b93-8504-7b0c4180aacf)

- **Polymorphism**:

Polymorphism in this project is primarily implemented through method overriding. Each
pricing strategy subclass provides its own implementation of the calculate method, which
determines the total price for a rental based on specific rules.
The controller or service that applies pricing does not need to know which strategy is being
used. It simply creates a strategy object and calls the calculate method. The strategy class
takes care of executing the appropriate logic internally. This demonstrates runtime
polymorphism where the same method name leads to different behaviors depending on the
object type..


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
