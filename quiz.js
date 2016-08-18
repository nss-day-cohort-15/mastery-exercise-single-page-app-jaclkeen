carLot = (function(){
  var _cars = [];

  function loadInventory(){
    return new Promise(function(resolve, reject){
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'inventory.json')
      xhr.send();

      xhr.addEventListener('load', function(){
        var data = JSON.parse(this.responseText)
        resolve(data)
      })
    })
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
