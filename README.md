[![Build Status](https://travis-ci.org/nwinch/australian-states.svg?branch=master)](https://travis-ci.org/nwinch/australian-states)

# Australian States
List of Australian state information.

## Usage

### `.long([{captalize: true|false}])`

Returns an array of state names. An options object can also be passed which
accepts the `capitalize` property.

Example:

```javascript
var states = require('australian-states')

states.long() // ["australiation capital territory", "new south wales", ...]
states.long({capitalize: true}) // ["Australiation Capital Territory", "New South Wales", ...]
```

### `.short([{captalize: true|false}])`

Returns an array of state abbreviations. An options object can also be passed
which accepts the `capitalize` property.

Example:

```javascript
var states = require('australian-states')

states.short() // ["act", "nsw", ...]
states.short({capitalize: true}) // ["ACT", "NSW", ...]
```

### `.capitals([{captalize: true|false}])`

Returns an array of state capital city names. An options object can also be
passed which accepts the `capitalize` property.

Example:

```javascript
var states = require('australian-states')

states.capitals() // ["canberra", "sydney", ...]
states.capitals({capitalize: true}) // ["Canberra", "Sydney", ...]
```

### `.all()`

Returns an array of state objects containing `name`, `abbreviation`, `capital`
and `type`.

Example:

```javascript
var states = require('australian-states')

states.all()
/*
[{
  name: 'australian capital territory',
  abbreviation: 'act',
  capital: 'canberra',
  type: 'territory'
}]
*/
```
