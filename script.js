// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};
function isLetter(str){
	if(str.length === 1 && str.match(/[A-Z]/i)) return true;
	return false;
}
function rot13(encodedString) {
  var decodedString = "";

  for (var i = 0; i < encodedString.length; i++) {
    var charCode = encodedString.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // If it's an uppercase letter (A-Z)
      var decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
      decodedString += String.fromCharCode(decodedCharCode);
    } else {
      // Non-alphabetic characters
      decodedString += encodedString.charAt(i);
    }
  }

  return decodedString;
}


// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
