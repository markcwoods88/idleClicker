function hireTech() {
    if (money >= 100000) {
      tech++;
      money = money - 100000;
      dps = dps + 1000;
      costOfTechs = Math.round(costOfTechs * 1.001);
    } else {
      console.log('You Broke!');
    }
  }
  
function hireTech5() {
    if (money >= 500000) {
      tech++;
      money = money - 500000;
      dps = dps + 5000;
      costOfTechs = Math.round(costOfTechs * 5.005);
    } else {
      console.log('You Broke!');
    }
  }
  
function hireTech25() {
    if (money >= 2500000) {
      tech++;
      money = money - 2500000;
      dps = dps + 25000;
      costOfTechs = Math.round(costOfTechs * 25.025);
    } else {
      console.log('You Broke!');
    }
  }
  
function hireTech50() {
    if (money >= 5000000) {
      tech++;
      money = money - 5000000;
      dps = dps + 50000;
      costOfTechs = Math.round(costOfTechs * 50.05);
    } else {
      console.log('You Broke!');
    }
  }
  
function hireTech100() {
    if (money >= 10000000) {
      tech++;
      money = money - 10000000;
      dps = dps + 100000;
      costOfTechs = Math.round(costOfTechs * 101.1);
    } else {
      console.log('You Broke!');
    }
  }