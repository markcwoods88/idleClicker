function upgradeCPU() {
    if (money >= 100) {
      cpu++;
      money = money - 100;
      dps++;
      costOfCPU = Math.round(costOfCPU * 1.01);
    } else {
      console.log('You Broke!');
    }
  }
  
  function upgradeCPU5() {
    if (money >= 500) {
      cpu = cpu + 5;
      money = money - 500;
      dps = dps + 5;
      costOfCPU = Math.round(costOfCPU * 5.05);
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeCPU25() {
    if (money >= 2500) {
      cpu = cpu + 25;
      money = money - 2500;
      dps = dps + 25;
      costOfCPU = Math.round(costOfCPU * 25.25);
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeCPU50() {
    if (money >= 5000) {
      cpu = cpu + 50;
      money = money - 5000;
      dps = dps + 50;
      costOfCPU = Math.round(costOfCPU * 50.5);
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeCPU100() {
    if (money >= 10000) {
      cpu = cpu + 100;
      money = money - 10000;
      dps = dps + 100;
      costOfCPU = Math.round(costOfCPU * 101);
    } else {
      console.log('You Broke!');
    }
  }