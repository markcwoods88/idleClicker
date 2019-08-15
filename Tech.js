function hireTech() {
    if (storage >= 10000) {
      tech++;
      storage = storage - 10000;
      dps = dps + 1000;
    } else {
      console.log('You Broke!');
    }
  }
  
function hireTech5() {
    if (storage >= 50000) {
      tech++;
      storage = storage - 50000;
      dps = dps + 5000;
    } else {
      console.log('You Broke!');
    }
  }
  
function hireTech25() {
    if (storage >= 250000) {
      tech++;
      storage = storage - 250000;
      dps = dps + 25000;
    } else {
      console.log('You Broke!');
    }
  }
  
function hireTech50() {
    if (storage >= 500000) {
      tech++;
      storage = storage - 500000;
      dps = dps + 50000;
    } else {
      console.log('You Broke!');
    }
  }
  
function hireTech100() {
    if (storage >= 1000000) {
      tech++;
      storage = storage - 1000000;
      dps = dps + 100000;
    } else {
      console.log('You Broke!');
    }
  }