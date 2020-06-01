const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API is running1'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
