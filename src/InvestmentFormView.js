(function (global, $, Backbone) {

  var InvestmentFormView = Backbone.View.extend({
    template: template,
    tagName: 'form',
    events: {
      'change input': updateModel,
      'submit': saveModel
    },

    initialize: function (params) {
      this.model = this.model || new Backbone.Model();
    },

    render: function () {
      this.$el.html(this.template());
      return this;
    }
  });

  function updateModel () {
    _(this.$el.serializeArray()).each(function (pair) {
      this.model.set(pair.name, pair.value);
    }.bind(this))
  }

  function saveModel () {
    console.log(arguments)
  }

  function template () {
    return [
      '<h1>New investment</h1>',
      '<label>',
      '  Symbol:',
      '  <input type="text" class="new-investment-stock-symbol" name="stockSymbol" value="">',
      '</label>',
      '<label>',
      '  Shares:',
      '  <input type="number" class="new-investment-shares" name="shares" value="0">',
      '</label>',
      '<label>',
      '  Share price:',
      '  <input type="number" class="new-investment-share-price" name="sharePrice" value="0">',
      '</label>',
      '<input type="submit" name="add" value="Add">'
    ].join('\n');
  }


  global.InvestmentFormView = InvestmentFormView;

})(this, jQuery, Backbone);