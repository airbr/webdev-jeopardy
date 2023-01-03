import questions from './questions.js';


// Buzzer & Chaching sounds
var buzzer = document.getElementById("buzzer");
buzzer = window.buzzer;

function playbuzzer() {
  buzzer.play();
}

function pausebuzzer() {
  buzzer.pause();
}
var chaching = document.getElementById("chaching");
chaching = window.chaching;

function playchaching() {
  chaching.play();
}

function pausechaching() {
  chaching.pause();
}
// Global variable  score...
var score = 0;
//
$(function () {
  // Remove Element after click
  $(".gridbtn").on("click", function () {
    $(this).addClass("disabled");
    $(this).remove();
  });
});

$("#closesubmit").on("click", function () {
  $('#myModal').modal('toggle');
  submit();
});

// Submit Question Answer
function submit(a, b) {
  var selected = $(".modal-body input:checked").val();
  // Determine if correct answer was chosen and alert prize
  if (selected === questions[window.currentQuestion].correctAnswer) {
    // console.log(selected + " was selected");
    chaching.play();
    window.addprize = questions[window.currentQuestion].cashPrize;
    score = score + window.addprize;
    $('#score1').html("  $" + score);
    if (!Math.sign(score)) {
      $('#score1').addClass("negative");
    } else {
      $('#score1').removeClass("negative");
    }
  }
  // Determine if incorrect answer was chosen and alert prize
  if (selected !== questions[window.currentQuestion].correctAnswer) {
    buzzer.play();
    window.subprize = questions[window.currentQuestion].cashPrize;
    score = score - window.subprize;
    console.log(score);
    $('#score1').html("  $" + score);
    if (Math.sign(score)) {
      $('#score1').addClass("negative");
    } else {
      $('#score1').removeClass("negative");
    }
  }
}
// Get question info from array, prepare
function getOptions(question) {
  var $buttonDiv = $('<div id="disabled" class="btn-group" data-bs-toggle="buttons"></div><br>');
  question.options.forEach(function (opt) {
    var $div = $('<div class="radio">');
    var $label = $('<label class="radio-inline"></label');
    var $input = $('<input type="radio" name="opts" value="' + opt + '">');
    $label.append($input);
    $label.append(opt);
    $div.append($label);
    $buttonDiv.append($div);
  });
  return $buttonDiv;
}
// Populate modal window with specific question
function showQuestion(event, $modal) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var num = parseInt(button.data('num'));
  var question = questions[num];
  window.currentQuestion = num;
  $modal.find('.modal-title').text(question.prompt);
  $modal.find('.modal-body').empty().append(getOptions(question));
}
// Modal show/close functions
$(function () {
  $("#myModal").on('show.bs.modal', function (event) {
    showQuestion(event, $(this));
  });
});
$("#myModal").on('hidden.bs.modal', function () {
  console.log('The modal is now hidden.');
});
// $('.modal-body input:checked').on(function () {
//   $('#myModal').modal('toggle');
//   return false;
// });