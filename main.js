 $(document).ready(function(){

  let haveWrongAnswer = false;
  let wrongAnswerCount = 0;
  let answerCount = 0;
  let correctAnswer = false;
  let finalCount = 0;

        
    const results = function (){
     $( ".results" ).text(`${answerCount} Answer Correct and ${wrongAnswerCount} Answer Wrong`);
    }
    
    $('.wrong').on('click', function (){
      haveWrongAnswer = true;
      wrongAnswerCount = wrongAnswerCount + 1;
      $(this).css('background-color', 'rgba(255, 117, 107, 0.68)');
    });

  
    $('.correct').on('click', function(){
      correctAnswer = true;
      answerCount = answerCount + 1;
      $(this).css('background-color', 'green');
    })

      $('.wrong , .correct').on('click', function () {
    let button = this
    setTimeout(function(){
      $(button).parent().removeClass('show');
      $(button).parent().next().addClass("show");
      results();
    },500)
    });


});