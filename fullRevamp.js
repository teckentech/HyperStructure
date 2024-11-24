var IShowableClass;
var IGameData;
var ITopProgress;
var ICanCall;
var IComponents;
var ILoadout;
var IExpansor;
var ISelUpgrade;
var ISoftware;
var ICanvas;
var IAutomation;
var IEnergy;
var IScreen;

var secretKey = "DontLookAtMePls";
var saveData;
var waiting = false;

document.addEventListener('DOMContentLoaded', (event) => {

  console.log('DOM fully loaded and parsed');
  createClassInstance()

  passiveImport()
  saveGameData();
  idleTimeChecker()

  IShowableClass.init = true;
  resetCanvas()

});

//an attribute x, with a next attribute = x+ "F", then x will be frozen, and impossible to modify.

class GameData {
  constructor(options) {
    options = options || {}
    this.cells = options.cells || 0;
    this.cellsProd = options.cellsProd || 0;

    this.assimilated = options.assimilated || 0;
    this.maxAssimilated = options.assimilated || 0;
    this.assimilatedProd = options.assimilatedProd || 0;

    this.energy = options.energy || 0;
    this.energyProd = options.energyProd || 0;

    this.potential = options.potential || 0;
    this.maxPotential = options.maxPotential || 0;
    this.potentialProd = options.potentialProd || 0;

    this.tickSpeed = options.tickSpeed || 1;
    this.tickSpeedProd = options.tickSpeedProd || 1

    this.offProgressLimit = options.offProgressLimit || 21600;
    this.lastTick = options.lastTick || Date.now();
    //original tickspeed
    this.tickSpeedOff = options.tickSpeedOff || 0;
    //tickspeed mult temp
    this.tickSpeedMult = options.tickSpeedMult || 0.05;

    this.expansion = options.expansion || 0;
    this.expansionProd = options.expansionProd || 0;
  }
}

class ShowableClass {
  constructor(options) {
    options = options || {}

    this.init = options.init || true;
    this.showable = options.showable || {

      offSave: false,

      valute: true,
      cellsValute: true, assimilatedValute: false, energyValute: false, potentialValute: false,

      core: true, options: false, progress: false, progressTab: true,

      hardware: false,

      coreTab: true, hardwareTab: false,

      visualModule2: true, visualModule3: false,

      loadoutShow: false,

      componentsList: false, component1List: false, component2List: false, component3List: false, componentsButtons: false, componentTab: false, componentsSummary: false,

      hardwareSummary: true, softwareSummary: true, communicationSummary: false,

      //componentsList
      components1Tier2: false, components2Tier2: false, components3Tier2: false,

      //layers
      opaqueScreen: false, hardware1: false, hardware2: false, hardware3: false,
      software1: false, software2: false, software3: false,
      communication1: false, communication2: false, communication3: false, resetScreen: false, opaqueScreen2: false,

      //kardashev
      A1: false, A2: false, A3: false,
      A4: false, A5: false, A6: false,
      A7: false, A8: false, A9: false,
      //progress
      p1: true, p2: false, p3: false, p4: false, p5: false, p6: false,

      //components

      token1: true, token2: false, token3: false, token4: false, token5: false, token6: false, token7: false, token8: false, token9: false, token10: false, token11: false, token12: false,

      //expansors


      expansor1: true, expansor2: true, expansor3: false, expansor4: false,

      expansor1U1: false, expansor1U2: false,
      expansor2U1: false, expansor2U2: false,
      expansor3U1: false, expansor3U2: false,

      monument1: true, monument2: false, monument3: false, monument4: false, monument5: false, monument6: false, monument7: false, monument8: false, monument9: false, monument10: false,
      monument11: false, monument12: false, monument13: false, monument14: false, monument15: false, monument16: false, monument17: false, monument18: false, monument19: false, monument20: false, monument21: false, monument22: false, monument23: false,
      monument24: false, monument25: false, monument26: false,


      //softUpgrades

      softUpgrade1: false, softUpgrade2: false, softUpgrade3: false, softUpgrade4: false, softUpgrade5: false, softUpgrade6: false, softUpgrade7: false, softUpgrade8: false, softUpgrade9: false, softUpgrade10: false, softUpgrade11: false,
      softUpgrade12: false, softUpgrade13: false, softUpgrade14: false,
      //assimilation

      assimilation1: true,
      software1assimilationCenterInfo: false,
      software1assimilationCenter: false,
      assimilationBaseGridbutton1: true,
      assimilationBaseGridbutton2: true,
      assimilationBaseGridbutton3: true,

      assimilation2: true,
      software2assimilationCenterInfo: false,
      software2assimilationCenter: false,
      assimilationBaseGridbutton4: true,
      assimilationBaseGridbutton5: true,
      assimilationBaseGridbutton6: true,

      assimilation3: true,
      software3assimilationCenterInfo: false,
      software3assimilationCenter: false,
      assimilationBaseGridbutton4: true,
      assimilationBaseGridbutton5: true,
      assimilationBaseGridbutton6: true,

      //automation

      automation1: false, automation2: false, automation3: false,

      //potential
      breakthrough1: false, respecEnergy3: false, energyGrid3: false,
    }

  }
}

class TopProgress {
  constructor(options) {
    options = options || {}
    this.actualProgress = options.actualProgress || 1;

    this.progress = Object.freeze({
      p1: "FIRST CELL", p1Check: function () { return checkShow("A1") },
      p2: "KARDASHEV 0.5: MACHINE AGE", p2Check: function () { return checkShow("A2") },
      p3: "KARDASHEV 0.6: SPACE AGE", p3Check: function () { return checkShow("A5") },
      p4: "KARDASHEV 0.7: DIGITAL AGE", p4Check: function () { return checkShow("A7") },
      p5: "KARDASHEV 0.8: EMERGENT AGE", p5Check: function () { return checkShow("A9") },
      p6: "KARDASHEV 0.9: EXPEDITION AGE", p6Check: function () { return checkShow("A9") }
    });

  }
}

class CanCall {
  constructor(options) {
    options = options || {}
    this.offProgressCanCall = options.offProgressCanCall || true;
    this.importSaveCanCall = options.importCanCall || true;
    this.valuesSetterCanCall = options.valuesSetterCanCall || true;
    this.visualLoopFunction = options.visualLoopFunction || true;
  }
}

class Components {
  constructor(options) {
    options = options || {}

    this.selected = options.selected || ""

    this.equipped = options.equipped || {
      component1: "", component2: "", component3: ""
    }

    this.components = options.components || {
      token1: {
        name: "PRODUCER", nameF: true, description: "CELLS/S: +", descriptionF: true, level: 1, maxLevel: 100, effect1: 1, price: 0, tag1: "component1", tag1F: true, priceIdentity: "cells", priceIdentityF: true, image: 'images/token1.png', imageF: true, active: false
      },

      token2: {
        name: "BUILDER", nameF: true, description: `<div>(EXPANSION: ${IGameData.expansionProd})</div><div>EXPANSION/S: ^</div>`, descriptionF: true, level: 1, maxLevel: 100, effect1: 1, price: 0, tag1: "component1", tag1F: true, priceIdentity: "cells", priceIdentityF: true, image: 'images/token2.png', imageF: true, active: false
      },

      token3: {
        name: "MULTIMAKER", nameF: true, description: "ALL VALUTE/S: ×", descriptionF: true, level: 1, maxLevel: 100, effect1: 1, price: 0, tag1: "component2", tag1F: true, priceIdentity: "cells", priceIdentityF: true, image: 'images/token3.png', imageF: true, active: false
      },

      token4: {
        name: "POPULATION CONVERTER", nameF: true, description: "CELLS/S is reduced by 90%, POPULATION/S: ×", descriptionF: true, level: 1, maxLevel: 100, effect1: 1, price: 0, tag1: "component2", tag1F: true, priceIdentity: "cells", priceIdentityF: true, image: 'images/token4.png', imageF: true, active: false
      },

      token5: {
        name: "ALLY SYNERGY", nameF: true, description: "all equipped COMPONENTS LEVEL: +", descriptionF: true, level: 1, maxLevel: 100, effect1: 1, price: 0, tag1: "component3", tag1F: true, priceIdentity: "cells", priceIdentityF: true, image: 'images/token5.png', imageF: true, active: false
      },

      token6: {
        name: "ENERGY INFLUX", nameF: true, description: "all valutes are reduced by 90%, ENERGY/S: ×", descriptionF: true, level: 1, maxLevel: 100, effect1: 1, price: 0, tag1: "component3", tag1F: true, priceIdentity: "cells", priceIdentityF: true, image: 'images/token6.png', imageF: true, active: false
      },

      token7: {
        name: "UNIVERSAL PRODUCER", nameF: true, description: "AXIOMS/S: +", descriptionF: true, level: 1, maxLevel: 100, effect1: 1, price: 0, tag1: "component3", tag1F: true, priceIdentity: "cells", priceIdentityF: true, image: 'images/token7.png', imageF: true, active: false
      },

      token8: {
        name: "CHARGED PRODUCER", nameF: true, description: "ENERGY/S is reduced by 50% compound, CELLS/S: +", descriptionF: true, level: 1, maxLevel: 100, effect1: 1, price: 0, tag1: "component1", tag1F: true, priceIdentity: "cells", priceIdentityF: true, image: 'images/token8.png', imageF: true, active: false
      },

      token9: {
        name: "CHARGED BUILDER", nameF: true, description: `ENERGY/S is reduced by 50% compound, <div>(EXPANSION: ${IGameData.expansionProd})</div><div>EXPANSION/S: ^</div>`, descriptionF: true, level: 1, maxLevel: 100, effect1: 1, price: 0, tag1: "component1", tag1F: true, priceIdentity: "cells", priceIdentityF: true, image: 'images/token9.png', imageF: true, active: false
      },

      token10: {
        name: "CHARGED MULTIMAKER", nameF: true, description: "ENERGY/S is reduced by 50% compound, ALL VALUTE/S: ×", descriptionF: true, level: 1, maxLevel: 100, effect1: 1, price: 0, tag1: "component2", tag1F: true, priceIdentity: "cells", priceIdentityF: true, image: 'images/token10.png', imageF: true, active: false
      },

      token11: {
        name: "CHARGED POPULATION CONVERTER", nameF: true, description: "ENERGY/S is reduced by 50% compound, CELLS/S is reduce by 90%, POPULATION/S: ×", descriptionF: true, level: 1, maxLevel: 100, effect1: 1, price: 0, tag1: "component2", tag1F: true, priceIdentity: "cells", priceIdentityF: true, image: 'images/token11.png', imageF: true, active: false
      },

      token12: {
        name: "POTENTIAL PRODUCER", nameF: true, description: "POTENTIAL/S: ×", descriptionF: true, level: 1, maxLevel: 100, effect1: 1, price: 0, tag1: "component2", tag1F: true, priceIdentity: "cells", priceIdentityF: true, image: 'images/token12.png', imageF: true, active: false
      },

    }
  }
}

class Loadout {
  constructor(options) {
    options = options || {}
    this.componentsLoadout = options.componentsLoadout || {
      loadout1: {
        name: "", component1: "", component2: "", component3: ""
      },

      loadout2: {
        name: "", component1: "", component2: "", component3: ""
      },

      loadout3: {
        name: "", component1: "", component2: "", component3: ""
      }
    }
  }
}

class Expansor {
  constructor(options) {
    options = options || {}
    this.expansors = options.expansors || {
      expansor1: {
        name: "Unit", nameF: true, description: `EXPANSION/S: +`, descriptionF: true, level: 0, maxLevel: 2401, effect: 0, price1: 0, priceIdentity: "cells", priceIdentityF: true
      },

      expansor2: {
        name: "Block", nameF: true, description: "UNIT MAX LEVEL: +", descriptionF: true, level: 0, maxLevel: 343, effect: 0, price1: 0, priceIdentity: "assimilated", priceIdentityF: true
      },

      expansor3: {
        name: "Sector", nameF: true, description: "BLOCK MAX LEVEL: +", descriptionF: true, level: 0, maxLevel: 49, effect: 0, price1: 0, priceIdentity: "energy", priceIdentityF: true
      },

      expansor4: {
        name: "Cluster", nameF: true, description: "POTENTIAL: +", descriptionF: true, level: 0, maxLevel: 7, effect: 0, price1: 0, priceIdentity: "potential", priceIdentityF: true
      },
    }

    this.expansorsUpgrades = options.expansorsUpgrades || {
      expansor1U1: {
        description: "UNIT produces CELLS/S: + ", descriptionF: true, effect: 0, group: "group1", groupF: true, descriptionF: true, active: false
      },

      expansor1U2: {
        description: "UNIT boosts UNIT EFFECT: × ", descriptionF: true, effect: 0, group: "group1", groupF: true, descriptionF: true, active: false
      },

      expansor2U1: {
        description: "MAX POPULATION: × ", descriptionF: true, effect: 0, group: "group3", groupF: true, descriptionF: true, active: false
      },

      expansor2U2: {
        description: "BLOCK makes UNIT CHEAPER: / ", descriptionF: true, effect: 0, group: "group3", groupF: true, descriptionF: true, active: false
      },

      expansor3U1: {
        description: "SECTOR boosts ENERGY/S: × ", descriptionF: true, effect: 0, group: "group4", groupF: true, descriptionF: true, active: false
      },

      expansor3U2: {
        description: "UNIT PRICE: / ", descriptionF: true, effect: 0, group: "group4", groupF: true, descriptionF: true, active: false
      },
    }

    this.monumentImage = options.monumentImage || 1;

    this.showMonuments = options.showMonuments || true;

    this.monuments = options.monuments || {
      //req1: cells, req2: assimilation, req3: energy, req4: potential
      monument1: {
        name: "Big Structures", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Hardware Component: Builder", unlockedF: true, active: false
      },

      monument2: {
        name: "Builder Drones", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Hardware 1: Automation: Unit", unlockedF: true, active: false
      },

      monument3: {
        name: "Unit Accessories", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Hardware 1: Unit Upgrades", unlockedF: true, active: false
      },

      monument4: {
        name: "Double Room Unit", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Hardware 1: Unit Upgrades both active", unlockedF: true, active: false
      },

      monument5: {
        name: "New Horizons", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "New Layers", unlockedF: true, active: false
      },

      monument6: {
        name: "Modular Component", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Software Component: Multimaker", unlockedF: true, active: false
      },

      monument7: {
        name: "Drones Swarm", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Hardware 2: Automation: Block", unlockedF: true, active: false
      },

      monument8: {
        name: "Grid Transportation", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Hardware 2: Block Upgrades", unlockedF: true, active: false
      },

      monument9: {
        name: "Man Free Duties", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Hardware 2: Block Upgrades both active", unlockedF: true, active: false
      },

      monument10: {
        name: "Multi Layer City", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "New Layers", unlockedF: true, active: false
      },

      monument11: {
        name: "One State", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Software1: Population Center", unlockedF: true, active: false
      },

      monument12: {
        name: "Capitalism Oriented Production", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Software Components: Population Converter", unlockedF: true, active: false
      },

      monument13: {
        name: "Super Computers", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "New Layers", unlockedF: true, active: false
      },

      monument14: {
        name: "Incorporated Generators", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Hardware Components: Charged Components", unlockedF: true, active: false
      },

      monument15: {
        name: "Free Electricity", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Software Components: Charged Components", unlockedF: true, active: false
      },

      monument16: {
        name: "Cooperating Particles", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Communication Components: New Components", unlockedF: true, active: false
      },

      monument17: {
        name: "Prefabricated City", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Hardware 3: Sector Upgrades", unlockedF: true, active: false
      },

      monument18: {
        name: "Very Smart Cities", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Hardware 3: Sector Upgrades both active", unlockedF: true, active: false
      },

      monument19: {
        name: "Autoreplicating Bots", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Hardware 3: Automation: Sector", unlockedF: true, active: false
      },

      monument20: {
        name: "The First Pillar", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "New Layers", unlockedF: true, active: false
      },

      monument21: {
        name: "Simbiotic Computers", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Software 2: Population Center", unlockedF: true, active: false
      },

      monument22: {
        name: "Netsphere Online", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Software 3: Population Center", unlockedF: true, active: false
      },

      monument23: {
        name: "Informatic Singularity", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Last Layer", unlockedF: true, active: false
      },

      monument24: {
        name: "Megastructure: First Shell", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Communication 3: New Upgrades", unlockedF: true, active: false
      },

      monument25: {
        name: "Self Replicating Artificial Intelligence", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Software Components: Potential Producer", unlockedF: true, active: false
      },

      monument26: {
        name: "Kardashev Scale 0.99", nameF: true, req1: 0, req2: 0, req3: 0, req4: 0, unlocked: "Communication 3: New Upgrades", unlockedF: true, active: false
      },
    }
  }
}

