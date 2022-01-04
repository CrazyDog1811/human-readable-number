module.exports = function toReadable (num) {
    let strNum = num.toString(10);
    let readableString = '';
  
    if(strNum.length === 1) {
      readableString = units(strNum);
    } else if(strNum.length === 2) {
      readableString = dozens(strNum);
    } else if(strNum.length === 3) {
      readableString = `${units(strNum[0])} hundred ${dozens(strNum.slice(1))}`
    }
  
    return readableString.trim() || 'zero';
}

function units(char) {
    let stringUnit = '';
  
    switch (char) {
      case '1':
        stringUnit = 'one';
        break;
      case '2':
        stringUnit = 'two';
        break;
      case '3':
        stringUnit = 'three';
        break;
      case '4':
        stringUnit = 'four';
        break;
      case '5':
        stringUnit = 'five';
        break;
      case '6':
        stringUnit = 'six';
        break;
      case '7':
        stringUnit = 'seven';
        break;
      case '8':
        stringUnit = 'eight';
        break;
      case '9':
        stringUnit = 'nine';
        break;
      default:
        break;
    }
    return stringUnit;
  }
  
  function dozens(str) {
    let stringUnit = '';
  
    if(str[0] === '1') {
  
      switch(str[1]) {
        case '0':
          stringUnit = 'ten';
          break;
        case '1':
          stringUnit = 'eleven';
          break;
        case '2':
          stringUnit = 'twelve';
          break;
        case '3':
          stringUnit = 'thirteen';
          break;
        case '4':
          stringUnit = 'fourteen';
          break;
        case '5':
          stringUnit = 'fifteen';
          break;
        case '6':
          stringUnit = 'sixteen';
          break;
        case '7':
          stringUnit = 'seventeen';
          break;
        case '8':
          stringUnit = 'eighteen';
          break;
        case '9':
          stringUnit = 'nineteen';
          break;
        default:
          break;
      } 
    } else {
        switch (str[0]) {
          case '0':
            stringUnit =  units(str[1]);
            break;
          case '2':
            stringUnit = 'twenty' + ' ' + units(str[1]);
            break;
          case '3':
            stringUnit = 'thirty' + ' ' + units(str[1]);
            break;
          case '4':
            stringUnit = 'forty' + ' ' + units(str[1]);
            break;
          case '5':
            stringUnit = 'fifty' + ' ' + units(str[1]);
            break;
          case '6':
            stringUnit = 'sixty' + ' ' + units(str[1]);
            break;
          case '7':
            stringUnit = 'seventy' + ' ' + units(str[1]);
            break;
          case '8':
            stringUnit = 'eighty' + ' ' + units(str[1]);
            break;
          case '9':
            stringUnit = 'ninety' + ' ' + units(str[1]);
            break;
          default:
            break;
        }
      }
      return stringUnit;
    }