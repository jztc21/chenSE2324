// Daisy chaining promises
// Order of events: clean room, take out garbage, get ice cream

let cleanRoom = () => {
    return new Promise((resolve, reject) => {
      resolve('Cleaned the room. ');
    })
  }
  
  let garbageOut = (message) => {
    return new Promise((resolve, reject) => {
      resolve(message + 'Take out the garbage. ');
    })
  }
  
  let getIceCream = (message) => {
    return new Promise((resolve, reject) => {
      resolve(message + 'Got ice cream. ');
    })
  }
  
  let homework = (message) => {
    return new Promise((resolve, reject) => {
      resolve(message + 'Starting homework.');
    })
  }
  
  cleanRoom()
    .then(garbageOut)
    .then(getIceCream)
    .then(homework)
    .then((work) => {
      console.log(work + " Finished.")
    })