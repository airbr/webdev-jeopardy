console.log('JS Testing.');


/* Cred to Dr Mike VVV */
var questions = [
/* Category 1 Questions */
  {
    prompt: 'What is the expansion of HTML?',
    options: [ 'Hyper Text Markup Language', 'Holding Text Marker Language', 'Hyperlink Text Management Language', 'Holding Text Modal Language'],
    correctAnswer: 'Hyper Text Markup Language'
  },
  {
    prompt: 'What is the current version of HTML?',
    options: ['HTMLv5.1', 'HTML5', 'HTML2016', 'HTMLC'],
    correctAnswer: 'HTML5'
  },
  {
    prompt: 'What seperate language has largely replaced use of <style></style> elements?',
    options: ['HTMLS Code', 'Style Sheet Language', 'CSS or Central Style Sheet', 'CSS or Cascading Style Sheets'],
    correctAnswer: 'CSS or Cascading Style Sheets'
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    options: ['Semantic Tags', 'PseudoDivs', 'DivisionIDs', 'Division Notation'],
    correctAnswer: 'Semantic Tags'
  },
  {
    prompt: 'HTML is the principal source for attributes of Nodes in the DOM. Browsers do not usually allow cross-site actions but there is one major exception:',
    options: ['Get Requests', 'Ping Commands', 'iFrames', 'XSS '],
    correctAnswer: 'iFrames'
  },
  /* Category 2 Questions */
  {
    prompt: 'What is the expansion of CSS?',
    options: [ 'Cascading Style Sheets', 'Central Style Server', 'Control Set Styles', 'C Safe Server'],
    correctAnswer: 'Cascading Style Sheets'
  },
  {
    prompt: 'The "<Span> </Span>" has what kind of default property?',
    options: ['set-length', 'block', 'timestamp', 'inline'],
    correctAnswer: 'inline'
  },
  {
    prompt: 'The * selector applies to what?',
    options: ['Everything', 'Wildcard elements', 'Multiplication Functions', 'Elements with the Id of *'],
    correctAnswer: 'Everything'
  },
  {
    prompt: 'What feature recently introduced in CSS 3 addresses issues with "floats"?',
    options: ['Center Flagpoints', 'Flexbox', 'Flexpoints', 'FloatV2.0'],
    correctAnswer: 'Flexbox'
  },
  {
    prompt: 'CSS is hard. What is one feature that makes it hard compared to other languages? ',
    options: ['Lack of Case Examples', 'No Error Output', 'Inclusion of complex variable functions', 'Lack of documentation'],
    correctAnswer: 'No Error Output'
  },
  /* Category 3 Questions */
 {
    prompt: 'Which is a coding language or library not relevant to modern Javascript?',
    options: ['Java', 'ECMAScript', 'Ajax', 'JQuery' ],
    correctAnswer: 'Java'
  },
  {
    prompt: 'Javascript is usually described as a " "-based language?',
    options: ['Relational', 'COBOL', 'Object', 'Directional'],
    correctAnswer: 'Object'
  },
  {
    prompt: 'JSON is: ',
    options: ['A Javscript engine', 'A text format readable by Javascript', 'A Javascript library', 'A Javscript function'],
    correctAnswer: 'A text format readable by Javscript'
  },
  {
    prompt: 'Angular JS is an example of:',
    options: ['A JS Framework', 'an open-source, cross-platform runtime environment for developing server-side web applications', 'A JS library', 'An AJAX library'],
    correctAnswer: 'A JS Framework'
  },
  {
    prompt: 'Imagine one hundred Samurai are standing in a circle each holding a sword. The first samurai kills the samurai next to them (the second).  The third Samurai then kills the forth Samurai and this process of Samurai killing the Samurai directly next to them continues until there is only one Samurai left standing at the end. You write a JS program with these Samurai in an Array and use functions to determine which of the Samurai will be the last one alive. What JS functions are required to do this?',
    options: ['For Loop, If Else Function, Array Shift, Array Splice', 'Fizzbuzz, Else Statements', 'Loop Functions with Calculator Integers', 'Array Reduce'],
    correctAnswer: 'For Loop, If Else Function, Array Shift, Array Splice'
  },
  /* Category 4 Questions */
 {
    prompt: 'The Terminal or command line is an example of a?',
    options: ['Interconnected Network', 'Read-Eval-Print-Loop', 'C++ Library Object', 'Skynet' ],
    correctAnswer: 'Read-Eval-Print-Loop'
  },
  {
    prompt: 'UNIX was added relatively later into what popular propietary operating system?',
    options: ['Windows 10', 'Linux Mint', 'Mac OS X', 'Ubuntu'],
    correctAnswer: 'Mac OS X'
  },
  {
    prompt: 'The command "man x" would do what?',
    options: ['Bring up the task manager for x', 'Modularize x', 'Bring up the manual page for x', 'Make x mandatory on startup'],
    correctAnswer: 'Bring up the manual page for x'
  },
    {
    prompt: 'Someone on the internet tells you to enter a "rm -rf" command into your terminal. This would:',
    options: ['Remake your filedomains', 'Rename your file register', 'Recursively rename all your files with the tag rm', 'Irreparably damage your file system'],
    correctAnswer: 'Irreparably damage your file system'
  },
  {
    prompt: 'The GREP command allows a user to:',
    options: ['Quickly search files for specific items of text', 'Grab-Read-Evaluate-Loop', 'Gauge RAM event parameters', 'Group related events in the processor'],
    correctAnswer: 'Quickly search files for specific items of text'
  },
/* Category 5 Questions */
 {
      prompt: 'Use of "Alert" popup windows is often considered bad practice as browsers and users are hostile to pop-ups. What are the other two native Javascript popup functions?',
    options: ['Warning, Confirm', 'Confirm, Refresh', 'Prompt, Confirm', 'Prompt, Notice'],
    correctAnswer: 'Prompt, Confirm'
  },
  {
    prompt: 'The man page for Git describes it as:',
    options: ['That stupid content tracker', 'A Content Version Tracker', 'General-Index-Tracker', 'A Revision Editor'],
    correctAnswer: 'That stupid content tracker'
  },
  {
    prompt: 'The command "man x" would do what?',
    options: ['Bring up the task manager for x', 'Modularize x', 'Bring up the manual page for x', 'Make x mandatory on startup'],
    correctAnswer: 'Bring up the manual page for x'
  },
    {
    prompt: 'Travel to the following URL: . This is an example of a:',
    options: ['CSS Only Animation', 'JS Animation', 'HTML Complex Animation', 'REPL Animation'],
    correctAnswer: 'CSS Only Animation'
  },
  {
    prompt: 'What is an early computer language famous for being designed by Government and Business without much input from computer scientists?',
    options: ['MS Office', 'Telnet', 'COBOL', 'C--' ],
    correctAnswer: 'COBOL'
  }
];
var currentplayer = "Player1";

