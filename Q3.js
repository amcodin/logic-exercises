//Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function formatConverter(input) {
  
// RGB to HEX:
    const rgbToHex = (r, g, b) => {
      let rgb = b | (g << 8) | (r << 16);
            return '#' + (0x1000000 + rgb).toString(16).slice(1)
    }


//HEX to RGB:
      const hexToRgb = hex => 
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
      

//CONDITION:
      if (input[0] === '#') {
          return hexToRgb(input);
      } else {
          return rgbToHex(input);
      }

}

// formatConverter("#FFFFFF"); //[ 255, 255, 255 ]
// formatConverter(255, 51, 255); //#ff0000