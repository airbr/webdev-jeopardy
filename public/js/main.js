import questions from './questions.js';

// Sound elements
const buzzer = document.getElementById('buzzer') || window.buzzer;
const chaching = document.getElementById('chaching') || window.chaching;

function playBuzzer() {
  if (buzzer) buzzer.play();
}
function pauseBuzzer() {
  if (buzzer) buzzer.pause();
}
function playChaching() {
  if (chaching) chaching.play();
}
function pauseChaching() {
  if (chaching) chaching.pause();
}

let score = 0;

$(function () {
  // Remove question button after click
  $('.gridbtn').on('click', function () {
    $(this).addClass('disabled').remove();
  });

  // Modal show: populate question
  $('#myModal').on('show.bs.modal', function (event) {
    showQuestion(event, $(this));
  });

  // Modal close: log
  $('#myModal').on('hidden.bs.modal', function () {
    console.log('The modal is now hidden.');
  });

  // Submit answer
  $('#closesubmit').on('click', function () {
    $('#myModal').modal('toggle');
    submit();
  });
});

function submit() {
  const selected = $('.modal-body input:checked').val();
  const q = questions[window.currentQuestion];
  if (!selected || !q) return;
  const isCorrect = selected === q.correctAnswer;
  const prize = q.cashPrize;
  if (isCorrect) {
    playChaching();
    score += prize;
  } else {
    playBuzzer();
    score -= prize;
  }
  $('#score1').html('  $' + score);
  if (score < 0) {
    $('#score1').addClass('negative');
  } else {
    $('#score1').removeClass('negative');
  }
}

function getOptions(question) {
  const $buttonDiv = $('<div class="btn-group" data-bs-toggle="buttons"></div><br>');
  question.options.forEach(opt => {
    const $div = $('<div class="radio"></div>');
    const $label = $('<label class="radio-inline"></label>');
    const $input = $('<input type="radio" name="opts" value="' + $('<div>').text(opt).html() + '">');
    $label.append($input);
    $label.append(' ');
    $label.append(document.createTextNode(opt)); // Render as plaintext
    $div.append($label);
    $buttonDiv.append($div);
  });
  return $buttonDiv;
}

function showQuestion(event, $modal) {
  const button = $(event.relatedTarget);
  const num = parseInt(button.data('num'));
  const question = questions[num];
  window.currentQuestion = num;
  $modal.find('.modal-title').text(question.prompt);
  $modal.find('.modal-body').empty().append(getOptions(question));
}