function upgradeRAM() {
    if (cpu >= 10) {
      ram++;
      cpu = cpu - 10;
      dps = dps + 10;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeRAM5() {
    if (cpu >= 50) {
      ram = ram + 5;
      cpu = cpu - 50;
      dps = dps + 50;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeRAM25() {
    if (cpu >= 250) {
      ram = ram + 25;
      cpu = cpu - 250;
      dps = dps + 250;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeRAM50() {
    if (cpu >= 500) {
      ram = ram + 50;
      cpu = cpu - 500;
      dps = dps + 500;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeRAM100() {
    if (cpu >= 1000) {
      ram = ram + 100;
      cpu = cpu - 1000;
      dps = dps + 1000;
    } else {
      console.log('You Broke!');
    }
  }