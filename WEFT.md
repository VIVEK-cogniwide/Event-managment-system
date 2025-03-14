Weft - Backend of Cogniloom
Weft is the backend service of Cogniloom, an Internal Developer Portal (IDP) designed to simplify infrastructure provisioning, automate workflows, and enhance developer productivity. It serves as the API layer, handling authentication, resource management, and integrations with cloud platforms.

🚀 Features
API Gateway: Provides RESTful APIs for frontend (Warp) interactions.
Infrastructure Provisioning: Automates cloud resource creation via Terraform and Pulumi.
Authentication & Authorization: Supports OAuth2, Keycloak, and RBAC policies.
GitHub Actions Integration: Triggers CI/CD workflows from Backstage templates.
Kubernetes Management: Manages deployments on Kubernetes clusters.
Event-Driven Architecture: Uses Kafka/RabbitMQ for asynchronous operations.
🛠️ Tech Stack
Node.js (Express.js) (Choose one based on implementation)
PostgreSQL / MySQL (Database)
Terraform / Pulumi (Infrastructure as Code)
Keycloak / Auth0 (Authentication & User Management)
Kubernetes / Docker (Deployment & Orchestration)
📦 Installation
Prerequisites
Node.js 16+ (if using Express.js)
PostgreSQL/MySQL
Redis (optional, for caching)
