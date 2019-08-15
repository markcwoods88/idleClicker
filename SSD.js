function upgradeStorage() {
    if (gpu >= 1000) {
      storage++;
      gpu = gpu - 1000;
      dps = dps + 500;
    } else {
      console.log('You Broke!');
    }
  }
  
function upgradeStorage5() {
    if (gpu >= 5000) {
      storage++;
      gpu = gpu - 5000;
      dps = dps + 2500;
    } else {
      console.log('You Broke!');
    }
  }
  
function upgradeStorage25() {
    if (gpu >= 25000) {
      storage++;
      gpu = gpu - 25000;
      dps = dps + 12500;
    } else {
      console.log('You Broke!');
    }
  }
  
function upgradeStorage50() {
    if (gpu >= 50000) {
      storage++;
      gpu = gpu - 50000;
      dps = dps + 25000;
    } else {
      console.log('You Broke!');
    }
  }
  
function upgradeStorage100() {
    if (gpu >= 100000) {
      storage++;
      gpu = gpu - 100000;
      dps = dps + 50000;
    } else {
      console.log('You Broke!');
    }
  }