#  React Auth Flow — SignUp, Login & Home Page

This is a **React-based Authentication App** built using **functional components**, **custom hooks**, and **Tailwind CSS** for styling.  
It allows users to **sign up**, **log in**, and access a **protected home page**, with user data stored locally via `localStorage`.

---

##  Features

###  User Authentication
- **Sign Up** — Create a new account with username, email, and password.  
  - Includes input validation (empty fields, password length, matching passwords).
  - Prevents duplicate email registration.
- **Login** — Allows existing users to log in using saved credentials.
  - Validates user email and password before granting access.
- **Home Page (Protected)** — Displays a personalized welcome message.
  - Redirects unauthenticated users to the login page.
  - Includes a **Logout** button to end session.

---

##  Custom Hooks

###  `useSignUp`
Handles:
- Managing form state (`formData`)
- Validating input fields (username, email, password)
- Storing new users in `localStorage`
- Automatically logging in and navigating to `/home` upon successful signup

###  `useLogin`
Handles:
- Form input management
- Error handling for invalid credentials
- Login verification using users saved in `localStorage`
- Redirecting logged-in users to the home page

Both hooks keep logic **modular and reusable**, improving code clarity and separation of concerns.

---

##  Styling

All UI is built using **Tailwind CSS** — providing a clean, responsive, and mobile-friendly layout:
- Forms are centered and styled with green-accented borders.
- Buttons include hover transitions.
- Layout automatically adjusts for mobile, tablet, and desktop screens.

---

##  Tech Stack

| Tool / Library | Purpose |
|-----------------|----------|
| **React** | Frontend UI framework |
| **React Router DOM** | Page navigation |
| **Tailwind CSS** | Styling and responsiveness |
| **LocalStorage API** | Storing users and sessions locally |
| **Custom Hooks** | Managing form logic and reusability |

---

## How It Works

 1. Sign Up:

     - Enter your details and create an account.
     - Data is validated and stored in localStorage.
     - User is auto-logged-in and redirected to the Home page.

  2. Login:

    - Enter registered email and password.
    - App validates credentials and logs in user.

  3. Home Page:

   - Displays logged-in user's name.
   - Clicking "Logout" clears session and redirects to login.


