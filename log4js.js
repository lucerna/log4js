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
    //Private logging stuff...
    var log = console.log;
    console.log = function() {
      log.call(this, arguments[0]);
    }

    return {
      instance.log
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

