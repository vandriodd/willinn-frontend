# Willinn Frontend

![Willinn Logo](https://willinn.io/wp-content/themes/willinn/assets/img/logo.png)

**User management interface** for Willinn, featuring secure authentication and a user admin dashboard. Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

## 🌟 Features

- **Secure Authentication**: Session persistence with cookies.
- **Admin Dashboard**: Display a table of users.
- **User Management**: Add and delete users.
- **Responsive Design**.

## 🛠️ Technologies

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📁 Project Structure

```
📦 src
 ┣ 📂 app
 ┃ ┣ 📂 users
 ┃ ┃ ┣ 📜 page.tsx             # User table
 ┃ ┃ ┣ 📜 login.tsx            # Login page
 ┃ ┃ ┣ 📜 layout.tsx           # Layouts
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 AddUserForm.tsx      # Form to add a user
 ┃ ┃ ┣ 📜 Navbar.tsx           # Navigation bar
 ┃ ┃ ┣ 📜 UsersTable.tsx       # Table to list users
 ┃ ┣ 📂 services
 ┃ ┃ ┣ 📜 willinnApi.ts        # API setup
 ┃ ┃ ┣ 📜 session.ts           # Session handling
 ┃ ┃ ┗ 📜 constants.ts         # Global constants
 ┣ 📜 .gitignore               # Git ignore rules
 ┣ 📜 next.config.ts           # Next.js config
 ┣ 📜 package.json             # Dependencies and scripts
```

## 🚀 Setup and Running

1. **Clone the repository**:

   ```bash
   git clone https://github.com/vandriodd/willinn-frontend.git
   cd willinn-frontend
   ```

2. **Install dependencies with pnpm or npm**:

   ```bash
   pnpm install
   ```

3. **Set environment variables**:
   Create a `.env` file and define necessary variables, for example:

   ```plaintext
   SESSION_SECRET=your_session_secret_key
   ```

4. **Start the development server**:

   ```bash
   pnpm dev
   ```

5. **Enjoy!**:
   The app should now be running on [http://localhost:3000](http://localhost:3000).
