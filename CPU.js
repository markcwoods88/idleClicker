function upgradeCPU() {
    if (money >= 100) {
      cpu++;
      money = money - 100;
      dps++;
    } else {
      console.log('You Broke!');
    }
  }
  
  function upgradeCPU5() {
    if (money >= 500) {
      cpu = cpu + 5;
      money = money - 500;
      dps = dps + 5;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeCPU25() {
    if (money >= 2500) {
      cpu = cpu + 25;
      money = money - 2500;
      dps = dps + 25;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeCPU50() {
    if (money >= 5000) {
      cpu = cpu + 50;
      money = money - 5000;
      dps = dps + 50;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeCPU100() {
    if (money >= 10000) {
      cpu = cpu + 100;
      money = money - 10000;
      dps = dps + 100;
    } else {
      console.log('You Broke!');
    }
  }