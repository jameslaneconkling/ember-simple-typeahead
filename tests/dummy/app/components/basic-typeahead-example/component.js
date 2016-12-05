import Ember from 'ember';

const USERS = ['The Viscount Brouncker', 'Sir Joseph Williamson', 'Sir Christopher Wren', 'Sir John Hoskyns', 'Curil Wyche', 'Samuel Pepys', 'The Earl of Carbery', 'The Eart of Pembroke', 'Sir Robert Southwell', 'Charles Montagu', 'The Lord Somers', 'Sir Isaac Newton', 'Sir Hans Sloane', 'Martin Folkes', 'The Earl of Macclesfield', 'The Earl of Morton', 'James Burrow', 'James West', 'James Burrow', 'Sir John Pringle', 'Sir Joseph Banks', 'William Hyde Wollaston', 'Sir Humphry Davy', 'Davies Gilbert', 'HRH The Duke of Sussex', 'The Margess of Northampton', 'The Earl of Rosse', 'The Lord Wrottesely'];
// const USERS = [{id: 1, label: 'one'}, {id: 2, label: 'two'}, {id: 3, label: 'tjree'}];

export default Ember.Component.extend({
  userQueryString: '',

  users: [],

  actions: {
    searchForUsers(queryString) {
      this.set('userQueryString', queryString);

      if(!queryString) {
        return;
      }

      this.set('users', USERS.filter(user => new RegExp(queryString.split('').join('.*')).test(user)));
    },

    clear() {
      this.set('users', []);
    },

    addUser(user) {
      this.set('userQueryString', user);
      this.set('users', []);
    }
  }
});
