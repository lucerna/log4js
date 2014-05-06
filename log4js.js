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
    var LEVEL = new Level();
    console.log = function(message, callback) {
      log.call(this, message);
      if(callback) {
        callback();
      } 
    };
    return {
      log: function(message, callback) {
             message  = typeof message !== 'undefined' ? message : "";
             callback = typeof callback !== 'undefined' ? callback : null;
             console.log(message, callback);
           },

      setLogLevel: function(level) {
                    LEVEL.setLevel(level);              
                   }
    }
  };
  var Level = (function() {
      function Level() {};
      var LOG   = 0;
      var DEBUG = 1;
      var INFO  = 2;
      var WARN  = 3;
      var ERROR = 4;

      var currentLevel = 0;

      return {
        setLevel: function(level) {
                    if(Level[level]) {
                      currentLevel = Level[level];
                    }
                  },
        getLevel: function() {
                    return currentLevel;
                  }
        }
    });

  var instance;

  return {
    getInstance: function() {
                   if(instance == null) {
                    instance = new Logger();
                    instance.constructor = null;
                   }
                   return instance;
                  }
  }
})();

