
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
    //call the 4 functions
    getSelectedCheckBoxQtn1('president');
    getSelectedCheckBoxQtn2('governor');
    getSelectedCheckBoxQtn3('country');
    getSelectedCheckBoxQtn4('population');
    //hideQtns();

  });


/*
 
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


        }//end for if statement

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
/*
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

       */ 
//question 1 function
          //create a function that takes parameter==name attribute of the options in qtn 1
          //in this instance name="president"; 
        var getSelectedCheckBoxQtn1 = function (president) {
            var result = $('input[name="' + president + '"]:checked');
            //check if at least one radio button is selected
            if (result.length > 0) {
                //var resultString = result.length ;
                //use the each(function() to iterate thru the values
                result.each(function () {
                    //get the value of current selection
                    resultString = $(this).val();
                    //if value matches the cuurent answer
                    // increment current answers by 1
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
            
            
                    }//end for if statement

                });
                //$('#divResult').html(resultString);
            }
            else {
           //no button was checked
            //alert("error");
            unAnswered ++;
            text ="Unanswered : " + unAnswered;
             document.getElementById("incorrect").innerHTML =text;
            }

        };

        //question 2 function
        var getSelectedCheckBoxQtn2 = function (governor) {
            var result = $('input[name="' + governor + '"]:checked');
            if (result.length > 0) {
                //var resultString = result.length + " checkboxe(s) checked<br/>";
                result.each(function () {
                    resultString = $(this).val();
                    if(resultString=="Brian Kemp"){
                        //alert ("Correct Ans");
                 correctAnswers++;
                 text ="Correct Answers : " + correctAnswers;
                 document.getElementById("qtn1Ans").innerHTML =text;
                    }else{
                        //alert ("wrong answer");
                    wrongAnswers=wrongAnswers+1;
                    text ="Wrong Answers : " + wrongAnswers;
                     document.getElementById("unAnswered").innerHTML =text;
            
            
                    }//end for if statement

                });
                //$('#divResult').html(resultString);
            }
            else {
           //no button was checked
            //alert("error");
            unAnswered ++;
            text ="Unanswered : " + unAnswered;
             document.getElementById("incorrect").innerHTML =text;
            }

        };


//question 3 function
var getSelectedCheckBoxQtn3 = function (country) {
    var result = $('input[name="' + country + '"]:checked');
    if (result.length > 0) {
        //var resultString = result.length + " checkboxe(s) checked<br/>";
        result.each(function () {
            resultString = $(this).val();
            if(resultString=="United States"){
                //alert ("Correct Ans");
         correctAnswers++;
         text ="Correct Answers : " + correctAnswers;
         document.getElementById("qtn1Ans").innerHTML =text;
            }else{
                //alert ("wrong answer");
            wrongAnswers=wrongAnswers+1;
            text ="Wrong Answers : " + wrongAnswers;
             document.getElementById("unAnswered").innerHTML =text;
    
    
            }//end for if statement

        });
        //$('#divResult').html(resultString);
    }
    else {
   //no button was checked
    //alert("error");
    unAnswered ++;
    text ="Unanswered : " + unAnswered;
     document.getElementById("incorrect").innerHTML =text;
    }

};



//question 4 function
var getSelectedCheckBoxQtn4 = function (population) {
    var result = $('input[name="' + population + '"]:checked');
    if (result.length > 0) {
        //var resultString = result.length + " checkboxe(s) checked<br/>";
        result.each(function () {
            resultString = $(this).val();
            if(resultString=="China"){
                //alert ("Correct Ans");
         correctAnswers++;
         text ="Correct Answers : " + correctAnswers;
         document.getElementById("qtn1Ans").innerHTML =text;
            }else{
                //alert ("wrong answer");
            wrongAnswers=wrongAnswers+1;
            text ="Wrong Answers : " + wrongAnswers;
             document.getElementById("unAnswered").innerHTML =text;
    
    
            }//end for if statement

        });
        //$('#divResult').html(resultString);
    }
    else {
   //no button was checked
    //alert("error");
    unAnswered ++;
    text ="Unanswered : " + unAnswered;
     document.getElementById("incorrect").innerHTML =text;
    }

};




/*

$("#btnSubmit").click(function(){
  //function hideQuestions(){
   
        $("#questions").hide();
  });

*/
  
$("#btnSubmit").click(function(){   
     
          $("#questions").hide();
    });

