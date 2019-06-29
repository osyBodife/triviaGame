
window.onload = function() {
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
      $("#triviaForm").hide();

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

function getFormValue(){  
 var president = document.getElementsByName("president");
 console.log(president);

  for (i = 0; i < president.length; i++){
   currentPresident = president[i];
   //console.log(president[i]);

  if (currentPresident.checked){
   var selectedPresident = currentPresident.value;
   } 
    // end if
  } // end for

  //put result in html element with id qtn1Ans
 // document.getElementById("qtn1Ans").innerHTML =selectedPresident;
 
 if(selectedPresident=="Barack Obama"){
     correctAnswers++;
     text ="Correct Answers : " + correctAnswers;
     document.getElementById("qtn1Ans").innerHTML =text;
 }else{
     wrongAnswers=wrongAnswers+1;
     text ="Wrong Answers : " + wrongAnswers;
     document.getElementById("incorrect").innerHTML =text;
 }
//}else{

  //alert("error")
//}
  } // end fu

  function getCountryValue(){  
    var country = document.getElementsByName("country");
    
   
     for (i = 0; i < country.length; i++){
      currentCountry = country[i];
      //console.log(president[i]);
   
     if (currentCountry.checked){
        var selectedCountry = currentCountry.value;
      } 
       // end if
     } // end for
   
     //put result in html element with id qtn1Ans
    // document.getElementById("qtn1Ans").innerHTML =selectedPresident;
    
    if(selectedCountry=="United States"){
        correctAnswers++;
        text ="Correct Answers : " + correctAnswers;
        document.getElementById("qtn1Ans").innerHTML =text;
    }else{
        wrongAnswers=wrongAnswers+1;
        text ="Wrong Answers : " + wrongAnswers;
        document.getElementById("incorrect").innerHTML =text;
    }
   //}else{
   
     //alert("error")
   //}
     } // end fu
   

   

  function hideQuestions(){
    $("#triviaForm").click(function(){
        $("#triviaForm").hide();
  });
};

