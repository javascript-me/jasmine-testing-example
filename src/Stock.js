(function (global) {
  function Stock (params) {
    var params = params || {};
    this.symbol = params.symbol;
    this.sharePrice = params.sharePrice;
  };

  Stock.prototype.fetch = function(params) {
    var that = this;
    var params = params || {};
    var success = params.success || function () {}
    var query = 'select Ask ' +
                'from yahoo.finance.quotes ' +
                'where symbol=\'' + that.symbol + '\'';

    $.getJSON('http://0.0.0.0:8000/stocks/'+that.symbol, function (data) {
      that.sharePrice = parseFloat(data.query.results.quote.Ask);
      success(that);
    });
  };

  global.Stock = Stock;
})(this);