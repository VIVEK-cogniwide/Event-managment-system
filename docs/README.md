# Release Dashboard

## 📌 Overview
This project is a React-based application called **Release Dashboard**, designed to manage and display software release versions. It includes various components like a Navbar, Sidebar, version tables, authentication system, and data download functionality.

## 🚀 Features

- **Dropdown Menu**: Contains user details and a logout button.
- **Session & Local Storage Management**: User information is stored and cleared upon logout.
- **Responsive Design**: Optimized for different screen sizes.
- **Navigation Handling**: Redirects users to the login page upon logout.
- **Sidebar Navigation**: Includes a sidebar for easy access to different sections.
- **Table Views**: Displays platform version and CS version tables.
- **Authentication System**: Supports login, signup, and OTP verification.
- **Data Download**: Provides functionality to download relevant data.

## 🛠️ Technologies Used
- **React** (Functional Components & Hooks)
- **React Router** (Navigation & Routing)
- **CSS** (Custom styling for Navbar & other components)
- **React Icons** (For UI enhancements)

## 🎨 UI Preview
![Release Dashboard Preview] (http://k8s-rdfronte-rdfronte-ea07a2969d-a4fd1b6acfa1982b.elb.eu-west-2.amazonaws.com/)

## 📂 Project Structure
```
release-dashboard/
│-- src/
│   │-- components/
│   │   ├── Navbar.js
│   │   ├── Sidebar.js
│   │   ├── PLTVersionTable.js
│   │   ├── CSVersionTable.js
│   │   ├── LoginModel.js
│   │   ├── Signup.js
│   │   ├── Home.js
│   │   ├── Updatedtime.js
│   │   ├── Dropbox.js
│   │   ├── Table.js
│   │   ├── Download.js
│   │-- styles/
│   │   ├── Navbar.css
│   │   ├── Sidebar.css
│   │   ├── Home.css
│   │   ├── Table.css
│   │-- App.js
│   │-- index.js
│-- public/
│   ├── index.html
│-- package.json
│-- README.md
```

## 🚀 Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/release-dashboard.git
cd release-dashboard
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
npm start
```

## 📜 Usage
1. The Navbar will display the logged-in user's first name.
2. Clicking on the user icon will toggle the dropdown menu.
3. Sidebar provides navigation to different sections.
4. Table components display version information.
5. Authentication system supports login, signup, and OTP verification.
6. Data download functionality is available for users.
7. Clicking **Logout** will clear the session and redirect to the login page.

## 🛠️ Customization
- Modify `Navbar.js` to change the UI or functionality.
- Edit `Navbar.css` to apply custom styles.
- Update `sessionStorage` handling to fit your authentication logic.
- Add additional features in the Sidebar, Tables, or Authentication components as needed.

## 📝 License
This project is licensed under the **MIT License**.

## 📬 Contact
For questions or suggestions, feel free to reach out!
- **GitHub**: [your-profile](https://github.com/PradeepK20/Release-Dashboard)


