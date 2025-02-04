# User Management System 🚀

This is a simple **User Management System** built with **Angular**. It uses **Dummy JSON** as a backend, implements **JWT authentication**, and displays notifications with **ngx-toastr**.
(Project Demo)[https://abdulrahman-mohamed-amin.github.io/UMS/]
## Features ✨

- ✅ User authentication using **JWT tokens**  
- ✅ Fetching user data from **Dummy JSON**  
- ✅ Displaying success/error messages using **ngx-toastr**  
- ✅ Secure routes based on authentication status  

## Technologies Used 🛠️

- **Angular** (Latest Version)  
- **ngx-toastr** (For notifications)  
- **jwt-decode** (For decoding JWT tokens)  
- **Dummy JSON API** (As a fake backend)  


## How It Works ⚙️
### Authentication 🔑
When a user logs in, a JWT token is generated (simulated).
The token is stored in localStorage.
The app verifies the token using jwt-decode before granting access to secure routes.
User Data 📊
Users are fetched from the Dummy JSON API (https://dummyjson.com/users).
Data is displayed in a table with basic CRUD operations (if implemented).
Notifications 🔔
ngx-toastr is used to show success/error messages for user actions

## Future Improvements 🚀
🔹 Implement full CRUD operations.
🔹 Add role-based access control.
🔹 Integrate with a real backend API.
