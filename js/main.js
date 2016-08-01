console.log('JS Testing.');

// Making Answer buttons only clickable once
$('.btn-outline-secondary').click(function(){
   $(this).prop('disabled', true);
});
//
$('.correct').click(function(){
  $(alert("Correct!"));
  $(score1).append('$10');
});
//
$('.incorrect').click(function(){
  $(alert("Nope."));
  $(score2).append('$-10');
});





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
