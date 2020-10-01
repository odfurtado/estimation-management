# Estimation Management

## 1 - Installation

### 1.1 - Mongodb

Configure the file `mongo-database/mongo-secret.yaml` with data in base64.

```bash
MONGO_ROOT_PASSWORD: aW5pY2lhcjEyMzQ=
MONGO_EM_PASSWORD: aW5pY2lhcjEyMzQ=
MONGO_USERS_LIST: ZW1vd25lcjpkYkFkbWluLHJlYWRXcml0ZTppbmljaWFyMTIzNA==
```

Run the commands

```bash
kubectl apply -f mongo-secret.yaml
kubectl apply -f mongo-config.yaml
kubectl apply -f mongo-statefulset.yaml
kubectl apply -f mongo-service.yaml
```