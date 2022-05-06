/**
 * Convert the given number num into a roman numeral. This function
 * supports converting numbers in between 1 and 3999 into roman numerals.
 * @param {*Number} num A number to be converted into a roman number.
 * @returns The roman numeral string of the given num.
 */
function convertToRoman(num) {
  let commonNums = [
    {'I': '1'}, {'II': '2'}, {'III': '3'}, {'IV': '4'}, {'V': '5'},
    {'VI': '6'}, {'VII': '7'}, {'VIII': '8'}, {'IX': '9'}, {'X': '10'},
    {'XX': '20'}, {'XXX': '30'}, {'XL': '40'}, {'L': '50'}, {'LX': '60'},
    {'LXX': '70'}, {'LXXX': '80'}, {'XC': '90'}, {'C': '100'},
    {'CC': '200'}, {'CCC': '300'}, {'CD': '400'}, {'D': '500'},
    {'DC': '600'}, {'DCC': '700'}, {'DCCC': '800'}, {'CM': '900'},
    {'M': '1000'}, {'MM': '2000'}, {'MMM': '3000'}
  ];

  // Convert num to a string
  let strNum = num.toString();

  // If strNum is found in commonNums, return its key
  let romanNum = commonNums.filter(prop =>
    strNum == Object.values(prop)
  );
  if (romanNum.length > 0) {
    return Object.keys(romanNum[0])[0];
  }

  // Reset strNum as a string version of num
  strNum = num.toString();

  // Create an array version of strNum
  let arrNum = strNum.split("");

  // If num > 10, pad the numbers greater than 10. Increase by
  // one zero pad with each new iteration.
  if (num > 10) {
    let zero = "0";

    for (let n = arrNum.length - 2; n >= 0; n--) {
      if (n != arrNum.length - 1) {
        arrNum[n] = arrNum[n] + zero;
        zero += "0";
      }
    }  
  }

  let value = "";
  let index = 0;

  // Replace arrNum elements with their corresponding roman numerals
  commonNums.filter(n => {
    value = Object.values(n);
    index = arrNum.indexOf(value[0]);

    if(arrNum[index]){ 
      arrNum[index] = Object.keys(n)[0];
    }
  });

  // Join array of roman numerals and remove pure 0 elements
  // that originally 0's found in between the original num.
  // E.g., 501, 1004, 1006, 2014.
  arrNum = arrNum.join("").replace(/0/g, "");

  return arrNum;
}

// Tests
// should return the string II
console.log(convertToRoman(2));
console.assert(convertToRoman(2), "should return the string II");

// should return the string III
console.log(convertToRoman(3));
console.assert(convertToRoman(3), "should return the string III");

// should return the string IV
console.log(convertToRoman(4));
console.assert(convertToRoman(4), "should return the string IV");

// should return the string V
console.log(convertToRoman(5));
console.assert(convertToRoman(5), "should return the string V");

// should return the string IX
console.log(convertToRoman(9));
console.assert(convertToRoman(9), "should return the string IX");

// should return the string XII
console.log(convertToRoman(12));
console.assert(convertToRoman(12), "should return the string XII");

// should return the string XVI
console.log(convertToRoman(16));
console.assert(convertToRoman(16), "should return the string XVI");

// should return the string XXIX
console.log(convertToRoman(29));
console.assert(convertToRoman(29), "should return the string XXIX");

// should return the string XLIV
console.log(convertToRoman(44));
console.assert(convertToRoman(44), "should return the string XLIV");

// should return the string XLV
console.log(convertToRoman(45));
console.assert(convertToRoman(45), "should return the string XLV");

// should return the string LXVIII
console.log(convertToRoman(68));
console.assert(convertToRoman(68), "should return the string LXVIII");

// should return the string LXXXIII
console.log(convertToRoman(83));
console.assert(convertToRoman(83), "should return the string LXXXIII");

// should return the string XCVII
console.log(convertToRoman(97));
console.assert(convertToRoman(97), "should return the string XCVII");

// should return the string XCIX
console.log(convertToRoman(99));
console.assert(convertToRoman(99), "should return the string XCIX");

// should return the string CD
console.log(convertToRoman(400));
console.assert(convertToRoman(400), "should return the string CD");

// should return the string D
console.log(convertToRoman(500));
console.assert(convertToRoman(500), "should return the string D");

// should return the string DI
console.log(convertToRoman(501));
console.assert(convertToRoman(501), "should return the string DI");

// should return the string DCXLIX
console.log(convertToRoman(649));
console.assert(convertToRoman(649), "should return the string DCXLIX");

// should return the string DCCXCVIII
console.log(convertToRoman(798));
console.assert(convertToRoman(798), "should return the string DCCXCVIII");

// should return the string DCCCXCI
console.log(convertToRoman(891));
console.assert(convertToRoman(891), "should return the string DCCCXCI");

// should return the string M
console.log(convertToRoman(1000));
console.assert(convertToRoman(1000), "should return the string M");

// should return the string MIV
console.log(convertToRoman(1004));
console.assert(convertToRoman(1004), "should return the string MIV");

// should return the string MVI
console.log(convertToRoman(1006));
console.assert(convertToRoman(1006), "should return the string MVI");

// should return the string MXXIII
console.log(convertToRoman(1023));
console.assert(convertToRoman(1023), "should return the string MXXIII");

// should return the string MMXIV
console.log(convertToRoman(2014));
console.assert(convertToRoman(2014), "should return the string MMXIV");

// should return the string MMMCMXCIX
console.log(convertToRoman(3999));
console.assert(convertToRoman(3999), "should return the string MMMCMXCIX");

