var lastLetter; 
var fullCells=0;
var playerX=true;
var playerO=false;
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
if (!idClick.innerHTML && !lastLetter && fullCells !=9 ) // if empty
{  
  playerX=true;
  playerO=false;
  document.getElementById(idClicked).style.color = 'white';    
  idClick.innerHTML = "X"; 
 lastLetter=idClick.innerHTML;
 fullCells++;
 checkTd(idClicked);
}
else
{
 if(!idClick.innerHTML && lastLetter=="X" && fullCells !=9) //if current=x
     { 
      playerX=false;
      playerO=true;  
      idClick.innerHTML = "O";    //then write O
      lastLetter=idClick.innerHTML;
      fullCells++;
      checkTd(idClicked);

           
     }
    else if (!idClick.innerHTML && lastLetter=="O" && fullCells !=9 ) 
     {
      playerX=true;
      playerO=false;         
      document.getElementById(idClicked).style.color = 'white';     
      idClick.innerHTML = "X"; 
      lastLetter=idClick.innerHTML;
      fullCells++;
      checkTd(idClicked);
     }
    if(fullCells ==9)
    {  
     setTimeout(function(){window.location.reload();},100);
    }
    console.log(fullCells);
}
   
} //end of function --> check


function checkTd(idTd)
{
if(idTd=="td0")
{
td0(idTd , lastLetter);
}
else if (idTd=="td1")
{
 td1(lastLetter);  
}
else if(idTd=="td2")
{
td2(lastLetter);
}
else if (idTd=="td3")
{
td3(lastLetter);
}
else if (idTd=="td4")
{
td4(lastLetter);
}
else if (idTd=="td5")
{
td5(lastLetter);
}
else if (idTd=="td6")
{
td6(lastLetter);
}
else if (idTd=="td7")
{
td7(lastLetter);
}
else if (idTd=="td8")
{
td8(lastLetter);
}


}//end of function -->checkTd

function td0(id , letter)
{
     /*
    the default winner index for td0 is 
    [td0,td1,td2],[td0,td3,td6],[td0,td4,td8]
    */
    
     //id =last ID the user clicked in the table of game
    
    //letter = last letter --> X or O
    var td0 = document.querySelector("#td0");
    var td1 = document.querySelector('#td1');
    var td2 = document.querySelector('#td2');
    var td3 = document.querySelector('#td3');
    var td6 = document.querySelector('#td6');
    var td4 = document.querySelector('#td4');
    var td8 = document.querySelector('#td8');
    
    if(td1.innerHTML == letter && td2.innerHTML == letter)
    {
     td0.style.backgroundColor="cyan";       
     td1.style.backgroundColor="cyan";       
     td2.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200);  
    }
    else if(td3.innerHTML == letter && td6.innerHTML==letter)
    {
     td0.style.backgroundColor="cyan";       
     td3.style.backgroundColor="cyan";       
     td6.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200);     
    }
    else if (td4.innerHTML==letter && td8.innerHTML==letter)
    {
     td0.style.backgroundColor="cyan";       
     td4.style.backgroundColor="cyan";       
     td8.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200);     
    }

}

//-------------------

function td1(letter)
{
     /*
    the default winner index for td0 is 
    [td1,td0,td2],[td1,td4,td7]
    */
    
     //id =last ID the user clicked in the table of game
    
    //letter = last letter --> X or O
    var td0 = document.querySelector("#td0");
    var td1 = document.querySelector('#td1');
    var td2 = document.querySelector('#td2');
    var td4 = document.querySelector('#td4');
    var td7 = document.querySelector('#td7');

    if(td0.innerHTML == letter && td2.innerHTML == letter)
    {
     td0.style.backgroundColor="cyan";       
     td1.style.backgroundColor="cyan";       
     td2.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200); 
    } 
    else if(td7.innerHTML==letter && td4.innerHTML==letter)
    {
     td1.style.backgroundColor="cyan";       
     td7.style.backgroundColor="cyan";       
     td4.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200); 
    }
}

