console.log('Main.JS on.');
/* Credit to Dr Mike & Andrea Airall & Emily Reese for significant help VVV particularly with getOptions, Submit and showQuestion functions which are key to this program */
/* All var questions array content is original though heh. */
var questions = [
/* Category 1 Questions */
  {
    prompt: 'What is the expansion of HTML?',
    options: [ 'Hyper Text Markup Language', 'Holding Text Marker Language', 'Hyperlink Text Management Language', 'Holding Text Modal Language'],
    correctAnswer: 'Hyper Text Markup Language',
    cashPrize: 10  },
  {
    prompt: 'What is the current version of HTML?',
    options: ['HTMLv5.1', 'HTML5', 'HTML2016', 'HTMLC'],
    correctAnswer: 'HTML5',
    cashPrize: 50
  },
  {
    prompt: 'What seperate language has largely replaced use of <style></style> elements?',
    options: ['HTMLS Code', 'Style Sheet Language', 'CSS or Central Style Sheet', 'CSS or Cascading Style Sheets'],
    correctAnswer: 'CSS or Cascading Style Sheets',
    cashPrize: 100
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    options: ['Semantic Tags', 'PseudoDivs', 'DivisionIDs', 'Division Notation'],
    correctAnswer: 'Semantic Tags',
    cashPrize: 500
  },
  {
    prompt: 'HTML is the principal source for attributes of Nodes in the DOM. Browsers do not usually allow cross-site actions but there is one major exception:',
    options: ['Get Requests', 'Ping Commands', 'iFrames', 'XSS '],
    correctAnswer: 'iFrames',
    cashPrize: 1000
  },
  /* Category 2 Questions */
  {
    prompt: 'What is the expansion of CSS?',
    options: [ 'Cascading Style Sheets', 'Central Style Server', 'Control Set Styles', 'C Safe Server'],
    correctAnswer: 'Cascading Style Sheets',
    cashPrize: 10  },
  {
    prompt: 'The "<Span> </Span>" has what kind of default property?',
    options: ['set-length', 'block', 'timestamp', 'inline'],
    correctAnswer: 'inline',
    cashPrize: 50
  },
  {
    prompt: 'The * selector applies to what?',
    options: ['Everything', 'Wildcard elements', 'Multiplication Functions', 'Elements with the Id of *'],
    correctAnswer: 'Everything',
    cashPrize: 100
  },
  {
    prompt: 'What feature recently introduced in CSS 3 addresses issues with "floats"?',
    options: ['Center Flagpoints', 'Flexbox', 'Flexpoints', 'FloatV2.0'],
    correctAnswer: 'Flexbox',
    cashPrize: 500
  },
  {
    prompt: 'CSS is hard. What is one feature that makes it hard compared to other languages? ',
    options: ['Lack of Case Examples', 'No Error Output', 'Inclusion of complex variable functions', 'Lack of documentation'],
    correctAnswer: 'No Error Output',
    cashPrize: 1000
  },
  /* Category 3 Questions */
 {
    prompt: 'Which is a coding language or library not relevant to modern Javascript?',
    options: ['Java', 'ECMAScript', 'Ajax', 'JQuery' ],
    correctAnswer: 'Java',
    cashPrize: 10  },
  {
    prompt: 'Javascript is usually described as a " "-based language?',
    options: ['Relational', 'COBOL', 'Object', 'Directional'],
    correctAnswer: 'Object',
    cashPrize: 50
  },
  {
    prompt: 'JSON is: ',
    options: ['A Javascript engine', 'A text format readable by Javascript', 'A Javascript library', 'A Javascript function'],
    correctAnswer: 'A text format readable by Javascript',
    cashPrize: 100
  },
  {
    prompt: 'Angular JS is an example of:',
    options: ['A JS Framework', 'an open-source, cross-platform runtime environment for developing server-side web applications', 'A JS library', 'An AJAX library'],
    correctAnswer: 'A JS Framework',
    cashPrize: 500
  },
  {
    prompt: 'Imagine one hundred Samurai are standing in a circle each holding a sword. The first samurai kills the samurai next to them (the second).  The third Samurai then kills the forth Samurai and this process of Samurai killing the Samurai directly next to them continues until there is only one Samurai left standing at the end. You write a JS program with these Samurai in an Array and use functions to determine which of the Samurai will be the last one alive. What JS functions are required to do this?',
    options: ['For Loop, If Else Function, Array Shift, Array Splice', 'Fizzbuzz, Else Statements', 'Loop Functions with Calculator Integers', 'Array Reduce'],
    correctAnswer: 'For Loop, If Else Function, Array Shift, Array Splice',
    cashPrize: 1000
  },
  /* Category 4 Questions */
 {
    prompt: 'The Terminal or command line is an example of a?',
    options: ['Interconnected Network', 'Read-Eval-Print-Loop', 'C++ Library Object', 'Skynet' ],
    correctAnswer: 'Read-Eval-Print-Loop',
    cashPrize: 10  },
  {
    prompt: 'UNIX was added relatively later into what popular propietary operating system?',
    options: ['Windows 10', 'Linux Mint', 'Mac OS X', 'Ubuntu'],
    correctAnswer: 'Mac OS X',
    cashPrize: 50
  },
  {
    prompt: 'The command "man x" would?',
    options: ['Bring up the task manager for x', 'Modularize x', 'Attempt to bring up the manual page for x', 'Make x mandatory on startup'],
    correctAnswer: 'Attempt to bring up the manual page for x',
    cashPrize: 100
  },
  {
    prompt: 'Someone on the internet tells you to enter a "rm -rf" command into your terminal. This would:',
    options: ['Remake your filedomains', 'Rename your file register', 'Recursively rename all your files with the tag rm', 'Irreparably damage your file system'],
    correctAnswer: 'Irreparably damage your file system',
    cashPrize: 500
  },
  {
    prompt: 'The GREP command allows a user to:',
    options: ['Quickly search files for specific items of text', 'Grab-Read-Evaluate-Loop', 'Gauge RAM event parameters', 'Group related events in the processor'],
    correctAnswer: 'Quickly search files for specific items of text',
    cashPrize: 1000
  },
/* Category 5 Questions */
 {
    prompt: 'Use of "Alert" popup windows is often considered bad practice as browsers and users are hostile to pop-ups. What are the other two native Javascript popup functions?',
    options: ['Warning, Confirm', 'Confirm, Refresh', 'Prompt, Confirm', 'Prompt, Notice'],
    correctAnswer: 'Prompt, Confirm',
    cashPrize: 10  },
  {
    prompt: 'The man page for Git describes it as:',
    options: ['That stupid content tracker', 'A Content Version Tracker', 'General-Index-Tracker', 'A Revision Editor'],
    correctAnswer: 'That stupid content tracker',
    cashPrize: 50
  },
  {
    prompt: 'What version of what coding language introduced the audio function contained in this page?',
    options: ['ECMAScript', 'MP3ML', 'HTML5', 'WavML'],
    correctAnswer: 'HTML5',
    cashPrize: 100
  },
    {
    prompt: 'The rolling box saying "CSS" on the game page is an example of:',
    options: ['CSS Only Animation', 'JS Animation', 'HTML Complex Animation', 'REPL Animation'],
    correctAnswer: 'CSS Only Animation',
    cashPrize: 500
  },
  {
    prompt: 'What is an early computer language famous for being designed by Government and Business without much input from computer scientists?',
    options: ['MS Office', 'Telnet', 'COBOL', 'C--' ],
    correctAnswer: 'COBOL',
    cashPrize: 1000
  }
];
// Buzzer & Chaching sound functions:
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
// Scoreboard global variable hoisted from function submit, I think so anyways:
var score = 0;
//
$(function() {
   // Hide the Modal after submit
    $("#closesubmit").click(function(){
    $("#myModal").modal("hide");
    });
});
$(function() {
  // Remove Element after click
  $(".btn-xlarge").click(function() {
    $(this).addClass("disabled");
    $(this).remove();
    });
});
 // Submit Question Answer
