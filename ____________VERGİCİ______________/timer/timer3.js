
var sure = 9; // kaç saniye bekletilecek
var saniye=document.getElementById("kalan").innerHTML = sure+ 1;

function showMe(blockId)  {    
    document.getElementById(blockId).style.display = "block";  }  
function hideMe(blockId)  {    
    document.getElementById(blockId).style.display = "none";  }
function goster() {
    showMe('resim');
    hideMe('reklam');  }

function final(){
  if (saniye!=1){
    saniye-=1;
    document.getElementById("kalan").innerHTML  = saniye;   }

  else{
    goster();
    return;   }
  setTimeout("final()",1000);
}
final();