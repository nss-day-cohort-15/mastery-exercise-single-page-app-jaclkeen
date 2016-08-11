carLot = (function(){
  var _cars = [];

  function loadInventory(callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'inventory.json');
    xhr.addEventListener('load', function(event){
      _cars = (JSON.parse(event.target.responseText));
      callback(_cars);
    })
    xhr.send();
  }

  function addToArray(vehicle){
    _cars[_cars.length] = vehicle;
    console.log(_cars);
  }

  return {
    loadCar: loadInventory,
    add: addToArray,
    getCars: _cars
  }
})()
