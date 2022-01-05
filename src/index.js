module.exports = function toReadable (num) {
  const DIGIT = 'zero,one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen';
  const DOZEN = 'zero,zero,twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety';

  const digitArr = DIGIT.split(',');
  const dozenArr = DOZEN.split(',');

  if(num < 20) {
    return digitArr[num];
  } else if(num < 100) {
    return num % 10 ? `${dozenArr[Math.floor(num / 10)]} ${digitArr[num % 10]}` : `${dozenArr[Math.floor(num / 10)]}`;
  } else {
    return `${digitArr[Math.floor(num / 100)]} hundred${ num % 100 ? ' ' + toReadable(num % 100) : ''}`
    
  }
}