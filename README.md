# 🚀 Full Stack API with Express, PostgreSQL, and Prisma

## 📌 Project Overview
This is a RESTful API built using **Express.js, PostgreSQL, and Prisma** for managing projects and tasks. Users can create and manage projects, assign tasks, and track task statuses with authentication and authorization.

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JWT (JSON Web Token)
- **Validation:** Express Validator

---

## 📂 Features
✅ **User Authentication** (Register/Login with JWT)  
✅ **CRUD operations** for Users, Projects, and Tasks  
✅ **Task Assignment & Status Updates**  
✅ **Authorization** (Users can only update their own projects/tasks)  
✅ **Filtering & Searching** for tasks  
✅ **Database Management with Prisma**  

---

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/express-api-project.git
cd express-api-project
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Setup Environment Variables**
Create a `.env` file and add:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
JWT_SECRET="your_secret_key"
PORT=3000
```
Replace `user`, `password`, and `dbname` with your actual PostgreSQL credentials.

### **4️⃣ Set Up the Database**
```sh
npx prisma migrate dev --name init
npx prisma generate
```

### **5️⃣ Start the Server**
```sh
npm run dev
```
Your API is now running at: [http://localhost:3000](http://localhost:3000)