//-------------------

function td2(letter)
{
      /*
    the default winner index for td0 is 
    [td1,td0,td2],[td2,td5,td8],[td2,td4,td6]
    */
    
     //id =last ID the user clicked in the table of game
    
    //letter = last letter --> X or O
    var td0 = document.querySelector("#td0");
    var td1 = document.querySelector('#td1');
    var td2 = document.querySelector('#td2');
    var td4 = document.querySelector('#td4');
    var td6 = document.querySelector('#td6');
    var td5 = document.querySelector('#td5');
    var td8 = document.querySelector('#td8');

    if(td0.innerHTML == letter && td1.innerHTML == letter)
    {
     td0.style.backgroundColor="cyan";       
     td1.style.backgroundColor="cyan";       
     td2.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200); 
    } 
    else if(td6.innerHTML==letter && td4.innerHTML==letter)
    {
     td2.style.backgroundColor="cyan";       
     td6.style.backgroundColor="cyan";       
     td4.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200); 
    }
    else if(td5.innerHTML==letter && td8.innerHTML==letter)
    {
     td2.style.backgroundColor="cyan";       
     td5.style.backgroundColor="cyan";       
     td8.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200);        
    }
}   


//--------------------

function td3(letter)
{
      /*
    the default winner index for td0 is 
    [td3,td0,td6],[td3,td4,td5]
    */
    
     //id =last ID the user clicked in the table of game
    
    //letter = last letter --> X or O
    var td0 = document.querySelector("#td0");
    var td3 = document.querySelector('#td3');
    var td4 = document.querySelector('#td4');
    var td6 = document.querySelector('#td6');
    var td5 = document.querySelector('#td5');
    
    if(td0.innerHTML == letter && td6.innerHTML == letter)
    {
     td0.style.backgroundColor="cyan";       
     td3.style.backgroundColor="cyan";       
     td6.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200); 
    } 
    else if(td4.innerHTML==letter && td5.innerHTML==letter)
    {
     td3.style.backgroundColor="cyan";       
     td5.style.backgroundColor="cyan";       
     td4.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200); 
    }
}

//--------------------

function td4(letter)
{
 /*
    the default winner index for td0 is 
    [td4,td1,td7],[td4,td3,td5],[td4,td2,td6],[td4,td0,td8]
    */
    
     //id =last ID the user clicked in the table of game
    
    //letter = last letter --> X or O
    var td0 = document.querySelector("#td0");
    var td1 = document.querySelector('#td1');
    var td2 = document.querySelector('#td2');
    var td3 = document.querySelector('#td3');
    var td4 = document.querySelector('#td4');
    var td6 = document.querySelector('#td6');
    var td5 = document.querySelector('#td5');
    var td7 = document.querySelector('#td7');
    var td8 = document.querySelector('#td8');

    if(td0.innerHTML == letter && td8.innerHTML == letter)
    {
     td4.style.backgroundColor="cyan";       
     td0.style.backgroundColor="cyan";       
     td8.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200); 
    } 
    else if(td6.innerHTML==letter && td2.innerHTML==letter)
    {
     td4.style.backgroundColor="cyan";       
     td6.style.backgroundColor="cyan";       
     td2.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200); 
    }
    else if(td5.innerHTML==letter && td3.innerHTML==letter)
    {
     td4.style.backgroundColor="cyan";       
     td5.style.backgroundColor="cyan";       
     td3.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200);        
    }
    else if (td1.innerHTML==letter && td7.innerHTML==letter)
    {
     td4.style.backgroundColor="cyan";       
     td1.style.backgroundColor="cyan";       
     td7.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200);          
    }
}

//--------------------

