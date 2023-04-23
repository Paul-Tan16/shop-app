import { menuArray } from "/data.js"; 



function getMenuOptions(){
    let options = ''

    menuArray.forEach(function(food){
        
        options +=
        ` <div id='pizza' class="food">
        <img src="${food.emoji}" alt="pizza-image" class="food-img"  >
        
        <div class="food-info">
            <h3 class="food-name"> ${food.name} </h3>
            <p class="ingredient"> ${food.ingredients} </p>
            <span class="pizza-price price"> ${food.price} </span>
        </div>
        
        <div class="btn-input">
            <input type="button" value="" class="add">
            <i class=" plus-sign fa-light fa-plus fa-2x">
            </i>
        </div>
    </div> `
    })
    return options
}

function render(){
    document.getElementById('food-box').textContent = getMenuOptions()
}
render()
