/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-simple-typeahead',
  included: function(app) {
    this._super.included(app);
    app.import('vendor/addon.css');
  }
};