var score1 = 0;
var score2 = 0;

$("#playerbtn").click(function(){
  var currentplayer = "Player1";
  console.log(currentplayer + " is the variable currentplayer");
  console.log(score1);
});
$("#playerbtn2").click(function(){
 var currentplayer = "Player2";
  console.log(currentplayer + " is the variable currentplayer");
  console.log(score2);
});
$(function() {
  var score1 = $("#score1").append("$0");
  var score2 = $("#score2").append("$0");
});
function submit() {
  var selected = $(".modal-body input:checked").val();
    for (i = 0; i < questions.length; i++) {
        if ( selected === questions[i].correctAnswer ) {
          console.log(selected + " was selected");
          console.log("You selected the correct answer:" + questions[i].correctAnswer);
          var scs = i;
        }
          else if ( selected !== questions[i].correctAnswer ) {
            console.log("You chose the wrong answer.");
            return;
        }
    }
}


//         if ( scs === 0 || scs === 5 || scs === 10 || scs === 15 || scs === 20 ) {
//             score1 = score1 + 10;
//             console.log(score1);
//           } else if ( scs === 1 || scs === 6 || scs === 11 || scs === 16 || scs === 21 ) {
//             score1 = score1 + 50;
//             console.log(score1);
//           } else if ( scs === 2 || scs === 7 || scs === 12 || scs === 17 || scs === 22 ) {
//             score1 = score1 + 100;
//             console.log(score1);
//           } else if ( scs === 3 || scs === 8 || scs === 13 || scs === 18 || scs === 23 ) {
//             score1 = score1 + 500;
//             console.log(score1);
//           } else if ( scs === 4 || scs === 9 || scs === 14 || scs === 19 || scs === 24 ) {
//             score1 = score1 + 1000;
//             console.log(score1);
//           }
//       console.log(selected + "= selected");
//       for (i = 0; i < questions.length; i++) {
//       if ( selected !== questions[i].correctAnswer ) {
//          console.log( selected + "was the wrong answer");
//          }
//       }
//   }
// }
function getOptions(question) {
  var $buttonDiv = $('<div class="btn-group" data-toggle="buttons"></div>');
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
function showQuestion(event, $modal) {
  var button = $(event.relatedTarget);  // Button that triggered the modal
  var num = parseInt(button.data('num'));
  var question = questions[num];
  $modal.find('.modal-title').text(question.prompt);
  $modal.find('.modal-body').empty().append(getOptions(question));
  var success = question.correctAnswer;
  console.log("The correct answer is " + success);
}
$(function() {
  $("#myModal").on('show.bs.modal', function(event) {
    showQuestion(event, $(this));
  });
});
/* ^^^ Dr Mike ^^^ */
$("#myModal").on('hidden.bs.modal', function () {
            console.log('The modal is now hidden.');
    });
 $('.modal-body input:checked').submit(function() {
    $('#myModal').modal('toggle');
    return false;
});




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










// VVVV Garbage file text to hack the Gibson with VVVVV


      // // for (i = i; i < questions.length; i++) {
      // //   if ( i === 0||5||10||15||20 ) {
      // //   console.log("Add $10");
      // //   } else if ( i === 1||6||11||16||21 ) {
      // //   console.log("Add $50");
      // //   } else if ( i === 2||7||12||17||22 ) {
      // //   console.log("Add $100");
      // //   } else if ( i === 3||8||13||18||23 ) {
      // //   console.log("Add $500");
      // //   } else if ( i === 4||9||14||19||24 ) {
      //   console.log("Add $1000");
      //   }



// $( "" ).click(function() {
//   alert( "Handler for .click() called." );
// });


// Listen for game button clicks-
// Add extra step find particular div that makes modal-
// // Yaml? Tool for typing JSON?


// $('#exampleModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var recipient = button.data('whatever') // Extract info from data-* attributes
//   var modal = $(this)
//   modal.find('.modal-title').text('New message to ' + recipient)
//   modal.find('.modal-body input').val(recipient)
// })




// Get JSON Example ---

// var text = '{"employees":[' +
// '{"firstName":"John","lastName":"Doe" },' +
// '{"firstName":"Anna","lastName":"Smith" },' +
// '{"firstName":"Peter","lastName":"Jones" }]}';

// obj = JSON.parse(text);
// document.getElementById("demo").innerHTML =
// obj.employees[2].firstName + " " + obj.employees[2].lastName;


// //??? Fix found online for Modal bug issue with Bootstrap???
// $('.modal').on('hidden.bs.modal', function (e) {
//     $('.modal .modal-body').empty();
// });


// Jeopardy JS
// $("p").click(function(){
//     alert("The paragraph was clicked.");
// });
// <script>
// $.getJSON('question1.json'), function(data) {
//   console.log( 'Working' );
// };
// </script>

// console.log('JS Testing.');

// $( "#question" ).append( "<button type="button" class="btn-outline-secondary">1. Hypertext Markup Language</button>" );


// $(


// var text = '{"question":[' +
// '{"answerA":"Hyper Text Markup Language"},' +
// '{"answerB":"Bogus Answer"},' +
// '{"answerC":"Bogus Answer"},' +
// '{"answerD":"Closeish"}]}';

// obj = JSON.parse(text);
// document.getElementById("question").innerHTML = obj.question;


// Code I barely understand, attemped to edit unsuccesfully //

// $(function() {

//     $('.well question').click{function() {

//       $.getJSON('question1.json', function(data) {

//                var item = [];

//                   $.each(data, function(key, value) {

//                 items.push('<li id="' + key + '">' + val +  </li>);

//            });

//            $('<ul/>', {
//             'class': 'interest-list',
//             html: items.join('')
//           }).appendTo('body');

//     });

// });
