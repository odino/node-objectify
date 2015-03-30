/**
 * Transforms a list of objects into an
 * object.
 * 
 * We will transform [{name: "alex", age: 26}, {name: "mark", age: 20}]
 * into {alex: {name:alex, age: 26}, mark: {name: "mark", age: 20}}
 * so that you can conveniently access values like people.alex.age.
 * 
 * Use with caution: there is no validation here as it's not the scope
 * of this utility.
 */
module.exports = function(list, index) {
  var obj = {};
  
  list.forEach(function(element){
    obj[element[index]] = element;
  });
  
  return obj;
}