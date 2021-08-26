const talkingCalendar = function (date) {
  let year = date.slice(0,4);
  let month = parseInt(date.slice(5,7));
  let day = parseInt(date.slice(8));
  switch (month) {
    case 1 :
      month = 'January';
      break;
    case 2 :
      month = 'February';
      break;
    case 3 :
      month = 'March';
      break;
    case 4:
      month = 'April';
      break;  
    case 5:
      month = 'May';
      break;  
    case 6:
      month = 'June';
      break; 
    case 7:
      month = 'July';
      break; 
    case 8:
      month = 'August';
      break;
    case 9:
      month = 'September';
      break;
    case 10:
      month = 'October';
      break;
    case 11:
      month =  'November';
      break;
    case 12:
      month = 'December';
      break;
    default: 
    month = 'invalid month';
    break;  
  } switch (day){
    case 1:
    case 21:
    case 31:
      day = day + 'st';
      break;
    case 2:
    case 22:
      day = day +'nd';
      break;
    case 3:
    case 23:
      day = day + 'rd';
      break;
    default:
      day = day +'th';
      break;
  } return month + " "+ day +", "+ year
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

