/*main function */
function naming(){

    var CC=parseInt(document.getElementById("main").value);
    /*CC - is the century digits. For example 1989 has CC = 19 */
    var YY=parseInt(document.getElementById("name").value);
    /* YY - is the Year digits (1989 has YY = 89) */
    var MM=parseInt(document.getElementById("Form").value);
    /*  MM -  is the Month */
    var DD=parseInt(document.getElementById("akan").value);
    /* DD - is the Day of the month  */

    /* array of akan names */
    var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sartuday"];
    var femaleNames=["Akosua", "Adwoa","Abenaa","Akua","Yaa"," Afua","Ama"];
    var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
   
    /* confirm spaces arent left blank */
    if(CC.value =="" || YY.value =="" || MM.value =="" || DD.value ==""){
        alert("No blank values allowed");
    }
    
    /* receive gender from user */
    var gender = document.querySelector('input[name="gender"]:checked').value;

    /* formula for finding day of the week */
    var  dayOfTheWeek = parseInt( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
    dayOfTheWeek = Math.ceil(dayOfTheWeek)
    /* when gender is male */
    if(gender==="male") {
      if(dayOfTheWeek===0){
        alert("You were born on: " + day[0]);
        alert("Your Akan name is: " + maleNames[0]);
      } else if(dayOfTheWeek===1){
        alert("You were born on: " + day[1]);
        alert("Your Akan name is: " + maleNames[1]);
      } else if(dayOfTheWeek===2){
        alert("You were born on: " + day[2]);
        alert("Your Akan name is: " + maleNames[2]);
      } else if(dayOfTheWeek===3){
        alert("You were born on: " + day[3]);
        alert("Your Akan name is: " + maleNames[3]);
      } else if(dayOfTheWeek===4){
        alert("You were born on: " + day[4]);
        alert("Your Akan name is: " + maleNames[4]);
      } else if(dayOfTheWeek===5){
        alert("You were born on: " + day[5]);
        alert("Your Akan name is: " + maleNames[5]);
      } else if(dayOfTheWeek===6){
        alert("You were born on: " + day[6]);
        alert("Your Akan name is: " + maleNames[6]);
      }
      /* when gender is female */
    } else {
       if(dayOfTheWeek===0){
        alert("You were born on: " + day[0]);
        alert("Your Akan name is: " + femaleNames[0]);
      } else if(dayOfTheWeek===1){
        alert("You were born on: " + day[1]);
        alert("Your Akan name is: " + femaleNames[1]);
      } else if(dayOfTheWeek===2){
        alert("You were born on: " + day[2]);
        alert("Your Akan name is: " + femaleNames[2]);
      } else if(dayOfTheWeek===3){
        alert("You were born on: " + day[3]);
        alert("Your Akan name is: " + femaleNames[3]);
      } else if(dayOfTheWeek===4){
        alert("You were born on: " + day[4]);
        alert("Your Akan name is: " + femaleNames[4]);
      } else if(dayOfTheWeek===5){
        alert("You were born on: " + day[5]);
        alert("Your Akan name is: " + femaleNames[5]);
      } else if(dayOfTheWeek===6){
        alert("You were born on: " + day[6]);
        alert("Your Akan name is: " + femaleNames[6]);
      }
    }
  }