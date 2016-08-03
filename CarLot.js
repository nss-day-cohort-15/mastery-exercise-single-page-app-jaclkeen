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
    vehicle.className = "row";
    vehicle.classList.add(element.color);
    vehicle.innerHTML +=
          `<h2 class='data make'>${element.make}</h2>
          <p class='data model'>Model: ${element.model}</p>
          <p class='data year'>Year: ${element.year}</p>
          <p class='data price'>Price: $${element.price}</p>
          <p class='data color'>Color: ${element.color}</p>
          <p class='data purchased'>Avalability: ${element.purchased}</p>
          <p class='data description' id='description'>Description: ${element.description}</p>`;
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

      submit.addEventListener("click", function(){
        if(e.target.id === 'description'){
          e.target.innerHTML = input.value;
          e.target.classList.toggle("selected");
        }
      })

  vehicle.addEventListener("click", function(e){
    for(var j = 0; j < vehicle.childNodes.length; j++){
      vehicle.childNodes[j].className = "";
      var active_p = e.target;
      active_p.classList.add('active');
    }
    if(e.target.classList.contains('active') && e.target.tagName !== "DIV"){
      input.value = ""
      input.value = e.target.innerHTML;
      input.focus();
    }
    for(var i = 0; i < container.childNodes.length; i++){
      container.childNodes[i].className = "row";
      var selected_card = e.target;
      selected_card.classList.add('selected');
    }
  })
}
