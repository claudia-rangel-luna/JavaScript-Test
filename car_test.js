var expect = chai.expect;

describe("Car", function() {
  describe("constructor", function() {
    it("should set car's make if provided", function() {
      var car = new Car("Ford");
      expect(car.make).to.equal("Ford");
    });

    it("should set car's model if provided", function() {
      var car = new Car("Ford", "F150");
      expect(car.model).to.equal("F150");
    });
    it("should set car's year if provided", function() {
      var car = new Car("Ford", "F150", 2017);
      expect(car.year).to.equal(2017);
    });
    it("should set default year if year not provided", function() {
      var car = new Car("Ford", "F150");
      expect(car.year).to.equal(2018);
    });
    it("should set default mileage default to zero", function() {
      var car = new Car("Ford", "F150", 2018);
      expect(car.mileage).to.equal(0);
    });
  });

  describe("#drive", function() {
    it("should throw if no miles are passed in", function() {
      expect(function() {
        (new Car()).drive();
      }).to.throw(Error);
    });
    it("should throw if 0 miles are passed in", function() {
      var car = new Car("Ford", "F150", 2018)
      expect(function() {
        (new Car()).drive(0);
      }).to.throw(Error);
    });
    it("should throw if negative miles are passed in", function() {
      var car = new Car("Ford", "F150", 2018);
      expect(function() {
        (new Car()).drive(-1);
      }).to.throw(Error);
    });
    it("should add miles to mileage if positive miles are passed in", function() {
      var car = new Car("Ford", "F150", 2018);
      car.drive(300);
      expect(car.mileage).to.equal(300);
    });
  });

  describe("#lateGreets", function() {
    it("should pass an error if no target is passed", function(done) {
      (new Car()).lateDrive(null, function(err, greetings) {
        expect(err).to.be.an.instanceof(Error);
        done();
      });
    });

    it("should  passed  after one second", function(done) {
      (new Car("Ford", "F150", 2018)).lateDrive("Hello", function(err, greetings) {
        expect(drive).to.equal("Kate greets Baby");
        done();
      });
    });
  });
});