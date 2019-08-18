function upgradeRAM() {
    if (money >= 1000) {
      ram++;
      money = money - 1000;
      dps = dps + 10;
      costOfRAM = Math.round(costOfRAM * 1.001);
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeRAM5() {
    if (money >= 5000) {
      ram = ram + 5;
      money = money - 5000;
      dps = dps + 50;
      costOfRAM = Math.round(costOfRAM * 5.005);
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeRAM25() {
    if (money >= 25000) {
      ram = ram + 25;
      money = money - 25000;
      dps = dps + 250;
      costOfRAM = Math.round(costOfRAM * 25.025);
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeRAM50() {
    if (money >= 50000) {
      ram = ram + 50;
      money = money - 50000;
      dps = dps + 500;
      costOfRAM = Math.round(costOfRAM * 50.05);
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeRAM100() {
    if (money >= 100000) {
      ram = ram + 100;
      money = money - 100000;
      dps = dps + 1000;
      costOfRAM = Math.round(costOfRAM * 101.1);
    } else {
      console.log('You Broke!');
    }
  }