let store = {drivers:[], passengers:[], trips:[]}
let driverId=0;
let passengerId=0;
let tripId=0;

class Driver {
  constructor(name) {
    this.name=name;
    this.id=driverId++;
    store.drivers.push(this);
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId===this.id;
    })
  }
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
  })
}
}

class Passenger {
  constructor(name) {
    this.name=name;
    this.id=passengerId++;
    store.passengers.push(this);
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId===this.id;
    })
  }
  drivers() {
    let x=this.trips()
    let y= this.trips().map(trip => {
      return trip.driver();
    })
    console.log("x=", x)
    consol.log("y=",y)
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id=tripId++;
    this.driverId=driver.id;
    this.passengerId=passenger.id;
    store.trips.push(this);
  }
  driver() {
    return store.drivers.find(driver => {
      return driver.id===this.driverId;
    })
  }
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id===this.passengerId;
    })
  }
}
