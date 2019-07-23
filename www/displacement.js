const image = document.querySelector("#sphereMap");
const image2 = document.querySelector("#sphereMap2");
// const feImage = document.querySelector("#feImage");

const xlink = "http://www.w3.org/1999/xlink";

const sphereMap = "data:image/png;base64,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";

// initialize corona with defaults
updateCorona();

function updateCorona() {
    var coronaSizeSlider = document.getElementById("coronaSizeSlider");
    var coronaSizeSpan = document.getElementById("coronaSizeSpan");
    var coronaStrengthSlider = document.getElementById("coronaStrengthSlider");
    var coronaStrengthSpan = document.getElementById("coronaStrengthSpan");
    
    var coronaSize = coronaSizeSlider.value;
    coronaSizeSpan.innerHTML = coronaSize;
    
    var coronaStrength = coronaStrengthSlider.value;
    coronaStrengthSpan.innerHTML = coronaStrength;
    
    console.log("coronaSize:" + coronaSize);
    console.log("coronaStrength:" + coronaStrength);
    
    var displacementMapElement = document.getElementById("displacementMap");
    displacementMapElement.setAttribute("scale", coronaStrength);

    var imageData = buildSphereMap(coronaSize);

    var dataUrl = imageDateToUrl(imageData);
    image.setAttributeNS(xlink, "href", dataUrl);
    image2.setAttributeNS(xlink, "href", dataUrl);
    
}

function onChangeImage() {
    var radioWords = document.getElementById("radioWords");
    var goodImage = document.getElementById("goodImage");
    var badImage = document.getElementById("badImage");
    var fill = "url(#grid)";
    if (radioWords.checked) {
        fill = "url(#wordsPattern)"
    }
    goodImage.setAttribute("fill", fill);
    badImage.setAttribute("fill", fill);
}

function onCoronaSizeChange() {
    
    updateCorona();
}

function onCoronaStrengthChange() {
    updateCorona();
}

function buildSphereMap(coronaSize) {
  
  var innerSize = coronaSize;
  var halfSize = innerSize / 2;
  var GREY = 186; // is the magic number!  this causes no displacement.  Any higher or lower will shift up or down (or left or right)
  var outerSize = 100; //innerSize + (border * 2);
  var border = (outerSize - innerSize)/2;
//   console.log("b:" + border);
//   console.log("o:" + outerSize);
//   console.log("i:" + innerSize);
//   console.log("h:" + halfSize);
  var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    
  var imgData = ctx.createImageData(outerSize, outerSize);

  var i;
  var dataLength = imgData.data.length; 

  for (x = 0; x < outerSize; x++) {
    for (y = 0; y < outerSize; y++) {
      var offset = ((x) + ((y) * outerSize)) * 4;
      imgData.data[offset+0] = GREY;
      imgData.data[offset+1] = GREY;
      imgData.data[offset+2] = 0;
      imgData.data[offset+3] = 256;
    }
  }
  
  var boost = 1;
  
  for (x = 0; x < innerSize; x++) {
    for (y = 0; y < innerSize; y++) {
       var offset = ((x + border) + ((y + border) * outerSize)) * 4;
       var dx = x - halfSize;
       var dy = y - halfSize;
       var hypotenuse = Math.sqrt(dx * dx + dy * dy);
       var angle = Math.asin(dx/hypotenuse);
       var hypotenuse = (hypotenuse > halfSize)? halfSize: hypotenuse;
       var scale = (halfSize - hypotenuse)/halfSize; 
       var red = GREY + (scale * (dx/innerSize)*GREY)* boost;  
       var green = GREY + (scale * (dy/innerSize)*GREY)* boost;   
      
    //    console.log("(x,y) (" + x + "," + y +")= (r,g) (" + red +"," +green + ")");
      
       imgData.data[offset+0] =  red;
       imgData.data[offset+1] = green;
      
            	
    }
  }
  return imgData;
}

function imageDateToUrl(imagedata) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = imagedata.width;
    canvas.height = imagedata.height;
    ctx.putImageData(imagedata, 0, 0);
    return canvas.toDataURL('image/png');
}

function printData(imagedata) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = imagedata.width;
    canvas.height = imagedata.height;
    ctx.putImageData(imagedata, 0, 0);
    return canvas.toDataURL('image/png');
}
