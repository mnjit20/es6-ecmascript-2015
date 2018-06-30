//author: MANJ337 VERMA
//arrow function

//console.log('*****arrow function*****');

// var arrowGreeting = (message, name) => message + name;

// console.log(arrowGreeting('Hello ', 'World'));


var DeliveryBoy = {
  name: 'John',

  handleMessage: function (message, handler) {
    handler(message);
  },
  receive: function () {
    // this.handleMessage('Hello, ', (message) => {
    //   console.log(message + this.name);
    // });
    this.handleMessage('Hello, ', message => console.log(message + this.name));
  }
}

DeliveryBoy.receive();