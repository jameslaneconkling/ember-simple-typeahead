# Ember-simple-typeahead
A lightweight, highly functional typeahead component for select or autocomplete forms and the like.

Ember-simple-typeahead makes very few assumptions about what to display and when, relying instead on the developer to handle all application-domain logic like data fetching, formatting, and filtering.

The component has no external, non-ember dependencies.


## Installation

```bash
ember install ember-simple-typeahead
```


## Usage
```hbs
{{#typeahead-input
  value=userQueryString
  placeholder='Search for users...'
  items=systemUsers
  onValueChange=(action 'searchForSystemUsers')
  onItemEnter=(action 'addUserToWorkspace')
  as |input|
}}

  {{#input.message}}
    {{#if loadingSystemUsers}}
      <div class="loading-spinner-container">{{x-spinner color='#aaa' radius=4}}</div>
    {{else if loadingSystemUsersError}}
      <p class="warning">Error Loading Users</p>
    {{else if (eq systemUsers.length 0)}}
      <p>No users match the query <strong>{{userQueryString}}</strong></p>
    {{/if}}
  {{/input.message}}

  {{#input.list as |list|}}
    {{#list.item as |user|}}
      {{user.label}}
    {{/list.item}}
  {{/input.list}}

{{/typeahead-input}}
```
