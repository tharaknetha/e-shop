const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Ram\' shop'});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running at port ${port}...`);
});