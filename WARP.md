Warp - Frontend of Cogniloom

Warp is the frontend of Cogniloom, an Internal Developer Portal (IDP) designed to streamline developer workflows, enhance visibility into platform resources, and simplify infrastructure management.

🚀 Features
Intuitive UI: A modern, user-friendly interface for interacting with the Cogniloom platform.
Resource Management: Seamless integration with backend services to provision and manage cloud resources.
Template-Driven Workflows: Supports Backstage templates for automating infrastructure provisioning.
GitHub Actions Integration: Triggers and monitors CI/CD workflows.
Authentication & Authorization: Secure access control with role-based permissions.
Kubernetes Support: Manage and deploy applications on Kubernetes clusters.

🛠️ Tech Stack
React (Frontend framework)
TypeScript (Type safety & maintainability)
Tailwind CSS (Styling)
Redux (State management)
Axios (API calls)
React Router (Navigation)
Keycloak/Auth0 (Authentication - if applicable)

📦 Installation
Prerequisites
Node.js (v16 or later)
npm or yarn

teps
sh
Copy
Edit
# Clone the repository
git clone https://github.com/your-org/warp.git

# Navigate to the project folder
cd warp

# Install dependencies
npm install  # or yarn install

# Start the development server
npm start  # or yarn start
The app should be available at http://localhost:3000.

⚙️ Configuration
Warp requires backend API endpoints to be configured. Modify .env accordingly:

env:
REACT_APP_BACKEND_API=https://api.cogniloom.com
REACT_APP_AUTH_PROVIDER=keycloak
REACT_APP_GITHUB_WORKFLOW_API=https://github.com/api
🏗️ Development
Running Tests
sh
Copy
Edit
npm test  # or yarn test
