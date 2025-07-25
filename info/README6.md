
💡 A Go-based blogging platform demonstrating Kubernetes components with Helm, CRDs, and Istio on Minikube.

📋 Overview
🔧 Core Components
🌐 Frontend: A Go web server serving a static HTML page to display blog posts
⚙️ Backend: A Go REST API for managing blog posts, using PostgreSQL for primary storage and a BlogPost CRD
⏱️ Worker: A Go service that periodically checks for new posts in PostgreSQL and logs them
📊 Logging Agent: A Go DaemonSet that logs the node name from each Minikube node
🗄️ Database: A PostgreSQL database managed as a StatefulSet with persistent storage
📦 Helm: Packages all Kubernetes resources for easy deployment and management
🔰 CRD: A BlogPost custom resource for Kubernetes API extensions
🔒 Istio: Provides service mesh with mTLS, secure routing via Gateway, and traffic management
🏗️ Kubernetes Architecture
🔄 Deployments: Manage stateless frontend, backend, and worker services
🌍 Services: Expose frontend (NodePort), backend, and database
💾 StatefulSet: Ensures stable storage and network identity for PostgreSQL
🔍 DaemonSet: Runs the logging agent on each node
💿 Volumes: Persistent Volume Claim for PostgreSQL data
⚙️ ConfigMaps/Secrets: Secure configuration management
🔑 RBAC: Restricts Secret access to backend and worker
🎯 Helm: Simplifies deployment with templated manifests
📋 CRD: Custom resource management via Kubernetes API
🛡️ Istio: Service mesh for mTLS and traffic management
🛠️ Prerequisites
Ensure these tools are installed:

🏃 Minikube: Local Kubernetes cluster (v1.32.0+)
🐳 Docker: Container runtime (v26.1.4+)
🔷 Go: For building services (v1.22+)
⚓ Helm: Package manager (v3.15.0+)
🌐 Istio: Service mesh (v1.22.0+)
🎮 kubectl: Kubernetes CLI (v1.28.0+)
📂 Project Structure
blog-platform/
├── backend/                   # Backend API (PostgreSQL + CRD)
│   ├── main.go
│   ├── Dockerfile
│   └── go.mod
├── frontend/                  # Frontend web server
│   ├── main.go
│   ├── static/
│   │   └── index.html
│   ├── Dockerfile
│   └── go.mod
├── worker/                    # Background worker for post processing
│   ├── main.go
│   ├── Dockerfile
│   └── go.mod
├── logging-agent/             # Node-level logging DaemonSet
│   ├── main.go
│   ├── Dockerfile
│   └── go.mod
├── charts/                    # Helm chart for application
│   └── blog-platform/
│       ├── Chart.yaml
│       ├── values.yaml
│       └── templates/
│           ├── db-config.yaml
│           ├── db-secret.yaml
│           ├── rbac.yaml
│           ├── db.yaml
│           ├── backend.yaml
│           ├── worker.yaml
│           ├── frontend.yaml
│           ├── logging-agent.yaml
├── crds/                      # Custom Resource Definition
│   └── blogpost-crd.yaml
├── k8s-security/              # Istio configurations
│   └── istio.yaml
├── scripts/                   # Automation scripts
│   ├── build.sh
│   ├── cleanup.sh
│   ├── helm-install.sh
└── README.md
🚀 Setup Instructions
Follow these steps to deploy the application on Minikube:

1️⃣ Start Minikube
# Launch Minikube with sufficient resources
minikube start --memory=4096

# Configure Docker for Minikube
eval $(minikube docker-env)
2️⃣ Install Dependencies
# Install Helm
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# Install Go dependencies for backend and worker
cd backend
go mod tidy
cd ../worker
go mod tidy
3️⃣ Install Istio
# Download Istio
curl -L https://istio.io/downloadIstio | sh -

# Install the demo profile
istio-*/bin/istioctl install --set profile=demo -y
4️⃣ Enable Istio Sidecar Injection
# Label the default namespace for automatic Istio sidecar injection
kubectl label namespace default istio-injection=enabled

# Verify the label is applied
kubectl get namespace -L istio-injection
5️⃣ Build Docker Images
# Build images for all services
./scripts/build.sh

