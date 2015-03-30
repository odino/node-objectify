var assert = require("assert")
var objectify = require("./../index")

describe('node-objectify', function(){
  describe('objectify()', function(){
    it('should convert a list of objects into an object', function(){
      var list = [{code: 'US', name: 'United States'}, {code: 'IT', name: 'Italy'}]
      var obj = objectify(list, 'code');
      
      assert.equal('United States', obj.US.name);
      assert.equal('Italy', obj.IT.name);
    })
  })
})