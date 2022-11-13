const bodyParser = require('body-parser');

const express = require('express');

const port = 8000;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
const testFunc = () => {
    setTimeout(() => {
        console.log("w8 for 2 seconds til answering")
    }, 2000);
}
app.get('/api', async (req, res) => {

    await testFunc();
    res.setHeader('Access-Control-Allow-Origin', "*");
    
    res.send({
        "number" : 300
    });
})
app.post('/api/markus', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    const richard = req.body;

    console.log(richard);
})
app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});
