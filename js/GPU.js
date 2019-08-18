function upgradeGPU() {
    if (money >= 10000) {
      gpu++;
      money = money - 10000;
      dps = dps + 100;
      costOfGPU = Math.round(costOfGPU * 1.001);
    } else {
      console.log('You Broke!');
    }
  }
  
  function upgradeGPU5() {
    if (money >= 50000) {
      gpu = gpu + 5;
      money = money - 50000;
      dps = dps + 500;
      costOfGPU = Math.round(costOfGPU * 5.005);
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeGPU25() {
    if (money >= 250000) {
      gpu = gpu + 25;
      money = money - 250000;
      dps = dps + 2500;
      costOfGPU = Math.round(costOfGPU * 25.025);
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeGPU50() {
    if (money >= 500000) {
      gpu = gpu + 50;
      money = money - 500000;
      dps = dps + 5000;
      costOfGPU = Math.round(costOfGPU * 50.05);
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeGPU100() {
    if (money >= 1000000) {
      gpu = gpu + 100;
      money = money - 1000000;
      dps = dps + 10000;
      costOfGPU = Math.round(costOfGPU * 101.1);
    } else {
      console.log('You Broke!');
    }
  }