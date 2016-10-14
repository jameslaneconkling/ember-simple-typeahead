import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  classNames: ['typeahead-input'],

  value: '',
  selectionIdx: -1,

  clear() { /*noop*/ },
  onItemEnter() { /*noop*/ },

  valueIsEmpty: Ember.computed.not('value'),

  forwardSelect() {
    this.set('selectionIdx', Math.min(this.get('items.length') - 1 || 0, this.get('selectionIdx') + 1));
  },

  backwardSelect() {
    this.set('selectionIdx', Math.max(-1, this.get('selectionIdx') - 1));
  },

  onEnter() {
    const items = this.get('items');
    if (items) {
      this.get('onItemEnter')(items[this.get('selectionIdx')]);
    }
  },

  actions: {
    input(e) {
      this.get('onValueChange')(e.target.value);
    },

    keydown(e) {
      if (e.keyCode === 38) {
        e.preventDefault();
        this.backwardSelect(); // up arrow
      } else if (e.keyCode === 40) {
        e.preventDefault();
        this.forwardSelect(); // down arrow
      } else if (e.keyCode === 13) {
        e.preventDefault();
        this.onEnter(); // enter key
      }
    },

    onItemClick(item, idx) {
      this.$('input').focus();
      this.set('selectionIdx', idx);
      this.get('onItemEnter')(item)
    },

    clear() {
      this.set('value', '');
      this.get('clear')();
    }
  }
});