function submit(a, b) {
  var selected = $(".modal-body input:checked").val();
  // console.log(selected);
  console.log(questions[window.currentQuestion].correctAnswer + ' is correct answer.');
  // Determine if correct answer was chosen and alert prize
  if ( selected === questions[window.currentQuestion].correctAnswer ) {
    console.log(selected + " was selected");
    console.log("You selected the correct answer:" + questions[window.currentQuestion].correctAnswer);
    alert('You won ' + '$'+ questions[window.currentQuestion].cashPrize + "!");
    chaching.play();
    window.addprize = questions[window.currentQuestion].cashPrize;
    score = score + window.addprize;
    console.log(score);
    $('#score1').html("  $"+score);
  }
  // Determine if incorrect answer was chosen and alert prize
  if ( selected !== questions[window.currentQuestion].correctAnswer ) {
    console.log(selected + " was selected");
    console.log("You selected the wrong answer:" + questions[window.currentQuestion].correctAnswer);
    alert('You lost ' + '$' + questions[window.currentQuestion].cashPrize + "!");
    buzzer.play();
    window.subprize = questions[window.currentQuestion].cashPrize;
    score = score - window.subprize;
    console.log(score);
    $('#score1').html("  $"+score);
  }
}
// Get question info from array, prepare
function getOptions(question) {
  var $buttonDiv = $('<div id="disableb" class="btn-group" data-toggle="buttons"></div>');
  question.options.forEach(function(opt) {
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
  var button = $(event.relatedTarget);  // Button that triggered the modal
  var num = parseInt(button.data('num'));
  var question = questions[num];
  console.log('Question is ' + num);
  window.currentQuestion = num;
  $modal.find('.modal-title').text(question.prompt);
  $modal.find('.modal-body').empty().append(getOptions(question));
}
// Modal show/close functions
$(function() {
  $("#myModal").on('show.bs.modal', function(event) {
    showQuestion(event, $(this));
  });
});
$("#myModal").on('hidden.bs.modal', function () {
            console.log('The modal is now hidden.');
    });
 $('.modal-body input:checked').submit(function() {
    $('#myModal').modal('toggle');
    return false;
});


// VVVV Garbage file text to hack the Gibson with VVVVV


// // Making Answer buttons only clickable once
// $('#closesubmit').click(function(){
//    $(.).prop('disabled', true);
// });
// $('.correct').click(function(){
//   $(alert("Correct!"));
//   $('.correct').toggleClass('successanswer');
//   $(score1).append('$10');
// });
// $('.incorrect').click(function(){
//   $(alert("Nope."));
//   $(score2).append('$-10');
// });

// // Player change Animation
// $( "playertag" ).click(function() {
//   $( this ).toggleClass( ".highlight" );
// });

// // Making Answer buttons only clickable once
// $('.btn-outline-secondary').click(function(){
//    $(this).prop('disabled', true);
// });
// $('.correct').click(function(){
//   $(alert("Correct!"));
//   $('.correct').toggleClass('successanswer');
//   $(score1).append('$10');
// });
// $('.incorrect').click(function(){
//   $(alert("Nope."));
//   $(score2).append('$-10');
// });

// // Player change Animation
// $( "playertag" ).click(function() {
//   $( this ).toggleClass( ".highlight" );
// });

// $("#playerbtn").click(function(){
//   var currentplayer = "Player1";
//   console.log(currentplayer + " is the variable currentplayer");
//   console.log(score1);
// });
// $("#playerbtn2").click(function(){
//  var currentplayer = "Player2";
//   console.log(currentplayer + " is the variable currentplayer");
//   console.log(score2);

