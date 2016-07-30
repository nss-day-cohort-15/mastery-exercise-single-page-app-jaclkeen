function printCar(cars){
  var display_area = document.querySelector('.t_body');
  cars.cars.forEach(function(element){
    if(element.purchased === false){
      element.purchased = 'Available'
    }
    else{
      element.purchased = 'Not Available'
    }

    var vehicle = document.createElement('tr');
    vehicle.className = "row";
    vehicle.classList.add(element.color);
    vehicle.innerHTML +=
          `<td class='data make'>${element.make}</td>
          <td class='data model'>${element.model}</td>
          <td class='data year'>${element.year}</td>
          <td class='data price'>$${element.price}</td>
          <td class='data color'>${element.color}</td>
          <td class='data purchased'>${element.purchased}</td>
          <td class='data description' id='description'>${element.description}</td>`;
    vehicle.style.border = "3px solid " + element.color;
    eventListeners(vehicle);
    display_area.appendChild(vehicle);
    carLot.add(vehicle);
  })
}

function eventListeners(vehicle){
  var td = document.querySelector('#t_body');
  var input = document.getElementById('input');
  var submit = document.getElementById('submit');

  td.addEventListener("dblclick", function(e){
    if(e.target.id === 'description'){
      e.target.classList.toggle("selected");
      input.value = e.target.innerHTML;
    }
      submit.addEventListener("click", function(){
        if(e.target.id === 'description'){
          e.target.innerHTML = input.value;
        }
      })
  })

  vehicle.addEventListener("click", function(e){
    e.target.classList.toggle("active");
  })
}
