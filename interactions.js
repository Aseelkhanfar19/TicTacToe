//if we want the variables  save the last value inside it even we used the function in another element, we should put the variables out of the function to save the value 

var lastLetter; //The last entered letter 'X' or 'O'
/*var table = document.getElementById('tb');
var row = document.getElementById('tb').rows;*/
var win =
[
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6],
//--------
 [2,1,0],
 [5,4,3],
 [8,7,6],
 [6,3,0],
 [7,4,1],
 [8,5,2],
 [8,4,0],
 [6,4,2]
]; //The default winners index

function Check(idClicked) { 
var idClick = document.getElementById(idClicked);    
if (!idClick.innerHTML && !lastLetter )
{  
  document.getElementById(idClicked).style.color = 'blue';    
  idClick.innerHTML = "X"; 
 lastLetter=idClick.innerHTML;
 checkTd(idClicked);
}
else
{
 if(!idClick.innerHTML && lastLetter=="X") 
     { 
         
      idClick.innerHTML = "O";    
      lastLetter=idClick.innerHTML;
    checkTd(idClicked);
           
     }
    else if (!idClick.innerHTML && lastLetter=="O") 
     {
      document.getElementById(idClicked).style.color = 'blue';     
      idClick.innerHTML = "X"; 
      lastLetter=idClick.innerHTML;
      //should check the winner here by add function
     }
    else
    {      
    }
}
   
} //end of function --> check


