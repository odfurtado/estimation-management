# Estimation Management

## 1 - Installation

### 1.1 - Mongodb

Configure the file `mongo-database/mongo-secret.yaml` with data in base64.

```bash
MONGO_ROOT_USERNAME: YWRtaW4=
MONGO_ROOT_PASSWORD: aW5pY2lhcjEyMzQ=
```

Run the commands

```bash
kubectl apply -f mongo-secret.yaml
kubectl apply -f mongo-statefulset.yaml
kubectl apply -f mongo-service.yaml
```