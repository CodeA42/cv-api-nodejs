# cv-api-nodejs

# How to run

## .env

### Create ".env" in config folder and fill it will following fields
```
PORT=
ACCESS_TOKEN_SECRET=
```

Access token secret should be the same as the auth server

## db

### Create "db.connection.json" in config folder and fill will following fields

```
{
    "host": "localhost",
    "port": 5432,
    "username": "cvapiuser",
    "password": "supersafepassword",
    "database": "cvapi"
}
```

npm install
npm start
