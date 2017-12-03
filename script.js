let slides=["<div id='main'><p class='heading'>Hello Veera,</p><p class='content'>This is example slide this is not include in downloaded Presentation</p></div>"]
let slideNumber=0;

let displaySlide =function(){
  document.getElementById('slides').innerHTML=slides[slideNumber];
}

let createSlide = function () {
  var modal = document.getElementById('id01');
  modal.style.display = "block";
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

}

let saveSlide = function () {
  let heading = document.getElementById('new-heading').value;
  let content = document.getElementById('new-content').value;
  document.getElementById('slide-form').reset();
  document.getElementById('id01').style.display='none'
  let slide="<div id='main'><p class='heading'>"+heading+"</p><p class='content'>"+content+"</p></div>"
  slides.push(slide);
  slideNumber=slides.length-1;
  displaySlide();
}

let nextSlide = function () {
  console.log(slides.length,slideNumber);
  if(slideNumber+1<slides.length){
    slideNumber++;
    displaySlide();
  }else{
    alert("No more slides");
  }
}


let prevSlide = function () {
  console.log(slides.length,slideNumber);
  if(slideNumber-1>=0){
    slideNumber--;
    displaySlide();
  }else{
    alert("No more slides");
  }
}
