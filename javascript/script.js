$(document).ready(function() {

// time array
var $timeblockHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "8PM"];
// connect jquery with html container
var $container = $(".container");

// format date
var $date = moment().format("LL");
$('#currentDay').html($date);

// format time
var $time = moment().format("hA");
// var $time = moment().hours();

// add content to page
$.each($timeblockHours, function(index, value){
  
  var $timeblockRow = $("<div>").addClass("time-block");
  var $row = $("<div>").addClass("row");
  var $timeCol = $("<div>" + value +"</div>").addClass("col-sm-1 time-col");
  var $textareaCol = $("<textarea>").addClass("col-sm-10 textarea description");
  var $saveCol = $("<button>").addClass("col-sm-1 saveBtn");
  var $saveIcon = $("<i>").addClass("far fa-save fa-2x");


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

// $(".saveBtn").click(function(e){
//   e.preventDefault();

//   var getText = $(".textarea").val();
//   localStorage.setItem($(".textarea"), getText); 
//   $(".textarea").val(localStorage.getItem(getText)); 
//   console.log(getText)

// });


// KEEP THIS:
// localStorage.setItem("textarea", JSON.stringify(user));
// var lastname = JSON.parse(localStorage.getItem("key"));







// to change the background based upon time


$.each($timeblockHours.lenth, function(index, $time){
    if ($timeblockHours == $time) {
    $(".time-block").attr("class", "present");

  };

});




// end of jquery wrapper
});