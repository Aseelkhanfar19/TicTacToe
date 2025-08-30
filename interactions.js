//if we want the variables  save the last value inside it even we used the function in another element, we should put the variables out of the function to save the value 

var lastLetter; //The last entered letter 'X' or 'O'
/*var table = document.getElementById('tb');
var row = document.getElementById('tb').rows;*/
var win =
[ 
 ["" , "" , ""] ,
 ["" , "" , ""] , 
 ["" , "" , "" ]]; //The default winners index

function Check(idClicked) { 
var idClick = document.getElementById(idClicked);    
if (!idClick.innerHTML && !lastLetter )
{  
  document.getElementById(idClicked).style.color = 'white';    
  idClick.innerHTML = "X"; 
 lastLetter=idClick.innerHTML;
 win[idClicked]=idClick.innerHTML;

}
else
{
 if(!idClick.innerHTML && lastLetter=="X") 
     { 
         
      idClick.innerHTML = "O";    
      lastLetter=idClick.innerHTML;
    //should check the winner here by add function
           
     }
    else if (!idClick.innerHTML && lastLetter=="O") 
     {
      document.getElementById(idClicked).style.color = 'white';     
      idClick.innerHTML = "X"; 
      lastLetter=idClick.innerHTML;
      //should check the winner here by add function
     }
    else
    {      
    }
}
   
} //end of function --> check



