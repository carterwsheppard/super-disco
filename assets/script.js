//Get today's date and time and display that on the index file at the top
var currentDay = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(currentDay);

//Function to color code the different textarea divs
function checkHour() {
    //get current hour
    var currentHour = moment().hour();

    //loop through all divs with the class time-block
    $(".time-block").each(function() {
        //get hour of a certain block
        var blockHour = parseInt($(this).attr("id"))

        //check against current hour and color code

        if (currentHour === blockHour) {
            $(this).removeClass("pastHour");
            $(this).removeClass("futureHour");
            $(this).addClass("currentHour");
        }

        else if (currentHour < blockHour) {
            $(this).removeClass("currentHour");
            $(this).removeClass("pastHour");
            $(this).addClass("futureHour");
        }

        else if (currentHour > blockHour) {
            $(this).removeClass("currentHour");
            $(this).removeClass("futureHour");
            $(this).addClass("pastHour");
        }
    })
};

// When I hit save the text goes to local storage
$(".saveBtn").on("click", function() {
    var taskID = $(this).parent().attr("id");
    var taskDescription = $(this).siblings(".description").val()

    localStorage.setItem(taskID,taskDescription);
});

//Load things already in local storage onto my page
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


//run checkHour when first opened
checkHour();
