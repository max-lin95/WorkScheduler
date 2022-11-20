//Shows today's date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

let currentHour = moment().format("HH");
//Time blocks are colored depending on if the time is in the present, past, or future
$(".time-block").each(function() {
    var timeBlock = $(this).attr("id").split("hour")[1];

    if(currentHour === timeBlock) {
        $(this).addClass("present");
        $(this).children(".description").addClass("present");
    } else if (currentHour < timeBlock) {
        $(this).removeClass("pressent");
        $(this).addClass("future");
    } else if (currentHour > timeBlock) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
})

$("#hour09 .description").val(localStorage.getItem("hour09"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

