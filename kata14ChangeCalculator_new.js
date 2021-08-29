const calculateChange = (total, cash) => {
  let change = cash - total;
  let changeDetails = {
    twentyDollars: 0,
    tenDollars: 0,
    fiveDollars: 0,
    twoDollars: 0,
    oneDollar: 0,
    Quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  };
  while (change > 0) {
    if (change >= 2000) {
      changeDetails.twentyDollars += 1;
      change -= 2000;
    } else if (change >= 1000) {
      changeDetails.tenDollars += 1;
      change -= 1000;
    } else if (change >= 500) {
      changeDetails.fiveDollars += 1;
      change -= 500;
    } else if (change >= 200) {
      changeDetails.twoDollars += 1;
      change -= 200;
    } else if (change >= 100) {
      changeDetails.oneDollar += 1;
      change -= 100;
    } else if (change >= 25) {
      changeDetails.Quarter += 1;
      change -= 25;
    } else if (change > 10) {
      changeDetails.dime += 1;
      change -= 10;
    } else if (change >= 5) {
      changeDetails.nickel += 1;
      change -= 5;
    } else if (change >= 1) {
      changeDetails.penny += 1;
      change -= 1;
    }
  }
  const deno = Object.keys(changeDetails); // array of keys of the object changeDetails
  deno.forEach((i) => {
    if (changeDetails[i] <= 0) {
      delete changeDetails[i];
    }
  });
  return changeDetails;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
