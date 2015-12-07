require('must/register')
var states = require('../dist/index.js')

describe('.long', function() {
  tests('long', [
    'australian capital territory',
    'new south wales',
    'northern territory',
    'queensland',
    'south australia',
    'tasmania',
    'victoria',
    'western australia'
  ])
})

describe('.short', function() {
  tests('short', [
    'act',
    'nsw',
    'nt',
    'qld',
    'sa',
    'tas',
    'vic',
    'wa'
  ])
})

describe('.capitals', function() {
  tests('capitals', [
    'canberra',
    'sydney',
    'darwin',
    'brisbane',
    'adelaide',
    'hobart',
    'melbourne',
    'perth'
  ])
})

describe('.all', function() {
  it('must return array', function() {
    states.all().must.be.an.array()
  })

  it('must return items as objects', function() {
    states.all().forEach(function(item) {
      item.must.be.an.object()

      ;[
        'name',
        'abbreviation',
        'capital',
        'type'
      ].forEach(function(prop) {
        item.must.have.property(prop, item[prop])
      })
    })
  })
})

function tests(func, data) {
  it('must return array', function() {
    states[func]().must.be.an.array()
  })

  it('must return items in lowercase', function() {
    states[func]().forEach(function(item) {
      item.must.equal(item.toLowerCase())
    })
  })

  ;data.forEach(function(item) {
    it('must include ' + item, function() {
      states[func]().indexOf(item).must.be.gte(0)
    })
  })

  it('must return items capitalized if capitalize setting = true', function() {
    states[func]({capitalize: true}).forEach(function(item) {
      item.must.equal(item.replace(/\b\w/g, function(f) {
        return f.toUpperCase()
      }))
    })
  })

  it('must return items in lowercase if capitalize setting = false', function() {
    states[func]({capitalize: false}).forEach(function(item) {
      item.must.equal(item.toLowerCase())
    })
  })
}
