import Ember from 'ember';

const USERS = ['The Viscount Brouncker', 'Sir Joseph Williamson', 'Sir Christopher Wren', 'Sir John Hoskyns', 'Curil Wyche', 'Samuel Pepys', 'The Earl of Carbery', 'The Eart of Pembroke', 'Sir Robert Southwell', 'Charles Montagu', 'The Lord Somers', 'Sir Isaac Newton', 'Sir Hans Sloane', 'Martin Folkes', 'The Earl of Macclesfield', 'The Earl of Morton', 'James Burrow', 'James West', 'James Burrow', 'Sir John Pringle', 'Sir Joseph Banks', 'William Hyde Wollaston', 'Sir Humphry Davy', 'Davies Gilbert', 'HRH The Duke of Sussex', 'The Margess of Northampton', 'The Earl of Rosse', 'The Lord Wrottesely'];
// const USERS = [{id: 1, label: 'one'}, {id: 2, label: 'two'}, {id: 3, label: 'tjree'}];

export default Ember.Component.extend({
  userQueryString: 'a',
  loadingUsers: false,
  loadingUsersError: false,

  searchIsEmpty: Ember.computed.equal('users.length', 0),

  users: USERS.filter(user => new RegExp('a'.split('').join('.*')).test(user)),

  queryUsers(queryString, cb) {
    Ember.run.debounce(this, this._queryUsers, {queryString, cb}, 200);
  },

  _queryUsers({queryString, cb}) {
    setTimeout(() => {
      const users = USERS.filter(user => new RegExp(queryString.split('').join('.*')).test(user));
      cb(users);
    }, 1);
  },

  actions: {
    searchForUsers(queryString) {
      this.set('userQueryString', queryString);

      if(!queryString) {
        return;
      }

      this.set('loadingUsers', true);

      this.queryUsers(queryString, users => {
        this.set('users', users);
        this.set('loadingUsers', false);
      });
    },

    clear() {
      this.set('users', []);
    },

    addUser(user) {
      console.log('add user', user);
    }
  }
});