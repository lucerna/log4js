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
                   },
      getLogLevel: function() {
                    return LEVEL.currentLevel;
                   }
    }
  };
  var Level = (function() {
      function Level() {};

      return {
        LOG: 0,
        DEBUG: 1,
        INFO:  2,
        WARN:  3,
        ERROR: 4,

        currentLevel: 0,

        setLevel: function(level) {
                    if(this[level]) {
                      this.currentLevel = this[level];
                    }
                  },
        getLevel: function() {
                    return this.currentLevel;
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

