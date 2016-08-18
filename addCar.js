var carLot = (function(carlot){

  carlot.printCar = function(cars){
    var display_area = document.querySelector('#container');
    cars.cars.forEach(function(element){
      if(element.purchased === false){
        element.purchased = 'Available';
      }
      else{
        element.purchased = 'Not Available';
      }

      var vehicle = document.createElement('div');
      vehicle.className = "col-md-4 card";
      vehicle.classList.add(element.color);
      vehicle.innerHTML +=
          `<h2 class='data make'>${element.make}</h2>
          <p class='data model'>Model: ${element.model}</p>
          <p class='data year'>Year: ${element.year}</p>
          <p class='data price'>Price: $${element.price}</p>
          <p class='data color'>Color: ${element.color}</p>
          <p class='data purchased'>Avalability: ${element.purchased}</p>
          <p class='description'>Description: ${element.description}</p>`;
      vehicle.style.border = "4px solid " + element.color;

      display_area.appendChild(vehicle);
      carLot.add(vehicle);
    })
  }

  return carLot;

}(carLot || {}))

carLot.loadCar(carLot.printCar)
.then(
  function(inventoryFromLoadInventoryReslove){
    carLot.printCar(inventoryFromLoadInventoryReslove)
    console.log("carPromise", inventoryFromLoadInventoryReslove)
  },
  function(reason){
    console.error('Something went wrong', reason)
  })
.then(function(){
  carLot.activateEvents()
})


