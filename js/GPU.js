function upgradeGPU() {
    if (money >= 10000) {
      gpu++;
      money = money - 10000;
      dps = dps + 100;
    } else {
      console.log('You Broke!');
    }
  }
  
  function upgradeGPU5() {
    if (money >= 50000) {
      gpu = gpu + 5;
      money = money - 50000;
      dps = dps + 500;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeGPU25() {
    if (money >= 250000) {
      gpu = gpu + 25;
      money = money - 250000;
      dps = dps + 2500;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeGPU50() {
    if (money >= 500000) {
      gpu = gpu + 50;
      money = money - 500000;
      dps = dps + 5000;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeGPU100() {
    if (money >= 1000000) {
      gpu = gpu + 100;
      money = money - 1000000;
      dps = dps + 10000;
    } else {
      console.log('You Broke!');
    }
  }