# Estimation Management

## 1 - Installation (DEV)

### 1.1 - Ingress

Make sure the nginx-ingress is configured in local machine.
Follow the instruction in [NGINX Ingress Controller - Installation Guide](https://kubernetes.github.io/ingress-nginx/deploy/)

Run the commands

```bash
kubectl apply -f k8s/ingress-service.yaml
```

### 1.2 - Mongodb

Configure the file `k8s/mongodb/mongodb-secret.yaml` with data in base64.

```bash
MONGO_ROOT_PASSWORD: aW5pY2lhcjEyMzQ=
MONGO_EM_PASSWORD: aW5pY2lhcjEyMzQ=
MONGO_USERS_LIST: ZW1vd25lcjpkYkFkbWluLHJlYWRXcml0ZTppbmljaWFyMTIzNA==
```

Run the commands

```bash
kubectl apply -f k8s/mongodb/mongodb-secret.yaml
kubectl apply -f k8s/mongodb/mongodb-configmap.yaml
kubectl apply -f k8s/mongodb/mongodb-statefulset.yaml
kubectl apply -f k8s/mongodb/mongodb-cluster-ip-service.yaml
```

### 1.3 - System Service

Run the commands

```bash
kubectl apply -f k8s/system-service/system-service-deployment.yaml
kubectl apply -f k8s/system-service/system-service-cluster-ip-service.yaml
```