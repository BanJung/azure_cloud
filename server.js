const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from App Service!'));
app.listen(process.env.PORT || 3000);