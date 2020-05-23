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

saveText();

// local storage
function saveText() {
  $("textarea")[0].value = localStorage.getItem("textarea1");
  $("textarea")[1].value = localStorage.getItem("textarea2");
  $("textarea")[2].value = localStorage.getItem("textarea3");
  $("textarea")[3].value = localStorage.getItem("textarea4");
  $("textarea")[4].value = localStorage.getItem("textarea5");
  $("textarea")[5].value = localStorage.getItem("textarea6");
  $("textarea")[6].value = localStorage.getItem("textarea7");
  $("textarea")[7].value = localStorage.getItem("textarea8");
  $("textarea")[8].value = localStorage.getItem("textarea9");
}

// save button + storage
$(".saveBtn").on("click", function(e) {
  e.preventDefault();
  var textArea1 = $("textarea")[0].value;
  var textArea2 = $("textarea")[1].value;
  var textArea3 = $("textarea")[2].value;
  var textArea4 = $("textarea")[3].value;
  var textArea5 = $("textarea")[4].value;
  var textArea6 = $("textarea")[5].value;
  var textArea7 = $("textarea")[6].value;
  var textArea8 = $("textarea")[7].value;
  var textArea9 = $("textarea")[8].value;

  localStorage.setItem("textarea1", textArea1);
  localStorage.setItem("textarea2", textArea2);
  localStorage.setItem("textarea3", textArea3);
  localStorage.setItem("textarea4", textArea4);
  localStorage.setItem("textarea5", textArea5);
  localStorage.setItem("textarea6", textArea6);
  localStorage.setItem("textarea7", textArea7);
  localStorage.setItem("textarea8", textArea8);
  localStorage.setItem("textarea9", textArea9);
});

// end of jquery wrapper
});