# Verify images are built
docker images
6️⃣ Deploy Application
# Deploy the Helm chart, CRD, and Istio configurations
./scripts/helm-install.sh

# Check pod status
kubectl get pods
7️⃣ Access the Application
# Get the Istio Gateway URL
minikube service istio-ingressgateway -n istio-system --url

# The application will be accessible on the HTTP port (usually port 31116)
# Frontend: http://<minikube-ip>:31116/
# Backend API: http://<minikube-ip>:31116/api/

# Example: http://192.168.49.2:31116/
8️⃣ Test PostgreSQL and Worker
# Get the Istio Gateway URL
GATEWAY_URL=$(minikube service istio-ingressgateway -n istio-system --url | grep :31116)

# Create a post via the backend API through Istio Gateway
curl -X POST -H "Content-Type: application/json" \
  -d '{"title":"Test Post","content":"Hello World"}' \
  $GATEWAY_URL/api/posts

# Get all posts
curl -s $GATEWAY_URL/api/posts

# Verify the worker detects the post
kubectl logs -l app=worker
9️⃣ Test CRD
# Create a BlogPost CRD resource through Istio Gateway
curl -X POST -H "Content-Type: application/json" \
  -d '{"title":"CRD Test","content":"Hello CRD"}' \
  $GATEWAY_URL/api/crd-posts

# Get CRD posts via API
curl -s $GATEWAY_URL/api/crd-posts

# List BlogPost resources directly
kubectl get blogposts
🔟 Verify Istio
# Check for mTLS and configuration issues
istioctl analyze

# View traffic logs (Istio sidecar)
kubectl logs -l istio=envoy -c istio-proxy
1️⃣1️⃣ Clean Up
# Remove all resources
./scripts/cleanup.sh

# Stop Minikube
minikube stop
🔍 Troubleshooting
Issue	Solution
🔴 Backend CrashLoopBackOff	Check database connectivity: kubectl logs <backend-pod> -c backend
🟡 Istio mTLS Issues	Verify DestinationRules: kubectl get destinationrules
🟠 Database Connection Reset	Check if database has Istio sidecar disabled
🟢 API Not Accessible	Verify Istio Gateway: kubectl get gateway,virtualservice
🔵 Frontend Can't Reach Backend	Check if API URL uses relative path /api
🟣 Istio Gateway Not Working	Check ingress gateway: kubectl get svc istio-ingressgateway -n istio-system
🔶 Resource Constraints	Increase resources: minikube start --memory=6144 --cpus=4
🛡️ Security Architecture
Istio Service Mesh Security
✅ mTLS Enabled: Automatic mutual TLS between services with Istio sidecars
✅ Gateway Routing: All external traffic goes through Istio Gateway
✅ Backend Protection: Backend service remains internal (ClusterIP only)
✅ Database Exception: Database excluded from mTLS (no Istio sidecar)
✅ Traffic Policies: Secure routing with VirtualServices and DestinationRules
Access Control
# Frontend (via Istio Gateway)
https://<gateway-url>/                    # Static frontend

# Backend API (via Istio Gateway)
https://<gateway-url>/api/posts          # Blog posts API
https://<gateway-url>/api/crd-posts      # CRD API

# Internal Services (ClusterIP only)
backend-service:8080                     # Not externally accessible
db-service:5432                          # Not externally accessible
⚡ Kubernetes Components
Component	Purpose
📦 Deployments	Stateless workload management
🌐 Services	Internal/external communication
💾 StatefulSet	PostgreSQL with persistent identity
🔍 DaemonSet	Node-level logging
💿 Volumes	Persistent storage for data
⚙️ ConfigMaps	Configuration management
🔐 Secrets	Secure credential storage
🔑 RBAC	Access control
📦 Helm	Package management
📝 Notes
💡 Resource Optimization: Low resource requests (50m CPU, 100Mi memory) for Minikube
🔄 GKE Migration: Adapt for GKE by updating image references and resources
📚 Learning: Experiment with Helm, CRDs, and Istio features
For more help, check the 📚 Minikube, ⚓ Helm, 🔒 Istio, or ☸️ Kubernetes documentation.