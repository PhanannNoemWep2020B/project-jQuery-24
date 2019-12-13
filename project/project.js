function getUrl(){
    var url ="https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}

// =======================================================================================
// how to get value or use value for get option 
//========================================================================================
$(document).ready(function(){
    requestApi();
    $('#recipe').on('change', ()=>{
        var recipe = $('#recipe').val();
        getRecipe(recipe);
    });
})

function requestApi(){
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => chooseRecipe(data.recipes),
        error: () => console.log("Conn't get API"),
    });
}

var allData = [];
function chooseRecipe(recipe){
    allData = recipe;
    var option = "";
    recipe.forEach(item => {
        option += `<option value="${item.id}">${item.name}</option>`;
    });
    $('#recipe').append(option);
}

function getRecipe(id){
    //console.log(recipes);
    allData.forEach(item => {
        if(item.id == id){
            showRecipe(item.name, item.iconUrl);
            showIngredient(item.ingredients);
        } 
    })
}



function showRecipe(name, img){
    var result = "";
    result += `
        <tr>
        <td> ${name}</td>
            <td> <img src="${img}" class="img-fluid" width="200px"></td>
        </tr>
    `;
    $('#recipe-result').html(result);
}

function showIngredient(ing){
    ing.forEach(item => {
       display(item);
    })
}

function display(output){
    var store = "";
    store +=`
        <tr>
        <td> <img src="${output.iconUrl}" class="img-fluid" width="100px"></td>
            <td> ${output.name}</td>
            <td> ${output.quantity}</td>
            <td> ${output.unit}</td>
        </tr>
    `;
    $('#ingredient-result').append(store);
}




// // //====================================================================

// $(document).ready( () => {
//     $('#result').on('change', () => {
//         var store = $('#result').val();
//         chooseRecipe(store);
       
//     });
// });

// var getAPI = (api) => {
//     $.ajax({
//         dataType: 'json',
//         url: api,
//         success: (data) => getRecipes(data),
//         error: () => console.error("Cannot request data")
//     });
// }

// function getRecipes(datas) {
//     datas.recipes.forEach( recs => {
//         getIngrediant(recs); 
//     });
// }

// function getIngrediant(recipe) {
//     recipe.ingredients.forEach(ing => {
//         showIngrediantTable(ing);
//     })
// }

// var showIngrediantTable = (show) => {
//     var ingrediant = "";
//     ingrediant += `
//         <tr>
//             <td><img src="${show.iconUrl}" width="100" class="img-fluid"></td>
//             <td>${show.quantity}</td>
//             <td>${show.unit[0]}</td>
//             <td>${show.name}</td>
//         </tr>
//     `;
//     $('#result').append(ingrediant);
// }


// var chooseRecipe = (myRecipe) => {
//     var onlyNumber = parseInt(myRecipe);
//     switch(onlyNumber) {
//         case 0:
//             getAPI(url);
//             hideAlert();
//             break;
//         case 1:
        
//             demoOne();
//             break;
//         case 2:
        
//             demoTwo();
//             break;
//         default: console.warn("You choose nothing");
//     }
// } 

// var demoTwo = () => {
//     var show = "";
//     show += `
//         <div class="alert alert-warning">
//             <strong>Good luck! </strong> try your best!
//         </div>
//     `;
//     $('#result').html(show);
// }
// var hideAlert = () => {
//     $('.alert').hide();
// }









































































































// //================================================================================


// var member;
// $(document).ready(function () {
//     getDefaultRecipe();
//     $('button').on('click', () => {
//         var newMember = $('#members').val();
//         if(newMember != "") {
//             updateRecipe();
//             member = newMember;
//         }
        
//     })
// });
// function getDefaultRecipe() {
//     $.ajax({
//         dataType: 'json',
//         url: getUrl(),
//         success: (data) => defaultRecipe(data),
//         error: () => getError(),
//     });
// }
// function updateRecipe() {
//     $.ajax({
//         dataType: 'json',
//         url: getUrl(),
//         success: (data) => getRecipe(data),
//         error: () => getError(),
//     });
// }
// function getUrl() {
//     var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
//     return url;
// }

// function getError() { console.log("Error") }

// function getRecipe(myData) {
//     var result = "";
//     myData.recipes.forEach( recipe => {
//         updateIngredient(recipe.ingredients);
//         result += `
//             <tr>
//                 <td><img src="${recipe.iconUrl}" width="100"></td>
//                 <td>${recipe.name}</td>
//                 <td>${recipe.nbGuests * addMember(member)}</td>
//             </tr>
//         `;
//     });
//     printOut("recipe",result);
// }

// function defaultRecipe(myData) {
//     var result = "";
//     myData.recipes.forEach( recipe => {
//         defaultIngredient(recipe.ingredients);
//         result += `
//             <tr>
//                 <td><img src="${recipe.iconUrl}" width="100"></td>
//                 <td>${recipe.name}</td>
//                 <td>${recipe.nbGuests}</td>
//             </tr>
//         `;
//     });
//     printOut("recipe",result);
// }

// function defaultIngredient(ing) {
//     result = "";
//     ing.forEach(item => {
//         result += `
//             <tr>
//                 <td><img src="${item.iconUrl}" width="100"></td>
//                 <td>${item.name}</td>
//                 <td>${item.quantity}</td>
//                 <td>${item.unit[0]}</td>
//             </tr>
//         `;
//     });
//     printOut('ingredient', result);  
// }

// function updateIngredient(ing) {
//     result = "";
//     ing.forEach(item => {
//         result += `
//             <tr>
//                 <td><img src="${item.iconUrl}" width="100"></td>
//                 <td>${item.name}</td>
//                 <td>${item.quantity * addMember(member)}</td>
//                 <td>${item.unit[0]}</td>
//             </tr>
//         `;
//     });
//     printOut('ingredient', result);  
// }

// function printOut(elmentId, out) {
//     $('#' + elmentId).html(out);
// }

// function addMember(member) {
//     return  parseInt(member);
// }
