$(document).ready(function(){
    $.getJSON("./addonMstr.js", function(result){

        // ------------- this block of code appends buttons -------------
        const check = [];
        $.each(result, function(index, item) {
            let parentname = item.ParentAddonName;
            // if (parentname == null) console.log(item);
            if (!check.includes(parentname)/* && parentname != null*/) {
                check.push(parentname);
                $(".buttons").append(`<button type="button" class="btn btn-primary active" id="btn${check.indexOf(parentname)}" data-bs-toggle="button" aria-pressed="true">${parentname}</button>`);
            }
        });
        // ------------- this block of code appends buttons -------------
        
        // ------------- this block of code appends data -------------
        $.each(check, function(indexofcheck, checkitem) {
            $(`#btn${indexofcheck}`).click(function(){
                $(".my-data").empty();
                $.each(result, function(index, item) {
                    if (item.ParentAddonName === checkitem) {    
                        let inputs = "";
                        $.each(item.VehicleAddonFields, function(indexofvehicle, itemofvehicle) {
                            inputs += `<input class="input" placeholder="${itemofvehicle.LabelKeyword}"><br>`;
                        });
                          
                        $(".my-data").append(`<div class="data-blocks"><label>${item.AddonName}</label><br>${inputs}</div>`);
                    }
                });
            });
        })
        // ------------- this block of code appends data -------------
    });

});



// $.getJSON("https://jsonplaceholder.typicode.com/todos", function(result){
//     $.each(result, function(i, field){
//         $("ul").append("<li>" + field.title + "</li>");
//         // console.log(field.title)
//     });
// });    

// let text = "";
// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(response => response.json())
//     .then(json => {
//         users = json;
//         json.users.forEach(user => {
//             // text += user.title
//             console.log(user);
//         });
//     });

// // console.log(text);

// // function myFunction(index, item) {
// //     text += item;
// // }
