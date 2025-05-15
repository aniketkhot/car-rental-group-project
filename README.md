
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# **Assignment: Full-Stack CRUD Application Development with DevOps Practices**

## **Objective**

You have been provided with a starter project that includes user authentication using  **Node.js, React.js, and MongoDB**. Your task is to extend this application by implementing **CRUD (Create, Read, Update, Delete) operations** for a real-world application of your choice, while following industry best practices such as:

* **Project Management with JIRA**
* **Requirement Diagram using SysML**
* **Version Control using GitHub**
* **CI/CD Integration for Automated Deployment**

## **Requirements**

### **1. Choose a Real-World Application**

Select a meaningful use case for your CRUD operations. We will provide the list, you have to select it.

### **2. Project Management with JIRA and SysML**

* Create a **JIRA project** and define:
  * **Epic**
  * **User Stories** (features required in your app)
  * **Child issues & Subtasks** (breaking down development work)
  * **Sprint Planning** (organizing work into milestones)
* Document your JIRA **board URL** in the project README.
* Draw a requirements diagram

### **3. Backend Development (Node.js + Express + MongoDB)**

* Create a user-friendly interface to interact with your API (Some portion developed, follow task manager app)).
* Implement **forms** for adding and updating records.
* Display data using  **tables, cards, or lists (Follow how we showed data in task manager app)**

### **4. Frontend Development (React.js)**

* Create a user-friendly interface to interact with your API (**Some portion developed, follow task manager app)**.
* Implement **forms** for adding, showing, deleting and updating records (CRUD).
* Display data using  **tables, cards, or lists (Follow how we showed data in task manager app)**

### **5. Authentication & Authorization**

* Ensure **only authenticated users** can access and perform CRUD operations. (Already developed in your project)
* Use **JWT (JSON Web Tokens)** for user authentication (Use the task manager one from .env file).

### **6. GitHub Version Control & Branching Strategy**

* Use **GitHub for version control** and maintain:
  * `main` branch (stable production-ready code)
  * Feature branches (`feature/xyz`) for each new functionality
* Follow proper **commit messages** and  **pull request (PR) reviews** .

### **7. CI/CD Pipeline Setup**

* Implement a **CI/CD pipeline using GitHub Actions** to:
  * Automatically **run tests** on every commit/pull request (Optional).
  * Deploy the **backend** to **AWS** .
  * Deploy the **frontend** to **AWS**.
* Document your  **CI/CD workflow in the README** .

## **Submission Requirements**

* **JIRA Project Board URL** (user stories ).
* **Requirment diagram** (Using project features)
* **GitHub Repository** (`backend/` and `frontend/`).
* **README.md** with:

  * Project setup instructions.
  * CI/CD pipeline details.

