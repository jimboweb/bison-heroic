// Based on code from http://2ality.com/2015/08/es6-map-json.html
function mapToObject(aMap) {
  let obj = Object.create(null);
  for (let [k,v] of aMap) {
    // We don’t escape the key '__proto__' which can cause problems on older engines
    if (v instanceof Map) {
      obj[k.toString()] = mapToObject(v); // handle Maps that have Maps as values
    } else {
      obj[k.toString()] = v;              // calling toString handles case where map key is not a string JSON requires key to be a string
    }
  }
  return obj;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// from http://www.dyn-web.com/tutorials/php-js/json/filter.php
// example replacer function
function replacer(name, val) {
  //console.log('replacer name=' + name + ' value ' + val);
  if (val instanceof Map){
    // Convert Map to Object
    return mapToObject(val);
  } else {
    return val; // return as is
  }
}

module.exports.replacer = replacer;