class SelUpgrade {
  constructor(options) {
    options = options || {}
    this.group = options.group || {

      //expansor Upgrades 1
      group1: {
        num: 0, maxNum: 1, lastSel: "", maxNumF: true
      },

      //assimilation Upgrades
      group2: {
        num: 0, maxNum: 1, lastSel: "", maxNumF: true
      },

      //expansor upgrades 2
      group3: {
        num: 0, maxNum: 1, lastSel: "", maxNumF: true
      },

      //expansor upgrades 3
      group4: {
        num: 0, maxNum: 1, lastSel: "", maxNumF: true
      },

      //assimilation Upgrades 2
      group5: {
        num: 0, maxNum: 1, lastSel: "", maxNumF: true
      },

      //overclock 1
      group6: {
        num: 0, maxNum: 1, lastSel: "", maxNumF: true
      },

      //assimilation Upgrades 3
      group7: {
        num: 0, maxNum: 1, lastSel: "", maxNumF: true
      },
    }
  }
}

class Software {
  constructor(options) {
    options = options || {}

    this.currentTier = options.currentTier || 1;

    this.upgrades = options.upgrades || {
      softUpgrade1: {
        name: "MAX POPULATION: × ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 111, priceIdentity: "assimilated", priceIdentityF: true,
      },

      softUpgrade2: {
        name: "POPULATION/S: × ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "assimilated", priceIdentityF: true,
      },

      softUpgrade3: {
        name: "TIER 1 COMPONENTS PRICE: / ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "assimilated", priceIdentityF: true,
      },

      softUpgrade4: {
        name: "POPULATION CENTER SELECTABLE: ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "assimilated", priceIdentityF: true,
      },

      //software upgrades 2

      softUpgrade5: {
        name: "MAX POPULATION: × ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 111, priceIdentity: "assimilated", priceIdentityF: true,
      },

      softUpgrade6: {
        name: "ENERGY UPGRADES PRICE : / ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "assimilated", priceIdentityF: true,
      },

      softUpgrade7: {
        name: "POPULATION CENTER SELECTABLE: ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "assimilated", priceIdentityF: true,
      },

      //software upgrades 3

      softUpgrade8: {
        name: "MAX POPULATION: × ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 111, priceIdentity: "assimilated", priceIdentityF: true,
      },

      softUpgrade9: {
        name: "CELLS boosts POPULATION/S: × ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "assimilated", priceIdentityF: true,
      },

      softUpgrade10: {
        name: "POPULATION CENTER SELECTABLE: ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "assimilated", priceIdentityF: true,
      },

      softUpgrade11: {
        name: "CELLS/S: × ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "assimilated", priceIdentityF: true,
      },

      //communication3
      softUpgrade12: {
        name: "MAX POTENTIAL: × ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "potential", priceIdentityF: true,
      },

      softUpgrade13: {
        name: "CLUSTER EFFECT: × ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "potential", priceIdentityF: true,
      },

      softUpgrade14: {
        name: "ALL VALUTES: × ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "potential", priceIdentityF: true,
      },
    }

    this.assimilationCenter = options.assimilationCenter || {
      button1: {
        name: "Open Population Center", description: "MAX POPULATION: × ", effect: 0, price: 0, priceIdentity: "ASSIMILATED", group: "group2", active: false, nameF: true, descriptionF: true, groupF: true
      },

      button2: {
        name: "Intranet Jobs", description: "CELLS/S: × ", effect: 0, price: 0, priceIdentity: "POPULATION", group: "group2", active: false, nameF: true, descriptionF: true, groupF: true
      },

      button3: {
        name: "Deep Sleep Protocol", description: "POPULATION/S: × ", effect: 0, price: 0, priceIdentity: "POPULATION", group: "group2", active: false, nameF: true, descriptionF: true, groupF: true
      },

      button4: {
        name: "Deeper Processes", description: "POPULATION boosts POPULATION/S: × ", effect: 0, price: 0, priceIdentity: "POPULATION", group: "group5", active: false, nameF: true, descriptionF: true, groupF: true
      },

      button5: {
        name: "Centralized Energy", description: "ENERGY/S: × ", effect: 0, price: 0, priceIdentity: "POPULATION", group: "group5", active: false, nameF: true, descriptionF: true, groupF: true
      },

      button6: {
        name: "Global Intranet", description: "TICKSPEED: × ", effect: 0, price: 0, priceIdentity: "POPULATION", group: "group5", active: false, nameF: true, descriptionF: true, groupF: true
      },

      button7: {
        name: "Tecnological Revolution", description: "CELLS/S reduces UNIT PRICE: / ", effect: 0, price: 0, priceIdentity: "POPULATION", group: "group7", active: false, nameF: true, descriptionF: true
      },

      button8: {
        name: "Potential Feeders", description: "ENERGY boosts ENERGY/S: × ", effect: 0, price: 0, priceIdentity: "POPULATION", group: "group7", active: false, nameF: true, descriptionF: true
      },

      button9: {
        name: "Netsphere Prototype", description: "EXPANSION/S: × ", effect: 0, price: 0, priceIdentity: "POPULATION", group: "group7", active: false, nameF: true, descriptionF: true
      },
    }
  }
}

class Energy {
  constructor(options) {
    options = options || {}

    this.energyUpgrades = options.energyUpgrades || {

      energyButton1: {
        name: "ENERGY/S: + ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "cells", priceIdentityF: true,
      },
      energyButton2: {
        name: "ALL ENERGY UPGRADES: × ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "cells", priceIdentityF: true,
      },
      energyButton3: {
        name: "ALL CHARGED COMPONENTS: × ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "cells", priceIdentityF: true,
      },
      energyButton4: {
        name: "ENERGY boosts ALL VALUTES: × ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "cells", priceIdentityF: true,
      },
      energyButton5: {
        name: "OVERCLOCK EFFECT boosted", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "cells", priceIdentityF: true,
      },
      energyButton6: {
        name: "OVERCLOCK SELECTABLE: + ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "cells", priceIdentityF: true,
      },
      energyButton7: {
        name: "POTENTIAL/S: × ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "potential", priceIdentityF: true,
      },
      energyButton8: {
        name: "POTENTIAL boosts CELLS/S: × ", nameF: true, level: 0, maxLevel: 10, effect: 1, price: 0, priceIdentity: "potential", priceIdentityF: true,
      },

    }

    this.overclock = options.overclock || {
      overclock1: {
        description: "CELLS/S: × ", effect: 0, active: false, level: 0, group: "group6", descriptionF: true, groupF: true
      },
      overclock2: {
        description: "CELLS/S: ^ ", effect: 0, active: false, level: 0, group: "group6", descriptionF: true, groupF: true
      },
      overclock3: {
        description: "POPULATION/S: × ", effect: 0, active: false, level: 0, group: "group6", descriptionF: true, groupF: true
      },
      overclock4: {
        description: "POPULATION/S: ^ ", effect: 0, active: false, level: 0, group: "group6", descriptionF: true, groupF: true
      },
      overclock5: {
        description: "ENERGY/S: × ", effect: 0, active: false, level: 0, group: "group6", descriptionF: true, groupF: true
      },
      overclock6: {
        description: "ENERGY/S: ^ ", effect: 0, active: false, level: 0, group: "group6", descriptionF: true, groupF: true
      },

    }

  }
}

class Canvas {
  constructor(options) {
    options = options || {}

    // it works with percetiles
    this.screen = options.screen || {
      line1: {
        startX: 0.1, startY: 0.5, controlPX: 0.1, controlPY: 0.5, endX: 0.3, endY: 0.3, active: false, startXF: true, startYF: true, controlPXF: true, controlPYF: true, endXF: true, endYF: true, activeF: true
      },
      line2: {
        startX: 0.1, startY: 0.5, controlPX: 0.1, controlPY: 0.5, endX: 0.3, endY: 0.7, active: false, startXF: true, startYF: true, controlPXF: true, controlPYF: true, endXF: true, endYF: true, activeF: true
      },
      line3: {
        startX: 0.3, startY: 0.3, controlPX: 0.3, controlPY: 0.3, endX: 0.5, endY: 0.1, active: false, startXF: true, startYF: true, controlPXF: true, controlPYF: true, endXF: true, endYF: true, activeF: true
      },
      line4: {
        startX: 0.3, startY: 0.3, controlPX: 0.3, controlPY: 0.3, endX: 0.5, endY: 0.5, active: false, startXF: true, startYF: true, controlPXF: true, controlPYF: true, endXF: true, endYF: true, activeF: true
      },
      line5: {
        startX: 0.3, startY: 0.7, controlPX: 0.3, controlPY: 0.7, endX: 0.5, endY: 0.5, active: false, startXF: true, startYF: true, controlPXF: true, controlPYF: true, endXF: true, endYF: true, activeF: true
      },
      line6: {
        startX: 0.3, startY: 0.7, controlPX: 0.3, controlPY: 0.7, endX: 0.5, endY: 0.9, active: false, startXF: true, startYF: true, controlPXF: true, controlPYF: true, endXF: true, endYF: true, activeF: true
      },
      line7: {
        startX: 0.5, startY: 0.1, controlPX: 0.5, controlPY: 0.1, endX: 0.7, endY: 0.3, active: false, startXF: true, startYF: true, controlPXF: true, controlPYF: true, endXF: true, endYF: true, activeF: true
      },
      line8: {
        startX: 0.5, startY: 0.5, controlPX: 0.5, controlPY: 0.5, endX: 0.7, endY: 0.3, active: false, startXF: true, startYF: true, controlPXF: true, controlPYF: true, endXF: true, endYF: true, activeF: true
      },
      line9: {
        startX: 0.5, startY: 0.5, controlPX: 0.5, controlPY: 0.5, endX: 0.7, endY: 0.7, active: false, startXF: true, startYF: true, controlPXF: true, controlPYF: true, endXF: true, endYF: true, activeF: true
      },
      line10: {
        startX: 0.5, startY: 0.9, controlPX: 0.5, controlPY: 0.9, endX: 0.7, endY: 0.7, active: false, startXF: true, startYF: true, controlPXF: true, controlPYF: true, endXF: true, endYF: true, activeF: true
      },
      line11: {
        startX: 0.5, startY: 0.1, controlPX: 0.5, controlPY: 0.1, endX: 0.9, endY: 0.5, active: false, startXF: true, startYF: true, controlPXF: true, controlPYF: true, endXF: true, endYF: true, activeF: true
      },
      line12: {
        startX: 0.5, startY: 0.9, controlPX: 0.5, controlPY: 0.9, endX: 0.9, endY: 0.5, active: false, startXF: true, startYF: true, controlPXF: true, controlPYF: true, endXF: true, endYF: true, activeF: true
      },

    }
  }
}

class Automation {
  constructor(options) {
    options = options || {}

    this.automators = options.automators || {

      automation1: {
        name: "UNIT AUTOMATION", description: "Autobuys UNIT, when you have enough to buy, costs nothing", active: false, nameF: true, descriptionF: true
      },
      automation2: {
        name: "BLOCK AUTOMATION", description: "Autobuys BLOCK, when you have enough to buy, costs nothing", active: false, nameF: true, descriptionF: true
      },
      automation3: {
        name: "SECTOR AUTOMATION", description: "Autobuys SECTOR, when you have enough to buy, costs nothing", active: false, nameF: true, descriptionF: true
      },
    }
  }
}

class Screen {
  constructor(options) {
    options = options || {}

    this.screens = options.screens || {
      A1: {
        name: "Hardware 1", feature1: "", feature2: "", active: true, nameF: true, feature1F: true, feature2F: true
      },
      A2: {
        name: "Software 1", feature1: "", feature2: "", active: false, nameF: true, feature1F: true, feature2F: true
      },
      A3: {
        name: "Hardware 2", feature1: "", feature2: "", active: false, nameF: true, feature1F: true, feature2F: true
      },
      A4: {
        name: "software 2", feature1: "", feature2: "", active: false, nameF: true, feature1F: true, feature2F: true
      },
      A5: {
        name: "Communication 1", feature1: "", feature2: "", active: false, nameF: true, feature1F: true, feature2F: true
      },
      A6: {
        name: "Hardware 3", feature1: "", feature2: "", active: false, nameF: true, feature1F: true, feature2F: true
      },
      A7: {
        name: "Communication 2", feature1: "", feature2: "", active: false, nameF: true, feature1F: true, feature2F: true
      },
      A8: {
        name: "Software 3", feature1: "", feature2: "", active: false, nameF: true, feature1F: true, feature2F: true
      },
      A9: {
        name: "Communication 3", feature1: "", feature2: "", active: false, nameF: true, feature1F: true, feature2F: true
      },
    }

  }
}

