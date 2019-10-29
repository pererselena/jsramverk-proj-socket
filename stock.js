var stock = {
    randomAroundZero: function () {
        return Math.random() > 0.5 ? 1 : -1;
    },

    getStockPrice: function (input) {
        let start = input.startingPoint;
        let rate = input.rate;
        let variance = input.variance;
        let newPrice = start * rate + variance * stock.randomAroundZero()
        if(newPrice< 0){
            newPrice -= newPrice + 1
        }

        return start * rate + variance * stock.randomAroundZero();
    }
};

module.exports = stock;