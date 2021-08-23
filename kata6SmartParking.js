/*const whereCanIPark = function (spots, vehicle) {
if (vehicle === 'regular') {
    for (let r = 0; r < spots.length; r++) { // r for rows
      for (let c = 0; c < spots[r].length; c++){ // c for column
        if (spots[r][c] === 'R') {
          return [c ,r];
        }
      }
    }

  } else if (vehicle === 'small') { 
    for (let r=0; r < spots.length; r++) {
      for (let c=0; c< spots[r].length; c++){
        if (spots[r][c]=== 'S' || spots[r][c] === 'R'){
          return [c, r];
        } 
      }
    }
  } else if (vehicle === 'motorcycle') {
    for (r = 0; r < spots.length; r++) {
      for (let c = 0; c < spots[r].length; c++) {
        if (spots[r][c]=== 'S' || spots[r][c] === 'R' || spots[r][c]==='M') {
          return [c,r];
        }
      }
    }
  } 
} */

const whereCanIPark = function (spots, vehicle) {
  for (r = 0; r < spots.length; r++) { //r for rows
    for (c =0; c < spots [r].length; c++) { //c for cloumns
      if (vehicle === 'regular' && spots[r][c] === 'R') {
        return [c, r];
      } else if (vehicle === 'small' && (spots[r][c] === 'S' || spots[r][c] === 'R')) {
        return [c, r];
      } else if (vehicle === 'motorcycle' && (spots[r][c] === 'S' || spots[r][c] === 'R' || spots === 'M')) {
        return [c, r];
      }
    }
  } return false;
}

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'S']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))

