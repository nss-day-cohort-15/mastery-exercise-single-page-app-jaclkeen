function printCar(cars){
  var display_area = document.querySelector('.t_body');
  cars.cars.forEach(function(element){
    if(element.purchased === false){
      element.purchased = 'Available'
    }else{
      element.purchased = 'Not Available'
    }

    var vehicle = document.createElement('tr');
    vehicle.className = "row";
    vehicle.classList.add(element.color);
    vehicle.innerHTML +=
          `<td class='data'>${element.make}</td>
          <td class='data'>${element.model}</td>
          <td class='data'>${element.year}</td>
          <td class='data'>$${element.price}</td>
          <td class='data'>${element.color}</td>
          <td class='data'>${element.purchased}</td>`;
    vehicle.style.border = "3px solid " + element.color;
    eventListeners(vehicle);
    display_area.appendChild(vehicle);
    carLot.add(vehicle);
  })
}

function eventListeners(vehicle){
  vehicle.addEventListener("click", function(e){
    e.target.classList.toggle("active");
    // e.target.style.paddingLeft = '10%';
    // e.target.style.paddingRight = '10%';
    // e.target.style.backgroundColor = 'darkgrey';
  })
}
