function submit() {
  var selected = $(".modal-body input:checked").val();
      for (i = 0; i < questions.length; i++) {
        if ( selected === questions[i].correctAnswer ) {
          console.log(selected + " was selected");
          console.log("You selected the correct answer:" + questions[i].correctAnswer);
          var scs = i;
        }
        if ( scs === 0 || scs === 5 || scs === 10 || scs === 15 || scs === 20 ) {
            score1 = score1 + 10;
            console.log(score1);
          } else if ( scs === 1 || scs === 6 || scs === 11 || scs === 16 || scs === 21 ) {
            score1 = score1 + 50;
            console.log(score1);
          } else if ( scs === 2 || scs === 7 || scs === 12 || scs === 17 || scs === 22 ) {
            score1 = score1 + 100;
            console.log(score1);
          } else if ( scs === 3 || scs === 8 || scs === 13 || scs === 18 || scs === 23 ) {
            score1 = score1 + 500;
            console.log(score1);
          } else if ( scs === 4 || scs === 9 || scs === 14 || scs === 19 || scs === 24 ) {
            score1 = score1 + 1000;
            console.log(score1);
          }
      console.log(selected + "= selected");
      for (i = 0; i < questions.length; i++) {
      if ( selected !== questions[i].correctAnswer ) {
         console.log( selected + "was the wrong answer");
         }
      }
  }
}
