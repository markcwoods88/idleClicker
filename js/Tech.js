function hireTech() {
    if (money >= 100000) {
      tech++;
      money = money - 100000;
      dps = dps + 1000;
    } else {
      console.log('You Broke!');
    }
  }
  
function hireTech5() {
    if (money >= 500000) {
      tech = tech + 5;
      money = money - 500000;
      dps = dps + 5000;
    } else {
      console.log('You Broke!');
    }
  }
  
function hireTech25() {
    if (money >= 2500000) {
      tech = tech + 25;
      money = money - 2500000;
      dps = dps + 25000;
    } else {
      console.log('You Broke!');
    }
  }
  
function hireTech50() {
    if (money >= 5000000) {
      tech = tech + 50;
      money = money - 5000000;
      dps = dps + 50000;
    } else {
      console.log('You Broke!');
    }
  }
  
function hireTech100() {
    if (money >= 10000000) {
      tech = tech + 100;
      money = money - 10000000;
      dps = dps + 100000;
    } else {
      console.log('You Broke!');
    }
  }