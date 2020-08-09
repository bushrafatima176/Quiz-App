(function() 
 {
  var allQuestions = [{
    question: "The first country to give a robot citizenship:",
    options: ["UAE", "Saudi Arabia", "Qatar", "USA"],
    answer: 1
  }, {
    question: "The World’s first camel hospital is located in:",
    options: ["Dubai, UAE", "Jaddah, Saudi Arabia", "Mascat, Oman", "None of These"],
    answer: 0
  }, {
    question: "What is the total length of World’s longest Hong Kong-Zhuhai bridge?",
    options: ["75km", "65km", "55km","None of These"],
    answer: 2
  },{
    question: "Where is the World’s longest sea bridge ?",
    options: ["Japan", "Russia", "China", "None of These"],
    answer: 2
  }, {
    question: "Where is the world’s oldest university?",
    options: ["Harvard University", "Oxford University", "None of these", "Fez Morocco"],
    answer: 3
  },{
    question: "Which is the world’s oldest democracy?",
    options: ["India", "Greece", "UK", "None of these"],
    answer: 1
  },{
    question: "In which country were modern banknotes first used?",
    options: ["Sweden", "France", "China", "None of these"],
    answer: 0
  },{
    question: "Which country pioneered floppy discs?",
    options: ["INTEL", "IBM", "Dell", "None of these"],
    answer: 1
  },{
    question: "The hardest substance availabe on earth is",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: 2
  },{
    question: "What was the first country to recognize the US as independent?",
    options: ["Israel", "Germany", "Morocco", "None of these"],
    answer: 2
    }];
    
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();