function td5(letter)
{
  /*
    the default winner index for td0 is 
    [td5,td2,td8],[td5,td4,td3]
    */
    
     //id =last ID the user clicked in the table of game
    
    //letter = last letter --> X or O
    var td8 = document.querySelector("#td8");
    var td3 = document.querySelector('#td3');
    var td4 = document.querySelector('#td4');
    var td5 = document.querySelector('#td5');
    var td2 = document.querySelector('#td2');
    
    if(td2.innerHTML == letter && td8.innerHTML == letter)
    {
     td5.style.backgroundColor="cyan";       
     td2.style.backgroundColor="cyan";       
     td8.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200); 
    } 
    else if(td4.innerHTML==letter && td3.innerHTML==letter)
    {
     td5.style.backgroundColor="cyan";       
     td4.style.backgroundColor="cyan";       
     td3.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200); 
    }
}

//--------------------

function td6(letter)
{
      /*
    the default winner index for td0 is 
    [td6,td0,td3],[td6,td7,td8],[td6,td4,td2]
    */
    
     //id =last ID the user clicked in the table of game
    
    //letter = last letter --> X or O
    var td0 = document.querySelector("#td0");
    var td2 = document.querySelector('#td2');
    var td3 = document.querySelector('#td3');
    var td4 = document.querySelector('#td4');
    var td6 = document.querySelector('#td6');
    var td7 = document.querySelector('#td7');
    var td8 = document.querySelector('#td8');

    if(td0.innerHTML == letter && td3.innerHTML == letter)
    {
     td6.style.backgroundColor="cyan";       
     td0.style.backgroundColor="cyan";       
     td3.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200); 
    } 
    else if(td7.innerHTML==letter && td8.innerHTML==letter)
    {
     td6.style.backgroundColor="cyan";       
     td7.style.backgroundColor="cyan";       
     td8.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200); 
    }
    else if(td4.innerHTML==letter && td2.innerHTML==letter)
    {
     td6.style.backgroundColor="cyan";       
     td4.style.backgroundColor="cyan";       
     td2.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200);        
    }
}

//--------------------

function td7(letter)
{
/*
    the default winner index for td0 is 
    [td7,td6,td8],[td7,td4,td1]
    */
    
     //id =last ID the user clicked in the table of game
    
    //letter = last letter --> X or O
    var td8 = document.querySelector("#td8");
    var td1 = document.querySelector('#td1');
    var td6 = document.querySelector('#td6');
    var td4 = document.querySelector('#td4');
    var td7 = document.querySelector('#td7');

    if(td6.innerHTML == letter && td8.innerHTML == letter)
    {
     td7.style.backgroundColor="cyan";       
     td6.style.backgroundColor="cyan";       
     td8.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200); 
    } 
    else if(td1.innerHTML==letter && td4.innerHTML==letter)
    {
     td7.style.backgroundColor="cyan";       
     td1.style.backgroundColor="cyan";       
     td4.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200); 
    }
}

//----------------------

function td8(letter)
{
/*
    the default winner index for td0 is 
    [td8,td7,td6],[td8,td5,td2],[td8,td4,td0]
    */
    
     //id =last ID the user clicked in the table of game
    
    //letter = last letter --> X or O
    var td0 = document.querySelector("#td0");
    var td7 = document.querySelector('#td7');
    var td6 = document.querySelector('#td6');
    var td2 = document.querySelector('#td2');
    var td5 = document.querySelector('#td5');
    var td4 = document.querySelector('#td4');
    var td8 = document.querySelector('#td8');
    
    if(td7.innerHTML == letter && td6.innerHTML == letter)
    {
     td8.style.backgroundColor="cyan";       
     td7.style.backgroundColor="cyan";       
     td6.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200);  
    }
    else if(td5.innerHTML == letter && td2.innerHTML==letter)
    {
     td8.style.backgroundColor="cyan";       
     td5.style.backgroundColor="cyan";       
     td2.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200);     
    }
    else if (td4.innerHTML==letter && td0.innerHTML==letter)
    {
     td8.style.backgroundColor="cyan";       
     td4.style.backgroundColor="cyan";       
     td0.style.backgroundColor="cyan";       
     setTimeout(function(){window.location.reload();},200);     
    }
}

