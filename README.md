# Login-Signup-Backend
Login Signup Backend in Nodejs with MongoDB connection

### Clone, Install, Run and Test

1. Clone (Repo)

```copy
git clone https://github.com/Archit1706/Login-Signup-Backend.git

cd Login-Signup-Backend

code .
```

2. Install (Dependencies)

```copy
npm install
```

3. Run (App)

 ```copy
npm run start
```

4. Test (Postman)

  - Register
    
    URL for Register
      ```copy
      http://localhost:3000/api/register
      ```
      
    Body for Register
      ```json copy
      {
          "name": "Archit Rathod",
          "email": "ar@gmail.com",
          "password": "archit12345"
      }
      ```

  - Login

    URL for Login
      ```copy
      http://localhost:3000/api/login
      ```
      
    Body for Login
      ```json copy
      {
          "email": "ar@gmail.com",
          "password": "archit12345"
      }
      ```

