function printCar(cars){
  var display_area = document.querySelector('#container');
  cars.cars.forEach(function(element){
    if(element.purchased === false){
      element.purchased = 'Available';
    }
    else{
      element.purchased = 'Not Available';
    }

    var vehicle = document.createElement('div');
    vehicle.className = "row card";
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
    eventListeners(vehicle);
    display_area.appendChild(vehicle);
    carLot.add(vehicle);
  })
}

function eventListeners(vehicle){
  var container = document.querySelector('#container');
  var input = document.getElementById('input');
  var submit = document.getElementById('submit');
  var children = [];
  var targetDescription = null;

  vehicle.addEventListener("click", function(e){

    console.log("fullEvent >>>>",e.currentTarget.childNodes)
    console.log("currentTarget >>>>",e.currentTarget)
    console.log("target >>>>",e.target)
    // for(var j = 0; j < vehicle.childNodes.length; j++){
    //   vehicle.childNodes[j].className = "";
    //   active_p.classList.add('active');
    // }
      var active_p = e.currentTarget;
      targetDescription = active_p.querySelector('.description')
      console.log(active_p, ":currentTarget , desc:", targetDescription)
    // if(e.currentTarget.classList.contains('active')){
      input.value = ""
      input.value = targetDescription.innerHTML;
      input.focus();
    // }
    for(var i = 0; i < container.childNodes.length; i++){
      container.childNodes[i].className = "row";
      var selected_card = e.currentTarget;
      selected_card.classList.add('selected');
    }
  })

  input.addEventListener("input", function(e){
      if (targetDescription !== null) {
        targetDescription.innerHTML = input.value;
      }

  })
}
