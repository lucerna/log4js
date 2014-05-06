if(!window.console) {
  alert("No console for browser");
  console = {};
}

console.log = console.log || function() {};
console.warn = console.warn || function() {};
console.error = console.error || function() {};
console.info = console.info || function() {};

  
var Logger = (function () {
  function Logger() {
    var log = console.log;
    console.log = function(callback) {
      log.call(this, arguments[0]);
      callback.call();
    }

    return {
      log;
    }
  };

  var instance;
  return {
    getInstance: function() {
                   if(instance == null) {
                    instance = new Logger();
                    instance.constructor = null;
                   }
                  }
  }
})();

