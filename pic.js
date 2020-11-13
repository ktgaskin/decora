function alert1()
{
    alert(1);
}
function showPopup(textContent, leftPosition, topPosition) {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    popup.textContent = textContent;
    popup.style.left = leftPosition;
    popup.style.top = topPosition;
}
//background video 
function playVid() { 
    var vid = document.getElementById("backgroundvid"); 
    vid.play(); 
  } 
  
  function pauseVid() { 
    var vid = document.getElementById("backgroundvid"); 
    vid.pause(); 
  } 
function showHideback() {
    document.getElementById("backgroundvid").style.visibility="visible";
}
function showHide2() {
    document.getElementById("straw").style.visibility="hidden";
}
function showHide3() {
    document.getElementById("straw").style.visibility="visible";
}

//tag video 
function playVid1() { 
    var vid = document.getElementById("tagvid"); 
    vid.play(); 
  } 
  
  function pauseVid1() { 
    var vid = document.getElementById("tagvid"); 
    vid.pause(); 
  } 
function showHidetag() {
    document.getElementById("tagvid").style.visibility="visible";
}
function showHideleaf() {
    document.getElementById("backgroundvid").style.visibility="hidden";
}
