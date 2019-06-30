
window.onload = function() {
    //var osy= $("<div>").text("SomeText");
    //$(".container").prepend(osy);
    //var hour = 2;
    var hour = 0;
    var sec = 30;
    //var text="Time Remaining : " + hour + " : " + sec;
  
    function stopTimer(){
      if (sec == 1) {
      clearInterval(timeID);
     var text="<button type='button' ><a href=index.html> Time Up</a> </button>"
      document.getElementById("timer").innerHTML = text; 
      //"Your Time has EXPIRED";
      $("#questions").hide();

    }
    };
   

    var timeID=setInterval(function() {
      document.getElementById("timer").innerHTML = "Time Remaining : " + hour + " : " + sec;
      sec--;
      if (sec == 31) {      
        sec = 31;
            
      }
      stopTimer();  
  
    }, 1000);
  }

  var correctAnswers=0;
  var wrongAnswers=0;
  var unAnswered=0;
  var text;
  var president=[];
  var country=[];
  
  var x;




 
    $("#btnSubmit").click(function(){
        //check if any radio button is selected
   var result=$('input[type="radio"]:checked');
   if(result.length>0){ 
    result.each(function () {
        resultString = $(this).val();
        if(resultString=="Barack Obama"){
            //alert ("Correct Ans");
     correctAnswers++;
     text ="Correct Answers : " + correctAnswers;
     document.getElementById("qtn1Ans").innerHTML =text;
        }else{
            //alert ("wrong answer");
        wrongAnswers=wrongAnswers+1;
        text ="Wrong Answers : " + wrongAnswers;
         document.getElementById("unAnswered").innerHTML =text;


        }

    });// end for each fun
    //$('#result').html(resultString);  

            }else{
                //no button was checked
                //alert("error");
                unAnswered ++;
                text ="Unanswered : " + unAnswered;
                 document.getElementById("incorrect").innerHTML =text;


            }

            });
//end for question1

$("#btnSubmit").click(function(){
    //check if any radio button is selected
var result=$('input[type="radio"]:checked');
if(result.length>0){ 
result.each(function () {
    resultString = $(this).val();
    if(resultString=="Brian Porter Kemp"){
        //alert ("Correct Ans");
 correctAnswers++;
 text ="Correct Answers : " + correctAnswers;
 document.getElementById("qtn1Ans").innerHTML =text;
    }else{
        //alert ("wrong answer");
    wrongAnswers=wrongAnswers+1;
    text ="Wrong Answers : " + wrongAnswers;
     document.getElementById("unAnswered").innerHTML =text;


    }

});// end for each fun
//$('#result').html(resultString);  

        }else{
            //no button was checked
            //alert("error");
            unAnswered ++;
            text ="Unanswered : " + unAnswered;
             document.getElementById("incorrect").innerHTML =text;


        }

        });












$("#btnSubmit").click(function(){
  //function hideQuestions(){
   
        $("#questions").hide();
  });


