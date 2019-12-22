function getUrl(){
    var url ="https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}


// =======================================================================================
// how to get value or use value for get option 
//========================================================================================


$(document).ready(function(){
    requestApi();
    $('#select').on('change', ()=>{
        var selected = $('#select').val();
        getRecipe(selected);
    });
})


function requestApi(){
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => chooseRecipe(data.recipes),
        error: () => console.log("Error"),
    });
}


var GetData = [];
function chooseRecipe(recipe){
    GetData = recipe;
    var option = "";
    recipe.forEach(item => {
        option += `<option value="${item.id}">${item.name}</option>`;
    });
    $('#select').append(option);
    $('#allMember').hide();
    $('#ingredient').hide();
    $('#show-instruction').hide();
    $('#ruler').hide();
}


function getRecipe(id){
    //console.log(recipes);
    GetData.forEach(item => {
        if(item.id == id){
            showRecipe(item.name, item.iconUrl);
            showIngredient(item.ingredients);
            showInstructions(item.instructions);
        } 
    })
}


//=======================================================================================
//How to get value from option 
//=======================================================================================

function showRecipe(name, img){
    var result = "";
    result += `
        <tr>
            <td> ${name}</td>
            <td> <img src="${img}" class="img-fluid" width="200px"></td>
        </tr>
    `;
    $('#table-result').html(result);
    $('#allMember').show();
    
}


function showIngredient(ing){
    var store = "";
    ing.forEach(item => {
    store +=`
        <tr>
            <td> <img src="${item.iconUrl}" width="50px"></td>
            <td> ${item.quantity}</td>
            <td> ${item.unit[0]}</td>
            <td> ${item.name}</td>
        </tr>
    `;
})
$('#ingredient-result').html(store);
$('#ingredient').show();
$('#ruler').show();
}

function showInstructions(instructioned){
      var storeInstructions = "";
      var catchsplit = instructioned.split("<step>");
      for(let i = 1; i<catchsplit.length; i++){
          storeInstructions += `
            <p class="text-primary">Step${i}</p>
            <p>${catchsplit[i]}</p>
          `;
          $('#instruction').html(storeInstructions);
          $('#show-instruction').show();
      }
}

//=======================================================================================
//How to get value when click on button 
//=======================================================================================


// function showInstructions(instruction){
//     var store = "";
//     instruction.forEach(item => {
//     store +=`
//         <tr>
//             <td> ${item.instructions}</td>
//         </tr>
//     `;
// })
//   $('#result-split').html(store);
// }


//=======================================================================================
//How to get value when click on button 
//=======================================================================================


$(document).ready(function() {
    $('#minus').on('click', function() {
        var members = $('#member').val();
        decreaseMember(members);
    });
    $('#add').on('click', function() {
        var members = $('#member').val();
        increaseMember(members);
    });
});


function decreaseMember (minus) {
    var member = parseInt(minus) - 1;
    if(member >= 0) {
      $('#member').val(member);
      compute(member);
    }
}


function increaseMember(add) {
    var members = parseInt(add) + 1;
    if(members <= 15) {
        $('#member').val(members);
        compute(members);
    }
}

//=======================================================================================
//
//=======================================================================================