//SAVING

function createClassInstance() {

  IShowableClass = new ShowableClass();
  IGameData = new GameData();
  ITopProgress = new TopProgress();
  ICanCall = new CanCall();
  IComponents = new Components();
  ILoadout = new Loadout();
  IExpansor = new Expansor();
  ISelUpgrade = new SelUpgrade();
  ISoftware = new Software();
  ICanvas = new Canvas();
  IAutomation = new Automation();
  IEnergy = new Energy();
  IScreen = new Screen();
}

function createSaveData() {
  saveData = {
    IShowableClass: IShowableClass,
    IGameData: IGameData,
    ITopProgress: ITopProgress,
    ICanCall: ICanCall,
    IComponents: IComponents,
    ILoadout: ILoadout,
    IExpansor: IExpansor,
    ISelUpgrade: ISelUpgrade,
    ISoftware: ISoftware,
    ICanvas: ICanvas,
    IAutomation: IAutomation,
    IEnergy: IEnergy,
    IScreen: IScreen,
  };
}

function saveGameData() {
  createSaveData()
  const stringifiedData = JSON.stringify(saveData);
  localStorage.setItem("HyperStructureSave", stringifiedData);

}

function resetSave() {
  createClassInstance()
  createSaveData()
  const stringifiedData = JSON.stringify(saveData);
  localStorage.setItem("HyperStructureSave", stringifiedData);

  resetCanvas()
}

function deepMerge(obj1, obj2) {
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
        obj1[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        //check if it must be frozen
        if (obj1[key + "F"]) {
        }
        else {
          obj1[key] = obj2[key];
        }
      }
    }
  }
  return obj1;
}

function encryptData(data, key) {
  return CryptoJS.AES.encrypt(data, key).toString();
}


