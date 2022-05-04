// Create an anonymous immediately invoked function expression (IIFE)
(function() {
  console.log("A cozy nest is ready");
})();

let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

// Create a module named funModule to wrap the two mixins isCuteMixin
// and singMixin. funModule should return an object.
let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();

// Example use
funModule.isCuteMixin(hashbrown);
hashbrown.isCute();