let slides = ['<div id=\'main\'><div class=\'center\' id=\'slide\'><p class=\'heading\'>Example</p><p class=\'content\'>This is example slide it\'s not included in your downloaded Presentation</p></div></div>'];
let slideNumber = 0;

let displaySlide = function() {
  document.getElementById('slides').innerHTML = slides[slideNumber];
};

let createSlide = function() {
  var modal = document.getElementById('id01');
  modal.style.display = 'block';
  window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };

};

let saveSlide = function() {
  let heading = document.getElementById('new-heading').value;
  let content = document.getElementById('new-content').value;
  document.getElementById('slide-form').reset();
  document.getElementById('id01').style.display = 'none';
  let slide = '<div id=\'main\'><div class=\'center\' id=\'slide\'><p class=\'heading\'>' + heading + '</p><p class=\'content\'>' + content + '</p></div></div>';
  slides.push(slide);
  slideNumber = slides.length - 1;
  displaySlide();
};

let nextSlide = function() {
  console.log(slides.length, slideNumber);
  if (slideNumber + 1 < slides.length) {
    slideNumber++;
    displaySlide();
  }else {
    alert('No more slides');
  }
};

let download = function() {
  let slidesString = slides.join('qwertyuiopasdfghjkl;');
  let js = 'let slides="' + slidesString + '";\nslides=slides.split("qwertyuiopasdfghjkl;");\nlet slideNumber=0;\nslides.shift();';
  let css = '#main{  margin: auto;  width: 50%;   /*border: 3px solid green;*/  padding: 10px;}/*text formatting*/.center {    margin: auto;    /*width: 50%;*/    padding: 10px;}.heading{  font-size: 7em;  font-family: \'roboto\'sans-serif;  color:white;}.content{  font-size: 2em;  font-family: sans-serif;  color:white;}/*background designing*/body{  background-color:black;} ';
  let html = '<!DOCTYPE html>\
  \n<html>\
  \n<head>\
  \n<meta charset=\'utf-8\'>\
    <style media=\'screen\'> ' + css + '</style>\n\
    </head>\n\
    <body>\n\
      <div id=\'slides\' class=\'container\'>\n\
   </div>       \n\
     </body>\n\
    <script>' + js + '\ndocument.onkeypress= function (event) {\n\
     switch (event.keyCode) {\n\
         case 110:\n\
     nextSlide();\n\
    break;\n\
     case 98:\n\
     prevSlide();\n\
      break;\n\
    default: break;\n\
  }    }\n' + 'let nextSlide = function () {\n\
    console.log(slides.length,slideNumber);\n\
    if(slideNumber+1<slides.length){\n\
      slideNumber++;\n\
      displaySlide();\n\
    }else{\n\
      alert(\'No more slides\');\n\
    }\n\
  }\n\
  ' + '\nlet prevSlide = function () {\n\
    console.log(slides.length,slideNumber);\n\
    if(slideNumber-1>=0){\n\
      slideNumber--;\n\
      displaySlide();\n\
    }else{\n\
      alert(\'No more slides\');\n\
    }\n\
  }' + '\nlet displaySlide =function(){\n\
    document.getElementById(\'slides\').innerHTML=slides[slideNumber];\n\
  }\n\
 ' + 'displaySlide()</script> </html>';
  //     var text = html;
  //     var name = prompt('Enter the file name');
  //     if(name != null && name !=''){
  //     name = name + ".html";
  //     }else{
  //     alert("please enter the file name to save file");
  //     return;
  //   }
  // var a = document.getElementById("a");
  // var file = new Blob([text], {type: "text/html"});
  // a.href = URL.createObjectURL(file);
  // console.log(a.href);
  // a.download = name;
  // document.getElementById('a').click();
  var zip = new JSZip();
  zip.file('index.html', html);
  zip.generateAsync({type: 'blob'})
  .then(function(content) {
    saveAs(content, 'example.zip');
  });
};

let removeSlide = function() {
  slides.splice(slideNumber, 1);
  slideNumber = slides.length - 1;
  displaySlide();
};
let prevSlide = function() {
  console.log(slides.length, slideNumber);
  if (slideNumber - 1 >= 0) {
    slideNumber--;
    displaySlide();
  }else {
    alert('No more slides');
  }
};
