$(document).ready(function() {

// time array
var $timeblockHours = ["09AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// format time
var $time = moment().format("hA");

// connect jquery with html container
var $container = $(".container");

// format date
var $date = moment().format("LL");
$('#currentDay').html($date);

// create function to add content to page and change color blocks
$.each($timeblockHours, function(index, value){

  var $timeblockRow = $("<div>").addClass("time-block");
  var $row = $("<div>").addClass("row");
  var $timeCol = $("<div>" + value +"</div>").addClass("col-sm-1 time-col");
  var $textareaCol = $("<textarea>").addClass("col-sm-10 textarea description");
  var $saveCol = $("<button>").addClass("col-sm-1 saveBtn");
  var $saveIcon = $("<i>").addClass("far fa-save fa-2x");


  // to change the background timeblock color based upon time
      if (value == $time) {
        $timeblockRow.addClass("present");
      } 
        else if (value > $time) {
        $timeblockRow.addClass("future");
      } 
        else if (value < $time) {
        $timeblockRow.addClass("past");
      }

      $timeblockRow.append($row);
      $row.append($timeCol);
      $row.append($textareaCol);
      $row.append($saveCol);
      $saveCol.append($saveIcon);
      $container.append($timeblockRow);

});

// // Store
// localStorage.setItem("lastname", "Smith");
// // Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");


// get input out of textarea and save

$(".saveBtn").click(function(e){
  e.preventDefault();

  var $getText = $(".textarea").val();
  localStorage.setItem($(".textarea"), $getText); 
  $(".textarea").val(localStorage.getItem($getText)); 


});

// var $textareaCol = $("<textarea>").addClass("col-sm-10 textarea description");

// KEEP THIS:
// localStorage.setItem("textarea", JSON.stringify($getText));
// localData = JSON.parse(localStorage.getItem($getText));





   












// end of jquery wrapper
});