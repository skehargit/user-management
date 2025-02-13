# User Management API

## 📌 Project Overview
This is a **User Management API** built with Node.js, Express, and MongoDB. It provides user registration, login, and search functionality.

---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone <repository-url>
```
open the user-management file inside that follow the command bellow

### **2️⃣ Install Dependencies**
```bash
npm install
```
This will install all required dependencies listed in `package.json`.

### **3️⃣ Create a `.env` File**
Inside the root directory, create a `.env` file and add the following environment variables:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=4000
```

### **4️⃣ Start the Server**
To start the server in production mode:
```bash
npm start
```

To start the server in development mode with **nodemon** for real-time error tracking:
```bash
npm run dev
```

---

## 🔥 API Endpoints

### **1️⃣ User Registration**
- **Endpoint:** `POST http://localhost:4000/api/auth/register`
- **If you don't want to use it locally, use:** `POST https://user-management-kvei.onrender.com/api/auth/register`
- **Request Body (JSON):**
  ```json
  {
    "username": "sekhar",
    "email": "sudhansu@gmail.com",
    "password": "123456",
    "fullName": "sudhanshu sekhar behera",
    "gender": "Male",
    "dateOfBirth": "2001-06-12",
    "country": "India"
  }
  ```
- **Response:**
  - All field's are required
  - `201 Created` if registration is successful
  - `400 Bad Request` if validation fails or user already exists

### **2️⃣ User Login**
- **Endpoint:** `POST http://localhost:4000/api/auth/login`
- **If you don't want to use it locally, use:** `POST https://user-management-kvei.onrender.com/api/auth/login`
- **Request Body (JSON):**
  ```json
  {
    "email": "sudhansu@gmail.com",
    "password": "123456"
  }
  ```
- **Response:**
  - `200 OK` if login is successful (returns JWT token)
  - `401 Unauthorized` if credentials are invalid

### **3️⃣ User Search**
- **Endpoint:** `GET http://localhost:4000/api/auth/search/:query`
- **If you don't want to use it locally, use:** `GET https://user-management-kvei.onrender.com/api/auth/search/:query`
- **How It Works:**
  - Enter any **username, full name, or email substring** as the `query`
  - The API will return users **whose details contain the search string**
- **Example Usage:**
  - Searching for `sudh` will return all users with `sudh` in their **username, fullName, or email**
  
---

## 🎯 Testing the API
Use **Postman** or any API testing tool to make requests to the endpoints.

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Validation:** Express Validator

---

## 💡 Additional Notes
- Ensure that your **MongoDB server is running** before starting the application.
- You can use [Postman](https://www.postman.com/) to test API requests.
- If you face any issues, check the logs in the terminal when running `npm run dev`.

---

🚀 **Happy Coding!**

