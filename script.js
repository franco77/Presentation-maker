let slides = ['<div id=\'main\'><div class=\'center\' id=\'slide\'><p class=\'heading\'>Example</p><p class=\'content\'>This is example slide it\'s not included in your downloaded Presentation</p></div></div>'];
let slideNumber = 0;

let fontFamilies = {"monospace":[], "sans-serif":["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console",    "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"], "serif": ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"]}

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
  let bgColor = document.getElementById('bg-color').value;
  let hColor = document.getElementById('h-color').value;
  let heading = document.getElementById('new-heading').value;
  let content = document.getElementById('new-content').value;
  document.getElementById('id01').style.display = 'none';
  let slide = '<style media=\'screen\'>body{background-color:'+bgColor+'}.heading{color:'+hColor+'}.content{}</style><div id=\'main\'><div class=\'center\' id=\'slide\'><p class=\'heading\'>' + heading + '</p><p class=\'content\'>' + content + '</p></div></div>';
  document.getElementById('slide-form').reset();
  slides.push(slide);
  slideNumber = slides.length - 1;
  displaySlide();
};

let nextSlide = function() {

  if (slideNumber + 1 < slides.length) {
    slideNumber++;
    displaySlide();
  }else {
    alert('No more slides');
  }
};

let download = function() {
  let slidesString = slides.join('qwertyuiopasdfghjkl;');
  let js = 'let slides="' + slidesString + '";\nslides=slides.split("qwertyuiopasdfghjkl;");\nlet slideNumber=0;\n slides.shift();';
  let css = '#main{  margin: auto;  width: 50%;   /*border: 3px solid green;*/  padding: 10px;}/*text formatting*/.center {    margin: auto;    /*width: 50%;*/    padding: 10px;}.heading{  font-size: 7em;  font-family: \'roboto\'sans-serif;  color:white;}.content{  font-size: 2em;  font-family: sans-serif;  color:white;}/*background designing*/body{  background-color:black;} ';
  console.log(js);
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

  var zip = new JSZip();
  zip.file('index.html', html);
  zip.generateAsync({type: 'blob'})
  .then(function(content) {
    saveAs(content, 'presentation.zip');
  });
};

let removeSlide = function() {
  slides.splice(slideNumber, 1);
  slideNumber = slides.length - 1;
  displaySlide();
};

let prevSlide = function() {
  if (slideNumber - 1 >= 0) {
    slideNumber--;
    displaySlide();
  }else {
    alert('No more slides');
  }
};

let fontSelector = function (fontFor) {
  let families = Object.keys(fontFamilies);
  let htmlStr ="<select id='fontSelector' ";
  htmlStr +="onchange='updateFont(\""+fontFor+"\",this.value)'; alert()'>";
  for(let index=0;index<families.length;index++){
   let family = families[index];
   htmlStr +='<option value="'+family+'" style="font-family:'+family+';">'+family+'</option>';
   let faces=fontFamilies[family];
   for(let index=0;index<faces.length;index++){
    let face = faces[index];
    htmlStr +='<option value="'+face+'" style=font-family:'+face+';>'+face+'</option>';
    }

   }
   return htmlStr+"</select>";
}

let updateFont = function (fontFor,value) {
  document.getElementById(fontFor).style["font-family"]=value;
}

let fontSizeSelector = function (fontFor) {
  let htmlStr ="<select id='fontSizeSelector' ";
  htmlStr +="onchange='updateFontSize(\""+fontFor+"\",this.value)'; alert()'>";
   let faces=[10,18,20,32,40,50,60,70,80];
   for(let index=0;index<faces.length;index++){
    let face = faces[index];
    htmlStr +='<option value="'+face+'" style=font-size:'+face+'px;>'+face+'</option>';
    }
   return htmlStr;
}

let updateFontSize = function (fontFor,value) {
  document.getElementById(fontFor).style["font-size"] =value+"px";
}
