function upgradehdd() {
    if (money >= 50000) {
      hdd++;
      money = money - 50000;
      dps = dps + 500;
    } else {
      console.log('You Broke!');
    }
  }
  
function upgradehdd5() {
    if (money >= 250000) {
      hdd = hdd + 5;
      money = money - 250000;
      dps = dps + 2500;
    } else {
      console.log('You Broke!');
    }
  }
  
function upgradehdd25() {
    if (money >= 1250000) {
      hdd = hdd + 25;
      money = money - 1250000;
      dps = dps + 12500;
    } else {
      console.log('You Broke!');
    }
  }
  
function upgradehdd50() {
    if (money >= 2500000) {
      hdd = hdd + 50;
      money = money - 2500000;
      dps = dps + 25000;
    } else {
      console.log('You Broke!');
    }
  }
  
function upgradehdd100() {
    if (money >= 5000000) {
      hdd = hdd + 100;
      money = money - 5000000;
      dps = dps + 50000;
    } else {
      console.log('You Broke!');
    }
  }