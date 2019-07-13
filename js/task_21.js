var names = ["Sam", "Joe", "sam", "Jim", "Jane"];
var newArray = names.map(function(item) {return item.toLowerCase()});
var filter = new Set(newArray)
var result = [];

for(item of filter) {
    item = item.replace(item[0], item[0], toUpperCase())
    result.push(item)
}

console.log(result);