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
  return changeDetails;
};

<<<<<<< Updated upstream
const ans = calculateChange(1787, 2000);
const dens = Object.keys(ans);
dens.forEach((d) => {
  if (ans[d] <= 0) {
    delete ans[d];
  }
});

console.log(ans);
=======
window.onload = () => {
  const button = document.getElementById("calculate");
  const dateToday = document.getElementById("today");
  dateToday.innerHTML = new Date().toString()
  console.log(button);
  button.onclick = () => {
    n = 0;
    console.log("Calculating");
    const total = document.getElementById("total").value;
    const cash = document.getElementById("cash").value;
    const answer = document.getElementById("answer");
    console.log(total, cash);
    answer.innerHTML = "";
    const change = cash - total;
    const ans = calculateChange(change);
    const dens = Object.keys(ans);
    dens.forEach((d) => {
      if (ans[d] <= 0) {
        delete ans[d];
      }
      if (ans[d] > 0) {
        answer.innerHTML += `${d} : ${ans[d]}<br>`;
      }
    });
    answer.innerHTML += `Total return: ${change / 100}`;
    console.log(total, cash, change, ans);
    console.log(n);
  };
};
>>>>>>> Stashed changes
