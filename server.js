const express = require('express');
const app = express();
const cors = require('cors');
const Products = require('./models/products');
const dotenv = require('dotenv');
const stock = require("./stock.js");

const server = require('http').createServer(app);
const io = require('socket.io')(server);
var mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/trading');


dotenv.config()


if (process.env.NODE_ENV === "production") {
    var url = "https://trading.elenaperers.me";
    var urlPort = 'https://trading.elenaperers.me:443';
} else {
    var url = "http://localhost";
    var urlPort = "http://localhost:3000";
}

app.use(cors(
    {
        origin: url
    }));

io.origins([urlPort]);

async function getProducts() {
    Products.find().then(function (doc) {
        return doc;
    });
}
Products.find().then(function (products) {
    setInterval(function () {
        products.map((product) => {
            product["startingPoint"] = stock.getStockPrice(product);
            return product;
        });

        io.emit("stocks", products);
    }, 5000);

});


io.on('connection', (socket) => {
    socket.on('SEND_MESSAGE', function (data) {
        console.log('a user connected');
        socket.on('disconnect', function () {
            console.log('user disconnected');
        });
    })

});



server.listen(3010, function (err) {
    if (err) throw err
    console.log('listening on port 3010')
})