import Ember from 'ember';

const USERS = ['The Viscount Brouncker', 'Sir Joseph Williamson', 'Sir Christopher Wren', 'Sir John Hoskyns', 'Curil Wyche', 'Samuel Pepys', 'The Earl of Carbery', 'The Eart of Pembroke', 'Sir Robert Southwell', 'Charles Montagu', 'The Lord Somers', 'Sir Isaac Newton', 'Sir Hans Sloane', 'Martin Folkes', 'The Earl of Macclesfield', 'The Earl of Morton', 'James Burrow', 'James West', 'James Burrow', 'Sir John Pringle', 'Sir Joseph Banks', 'William Hyde Wollaston', 'Sir Humphry Davy', 'Davies Gilbert', 'HRH The Duke of Sussex', 'The Margess of Northampton', 'The Earl of Rosse', 'The Lord Wrottesely'];
// const USERS = [{id: 1, label: 'one'}, {id: 2, label: 'two'}, {id: 3, label: 'tjree'}];

export default Ember.Component.extend({
  userQueryString: '',

  users: [],

  clearButton: `
    <i title='clear input' class='clear' {{action 'clear'}}>
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <g>
          <path stroke="null" d="m7.979403,0.122865c-4.33876,0 -7.856538,3.517265 -7.856538,7.856538s3.517778,7.856538 7.856538,7.856538c4.33876,0 7.856538,-3.517265 7.856538,-7.856538s-3.517778,-7.856538 -7.856538,-7.856538zm0,13.748942c-3.249167,0 -5.892404,-2.643237 -5.892404,-5.892404s2.643237,-5.892404 5.892404,-5.892404s5.892404,2.643237 5.892404,5.892404s-2.643237,5.892404 -5.892404,5.892404zm2.672712,-8.551842l-0.013274,-0.013274c-0.364328,-0.364328 -0.955571,-0.364328 -1.319899,0l-1.33954,1.339565l-1.340028,-1.33954c-0.364353,-0.364353 -0.955057,-0.364353 -1.319899,0l-0.013274,0.013248c-0.364328,0.364353 -0.364328,0.955057 0,1.319899l1.340053,1.33954l-1.340028,1.340028c-0.364328,0.364302 -0.364328,0.955032 0,1.319873l0.013274,0.013274c0.364353,0.364328 0.955545,0.364328 1.319899,0l1.340002,-1.340002l1.33954,1.340002c0.364328,0.364328 0.955057,0.364328 1.319899,0l0.013274,-0.013274c0.364328,-0.364328 0.364328,-0.955571 0,-1.319873l-1.33954,-1.340028l1.340002,-1.340028c0.364379,-0.364353 0.364379,-0.955057 -0.000462,-1.31941l0,0z"/>
        </g>
      </svg>
    </i>
  `,

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
