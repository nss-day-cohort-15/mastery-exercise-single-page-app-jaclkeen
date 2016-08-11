var carLot = (function(carlot){

  carlot.activateEvents = function(){
    var container = document.querySelector('#container');
    var input = document.getElementById('input');
    var submit = document.getElementById('submit');
    var cars = document.querySelectorAll('.card');
    var targetDescription = null;

    for (var i = cars.length - 1; i >= 0; i--) {
      cars[i].addEventListener("click", function(e){
        console.log("fullEvent >>>>",e.currentTarget.childNodes)
        console.log("currentTarget >>>>",e.currentTarget)
        console.log("target >>>>",e.target)

        active_p = e.currentTarget;
        targetDescription = active_p.querySelector('.description')
        console.log(active_p, ":currentTarget , desc:", targetDescription)

        input.value = ""
        input.value = targetDescription.innerHTML;
        input.focus();

        borderReset();
        setBorder(e.currentTarget, 'selected');
      })
    }

    function borderReset(){
      for(var i = 0; i < container.childNodes.length; i++){
        container.childNodes[i].className = "col-md-4";
      }
    }

    function setBorder(element, color){
      var selected_card = element;
      selected_card.classList.add(color);
    }

    input.addEventListener("input", function(e){
      if (targetDescription !== null) {
        targetDescription.innerHTML = input.value;
      }
    })
  }
return carLot;

}(carLot||{}))
