console.log('JS Testing.');

// Making Answer buttons only clickable once
$('.btn-outline-secondary').click(function(){
   $(this).prop('disabled', true);
});
$('.correct').click(function(){
  $(alert("Correct!"));
  $('.correct').toggleClass('successanswer');
  $(score1).append('$10');
});
$('.incorrect').click(function(){
  $(alert("Nope."));
  $(score2).append('$-10');
});






//
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
