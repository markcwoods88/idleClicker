function upgradeGPU() {
    if (ram >= 100) {
      gpu++;
      ram = ram - 100;
      dps = dps + 100;
    } else {
      console.log('You Broke!');
    }
  }
  
  function upgradeGPU5() {
    if (ram >= 500) {
      gpu++;
      ram = ram - 500;
      dps = dps + 500;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeGPU25() {
    if (ram >= 2500) {
      gpu++;
      ram = ram - 2500;
      dps = dps + 2500;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeGPU50() {
    if (ram >= 5000) {
      gpu++;
      ram = ram - 5000;
      dps = dps + 5000;
    } else {
      console.log('You Broke!');
    }
  }

  function upgradeGPU100() {
    if (ram >= 10000) {
      gpu++;
      ram = ram - 10000;
      dps = dps + 10000;
    } else {
      console.log('You Broke!');
    }
  }