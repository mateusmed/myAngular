
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());


const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.get('/contracts', (req, res) => {

    let jsonResponse =
        {
            "contracts": [
                {
                    "id": 4101,
                },
                {
                    "id": 5368
                }
            ],
            "contractsQuantity": 2
        }
    ;

    res.send(jsonResponse)
});


app.get('/contracts/:id', (req, res) => {

    let idContract = req.params.id;

    let obj = {
        "productName": "product name fake" + idContract,
        "ok": true,
    };

    res.send(obj);
});




app.post('/hbaseTest', (req, res) => {

    let obj = {
        "qtdOcorr":1,
        "regSaida":[
            {
                "produto":"produto",
                "subproduto":"subproduto",
                "valor":14.5,
            }
        ]
    };

    res.status(200).send(obj)

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

