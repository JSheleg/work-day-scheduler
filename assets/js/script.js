
//Get current data and set to top of page in jumbtron
var currentDay = document.getElementById('currentDay');
var date = moment(date).format("dddd MMMM Do, YYYY");
currentDay.innerText = date;







//Need to check to see if there is any saved tasks.

// var list = JSON.parse(localStorage.getItem('todolist')) || [];

// $('#9AM').on('click', function(){
//     alert(" row 9am clicked");
// })

// $(".description").on('click',"p", function(){
//     var text = $(this)
//         .text()
//         .trim();
//     console.log(text);
    
//     var textInput = $("<textarea>")
//         .addClass("form-control")
//         .val(text);  
//     $(this).replaceWith(textInput);
//     textInput.trigger("focus");
// });

// $(".description").on("blur", "textarea", function(){
//     // get the textarea's current value/text
//     var text = $(this)
//         .val()
//         .trim();
//     //get the parent's id attribute
//     var status = $(this)
//     .closest(".description")
//     .attr("id")

//     //get the task's position in the list
//     var index =$(this)
//     .closest(".description")
//     .index();

// });