function decryptData(data, key) {
  var bytes = CryptoJS.AES.decrypt(data, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}

function exportSave() {
  saveGameData();
  var exportSaveData = localStorage.getItem("HyperStructureSave");
  var encryptedData = CryptoJS.AES.encrypt(exportSaveData, secretKey).toString();
  document.getElementById("Save").value = encryptedData;
}

function offExportSave() {
  saveGameData();
  var exportSaveData = localStorage.getItem("HyperStructureSave");
  var encryptedData = CryptoJS.AES.encrypt(exportSaveData, secretKey).toString();
  document.getElementById("offSave").value = encryptedData;
}

function importSave() {
  IShowableClass.init = true;
  resetSave()
  var encryptedData = document.getElementById("Save").value;
  const decryptedData = decryptData(encryptedData, secretKey);
  try {
    var savedGameData = JSON.parse(decryptedData);
    for (let x in savedGameData) {
      if (saveData[x]) {
        deepMerge(saveData[x], savedGameData[x]);
      }
    }
  } catch (e) {
    console.error("Errore nella decifratura o parsing dei dati: ", e);
  }
  resetCanvas()
  IShowableClass.init = true;

}

function passiveImport() {
  if (localStorage.getItem("HyperStructureSave") !== null) {

    var encryptedData = JSON.parse(localStorage.getItem("HyperStructureSave"));
    try {
      var savedGameData = encryptedData;
      for (let x in savedGameData) {
        saveGameData()
        if (saveData[x]) {
          deepMerge(saveData[x], savedGameData[x]);
        }
      }
    } catch (e) {
      console.error("Errore nella decifratura o parsing dei dati: ", e);
    }
  }
}

function offImportSave() {
  var encryptedData = document.getElementById("offSave").value;
  const decryptedData = decryptData(encryptedData, secretKey);
  try {
    var savedGameData = JSON.parse(decryptedData);
    for (let x in savedGameData) {
      if (saveData[x]) {
        deepMerge(saveData[x], savedGameData[x]);
      }
    }
  } catch (e) {
    console.error("Errore nella decifratura o parsing dei dati: ", e);
  }
}

function salva(x) {
  const dati = {};
  for (let key of Object.keys(x)) {
    dati[key] = this[key];
  }
  return dati;
}

function carica(a, b) {
  var importedData = document.getElementById("Save").value;
  localStorage.setItem("personaData", importedData);

  const dati = localStorage.getItem('personaData');
  if (dati) {
    const parsedData = JSON.parse(dati);
    var deepMergeValue = deepMerge(a, b);
    return deepMergeValue;
  }
  return null;
}

//COSE DA FARE/AGGIUNTE

function update(id, content) {
  document.getElementById(id).innerHTML = content;
}

function updateClass(cla, content) {
  var update = document.getElementsByClassName(cla);
  var x = 0;

  while (update[x] != null) {
    update[x].innerHTML = content;
    x++;
  }
}

//LOADOUT

function componentsLoadoutSave(number) {
  var associatedLoad = "loadout" + number

  ILoadout.componentsLoadout[associatedLoad].component1 = IComponents.equipped.component1
  ILoadout.componentsLoadout[associatedLoad].component2 = IComponents.equipped.component2
  ILoadout.componentsLoadout[associatedLoad].component3 = IComponents.equipped.component3

}

function componentsLoadoutLoad(number) {
  var associatedLoad = "loadout" + number

  equipComponent("", "component1")
  equipComponent("", "component2")
  equipComponent("", "component3")

  equipComponent(ILoadout.componentsLoadout[associatedLoad].component1, "component1")
  equipComponent(ILoadout.componentsLoadout[associatedLoad].component2, "component2")
  equipComponent(ILoadout.componentsLoadout[associatedLoad].component3, "component3")

}

function componentsLoadoutName(number, enter) {
  var loadout = document.getElementById("loadoutName" + number)
  var id = "loadout" + number
  if (enter == true) {
    loadout.disabled = false;
    ILoadout.componentsLoadout[id].name = loadout.value

  }

  if (enter == false) {
    loadout.disabled = true;
    ILoadout.componentsLoadout[id].name = loadout.value
  }
}
//VISUAL ALL LAYERS

function visualValute() {
  update("cellsValuteBase", format(IGameData.cells) + " CELLS")
  update("cellsValuteProd", " + " + format(sec(IGameData.cellsProd)) + " CELLS/S")

  update("assimilatedValuteBase", format(IGameData.assimilated) + " POPULATION")
  update("assimilatedValuteProd", " + " + format(sec(IGameData.assimilatedProd)) + " POPULATION/S")

  update("energyValuteBase", format(IGameData.energy) + " ENERGY")
  update("energyValuteProd", " + " + format(sec(IGameData.energyProd)) + " ENERGY/S")

  update("potentialValuteBase", format(IGameData.potential) + " POTENTIAL")
  update("potentialValuteProd", " + " + format(sec(IGameData.potentialProd)) + " POTENTIAL/S")
}

function visualComponents() {
  //components list
  for (let x in IComponents.components) {
    let obComp = document.getElementById(x)

    obComp.setAttribute("onclick", "visualComponentInfo(" + "'" + x + "'" + ")");

    obComp.style.backgroundImage = "url('" + IComponents.components[x].image + "')";

    obComp.style.backgroundSize = "100%";
  }

  //components images
  for (let y in IComponents.equipped) {
    var imageModule = y + "Module"

    if (IComponents.equipped[y] == "") {
      document.getElementById(imageModule).style.background = "url(images/plus.png)";
      document.getElementById(imageModule).style.backgroundSize = "100%";
    }
    else {

      var selectedComp = IComponents.equipped[y]

      document.getElementById(imageModule).style.background = "url('" + IComponents.components[selectedComp].image + "')"
      document.getElementById(imageModule).style.backgroundSize = "100%";
    }
  }

  //component summary
  for (let y in IComponents.equipped) {

    if (IComponents.equipped[y] == "") {
      updateClass(y + "Effect1", "&nbsp;")
    }
    else {

      var selectedComp = IComponents.equipped[y]

      var description = IComponents.components[selectedComp].description
      var effect1 = IComponents.components[selectedComp].effect1

      updateClass(y + "Effect1", description)
    }
  }
}

function visualComponentInfo(id) {

  var sel = IComponents.components[id]
  IComponents.selected = id

  for (let x in IComponents.components) {
    var selId = document.getElementById(x)
    if (x == id) {
      selId.style.boxShadow = 'inset 0 0 0 2px #ff0000';
    }

    else {
      selId.style.boxShadow = 'inset 0 0 0 2px #ffffff'
    }
  }

  if (id == "") {
    update("componentLevel", "");
    update("componentName", "");
    update("componentEffect", "");

    update("componentsLevelUpDiv", "LEVEL UP: ")
  }

  else {

    unlockShow("componentTab", true)
    unlockShow("loadoutShow", true)
    unlockShow("componentsButtons", true)
    unlockShow("componentsSummary", true)

    update("componentLevel", sel.level + " / " + sel.maxLevel);
    update("componentName", sel.name);
    update("componentEffect", sel.description);

    update("componentsLevelUpDiv", "<div>LEVEL UP: </div>" + "<div>" + format(sel.price) + " " + sel.priceIdentity + "</div>")
  }
}

function visualComponentsLoadout() {

  var cont = 0;
  for (let x in ILoadout.componentsLoadout) {
    var loadout = document.getElementById("loadoutName" + (cont + 1))
    if (loadout.disabled) {
      loadout.value = ILoadout.componentsLoadout[x].name;
    }

    cont = cont + 1;
  }
}

function showComponents(componentType) {

  unlockShow("componentsList", true)

  unlockShow("component1List", false)
  unlockShow("component2List", false)
  unlockShow("component3List", false)


  unlockShow(componentType + "List", true)

  if (IComponents.equipped[componentType] != "") {
    visualComponentInfo(IComponents.equipped[componentType])
  }
}

//top progress

function visualProgress() {
  var locator = ITopProgress.actualProgress;

  console.log(ITopProgress.progress["p" + locator])
  update("progressTab", ITopProgress.progress["p" + locator])

}

//visual expansor

function visualHardware() {
  //expansorName

  var expansionValute;

  if (IGameData.expansion == 0) {
    expansionValute = 0;
  }
  else {
    expansionValute = IExpansor.expansors.expansor1.effect
  }

  update("hardware1Info", "<div> EXPANSION: " + format(IGameData.expansionProd) + "<div>EXPANSION multiply CELLS/S: × " + format(IGameData.expansion) + "</div>" + "</div> <div>EXPANSORS</div>")
  update("hardware2Info", "<div> EXPANSION: " + format(IGameData.expansionProd) + "<div>EXPANSION multiply CELLS/S: × " + format(IGameData.expansion) + "</div>" + "</div> <div>EXPANSORS</div>")
  update("hardware3Info", "<div> EXPANSION: " + format(IGameData.expansionProd) + "<div>EXPANSION multiply CELLS/S: × " + format(IGameData.expansion) + "</div>" + "</div> <div>EXPANSORS</div>")

  //expansors

  for (let x in IExpansor.expansors) {

    var selExp = IExpansor.expansors[x]
    //...............................
    if (selExp.priceIdentity != "") {
      var pId1 = selExp.priceIdentity + ":"
      var pId1P = format(selExp.price1)
    }
    else {
      var pId1 = ""
      var pId1P = ""
    }

    update(x + "Name", selExp.name)
    update(x + "Effect", selExp.description + " " + format(selExp.effect))
    update(x + "Level", "<div>" + selExp.level + "</div>" + "<hr />" + "<div>" + selExp.maxLevel + "</div>")
    update(x + "Price", "<div>PRICE</div><div>" + pId1 + pId1P + "</div>")
  }

  //expansorUpgrades

  for (let x in IExpansor.expansorsUpgrades) {
    var selExp = IExpansor.expansorsUpgrades[x]

    update(x, "<div>" + selExp.description + "</div>" + "<div>" + format(selExp.effect) + "</div>")

    if (selExp.active) {
      document.getElementById(x).style.background = "#004526"
    }
    else {
      document.getElementById(x).style.background = ""
    }

  }

  //monuments

  if (checkShow("cellsValute")) {
    var valute1 = "CELLS/S"
  }
  else { var valute1 = "" }

  if (checkShow("assimilatedValute")) {
    var valute2 = "POPULATION/S"
  }
  else { var valute2 = "" }

  if (checkShow("energyValute")) {
    var valute3 = "ENERGY/S"
  }
  else { var valute3 = "" }

  if (checkShow("potentialValute")) {
    var valute4 = "POTENTIAL/S"
  }
  else { var valute4 = "" }

  for (let x in IExpansor.monuments) {
    var selExp = IExpansor.monuments[x];
    var ItMonumentsGrid

    if (sec(IGameData.cellsProd) >= selExp.req1 || selExp.active) {
      var re1B = "#004526"
    }
    else { var re1B = "#8d2424" }
    if (sec(IGameData.assimilatedProd) >= selExp.req2 || selExp.active) {
      var re2B = "#004526"
    }
    else { var re2B = "#8d2424" }
    if (sec(IGameData.energyProd) >= selExp.req3 || selExp.active) {
      var re3B = "#004526"
    }
    else { var re3B = "#8d2424" }
    if (sec(IGameData.potentialProd) >= selExp.req4 || selExp.active) {
      var re4B = "#004526"
    }
    else { var re4B = "#8d2424" }

    if (checkShow("cellsValute")) {
      var div1 = `<div style='background-color:${re1B}'>CELLS/S: ${format(selExp.req1)}</div>`
    }
    else {
      div1 = "<div>&nbsp;</div>"
    }
    if (checkShow("assimilatedValute")) {
      var div2 = `<div style='background-color:${re2B}'>POPULATION/S: ${format(selExp.req2)}</div>`
    }
    else {
      div2 = "<div>&nbsp;</div>"
    }

    if (checkShow("energyValute")) {
      var div3 = `<div style='background-color:${re3B}'>ENERGY/S: ${format(selExp.req3)}</div>`
    }
    else {
      div3 = "<div>&nbsp;</div>"
    }

    if (checkShow("potentialValute")) {
      var div4 = `<div style='background-color:${re4B}'>POTENTIAL/S: ${format(selExp.req4)}</div>`
    }
    else {
      div4 = "<div>&nbsp;</div>"
    }

    // Array con i valori da confrontare e i rispettivi colori
    if (!(selExp.active)) {

      ItMonumentsGrid =
        `<div class="monumentName  defaultButtonSkin">${selExp.name}</div>` +
        div1 +
        div2 +
        div3 +
        div4 + 
        `<div class="defaultButtonSkin">UNLOCKS ${selExp.unlocked}</div>`

    } else {
      if (IExpansor.showMonuments) {
        unlockShow(x, true)

        ItMonumentsGrid =
        `<div class="monumentName defaultButtonSkin">${selExp.name}</div>` +
        div1 +
        div2 +
        div3 +
        div4 +
        `<div class="defaultButtonSkin">UNLOCKS ${selExp.unlocked}</div>`
      }

      if (selExp.active) {
        document.getElementById(x).style.backgroundColor = "#004526"
      }
      else {
        document.getElementById(x).style.backgroundColor = "#313131"
        unlockShow(x, false)
      }
    }

    // Creazione del markup HTML

    update(x, ItMonumentsGrid);
  }
}

function visualSoftware() {
  //softwareInfo

  update("softwareUpgradesInfo", `<div>POPULATION: ${format(IGameData.assimilated)} / ${format(IGameData.maxAssimilated)}</div><div> POPULATION UPGRADES </div>`)
  update("softwareUpgradesInfo2", `<div>POPULATION: ${format(IGameData.assimilated)} / ${format(IGameData.maxAssimilated)}</div><div> POPULATION UPGRADES </div>`)
  update("softwareUpgradesInfo3", `<div>POPULATION: ${format(IGameData.assimilated)} / ${format(IGameData.maxAssimilated)}</div><div> POPULATION UPGRADES </div>`)

  //software upgrades

  for (let x in ISoftware.upgrades) {

    var sel = ISoftware.upgrades[x]

    if (sel.priceIdentity == "assimilated") {
      var PriceIdentity = "POPULATION"
    }

    else if (sel.priceIdentity == "potential") {
      var PriceIdentity = "POTENTIAL"
    }
    else { PriceIdentity = sel.priceIdentity }

    update(x, "<div>" + sel.name + " " + format(sel.effect) +
      "</div><div>" + sel.level + " / " + sel.maxLevel +
      "</div><div>" + PriceIdentity + ": " + format(sel.price) + "</div>")

  }

  //softwareUpgradesAssimilate
  //assimilationCenter

  update("software1assimilationCenterInfo", `<div> SELECTED: ${ISelUpgrade.group.group2.num} / ${ISelUpgrade.group.group2.maxNum} </div><div> POPULATION CENTER </div>`)
  update("software2assimilationCenterInfo", `<div> SELECTED: ${ISelUpgrade.group.group5.num} / ${ISelUpgrade.group.group5.maxNum} </div><div> POPULATION CENTER </div>`)
  update("software3assimilationCenterInfo", `<div> SELECTED: ${ISelUpgrade.group.group7.num} / ${ISelUpgrade.group.group7.maxNum} </div><div> POPULATION CENTER </div>`)

  for (let x in ISoftware.assimilationCenter) {

    var sel = ISoftware.assimilationCenter[x]

    if (sel.active) {
      document.getElementById("assimilationBaseGrid" + x).style.background = "#174d00"
    }
    else {
      document.getElementById("assimilationBaseGrid" + x).style.background = ""
    }

    update("assimilationBaseGrid" + x, `<div> ${sel.description} </div>
                                          <div> ${format(sel.effect)}</div>`)

  }
}

function visualCommunication() {
  //energy info
  update("energyInfo1", `<div>ENERGY: ${format(IGameData.energy)}</div><div> ENERGY UPGRADES </div>`)
  update("energyInfo2", `<div>ENERGY: ${format(IGameData.energy)}</div><div> ENERGY UPGRADES </div>`)

  //energy Upgrades
  for (let x in IEnergy.energyUpgrades) {

    var sel = IEnergy.energyUpgrades[x]



    update(x, `<div>${sel.level}/${sel.maxLevel}</div><div> ${sel.name} </div>
      <div> ${format(sel.effect)}</div>
      <div>${sel.priceIdentity.toUpperCase()}: ${format(sel.price)}</div>`)
  }


  //overclock
  update("overclockInfo1", `<div> SELECTABLE: ${ISelUpgrade.group.group6.num} / ${ISelUpgrade.group.group6.maxNum} </div><div> OVERCLOCK </div>`)


  for (let x in IEnergy.overclock) {
    var sel = IEnergy.overclock[x]

    if (x == "overclock1" || x == "overclock3" || x == "overclock5") {
      var eff = format(sel.effect)
    } else { eff = format(sel.effect) }

    update(x, `<div>${sel.description}${eff}</div>`)

    if (sel.active) {
      document.getElementById(x).style.background = "#174d00"
    }
    else {
      document.getElementById(x).style.background = ""
    }
  }

  //potential
  update("potentialInfo", `<div>POTENTIAL: ${format(IGameData.potential)} / ${format(IGameData.maxPotential)}</div><div>CANT BE BOOSTED BY OTHER FEATURES</div><div>POTENTIAL</div>`)

  //breakthrough

  update("breakthrough1Button", `<div style="font-size: 2cqw;">BUILD THE FIRST STRATUM</div>
    <div >REQUIRES 1E20 POTENTIAL/S</div>                             
                                 <div><i>Resets everything</i></div>
                                 <i>Unlocks the Space Stage</i>
                                 <div style="font-size: 2cqw;">WORK IN PROGRESS</div>`)



  if (IGameData.potentialProd >= (5 * 10 ** 18)) {
    document.getElementById("breakthrough1Button").style.background = "#004526"
  }
  else {
    document.getElementById("breakthrough1Button").style.background = "#8d2424"
  }
}

function visualScreen() {
  for (let x in IScreen.screens) {

    var sel = IScreen.screens[x]
    //funzione che li mostra se sono attivi

    //funzione che li riempie
    update(x, `<div>${sel.name}</div><div>${sel.feature1}</div><div>${sel.feature2}</div>`)
  }
}

function actuatorExpansor() {
  for (let x in IExpansor.monuments) {
    var selExp = IExpansor.monuments[x];

    if (sec(IGameData.cellsProd) >= selExp.req1 &&
      sec(IGameData.assimilatedProd) >= selExp.req2 &&
      sec(IGameData.energyProd) >= selExp.req3 &&
      sec(IGameData.potentialProd) >= selExp.req4) {
      selExp.active = true;
    }
  }
}

function visualAutomation() {

  for (let x in IAutomation.automators) {
    var sel = IAutomation.automators[x]

    if (sel.active) {
      document.getElementById(x).style.background = "#174d00"
    }
    else {
      document.getElementById(x).style.background = ""
    }

    update(x, `<b>${sel.name}</b>
               <div>${sel.description}</div>`)
  }
}

function automationActuator() {
  if (IAutomation.automators.automation1.active) {
    if (IExpansor.expansors.expansor1.level < IExpansor.expansors.expansor1.maxLevel) {
      upgradeExpansor("expansor1")
    }
  }

  if (IAutomation.automators.automation2.active) {
    if (IExpansor.expansors.expansor2.level < IExpansor.expansors.expansor2.maxLevel) {
      upgradeExpansor("expansor2")
    }
  }

  if (IAutomation.automators.automation3.active) {
    if (IExpansor.expansors.expansor3.level < IExpansor.expansors.expansor3.maxLevel) {
      upgradeExpansor("expansor3")
    }
  }
}

//EQUIP BUTTON
function equipComponent(id, removeType) {

  if (id == "" && removeType != null) {

    if (IComponents.equipped[removeType] == "") {
      return
    } else {
      IComponents.components[IComponents.equipped[removeType]].active = false
      IComponents.equipped[removeType] = ""
    }

    return
  }

  var Mytag1 = IComponents.components[id].tag1

  if (IComponents.components[id].active == false) {
    for (let x in IComponents.components) {

      var other = IComponents.components[x]
      if (other.active == true && other.tag1 == Mytag1 && other != id) {
        other.active = false;
      }
    }

    IComponents.components[id].active = true;
    IComponents.equipped[Mytag1] = id;
  }

  else if (IComponents.components[id].active == true || id == "") {
    IComponents.components[id].active = false
    IComponents.equipped[Mytag1] = ""
  }
}

function buy(item, propertyToUpdate, priceIdentity, price, effect) {
  if (IGameData[priceIdentity] >= price) {
    // Modifica il valore della proprietà specificata in base al tipo di effetto
    if (typeof effect == "number") {
      item[propertyToUpdate] += effect;  // Aggiorna la proprietà specificata (ad esempio: 'level', 'count', ecc.)
    }

    if (typeof effect == "boolean") {
      item[propertyToUpdate] = effect ? 1 : 0;  // Aggiorna la proprietà con un valore booleano
    }

    // Dopo l'acquisto, riduci le risorse del giocatore
    IGameData[priceIdentity] -= price;
    valuesSetter()
    return true
  }

  valuesSetter()
}

//VALUTE

function fullSetter() {
  valuesSetter()
  valuesSetterDinamic()
}


function valuesSetter() {

  //tickSpeed
  var tickSpeed2 = IGameData.tickSpeedMult;

  if (ISoftware.assimilationCenter.button6.active) {
    var tickSpeed3 = ISoftware.assimilationCenter.button6.effect
  }
  else { tickSpeed3 = 1 }


  IGameData.tickSpeedProd = 1 * tickSpeed2 * tickSpeed3
  IGameData.tickSpeed = IGameData.tickSpeedProd

  //components

  //TIER1

  /*
  if (ISoftware.assimilationCenter.button9.active) {
    var componentEf1 = ISoftware.assimilationCenter.button9.effect
  }
  else { componentEf1 = 1 }
  */
  var softUpgrade3 = ISoftware.upgrades.softUpgrade3.effect

  if (IComponents.components.token5.active) {
    var compToken5 = IComponents.components.token5.effect1
  }
  else { compToken5 = 0 }

  if (IEnergy.energyUpgrades.energyButton3.level > 0) {
    var energy3 = IEnergy.energyUpgrades.energyButton3.effect
  }
  else {
    energy3 = 0
  }


  var token1 = IComponents.components.token1

  token1.level = token1.level;
  token1.maxLevel = 100;
  token1.description = `<div>CELLS/S: × ${format(token1.effect1)}</div>`
  token1.effect1 = Math.pow(token1.level + compToken5, 1.2)/* * componentEf1*/; //1.2
  token1.price = Math.pow(2, token1.level) / softUpgrade3;

  var token2 = IComponents.components.token2

  token2.level = token2.level;
  token2.maxLevel = 10;
  token2.effect1 = ((token2.level + compToken5) * 0.5 + 1)/* * componentEf1*/;
  token2.description = `<div>(EXPANSION: ${format(IGameData.expansionProd)})</div><div>EXPANSION/S: ^ ${format(token2.effect1)}</div>`
  token2.price = Math.pow(100, 1.5 + token2.level) / softUpgrade3;

  var token3 = IComponents.components.token3

  token3.level = token3.level;
  token3.maxLevel = 100;
  token3.description = `<div>ALL VALUTE/S: × ${format(token3.effect1)}</div>`
  token3.effect1 = ((token3.level + compToken5) * 0.2 + 1)/* * componentEf1*/;
  token3.price = (Math.pow(10, 15.5) * (Math.pow(1.35, token3.level))) / softUpgrade3;

  var token4 = IComponents.components.token4

  token4.level = token4.level;
  token4.maxLevel = 5;
  token4.description = `<div>CELLS/S: -90%</div><div>POPULATION/S: × ${format(token4.effect1)}</div>`
  token4.effect1 = Math.pow(10, token4.level + compToken5)/* * componentEf1*/;
  token4.price = (Math.pow(10, 24) * Math.pow(1000, token4.level)) / softUpgrade3;

  var token5 = IComponents.components.token5

  token5.level = token5.level;
  token5.maxLevel = 3;
  token5.description = `<div>ALL EQUIPPED COMPONENTS LEVEL: + ${format(token5.effect1)}</div>`
  token5.effect1 = token5.level;
  token5.price = (Math.pow(10, 37) * Math.pow((10 ** 9), token5.level)) / softUpgrade3;

  var token6 = IComponents.components.token6

  token6.level = token6.level;
  token6.maxLevel = 5;
  token6.description = `<div>ALL VALUTES: -90%</div><div>ENERGY/S: × ${format(token6.effect1)}</div>`
  token6.effect1 = Math.pow(10, token6.level)/* * componentEf1*/;
  token6.price = (Math.pow(10, 39) * Math.pow((10 ** 7), token6.level)) / softUpgrade3;

  var token7 = IComponents.components.token7

  token7.level = token7.level;
  token7.maxLevel = 5;
  token7.description = `<div>AXIOMS: + ${format(token7.effect1)}</div>`
  token7.effect1 = 0.1 * token7.level;
  token7.price = (Math.pow(10, 50) * Math.pow(Math.pow(10, 10), token7.level)) / softUpgrade3;

  var token8 = IComponents.components.token8

  token8.level = token8.level;
  token8.maxLevel = 1;
  token8.description = `<div>ENERGY/S: -50% COMPOUND</div><div>CELLS/S: ×${format(token8.effect1)}</div>`
  token8.effect1 = Math.pow(token1.level + energy3 + compToken5, 1.7)/* * componentEf1*/; //1.2
  token8.price = 0;

  var token9 = IComponents.components.token9

  token9.level = token9.level;
  token9.maxLevel = 1;
  token9.description = `<div>ENERGY/S: -50% COMPOUND</div><div>(EXPANSION: ${format(IGameData.expansionProd)})</div><div>EXPANSION/S: ^ ${format(token9.effect1)}</div>`
  token9.effect1 = ((token2.level + energy3 + compToken5) * 0.5 + 1.5)/* * componentEf1*/;
  token9.price = 0;

  var token10 = IComponents.components.token10

  token10.level = token10.level;
  token10.maxLevel = 1;
  token10.description = `<div>ENERGY/S: -50% COMPOUND</div><div>ALL VALUTES/S: × ${format(token10.effect1)}</div>`
  token10.effect1 = ((token3.level + energy3 + compToken5) * 1 + 1)/* * componentEf1*/;
  token10.price = 0

  var token11 = IComponents.components.token11

  token11.level = token11.level;
  token11.maxLevel = 1;
  token11.description = `<div>ENERGY/S: -50% COMPOUND</div><div>CELLS/S: -90%</div><div>POPULATION/S: × ${format(token11.effect1)}</div>`
  token11.effect1 = Math.pow(13, token4.level + energy3 + compToken5)/* * componentEf1*/;
  token11.price = 0

  var token12 = IComponents.components.token12

  token12.level = token12.level;
  token12.maxLevel = 10;
  token12.description = `<div>POTENTIAL/S: × ${format(token12.effect1)}</div>`
  token12.effect1 = Math.pow(1.7, token12.level + compToken5)/* * componentEf1*/;
  token12.price = Math.pow(10, 124) * Math.pow(10, token12.level) / softUpgrade3
  //expansor

  if (IExpansor.expansorsUpgrades.expansor1U2.active) {
    var selExpansor1 = IExpansor.expansorsUpgrades.expansor1U2.effect
  }
  else { selExpansor1 = 1 }

  if (IExpansor.expansorsUpgrades.expansor2U2.active) {
    var selExpansor2 = IExpansor.expansorsUpgrades.expansor2U2.effect
  }
  else { selExpansor2 = 1 }

  var selExp = IExpansor.expansors.expansor1

  if (IExpansor.expansors.expansor2.level > 0) {
    var expansor2Level = IExpansor.expansors.expansor2.effect
  }
  else { expansor2Level = 0 }

  if (IExpansor.expansors.expansor3.level > 0) {
    var expansor3Level = IExpansor.expansors.expansor3.effect
  }
  else { expansor3Level = 0 }


  if (IExpansor.expansors.expansor3.level > 0) {
    var expansor3_3U2 = IExpansor.expansorsUpgrades.expansor3U2.effect
  }
  else { expansor3_3U2 = 1 }

  if (ISoftware.assimilationCenter.button7.active) {
    var assimilationButton7 = ISoftware.assimilationCenter.button7.effect
  }
  else { assimilationButton7 = 1 }

  if (ISoftware.upgrades.softUpgrade13.level > 0) {
    var expansor4Eff = ISoftware.upgrades.softUpgrade13.effect
  }
  else {
    expansor4Eff = 1;
  }

  selExp.level = selExp.level;
  selExp.maxLevel = 49 + expansor2Level;
  selExp.effect = Math.pow(selExp.level, 2) * selExpansor1

  var result = f(100)
    .mul(f(1).add(f(1.30).pow(f(selExp.level))))
    .div(f(selExpansor2).mul(f(expansor3_3U2).mul(f(assimilationButton7))));

  selExp.price1 = result.toNumber();

  selExp = IExpansor.expansors.expansor2

  selExp.level = selExp.level;
  selExp.maxLevel = 49 + expansor3Level;
  selExp.effect = 7 * selExp.level;
  selExp.price1 = (100) * (1 + Math.pow(selExp.level, 2.5));

  selExp = IExpansor.expansors.expansor3

  selExp.level = selExp.level;
  selExp.maxLevel = 49;
  selExp.effect = 7 * selExp.level;
  selExp.price1 = (10 ** 4) * (1 + Math.pow(selExp.level, 6));

  selExp = IExpansor.expansors.expansor4

  selExp.level = selExp.level;
  selExp.maxLevel = 49;
  selExp.effect = 1 + Math.pow(selExp.level, 1.5) * Math.log(IGameData.potential + Math.E) * expansor4Eff;
  selExp.price1 = Math.pow(2.55, selExp.level) - 1;


  //expansor upgrades

  //1U1
  var sel = IExpansor.expansorsUpgrades.expansor1U1

  sel.effect = Math.pow(1.5, Math.log(IExpansor.expansors.expansor1.effect))

  //1U2
  var sel = IExpansor.expansorsUpgrades.expansor1U2

  sel.effect = 1 + IExpansor.expansors.expansor1.level * 0.02

  //2U1
  var sel = IExpansor.expansorsUpgrades.expansor2U1

  sel.effect = Math.pow(IExpansor.expansors.expansor2.level, 4)


  //2U2
  var sel = IExpansor.expansorsUpgrades.expansor2U2

  sel.effect = Math.pow(1.75, IExpansor.expansors.expansor2.level)

  //3U1
  var sel = IExpansor.expansorsUpgrades.expansor3U1

  sel.effect = Math.pow(1.1, IExpansor.expansors.expansor3.level)

  //3U2
  var sel = IExpansor.expansorsUpgrades.expansor3U2

  sel.effect = Math.pow(100, IExpansor.expansors.expansor3.level)

  //monuments

  var selMon = IExpansor.monuments.monument1

  selMon.req1 = (1 * 10 ** 3);
  selMon.req2 = 0;
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument2

  selMon.req1 = (1 * 10 ** 4);
  selMon.req2 = 0;
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument3

  selMon.req1 = (4 * 10 ** 4);
  selMon.req2 = 0;
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument4

  selMon.req1 = (2 * 10 ** 5);
  selMon.req2 = 0;
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument5

  selMon.req1 = (1 * 10 ** 6);
  selMon.req2 = 0;
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument6

  selMon.req1 = (1 * 10 ** 7);
  selMon.req2 = 8;
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument7

  selMon.req1 = (2 * 10 ** 11);
  selMon.req2 = 250;
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument8

  selMon.req1 = (1 * 10 ** 13);
  selMon.req2 = (500);
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument9

  selMon.req1 = (1 * 10 ** 20);
  selMon.req2 = (10 ** 4);
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument10

  selMon.req1 = (1 * 10 ** 25);
  selMon.req2 = (10 ** 10);
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument11

  selMon.req1 = (1 * 10 ** 7);
  selMon.req2 = 8;
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument12

  selMon.req1 = (1 * 10 ** 16);
  selMon.req2 = (10 ** 3);
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument13

  selMon.req1 = (1 * 10 ** 20);
  selMon.req2 = 10 ** 5;
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument14

  selMon.req1 = (1 * 10 ** 29);
  selMon.req2 = 0
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument15

  selMon.req1 = 0
  selMon.req2 = 10 ** 12;
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument16

  selMon.req1 = 0
  selMon.req2 = 0
  selMon.req3 = (1 * 10 ** 8);
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument17

  selMon.req1 = (1 * 10 ** 42)
  selMon.req2 = 0
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument18

  selMon.req1 = (1 * 10 ** 45)
  selMon.req2 = 0
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument19

  selMon.req1 = (1 * 10 ** 48)
  selMon.req2 = 0
  selMon.req3 = 0;
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument20

  selMon.req1 = (1 * 10 ** 60)
  selMon.req2 = (1 * 10 ** 15)
  selMon.req3 = (1 * 10 ** 15);
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument21

  selMon.req1 = 0
  selMon.req2 = (1 * 10 ** 20)
  selMon.req3 = 0
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument22

  selMon.req1 = 0
  selMon.req2 = (1 * 10 ** 55)
  selMon.req3 = 0
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument23

  selMon.req1 = 0
  selMon.req2 = 0
  selMon.req3 = (1 * 10 ** 41)
  selMon.req4 = 0;

  var selMon = IExpansor.monuments.monument24

  selMon.req1 = 0
  selMon.req2 = 0
  selMon.req3 = 0
  selMon.req4 = 250;

  var selMon = IExpansor.monuments.monument25

  selMon.req1 = 0
  selMon.req2 = 0
  selMon.req3 = 0
  selMon.req4 = (3 * 10 ** 5);

  var selMon = IExpansor.monuments.monument26

  selMon.req1 = 0
  selMon.req2 = 0
  selMon.req3 = 0
  selMon.req4 = (2 * 10 ** 11);
  //Software

  //softUpgrades


  //MAX POPULATION: ×
  var sel = ISoftware.upgrades.softUpgrade1

  sel.level = sel.level;
  sel.maxLevel = 6;
  sel.effect = Math.pow(10, sel.level)
  sel.price = Math.pow(15, 1 + sel.level)

  //POPULATION/S: ×
  var sel = ISoftware.upgrades.softUpgrade2

  sel.level = sel.level;
  sel.maxLevel = 10;
  sel.effect = Math.pow(2, sel.level)
  sel.price = Math.pow(5, 1 + sel.level)

  //T1 COMPONENTS Price: /
  var sel = ISoftware.upgrades.softUpgrade3

  sel.level = sel.level;
  sel.maxLevel = 4;
  sel.effect = Math.pow(10, sel.level)
  sel.price = 10 * Math.pow(10, 1 + sel.level)

  //POPULATION CENTER selectable: 
  var sel = ISoftware.upgrades.softUpgrade4

  sel.level = sel.level;
  sel.maxLevel = 2;
  sel.effect = sel.level
  sel.price = 10 * Math.pow(1000, 1 + sel.level)

  //MAX POPULATION: ×
  var sel = ISoftware.upgrades.softUpgrade5

  sel.level = sel.level;
  sel.maxLevel = 5;
  sel.effect = Math.pow(100, sel.level)
  sel.price = Math.pow(10, 8) * Math.pow(10 ** 4, 1 + sel.level)

  //ENERGY UPGRADES PRICE /:
  var sel = ISoftware.upgrades.softUpgrade6

  sel.level = sel.level;
  sel.maxLevel = 3;
  sel.effect = Math.pow(1000, sel.level)
  sel.price = Math.pow(10, 9) * Math.pow(10 ** 4, 1 + sel.level)

  //POPULATION CENTER selectable: 
  var sel = ISoftware.upgrades.softUpgrade7

  sel.level = sel.level;
  sel.maxLevel = 2;
  sel.effect = sel.level
  sel.price = Math.pow(10, 14) * Math.pow(10 ** 6, 1 + sel.level)

  //MAX POPULATION: ×
  var sel = ISoftware.upgrades.softUpgrade8

  sel.level = sel.level;
  sel.maxLevel = 7;
  sel.effect = Math.pow((10 ** 6), sel.level)
  sel.price = Math.pow(10, 20) * Math.pow(10 ** 6, 1 + sel.level)

  //CELLS boosts POPULATION/S
  var sel = ISoftware.upgrades.softUpgrade9

  sel.level = sel.level;
  sel.maxLevel = 4;
  sel.effect = Math.pow(1 + (0.05 * sel.level), Math.log(IGameData.cells))
  sel.price = Math.pow(10, 20) * Math.pow(10 ** 6, 1 + sel.level)

  //POPULATION CENTER selectable: 
  var sel = ISoftware.upgrades.softUpgrade10

  sel.level = sel.level;
  sel.maxLevel = 2;
  sel.effect = sel.level
  sel.price = Math.pow(10, 53) * Math.pow(10 ** 6, 1 + sel.level)

  //CELLS X
  var sel = ISoftware.upgrades.softUpgrade11

  sel.level = sel.level;
  sel.maxLevel = 5;
  sel.effect = Math.pow(50, sel.level)
  sel.price = Math.pow(10, 20) * Math.pow(10 ** 6, 1 + sel.level)

  //MAX POTENTIAL
  var sel = ISoftware.upgrades.softUpgrade12

  sel.level = sel.level;
  sel.maxLevel = 15;
  sel.effect = Math.pow(40, sel.level)
  sel.price = 5 * Math.pow(10, 3) * Math.pow(20, sel.level)

  //CLUSTER EFFECT
  var sel = ISoftware.upgrades.softUpgrade13

  sel.level = sel.level;
  sel.maxLevel = 10;
  sel.effect = Math.pow(2.5, sel.level)
  sel.price = 5 * Math.pow(10, 3) * Math.pow(50, sel.level)

  //POTENTIAL BOOSTS ALL VALUTES
  var sel = ISoftware.upgrades.softUpgrade14

  sel.level = sel.level;
  sel.maxLevel = 5;
  sel.effect = Math.pow(5, sel.level)
  sel.price = 2 * Math.pow(10, 4) * Math.pow(100, sel.level)


  var group = ISelUpgrade.group.group2
  var groupMaxNum = ISoftware.upgrades.softUpgrade4.effect
  group.maxNum = 1 + groupMaxNum

  var group = ISelUpgrade.group.group5
  var groupMaxNum = ISoftware.upgrades.softUpgrade7.effect
  group.maxNum = 1 + groupMaxNum

  var group = ISelUpgrade.group.group7
  var groupMaxNum = ISoftware.upgrades.softUpgrade10.effect
  group.maxNum = 1 + groupMaxNum

  //assimilationCenter

  if (ISoftware.upgrades.softUpgrade6.level > 0) {
    var softUp6 = ISoftware.upgrades.softUpgrade6.effect
  }
  else { softUp6 = 1 }

  //MAX ASSIMILATED X: 
  var sel = ISoftware.assimilationCenter.button1

  sel.effect = 10

  //boost CELLS/S by:

  var sel = ISoftware.assimilationCenter.button2

  sel.effect = 10

  //boost ASSIMILATION/S by:  

  var sel = ISoftware.assimilationCenter.button3

  sel.effect = 4

  //ASSIMILATED boosts ASSIMILATED/S:


  var sel = ISoftware.assimilationCenter.button4

  sel.effect = Math.log(IGameData.assimilated)


  //boost ENERGY/S by:

  var sel = ISoftware.assimilationCenter.button5

  sel.effect = 5

  //boost TICKSPEED by: 

  var sel = ISoftware.assimilationCenter.button6

  sel.effect = 2

  //CELLS/S reduces UNIT price: /

  var sel = ISoftware.assimilationCenter.button7

  sel.effect = Math.pow(1.1, Math.log(IGameData.cellsProd))

  //ENERGY boosts ENERGY/S: ×

  var sel = ISoftware.assimilationCenter.button8

  sel.effect = Math.log(Math.pow(IGameData.energy, 0.1))

  //EXPANSION/S: ×

  var sel = ISoftware.assimilationCenter.button9

  sel.effect = 10

  //ENERGY

  //total level communication 1
  var sel1 = IEnergy.energyUpgrades.energyButton1.level
  var sel2 = IEnergy.energyUpgrades.energyButton2.level
  var sel3 = IEnergy.energyUpgrades.energyButton3.level
  var sel4 = IEnergy.energyUpgrades.energyButton4.level

  var totalLevel = sel1 + sel2 + sel3 + sel4

  var adjuster = Math.floor(totalLevel / 3);
  var adjuster2 = Math.floor(adjuster / 2);

  totalLevel = sel1 + sel2 + sel3 + sel4 + adjuster + adjuster2

  //total level communication 2

  var sel5 = IEnergy.energyUpgrades.energyButton5.level
  var sel6 = IEnergy.energyUpgrades.energyButton6.level

  var totalLevel2 = sel5 + sel6

  var adjuster3 = Math.floor(totalLevel2 / 5)

  totalLevel2 = sel5 + sel6 - adjuster3

  //total level communication 3

  var sel7 = IEnergy.energyUpgrades.energyButton7.level
  var sel8 = IEnergy.energyUpgrades.energyButton8.level

  var totalLevel3 = sel7 + sel8

  if (IEnergy.energyUpgrades.energyButton2.level > 0) {
    var Button2Ef = IEnergy.energyUpgrades.energyButton2.effect
  }
  else { Button2Ef = 1 }


  if (ISoftware.upgrades.softUpgrade6.level > 0) {
    var softUp7 = ISoftware.upgrades.softUpgrade6.effect
  }
  else { softUp7 = 1 }

  //ENERGY/S
  var sel = IEnergy.energyUpgrades.energyButton1

  sel.level = sel.level
  sel.maxLevel = 5
  sel.effect = Math.pow(Math.log(2 + IGameData.energy), sel.level) * Button2Ef
  sel.price = (Math.pow(100, totalLevel) * Math.pow(10, 21)) / softUp7

  //some ENERGY UPGRADES X: 
  var sel = IEnergy.energyUpgrades.energyButton2

  sel.level = sel.level
  sel.maxLevel = 5
  sel.effect = Math.pow(1.5, sel.level)
  sel.price = (Math.pow(100, totalLevel) * Math.pow(10, 21)) / softUp7

  //All ENERGY COMPONENTS are STRONGER
  var sel = IEnergy.energyUpgrades.energyButton3

  sel.level = sel.level
  sel.maxLevel = 3
  sel.effect = sel.level
  sel.price = (Math.pow(100, totalLevel) * Math.pow(10, 21)) / softUp7

  //ENERGY boosts all VALUTES X: 
  var sel = IEnergy.energyUpgrades.energyButton4

  sel.level = sel.level
  sel.maxLevel = 5
  sel.effect = Math.pow(Math.log(3 + IGameData.energy), sel.level) * Button2Ef
  sel.price = (Math.pow(100, totalLevel) * Math.pow(10, 21)) / softUp7

  //OVERCLOCK effect X: 
  var sel = IEnergy.energyUpgrades.energyButton5

  sel.level = sel.level
  sel.maxLevel = 5
  sel.effect = sel.level
  sel.price = (Math.pow((10 ** 9), totalLevel2) * Math.pow(10, 72)) / softUp7

  //OVERCLOCK quantity: 
  var sel = IEnergy.energyUpgrades.energyButton6

  sel.level = sel.level
  sel.maxLevel = 5
  sel.effect = sel.level
  sel.price = (Math.pow((10 ** 9), totalLevel2) * Math.pow(10, 72)) / softUp7

  //POTENTIAL/S
  var sel = IEnergy.energyUpgrades.energyButton7

  sel.level = sel.level
  sel.maxLevel = 3
  sel.effect = sel.effect = Math.pow(1 + 0.1 * sel.level, Math.log(IGameData.potential))

  sel.price = Math.pow(10, 13) * Math.pow(100, totalLevel3)

  //Potential boosts cells/s
  var sel = IEnergy.energyUpgrades.energyButton8

  sel.level = sel.level
  sel.maxLevel = 3
  sel.effect = Math.pow(1 + 0.1 * sel.level, Math.log(IGameData.potential))
  sel.price = Math.pow(10, 13) * Math.pow(100, totalLevel3)

  if (IEnergy.energyUpgrades.energyButton5.level > 0) {
    var overclockEffect = IEnergy.energyUpgrades.energyButton5.level + 1
  }
  else { var overclockEffect = 1 }

  if (IEnergy.energyUpgrades.energyButton6.level > 0) {
    var overclockQuantity = IEnergy.energyUpgrades.energyButton6.level + 1
  }
  else { var overclockQuantity = 1 }
  //overclock

  //cells
  var ov = IEnergy.overclock.overclock1

  ov.effect = Math.pow(100, overclockEffect)

  var ov = IEnergy.overclock.overclock2

  ov.effect = Math.pow(1.05, overclockEffect)

  //population
  var ov = IEnergy.overclock.overclock3

  ov.effect = Math.pow(10, overclockEffect)

  var ov = IEnergy.overclock.overclock4

  ov.effect = Math.pow(1.03, overclockEffect)

  //energy
  var ov = IEnergy.overclock.overclock5

  ov.effect = Math.pow(100, overclockEffect)

  var ov = IEnergy.overclock.overclock6

  ov.effect = Math.pow(1.05, overclockEffect)

  ISelUpgrade.group.group6.maxNum = overclockQuantity
}

function valuesSetterDinamic() {

  var global1 = IEnergy.energyUpgrades.energyButton4.effect * ISoftware.upgrades.softUpgrade14.effect
  var global2 = ISoftware.upgrades.softUpgrade14.effect

  //cells
  if (IComponents.components.token1.active) {
    var cells1 = IComponents.components.token1.effect1
  }
  else { cells1 = 0 }

  if (IGameData.tickSpeed != 0) {
    var cells2 = IGameData.tickSpeed
  }
  else { cells2 = 1 }

  if (IGameData.expansion > 0) {
    var cells3 = IGameData.expansion
  }
  else { cells3 = 1 }

  if (IComponents.components.token3.active) {
    var cells4 = IComponents.components.token3.effect1
  }
  else { cells4 = 1 }

  if (IExpansor.expansorsUpgrades.expansor1U1.active) {
    var cells6 = IExpansor.expansorsUpgrades.expansor1U1.effect
  }
  else { cells6 = 0 }

  if (ISoftware.assimilationCenter.button2.active) {
    var cells7 = ISoftware.assimilationCenter.button2.effect
  }
  else { cells7 = 1 }

  if (IComponents.components.token8.active) {
    var cells8 = IComponents.components.token8.effect1
  }
  else { cells8 = 1 }

  if (IComponents.components.token10.active) {
    var cells9 = IComponents.components.token10.effect1
  }
  else { cells9 = 1 }

  if (IComponents.components.token4.active ||
    IComponents.components.token11.active
  ) {
    var cells10 = 0.1
  }
  else { cells10 = 1 }

  if (IEnergy.overclock.overclock1.active
  ) {
    var cells11 = IEnergy.overclock.overclock1.effect
  }
  else { cells11 = 1 }

  if (IEnergy.overclock.overclock2.active
  ) {
    var cells12 = IEnergy.overclock.overclock2.effect
  }
  else { cells12 = 1 }

  if (ISoftware.upgrades.softUpgrade11.level
  ) {
    var cells13 = ISoftware.upgrades.softUpgrade11.effect
  }
  else { cells13 = 1 }

  if (IEnergy.energyUpgrades.energyButton8.level > 0) {
    var cells14 = IEnergy.energyUpgrades.energyButton8.effect
  }
  else { cells14 = 1 }

  IGameData.cellsProd = Math.pow(((cells1 + cells6 + cells8) * cells3 * cells4 * cells7 * cells9 * cells10 * cells13 * cells14) * cells11 * cells2 * global1, cells12)

  IGameData.cells += IGameData.cellsProd

  //expansion

  var expansion1 = IExpansor.expansors.expansor1.effect
  var expansion2 = IGameData.tickSpeed

  if (IComponents.components.token2.active) {
    var expansion4 = IComponents.components.token2.effect1
  }
  else { expansion4 = 1 }

  if (IComponents.components.token3.active) {
    var expansion5 = IComponents.components.token3.effect1
  }
  else { expansion5 = 1 }

  if (IComponents.components.token9.active) {
    var expansion6 = IComponents.components.token9.effect1
  }
  else { expansion6 = 1 }

  if (IComponents.components.token10.active) {
    var expansion7 = IComponents.components.token10.effect1
  }
  else { expansion7 = 1 }

  if (ISoftware.assimilationCenter.button9.active) {
    var expansion8 = ISoftware.assimilationCenter.button9.effect
  }
  else { expansion8 = 1 }

  IGameData.expansionProd += ((expansion1 * expansion5 * expansion7 * expansion8) ** (expansion4 * expansion6)) * expansion2 * global1
  IGameData.expansion = Math.pow(1.5, Math.log(IGameData.expansionProd))


  //assimilatedProd

  var assimilated1 = ISoftware.upgrades.softUpgrade2.effect

  if (IComponents.components.token3.active) {
    var assimilated2 = IComponents.components.token3.effect1
  }
  else { assimilated2 = 1 }

  if (IComponents.components.token4.active) {
    var assimilated3 = IComponents.components.token4.effect1
  }
  else { assimilated3 = 1 }

  var assimilation4 = IGameData.tickSpeed


  if (ISoftware.assimilationCenter.button4.active) {
    var assimilated5 = ISoftware.assimilationCenter.button4.effect
  }
  else { assimilated5 = 1 }


  if (ISoftware.assimilationCenter.button3.active) {
    var assimilated6 = ISoftware.assimilationCenter.button3.effect
  }
  else { assimilated6 = 1 }

  if (IComponents.components.token10.active) {
    var assimilated7 = IComponents.components.token10.effect1
  }
  else { assimilated7 = 1 }

  if (IComponents.components.token11.active) {
    var assimilated8 = IComponents.components.token11.effect1
  }
  else { assimilated8 = 1 }

  if (IEnergy.overclock.overclock3.active
  ) {
    var assimilated9 = IEnergy.overclock.overclock3.effect
  }
  else { assimilated9 = 1 }

  if (IEnergy.overclock.overclock4.active
  ) {
    var assimilated10 = IEnergy.overclock.overclock4.effect
  }
  else { assimilated10 = 1 }

  if (ISoftware.upgrades.softUpgrade9.level
  ) {
    var assimilated11 = ISoftware.upgrades.softUpgrade9.effect
  }
  else { assimilated11 = 1 }

  if (checkShow("A2")) {
    var initialAssimilated = 1
  } else {
    initialAssimilated = 0;
  }

  IGameData.assimilatedProd = Math.pow((initialAssimilated * assimilated1 * assimilated2 * assimilated3 * assimilated5 * assimilated6 * assimilated7 * assimilated8 * assimilated9 * assimilated11) * assimilation4 * global1, assimilated10);

  if (IGameData.assimilated + IGameData.assimilatedProd > IGameData.maxAssimilated) {
    IGameData.assimilated = IGameData.maxAssimilated;
  }
  else {
    IGameData.assimilated += IGameData.assimilatedProd;
  }

  //assimilatedLimit

  var maxAssimilated1 = ISoftware.upgrades.softUpgrade1.effect

  if (ISoftware.assimilationCenter.button1.active) {
    var maxAssimilated2 = ISoftware.assimilationCenter.button1.effect
  }
  else { maxAssimilated2 = 1 }

  if (IExpansor.expansorsUpgrades.expansor2U1.active) {
    var maxAssimilated4 = IExpansor.expansorsUpgrades.expansor2U1.effect
  }
  else { maxAssimilated4 = 1 }

  if (ISoftware.upgrades.softUpgrade5.level > 0) {
    var maxAssimilated5 = ISoftware.upgrades.softUpgrade5.effect
  }
  else { maxAssimilated5 = 1 }

  if (ISoftware.upgrades.softUpgrade8.level > 0) {
    var maxAssimilated6 = ISoftware.upgrades.softUpgrade8.effect
  }
  else { maxAssimilated6 = 1 }

  IGameData.maxAssimilated = 15 * maxAssimilated1 * maxAssimilated2 * maxAssimilated4 * maxAssimilated5 * maxAssimilated6

  //energy

  if (IEnergy.energyUpgrades.energyButton1.level > 0) {
    var energy1 = IEnergy.energyUpgrades.energyButton1.effect
  }
  else { energy1 = 0 }

  var energy2 = IGameData.tickSpeedMult


  if (ISoftware.assimilationCenter.button5.active) {
    var energy3 = ISoftware.assimilationCenter.button5.effect
  }
  else { energy3 = 1 }


  if (IComponents.components.token3.active) {
    var energy4 = IComponents.components.token3.effect1
  }
  else { energy4 = 1 }

  if (IComponents.components.token10.active) {
    var energy5 = IComponents.components.token10.effect1
  }
  else { energy5 = 1 }

  if (IComponents.components.token6.active) {
    var energy6 = IComponents.components.token6.effect1
  }
  else { energy6 = 1 }

  if (IExpansor.expansorsUpgrades.expansor3U1.active) {
    var energy7 = IExpansor.expansorsUpgrades.expansor3U1.effect
  }
  else { energy7 = 1 }

  if (IEnergy.overclock.overclock5.active
  ) {
    var energy8 = IEnergy.overclock.overclock5.effect
  }
  else { energy8 = 1 }

  if (IEnergy.overclock.overclock6.active
  ) {
    var energy9 = IEnergy.overclock.overclock6.effect
  }
  else { energy9 = 1 }

  if (ISoftware.assimilationCenter.button8.active) {
    var energy10 = ISoftware.assimilationCenter.button8.effect
  }
  else { energy10 = 1 }

  var charged = 1
  if (IComponents.components.token8.active) {
    charged = charged - 0.5;
  }
  if (IComponents.components.token9.active) {
    charged = charged - 0.5;
  }
  if (IComponents.components.token10.active) {
    charged = charged - 0.5;
  }
  if (IComponents.components.token11.active) {
    charged = charged - 0.5;
  }
  if (charged < 0) {
    charged = 0;
  }

  IGameData.energyProd = Math.pow((energy1 * energy3 * energy4 * energy5) * energy2 * energy6 * energy7 * energy8 * energy10 * charged, energy9);
  IGameData.energy += IGameData.energyProd

  //potential
  var potential1 = IGameData.tickSpeedMult

  if (IExpansor.expansors.expansor4.level > 0) {
    var potential2 = IExpansor.expansors.expansor4.effect
  }
  else {
    potential2 = 0
  }

  if (IComponents.components.token12.active) {
    var potential3 = IComponents.components.token12.effect1
  }
  else {
    potential3 = 1
  }

  if (IEnergy.energyUpgrades.energyButton7.level > 0) {
    var potential4 = IEnergy.energyUpgrades.energyButton7.effect
  }
  else { potential4 = 1 }


  IGameData.potentialProd = potential2 * potential1 * potential3 * potential4 * global2


  if (IGameData.potential + IGameData.potentialProd > IGameData.maxPotential) {
    IGameData.potential = IGameData.maxPotential;
  }
  else {
    IGameData.potential += IGameData.potentialProd;
  }

  //maxPotential

  if (ISoftware.upgrades.softUpgrade12.level > 0) {
    var maxPotential1 = ISoftware.upgrades.softUpgrade12.effect
  }
  else {
    maxPotential1 = 1;
  }

  IGameData.maxPotential = (10 ** 4) * maxPotential1
}

//VALUES SETTER FIXED

//BUY ZONE

//options
//save
document.getElementById("resetSave").onclick = function () {
  changePage("options", "resetScreen")
}

document.getElementById("acceptReset").onclick = function () {
  changePage("options", "out")
  resetSave()
}

document.getElementById("refuseReset").onclick = function () {
  changePage("options", "out")
}

document.getElementById("exportSave").onclick = function () {
  exportSave()
}

document.getElementById("importSave").onclick = function () {
  importSave()
}
//exportSave

//importSave

//TABS
document.getElementById("coreTab").onclick = function () {
  changePage("selector", "core")
}

document.getElementById("hardwareTab").onclick = function () {
  changePage("selector", "hardware")
}

document.getElementById("optionsTab").onclick = function () {
  changePage("selector", "options")
}

document.getElementById("progressTab").onclick = function () {
  changePage("selector", "progress")
}

//components equip & levelup

document.getElementById("componentsLevelUp").onclick = function () {
  let selectedComponent = IComponents.components[IComponents.selected];

  // Chiama la funzione buy passando l'oggetto, la proprietà da aggiornare e i parametri di prezzo ed effetto
  if (selectedComponent.level < selectedComponent.maxLevel) {
    buy(selectedComponent, 'level', selectedComponent.priceIdentity, selectedComponent.price, 1);
  }

}

document.getElementById("componentsEquip").onclick = function () {
  equipComponent(IComponents.selected)
}

//componentsLoadout Save

document.getElementById("saveLoadout1").onclick = function () {
  componentsLoadoutSave(1)
}

document.getElementById("saveLoadout2").onclick = function () {
  componentsLoadoutSave(2)
}

document.getElementById("saveLoadout3").onclick = function () {
  componentsLoadoutSave(3)
}

//componentsLoadout Load
document.getElementById("loadLoadout1").onclick = function () {
  componentsLoadoutLoad(1)
}

document.getElementById("loadLoadout2").onclick = function () {
  componentsLoadoutLoad(2)
}

document.getElementById("loadLoadout3").onclick = function () {
  componentsLoadoutLoad(3)
}

//componentsLoadout Name
document.getElementById("loadoutName1").onmouseenter = function () {
  componentsLoadoutName(1, true);
}

document.getElementById("loadoutName2").onmouseenter = function () {
  componentsLoadoutName(2, true);
}

document.getElementById("loadoutName3").onmouseenter = function () {
  componentsLoadoutName(3, true);
}

document.getElementById("loadoutName1").onmouseleave = function () {
  componentsLoadoutName(1, false);
}

document.getElementById("loadoutName2").onmouseleave = function () {
  componentsLoadoutName(2, false);
}

document.getElementById("loadoutName3").onmouseleave = function () {
  componentsLoadoutName(3, false);
}

//Expansor

document.getElementById("expansor1Button").onclick = function () {
  let expansor = IExpansor.expansors.expansor1;

  if (IExpansor.expansors.expansor1.level < IExpansor.expansors.expansor1.maxLevel) {
    buy(expansor, 'level', expansor.priceIdentity, expansor.price1, 1);
  }
}

document.getElementById("expansor2Button").onclick = function () {
  let expansor = IExpansor.expansors.expansor2;

  if (IExpansor.expansors.expansor2.level < IExpansor.expansors.expansor2.maxLevel) {
    buy(expansor, 'level', expansor.priceIdentity, expansor.price1, 1);
  }
}

document.getElementById("expansor3Button").onclick = function () {
  let expansor = IExpansor.expansors.expansor3;

  if (IExpansor.expansors.expansor3.level < IExpansor.expansors.expansor3.maxLevel) {
    buy(expansor, 'level', expansor.priceIdentity, expansor.price1, 1);
  }
}

document.getElementById("expansor4Button").onclick = function () {
  let expansor = IExpansor.expansors.expansor4;

  if (IExpansor.expansors.expansor4.level < IExpansor.expansors.expansor4.maxLevel) {
    buy(expansor, 'level', expansor.priceIdentity, expansor.price1, 1);
  }
}

function upgradeExpansor(exp) {
  var sel = IExpansor.expansors[exp]
  var valute = IGameData

  var ac = true;

  if (!(valute[sel.priceIdentity] >= sel.price1)) {
    ac = false
  }

  //automation


  if (ac && exp == "expansor1" && IAutomation.automators.automation1.active) {

    sel.level += 1;
    valuesSetter()
    return
  }
  if (ac && exp == "expansor2" && IAutomation.automators.automation2.active) {
    sel.level += 1;
    valuesSetter()
    return
  }
  if (ac && exp == "expansor3" && IAutomation.automators.automation3.active) {
    sel.level += 1;
    valuesSetter()
    return
  }


  if (ac) {
    buy(sel, 'level', sel.priceIdentity, sel.price1, 0)
    sel.level += 1;
    valuesSetter()
  }
}

document.getElementById("expansor1U1").onclick = function () {
  assignGroup(IExpansor.expansorsUpgrades, "expansor1U1")
}

document.getElementById("expansor1U2").onclick = function () {
  assignGroup(IExpansor.expansorsUpgrades, "expansor1U2")
}

document.getElementById("expansor2U1").onclick = function () {
  assignGroup(IExpansor.expansorsUpgrades, "expansor2U1")
}

document.getElementById("expansor2U2").onclick = function () {
  assignGroup(IExpansor.expansorsUpgrades, "expansor2U2")
}

document.getElementById("expansor3U1").onclick = function () {
  assignGroup(IExpansor.expansorsUpgrades, "expansor3U1")
}

document.getElementById("expansor3U2").onclick = function () {
  assignGroup(IExpansor.expansorsUpgrades, "expansor3U2")
}

function assignGroup(obj, element) {
  var sel = obj[element]
  var selGroup = ISelUpgrade.group[sel.group]


  if (sel.active) {
    sel.active = false
    selGroup.num = selGroup.num - 1;
  }
  else {
    if (selGroup.num < selGroup.maxNum) {
      sel.active = true
      selGroup.num += 1;
      selGroup.lastSel = element

    } else {
      sel.active = true

      obj[selGroup.lastSel].active = false
      selGroup.lastSel = element

    }
  }
}

function nullGroup(obj, element) {
  var sel = obj[element]
  var selGroup = ISelUpgrade.group[sel.group]

  if (sel.active) {
    sel.active = false
    selGroup.num = selGroup.num - 1;
  }
}

//assimilatedUpgrades


document.getElementById("softUpgrade1").onclick = function () {
  let sel = ISoftware.upgrades.softUpgrade1

  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("softUpgrade2").onclick = function () {
  let sel = ISoftware.upgrades.softUpgrade2
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("softUpgrade3").onclick = function () {
  let sel = ISoftware.upgrades.softUpgrade3
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("softUpgrade4").onclick = function () {
  let sel = ISoftware.upgrades.softUpgrade4
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("softUpgrade5").onclick = function () {
  let sel = ISoftware.upgrades.softUpgrade5
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("softUpgrade6").onclick = function () {
  let sel = ISoftware.upgrades.softUpgrade6
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("softUpgrade7").onclick = function () {
  let sel = ISoftware.upgrades.softUpgrade7
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("softUpgrade8").onclick = function () {
  let sel = ISoftware.upgrades.softUpgrade8
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("softUpgrade9").onclick = function () {
  let sel = ISoftware.upgrades.softUpgrade9
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("softUpgrade10").onclick = function () {
  let sel = ISoftware.upgrades.softUpgrade10
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("softUpgrade11").onclick = function () {
  let sel = ISoftware.upgrades.softUpgrade11
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("softUpgrade12").onclick = function () {
  let sel = ISoftware.upgrades.softUpgrade12
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("softUpgrade13").onclick = function () {
  let sel = ISoftware.upgrades.softUpgrade13
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("softUpgrade14").onclick = function () {
  let sel = ISoftware.upgrades.softUpgrade14
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}
//assimilationCenter

document.getElementById("assimilationBaseGridbutton1").onclick = function () {
  assignGroup(ISoftware.assimilationCenter, "button1")
}

document.getElementById("assimilationBaseGridbutton2").onclick = function () {
  assignGroup(ISoftware.assimilationCenter, "button2")

}

document.getElementById("assimilationBaseGridbutton3").onclick = function () {
  assignGroup(ISoftware.assimilationCenter, "button3")
}

document.getElementById("assimilationBaseGridbutton4").onclick = function () {
  assignGroup(ISoftware.assimilationCenter, "button4")
}

document.getElementById("assimilationBaseGridbutton5").onclick = function () {
  assignGroup(ISoftware.assimilationCenter, "button5")
}

document.getElementById("assimilationBaseGridbutton6").onclick = function () {
  assignGroup(ISoftware.assimilationCenter, "button6")
}

document.getElementById("assimilationBaseGridbutton7").onclick = function () {
  assignGroup(ISoftware.assimilationCenter, "button7")
}

document.getElementById("assimilationBaseGridbutton8").onclick = function () {
  assignGroup(ISoftware.assimilationCenter, "button8")
}

document.getElementById("assimilationBaseGridbutton9").onclick = function () {
  assignGroup(ISoftware.assimilationCenter, "button9")
}
//energy

//energy respec
document.getElementById("respecEnergy1").onclick = function () {
  i = 0;
  for (x in IEnergy.energyUpgrades) {
    if (i < 4) {
      IEnergy.energyUpgrades[x].level = 0;
    }
    i = i + 1
  }
}

document.getElementById("respecEnergy2").onclick = function () {
  i = 0;

  for (x in IEnergy.energyUpgrades) {
    if (i > 3 && i < 6) {
      IEnergy.energyUpgrades[x].level = 0;
    }
    i = i + 1
  }

  i = 0;
  for (x in IEnergy.overclock) {
    if (i > -1 && i < 7) {

      nullGroup(IEnergy.overclock, x)
    }
    i = i + 1
  }
}

document.getElementById("respecEnergy3").onclick = function () {
  i = 0;
  for (x in IEnergy.energyUpgrades) {
    if (i > 5 && i < 9) {
      IEnergy.energyUpgrades[x].level = 0;
    }
    i = i + 1
  }
}

//energy upgrades

document.getElementById("energyButton1").onclick = function () {
  let sel = IEnergy.energyUpgrades.energyButton1
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("energyButton2").onclick = function () {
  let sel = IEnergy.energyUpgrades.energyButton2
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("energyButton3").onclick = function () {
  let sel = IEnergy.energyUpgrades.energyButton3
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("energyButton4").onclick = function () {
  let sel = IEnergy.energyUpgrades.energyButton4
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("energyButton5").onclick = function () {
  let sel = IEnergy.energyUpgrades.energyButton5
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("energyButton6").onclick = function () {
  let sel = IEnergy.energyUpgrades.energyButton6
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("energyButton7").onclick = function () {
  let sel = IEnergy.energyUpgrades.energyButton7
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

document.getElementById("energyButton8").onclick = function () {
  let sel = IEnergy.energyUpgrades.energyButton8
  if (sel.level < sel.maxLevel) {
    buy(sel, 'level', sel.priceIdentity, sel.price, 1)
  }
}

//overclock

document.getElementById("overclock1").onclick = function () {
  assignGroup(IEnergy.overclock, "overclock1")
}

document.getElementById("overclock2").onclick = function () {
  assignGroup(IEnergy.overclock, "overclock2")
}

document.getElementById("overclock3").onclick = function () {
  assignGroup(IEnergy.overclock, "overclock3")
}

document.getElementById("overclock4").onclick = function () {
  assignGroup(IEnergy.overclock, "overclock4")
}

document.getElementById("overclock5").onclick = function () {
  assignGroup(IEnergy.overclock, "overclock5")
}

document.getElementById("overclock6").onclick = function () {
  assignGroup(IEnergy.overclock, "overclock6")
}

//automation
document.getElementById("automation1").onclick = function () {
  activateAutomation("automation1")
}

document.getElementById("automation2").onclick = function () {
  activateAutomation("automation2")
}

document.getElementById("automation3").onclick = function () {
  activateAutomation("automation3")
}

document.getElementById("opaqueScreen").onclick = function () {
  changePage("global", "out")
}

document.getElementById("opaqueScreen2").onclick = function () {
  changePage("options", "out")
}


document.getElementById("A1").onclick = function () {
  changePage("global", "hardware1")
}

document.getElementById("A2").onclick = function () {
  changePage("global", "software1")
}

document.getElementById("A3").onclick = function () {
  changePage("global", "hardware2")
}

document.getElementById("A4").onclick = function () {
  changePage("global", "software2")
}

document.getElementById("A5").onclick = function () {
  changePage("global", "communication1")
}

document.getElementById("A6").onclick = function () {
  changePage("global", "hardware3")
}

document.getElementById("A7").onclick = function () {
  changePage("global", "communication2")
}

document.getElementById("A8").onclick = function () {
  changePage("global", "software3")
}

document.getElementById("A9").onclick = function () {
  changePage("global", "communication3")
}


function activateAutomation(aut) {
  if (IAutomation.automators[aut].active) {
    IAutomation.automators[aut].active = false
    return
  }

  if (IAutomation.automators[aut].active == false) {
    IAutomation.automators[aut].active = true
    return
  }
}


//FUNCTION: PAUSE FUNCTION

function pauseFunctionPassive(fun, time, bool) {
  let SelFunction = fun + "CanCall";
  ICanCall[SelFunction] = false;
  if (time != null) {
    return new Promise(resolve => {
      setTimeout(() => {
        ICanCall[SelFunction] = true;
        resolve();
      }, time);
    });
  }
  if (time == null) {
    ICanCall[SelFunction] = bool
  }
}

//OFFLINE TIME

async function offProgress(time) {
  if (!waiting) {
    let tempTickSpeed = IGameData.tickSpeedMult

    IGameData.tickSpeedMult = sec(IGameData.tickSpeedMult) * time


    waiting = true;

    fullSetter()
    waiting = false;

    IGameData.tickSpeedMult = 0.05
  }
}

//FUNCTIONAL FUNCTIONS


//VISUAL LOOP

function format(number) {
  if (number != null) {
    // Se il numero è troppo grande, usiamo la notazione scientifica
    if (number === Infinity) {
      return "Infinity"; // oppure una rappresentazione personalizzata
    }

    let exponent = Math.floor(Math.log10(number));
    let mantissa = number / Math.pow(10, exponent);

    // Se il numero è troppo grande, mantieni la notazione scientifica
    if (exponent > 308) {
      return mantissa.toFixed(2) + "e+" + exponent;
    }

    // Formatta numeri piccoli in maniera più leggibile
    if (exponent < 3) {
      return number.toFixed(1);
    }

    return mantissa.toFixed(2) + "e" + exponent;
  }

  return number;
}

function f(number) {
  var formNum = new Decimal(number);

  return formNum
}

function unlockShow(show, visibility) {
  let showableItem = IShowableClass.showable
  for (let a in showableItem) {
    if (a == show) {
      if (visibility == false) {
        showableItem[show] = false;
        document.getElementById(a).style.display = "none";
      }
      if (visibility == true) {
        showableItem[show] = true;
        document.getElementById(a).style.display = "";
      }
    }
  }
}

function unlockShowAll(visibility) {
  let showableItem = IShowableClass.showable
  for (let a in showableItem) {
    const keys = Object.keys(showableItem[a]);
    for (let key of keys) {
      if (visibility === false) {
        document.getElementById(key).style.display = "none";
      }
      if (visibility === true) {
        document.getElementById(key).style.display = "";
      }
    }
  }
}

function checkShow(show) {
  let showableItem = IShowableClass.showable
  for (let a in showableItem) {
    if (a == show) {
      var value = showableItem[a]
      return value;
    }
  }
}

function loopShow() {
  let showableItem = IShowableClass.showable
  for (let a in showableItem) {
    const value = showableItem[a];
    if (value == false) {
      if (document.getElementById(a) == null) {
      }
      document.getElementById(a).style.display = "none";
    }
    if (value == true) {
      document.getElementById(a).style.display = "";
    }
  }

  //initial

  if (IShowableClass.init) {
    ITopProgress.actualProgress = 1;

    unlockShow("hardwareSummary", true)
    unlockShow("softwareSummary", false)
    unlockShow("communicationSummary", false)
    unlockShow("visualModule2", false)
    unlockShow("visualModule3", false)

    //kardashevs
    unlockShow("progressTab", true)

    unlockShow("A1", false)
    unlockShow("A2", false)
    unlockShow("A3", false)
    unlockShow("A4", false)
    unlockShow("A5", false)
    unlockShow("A6", false)
    unlockShow("A7", false)
    unlockShow("A8", false)
    unlockShow("A9", false)
    //expansors
    unlockShow("expansor1", true)
    unlockShow("expansor2", true)
    unlockShow("expansor3", true)
    unlockShow("expansor4", true)

    //monuments

    unlockShow("monument1", true)
    unlockShow("monument2", false)
    unlockShow("monument3", false)
    unlockShow("monument4", false)
    unlockShow("monument5", false)
    unlockShow("monument6", true)
    unlockShow("monument7", false)
    unlockShow("monument8", false)
    unlockShow("monument9", false)
    unlockShow("monument10", false)
    unlockShow("monument11", true)
    unlockShow("monument12", false)
    unlockShow("monument13", false)
    unlockShow("monument14", true)
    unlockShow("monument15", true)
    unlockShow("monument16", true)
    unlockShow("monument17", true)
    unlockShow("monument18", false)
    unlockShow("monument19", false)
    unlockShow("monument20", false)
    unlockShow("monument21", true)
    unlockShow("monument22", true)
    unlockShow("monument23", false)
    unlockShow("monument24", true)
    unlockShow("monument25", false)
    unlockShow("monument26", false)

    //population upgrades

    unlockShow("assimilation1", true)
    unlockShow("assimilation2", true)
    unlockShow("softUpgrade1", true)
    unlockShow("softUpgrade2", true)
    unlockShow("softUpgrade3", true)
    unlockShow("softUpgrade4", false)
    unlockShow("softUpgrade5", true)
    unlockShow("softUpgrade6", true)
    unlockShow("softUpgrade7", false)
    unlockShow("softUpgrade8", true)
    unlockShow("softUpgrade9", true)
    unlockShow("softUpgrade10", false)
    unlockShow("softUpgrade11", true)
    unlockShow("softUpgrade12", false)
    unlockShow("softUpgrade13", false)
    unlockShow("softUpgrade14", false)

    //population center

    unlockShow("software1assimilationCenterInfo", false)
    unlockShow("software1assimilationCenter", false)
    unlockShow("assimilationBaseGridbutton1", true)
    unlockShow("assimilationBaseGridbutton2", true)
    unlockShow("assimilationBaseGridbutton3", true)

    unlockShow("software2assimilationCenterInfo", false)
    unlockShow("software2assimilationCenter", false)
    unlockShow("assimilationBaseGridbutton1", true)
    unlockShow("assimilationBaseGridbutton2", true)
    unlockShow("assimilationBaseGridbutton3", true)

    IShowableClass.init = false;
  }

  //valutes

  if(IGameData.cells >= 100){
    unlockShow("hardwareTab", true)
  }

  if(checkShow("hardwareTab")){
    unlockShow("A1", true)
  }

  if (checkShow("A2")) {
    unlockShow("assimilatedValute", true)
    unlockShow("softwareSummary", true)
  }

  if (checkShow("A5")) {
    unlockShow("energyValute", true)
  }

  if (checkShow("core")) {
    unlockShow("core", true)
  }

  if (ITopProgress.progress.p1Check()) {
    unlockShow("hardwareTab", true)
    if (ITopProgress.actualProgress < 2) {
      ITopProgress.actualProgress = 2;
      unlockShow("p2", true)
      
    }
  }

  if (ITopProgress.progress.p2Check()) {
    if (ITopProgress.actualProgress < 3) {
      ITopProgress.actualProgress = 3;
      unlockShow("p3", true)
    }
  }


  if (ITopProgress.progress.p3Check()) {
    if (ITopProgress.actualProgress < 4) {
      ITopProgress.actualProgress = 4;
      unlockShow("p4", true)
    }
  }

  if (ITopProgress.progress.p4Check()) {
    if (ITopProgress.actualProgress < 5) {
      ITopProgress.actualProgress = 5;
      unlockShow("p5", true)
    }
  }

  if (ITopProgress.progress.p5Check()) {
    if (ITopProgress.actualProgress < 6) {
      ITopProgress.actualProgress = 6;
      unlockShow("p6", true)
    }
  }

  if (ITopProgress.progress.p6Check()) {
    if (ITopProgress.actualProgress < 7) {
      ITopProgress.actualProgress = 6;
      unlockShow("p6", true)
    }
  }


  //expansor

  //expansor upgrades


  if (ITopProgress.actualProgress > 2) {
    unlockShow("expansor1U1", true)
    unlockShow("expansor1U2", true)
  }

  if (ITopProgress.actualProgress > 3) {
    unlockShow("expansor2U1", true)
    unlockShow("expansor2U2", true)
    unlockShow("expansor3", true)
  }

  //monuments

  if (IExpansor.monuments.monument1.active) {
    unlockShow("token2", true)
    unlockShow("monument2", true)
  }

  if (IExpansor.monuments.monument2.active) {
    unlockShow("automation1", true)
    unlockShow("monument3", true)
  }

  if (IExpansor.monuments.monument3.active) {
    unlockShow("expansor1U1", true)
    unlockShow("expansor1U2", true)
    unlockShow("monument4", true)
  }

  if (IExpansor.monuments.monument4.active) {
    ISelUpgrade.group.group1.maxNum = 2;
    unlockShow("monument5", true)
  }

  if (IExpansor.monuments.monument5.active) {
    unlockShow("A2", true)
    unlockShow("A3", true)

    ICanvas.screen.line1.active = true;
    ICanvas.screen.line2.active = true;
  }

  if (IExpansor.monuments.monument6.active) {
    unlockShow("token3", true)
    unlockShow("visualModule2", true)
    unlockShow("monument7", true)
  }

  if (IExpansor.monuments.monument7.active) {
    unlockShow("automation2", true)
    unlockShow("monument8", true)
  }

  if (IExpansor.monuments.monument8.active) {
    unlockShow("expansor2U1", true)
    unlockShow("expansor2U2", true)
    unlockShow("monument9", true)
  }

  if (IExpansor.monuments.monument9.active) {
    ISelUpgrade.group.group3.maxNum = 2;
    unlockShow("monument10", true)
  }

  if (IExpansor.monuments.monument10.active) {
    unlockShow("A6", true)

    ICanvas.screen.line5.active = true;
  }

  if (IExpansor.monuments.monument11.active) {
    unlockShow("software1assimilationCenterInfo", true)
    unlockShow("software1assimilationCenter", true)
    unlockShow("softUpgrade4", true)
    unlockShow("monument12", true)
  }

  if (IExpansor.monuments.monument12.active) {
    unlockShow("token4", true)
    unlockShow("monument13", true)
  }

  if (IExpansor.monuments.monument13.active) {
    unlockShow("A5", true)
    unlockShow("energyValute", true)

    ICanvas.screen.line3.active = true;
  }

  if (IExpansor.monuments.monument10.active &&
    IExpansor.monuments.monument13.active
  ) {
    unlockShow("A4", true)

    ICanvas.screen.line4.active = true;
    ICanvas.screen.line6.active = true;
  }

  if (IExpansor.monuments.monument14.active) {
    unlockShow("token8", true)
    unlockShow("token9", true)
    unlockShow("components1Tier2", true)
  }

  if (IExpansor.monuments.monument15.active) {
    unlockShow("token10", true)
    unlockShow("token11", true)
    unlockShow("components2Tier2", true)
  }

  if (IExpansor.monuments.monument16.active) {
    unlockShow("visualModule3", true)
    unlockShow("communicationSummary", true)
    unlockShow("token5", true)
    unlockShow("token6", true)
  }

  if (IExpansor.monuments.monument17.active) {
    unlockShow("expansor3U1", true)
    unlockShow("expansor3U2", true)
    unlockShow("monument18", true)
  }

  if (IExpansor.monuments.monument18.active) {
    ISelUpgrade.group.group4.maxNum = 2;
    unlockShow("monument19", true)
  }

  if (IExpansor.monuments.monument19.active) {
    unlockShow("automation3", true)
    unlockShow("monument20", true)
  }

  if (IExpansor.monuments.monument20.active) {
    unlockShow("A7", true)
    unlockShow("A8", true)

    ICanvas.screen.line7.active = true;
    ICanvas.screen.line8.active = true;
    ICanvas.screen.line9.active = true;
    ICanvas.screen.line10.active = true;
  }

  if (IExpansor.monuments.monument21.active) {
    unlockShow("software2assimilationCenterInfo", true)
    unlockShow("software2assimilationCenter", true)
    unlockShow("softUpgrade7", true)
  }

  if (IExpansor.monuments.monument22.active) {
    unlockShow("software3assimilationCenterInfo", true)
    unlockShow("software3assimilationCenter", true)
    unlockShow("softUpgrade10", true)
    unlockShow("monument23", true)
  }

  if (IExpansor.monuments.monument23.active) {
    unlockShow("A9", true)
    ICanvas.screen.line11.active = true;
    ICanvas.screen.line12.active = true;
    unlockShow("potentialValute", true)
  }

  if (IExpansor.monuments.monument24.active) {
    unlockShow("monument25", true)
    unlockShow("softUpgrade12", true)
    unlockShow("softUpgrade13", true)
    unlockShow("softUpgrade14", true)
  }

  if (IExpansor.monuments.monument25.active) {
    unlockShow("monument26", true)
    unlockShow("token12", true)
  }

  if (IExpansor.monuments.monument26.active) {
    unlockShow("respecEnergy3", true)
    unlockShow("energyGrid3", true)
    unlockShow("breakthrough1", true)
  }


  //assimilationCenter

  if (checkShow("assimilationCenter")) {
    unlockShow("assimilationBaseGridbutton1", true)
    unlockShow("assimilationBaseGridbutton2", true)
    unlockShow("assimilationBaseGridbutton3", true)
  }

  if (checkShow("software2assimilationCenter")) {
    unlockShow("assimilationBaseGridbutton4", true)
    unlockShow("assimilationBaseGridbutton5", true)
    unlockShow("assimilationBaseGridbutton6", true)
  }

}

function changePage(type, page) {
  if (type == "selector") {
    unlockShow("core", false)
    unlockShow("hardware", false)
    unlockShow("options", false)
    unlockShow("progress", false)

    unlockShow(page, true)
  }

  if (type == "global") {
    unlockShow("hardware1", false)
    unlockShow("hardware2", false)
    unlockShow("hardware3", false)
    unlockShow("software1", false)
    unlockShow("software2", false)
    unlockShow("software3", false)
    unlockShow("communication1", false)
    unlockShow("communication2", false)
    unlockShow("communication3", false)
    unlockShow("resetScreen", false)
    unlockShow("opaqueScreen", false)

    if (page != "out") {
      unlockShow("opaqueScreen", true)
      unlockShow(page, true)
    }
  }

  if(type == "options") {
    unlockShow("resetScreen", false)
    unlockShow("opaqueScreen2", false)

    if (page != "out") {
      unlockShow("opaqueScreen2", true)
      unlockShow(page, true)
    }
  }

}

function visualLoopFunction() {
  if (waiting == false) {

    manualVisualLoop();
    visualScreen();
    actuatorExpansor();
    visualValute();

    if (checkShow("core")) {
      if (IComponents.selected != null) {
        visualComponentInfo(IComponents.selected);
      }

      visualComponents();
    }

    if (checkShow("hardware")) {
      visualHardware();
      visualAutomation();
      visualSoftware()
      visualCommunication()
    }

    visualProgress();
    visualComponentsLoadout();
  }
}


var SaveGameLoop = window.setInterval(function () {
  saveGameData();
}, 1000);


var mainGameLoop = window.setInterval(function () {

  CanvasLines("screenCanvas");
  automationActuator()
  idleTimeChecker()
  fullSetter()
  visualLoopFunction()
  saveGameData();

}, 50)


function idleTimeChecker() {
  let diff = Date.now() - IGameData.lastTick

  let diffSec = diff / 1000;



  if (diffSec > IGameData.offProgressLimit) {
    diffSec = IGameData.offProgressLimit;
  }
  if (diffSec < 2) {
    diffSec = 1;
  }
  if (diffSec > 2) {
    offProgress(diffSec);
  }

  IGameData.lastTick = Date.now()

}

function manualVisualLoop() {
  loopShow();
}

function sec(x) {
  var temp = 1 / IGameData.tickSpeedMult;
  return x * temp
}

document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    exportSave()
  }
  if (document.hidden == false) {
    importSave()
    document.getElementById("Save").value = "";
  }
});
//AUTOMATION

function CanvasLines(selCanvas) {


  const canvas = document.getElementById(selCanvas);

  canvas.height = document.getElementById("hardware").offsetHeight;
  canvas.width = document.getElementById("hardware").offsetWidth;

  const canvasHeight = canvas.height

  const canvasWidth = canvas.width;

  if (selCanvas == "screenCanvas")
    for (let x in ICanvas.screen) {

      var sel = ICanvas.screen[x]

      x = canvas.getContext("2d")

      x.lineWidth = canvasWidth/100;

      curvedX = canvasWidth * sel.startX

      if (sel.active == true) {
        x.beginPath();

        x.moveTo(canvasWidth * sel.startX, canvasHeight * sel.startY)

        x.quadraticCurveTo(canvasWidth * sel.controlPX, canvasHeight * sel.controlPY, canvasWidth * sel.endX, canvasHeight * sel.endY);

        x.stroke();
      }
    }

}
function resetCanvas() {
  const c = document.getElementById("screenCanvas");
  const ctx = c.getContext("2d");

  // Clear the canvas using its actual width and height
  ctx.clearRect(0, 0, c.width, c.height);
}

//developer functions

function addCells(x) {
  IGameData.cells = IGameData.cellsProd
}

function addPopulation(x) {
  IGameData.assimilated = IGameData.assimilatedProd
}

function addEnergy(x) {
  IGameData.energy = IGameData.energyProd
}