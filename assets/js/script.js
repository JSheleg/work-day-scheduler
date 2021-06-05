var currentDay = document.getElementById('currentDay');
//var date = moment();

var date = moment(date).format("dddd MMMM Do, YYYY");
currentDay.innerText = date;