function upgradehdd() {
    if (money >= 50000) {
      hdd++;
      money = money - 50000;
      dps = dps + 500;
      costOfHDD = Math.round(costOfHDD * 1.001);
    } else {
      console.log('You Broke!');
    }
  }
  
function upgradehdd5() {
    if (money >= 250000) {
      hdd++;
      money = money - 250000;
      dps = dps + 2500;
      costOfHDD = Math.round(costOfHDD * 5.005);
    } else {
      console.log('You Broke!');
    }
  }
  
function upgradehdd25() {
    if (money >= 1250000) {
      hdd++;
      money = money - 1250000;
      dps = dps + 12500;
      costOfHDD = Math.round(costOfHDD * 25.025);
    } else {
      console.log('You Broke!');
    }
  }
  
function upgradehdd50() {
    if (money >= 2500000) {
      hdd++;
      money = money - 2500000;
      dps = dps + 25000;
      costOfHDD = Math.round(costOfHDD * 50.05);
    } else {
      console.log('You Broke!');
    }
  }
  
function upgradehdd100() {
    if (money >= 5000000) {
      hdd++;
      money = money - 5000000;
      dps = dps + 50000;
      costOfHDD = Math.round(costOfHDD * 101.1);
    } else {
      console.log('You Broke!');
    }
  }