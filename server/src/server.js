const express = require('express');
const app = express();
const port = 3000;

app.listen(port, console.log(`Server is running on port ${port}`));

app.use(express.json());

const routesRegister = require('./routes/register');
app.use(routesRegister)

const prisma = require('./database');
prisma.$connect().then(() => console.log("Database is running")).catch(error => console.log(error))