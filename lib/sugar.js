// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {
  return Object.keys(object).length;
}

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
  var myObject = Object.entries(object);
  var min = null;
  for (let [key, value] of myObject) {
    if (min == null) {
      min = value;
    }
    if (value < min) {
      min = value;
    }
  }
  return min;
}

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  var myObject = Object.entries(object);
  var max = null;
  for (let [key, value] of myObject) {
    if (max == null) {
      max = value;
    }
    if (value > max) {
      max = value;
    }
  }
  return max;
}

/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  return Object.create(object);
}

/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {
  return object[key];
}

/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
  const keys = Object.keys(object);
  return keys.some(item => key === item);
}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {
  let values = Object.values(object);
  let sum = 0;
  values.forEach(item => {
    if (!isNaN(item)) {
      sum = sum + item;
    }
  });
  return sum;
}

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {
  let invertedObj = {};
  let keys = Object.keys(object);
  keys.forEach(item => {
    invertedObj[object[item]] = item;
  });

  return invertedObj;
}

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) {
  let newObject = {};
  for (let obj of arr) {
    Object.assign(newObject, obj);
  }

  return newObject;
}

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {
  let values = Object.values(obj);

  let result = values.filter(item => matcherFunc(item));
  if (result.length > 0) {
    return result[0];
  } else {
    return null;
  }
}

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) {
  let values = Object.values(obj);

  let result = values.filter(item => func(item));
  if (result.length == values.length) {
    return true;
  } else {
    return false;
  }
}

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) {
  let values = Object.values(obj);

  let result = values.filter(item => func(item));
  if (result.length > 0) {
    return true;
  } else {
    return false;
  }
}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
