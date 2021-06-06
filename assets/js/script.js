//Get current data and set to top of page in jumbtron
var currentDay = document.getElementById('currentDay');
var date = moment(date).format("dddd MMMM Do, YYYY");
currentDay.innerText = date;



$(document).ready(function(){
    console.log("ready");

    // save input from each hour
    $('.saveBtn').on('click', function(){
        alert(" save button clicked");
        //grab value from siblings(description)
        var text =$(this).siblings(".description").val();
        console.log(text);
        // time is grabbed from id(parent)
        var time =$(this).parent().attr("id");
        console.log(time);
        //store information in local storage, use time as Key and text as value
        localStorage.setItem(time, text);
    })

    // need to have colors on grid depending on if it is  up to 2 hrs in the past, present or in the future
    var timeTracker = function(){
        //current hour
        var timeNow = moment().hour();
        console.log(timeNow);

        $('.time-block').each(function(){
            var hourTime = parseInt($(this).attr("id"));
            //if current time is > hourTime task is in the past
            //if current time === hourTime task is in the present
            //if current time is < hourTime task is in the future
            if(timeNow > hourTime){
                $(this).addClass('past');
            }
            else if(timeNow === hourTime){
                $(this).addClass('present');
            }
            else{
                $(this).addClass('future');
            }

        })
    
    }

    timeTracker();
    //Get items in local storage if any
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("110"));

})


    


