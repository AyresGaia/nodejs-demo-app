const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello Archduke 👑 — CI/CD says hi!'));

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
