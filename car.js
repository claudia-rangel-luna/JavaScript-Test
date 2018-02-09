// cow.js
(function(exports) {
  "use strict";

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year || 2018;
    this.mileage = 0;
    this.drive = function(numberOfMiles) {
        if (!numberOfMiles || numberOfMiles < 0 || numberOfMiles < 1)
          throw new Error("missing number of miles");
        this.mileage += numberOfMiles;
    }

    this.driveForSomeTime = function (seconds, speed){
     var intervalId = setInterval(function(){
        if(!seconds || seconds < 0 || seconds < 1){
        throw new Error("missing number of seconds");
          this.mileage += numberOfMiles;
     }
     if(!speed || speed < 0 || speed < 1){
        throw new Error("missing number of speed");
          this.mileage += numberOfMiles;
     }
     }, seconds);
}

  
  this.lateGreets = function(numberOfMiles, cb) {
      setTimeout(function(self) {
        try {
          cb(null, self.drive(numberOfMiles));
        } catch (err) {
          cb(err);
        }
      }, 1900, this);
    }
  }
  exports.Car = Car;
}
)(this);

