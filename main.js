//control + shift + f: auto indent 

let gameData = [{
  cells: 0,
  cellsProd: 0,
  cellsProdActive: false,
  data: 0,
  dataProd: 0,
  dataProdActive: false,
  energy: 0,
  energyProd: 0,
  energyMax: 0,
  energyProdActive: false,
  tickSpeed: 1000,
  tickSpeedProd: 0,
  tickSpeedProdActive: false,

  tickspeed3: 1,

  //si calcola in sec
  offProgressLimit: 1800,

  lastTick: Date.now(),

  explorationResource1: 0,
  explorationResource1Prod: 0,
  explorationResource1ProdActive: false,

  topProgressCount: 0
}]

//ACCEPTED
let componentsEquipped = [
  {
    components1: "", components2: "", components3: ""
  }
]

let components = [

  {
    id: "token1", name: "Cells Producer", description1: "cells/s: ", description2: "cells/s X: ", level: 1, price: 0, effect1: 0, effect2: 0, identity1: "a_Base", identity2: "a_Base", active: false, image: 'images/token_1.png', tag1: "components1", tag2: "producer", tag3: ".", priceIdentity: "cells",
    levelActive: false, priceActive: false, effect1Active: false, effect2Active: false
  },
  {
    id: "token2", name: "Cells Booster", description1: "More cells -> More Cells/s X: ", description2: "-", level: 1, price: 0, effect1: 0, effect2: 0, identity1: "cell_Base", identity2: "a_Base", active: false, image: 'images/token_2.png', tag1: "components1", tag2: "booster", tag3: ".", priceIdentity: "cells",
    levelActive: false, priceActive: false, effect1Active: false, effect2Active: false
  },
  {
    id: "token3", name: "Multimaker", description1: "each resource: x", description2: "-", level: 1, price: 0, effect1: 0, effect2: 0, identity1: "a_Base", identity2: "a_Base", active: false, image: 'images/token_3.png', tag1: "components1", tag2: ".", tag3: ".", priceIdentity: "cells",
    levelActive: false, priceActive: false, effect1Active: false, effect2Active: false
  },
  {
    id: "token4", name: "Tick booster", description1: "tickspeed X: ", description2: "-", level: 1, price: 0, effect1: 0, effect2: 0, identity1: "cell_Base", identity2: "a_Base", active: false, image: 'images/token_4.png', tag1: "components2", tag2: "producer", tag3: ".", priceIdentity: "cells",
    levelActive: false, priceActive: false, effect1Active: false, effect2Active: false
  },
  {
    id: "token5", name: "Data Booster", description1: "data X: ", description2: "-", level: 1, price: 0, effect1: 0, effect2: 0, identity1: "a_Base", identity2: "a_Base", active: false, image: 'images/token_5.png', tag1: "components2", tag2: "booster", tag3: ".", priceIdentity: "cells",
    levelActive: false, priceActive: false, effect1Active: false, effect2Active: false
  },
  {
    id: "token6", name: "Data Booster Fake", description1: "all Data Upgrades X: ", description2: "-", level: 1, price: 0, effect1: 0, effect2: 0, identity1: "cell_Base", identity2: "a_Base", active: false, image: 'images/token_2.png', tag1: "components2", tag2: ".", tag3: ".", priceIdentity: "cells",
    levelActive: false, priceActive: false, effect1Active: false, effect2Active: false
  },
  {
    id: "token7", name: "Energy Synergy", description1: "Energy Boosts Cell production: ", description2: "-", level: 1, price: 0, effect1: 0, effect2: 0, identity1: "cell_Base", identity2: "a_Base", active: false, image: 'images/token_7.png', tag1: "components3", tag2: "Synergy", tag3: ".", priceIdentity: "cells",
    levelActive: false, priceActive: false, effect1Active: false, effect2Active: false
  },
  {
    id: "token8", name: "Asteroid Enchancer", description1: "all Asteroid Upgrades and components are boosted: x", description2: "-", level: 1, price: 0, effect1: 0, effect2: 0, identity1: "cell_Base", identity2: "a_Base", active: false, image: 'images/token_8.png', tag1: "components3", tag2: "booster", tag3: ".", priceIdentity: "cells",
    levelActive: false, priceActive: false, effect1Active: false, effect2Active: false
  },
  {
    id: "token9", name: "Ally Synergy", description1: "other components's effects are boosted based on this components level +X: ", description2: "-", level: 1, price: 0, effect1: 0, effect2: 0, identity1: "cell_Base", identity2: "a_Base", active: false, image: 'images/token_9.png', tag1: "components3", tag2: "Synergy", tag3: ".", priceIdentity: "cells",
    levelActive: false, priceActive: false, effect1Active: false, effect2Active: false
  },
  {
    id: "token10", name: "Energized Structure", description1: "Energy/s x:", description2: "-", level: 1, price: 0, effect1: 0, effect2: 0, identity1: "cell_Base", identity2: "a_Base", active: false, image: 'images/token_10.png', tag1: "components3", tag2: "Synergy", tag3: ".", priceIdentity: "cells",
    levelActive: false, priceActive: false, effect1Active: false, effect2Active: false
  },
  {
    id: "token11", name: "Asteroid Cells Booster", description1: "reduces Energy/s by 30%", description2: "More cells -> More Cells/s: ", level: 1, price: 0, effect1: 0, effect2: 0, identity1: "cell_Base", identity2: "a_Base", active: false, image: 'images/token_11.png', tag1: "components1", tag2: "Booster", tag3: ".", priceIdentity: "cells",
    levelActive: false, priceActive: false, effect1Active: false, effect2Active: false
  },
  {
    id: "token12", name: "Asteroid Data Booster", description1: "reduces Energy/s by 30%", description2: "data X: ", level: 1, price: 0, effect1: 0, effect2: 0, identity1: "cell_Base", identity2: "a_Base", active: false, image: 'images/token_12.png', tag1: "components2", tag2: "booster", tag3: ".", priceIdentity: "cells",
    levelActive: false, priceActive: false, effect1Active: false, effect2Active: false
  },
]

//ACCEPTED
let explorationUpgrades = [
  {
    effectActive: false,
    priceActive: false,
    id: "explorationA0", masterKey: "explorationA", name: "do nothing", description: "explore other things, maybe the fridge",
    effect: 0, price: 0, priceIdentity: "energy"
  },
  {
    effectActive: false,
    priceActive: false,
    id: "explorationB0", masterKey: "explorationB", name: "do nothing", description: "well this is kind of a waste",
    effect: 0, price: 0, priceIdentity: "energy"
  },
  {
    effectActive: false,
    priceActive: false,
    id: "explorationA1", masterKey: "explorationA", name: "Space Dust Field", description: "thousands of pounds of Space Dust fall on earth every day, lets collect some ",
    effect: 0, price: 0, priceIdentity: "energy"
  },
  {
    effectActive: false,
    priceActive: false,
    id: "explorationA2", masterKey: "explorationA", name: "Catch Asteroids", description: "Catch Some Asteroids! Because why not!",
    effect: 0, price: 0, priceIdentity: "energy"
  },

  {
    effectActive: false,
    priceActive: false,
    id: "explorationB1", masterKey: "explorationB", name: "glimpse in a sun", description: "send a satellite inside the sun",
    effect: 0, price: 0, priceIdentity: "energy"
  },

  {
    effectActive: false,
    priceActive: false,
    id: "explorationB2", masterKey: "explorationB", name: "glimpse in a black hole", description: "send a satellite inside a black hole",
    effect: 0, price: 0, priceIdentity: "energy"
  },
]

let explorationSelected = [
  {
    explorationA: "explorationA0",
    explorationB: "explorationB0"
  }
]

let data = [
  {
    upgradeId1: "test", upgradeId2: "test",
    upgradeName1: "BETTER CPU", upgradeName2: "EXPAND CPU",
    upgradeDescription1: "collects data faster, and unlocks new types of data", upgradeDescription2: "you can extract more data from each type",
    upgradeEffect1: 0, upgradeEffect2: 0,
    upgradePrice1: 0, upgradePrice2: 0, selected: "",
    upgradePrice1Identity: "data", upgradePrice2Identity: "data",
    upgradeNumber1: 0, upgradeNumber2: 0,
    lightDuration: 0, mediumDuration: 0, heavyDuration: 0,
    lightExtractionMult: 0, mediumExtractionMult: 0, heavyExtractionMult: 0,
    upgradeEffect1Active: false, upgradeEffect2Active: false,
    upgradePrice1Active: false, upgradePrice2Active: false,
    upgradeNumber1Active: false, upgradeNumber2Active: false,
    lightDurationActive: false, mediumDurationActive: false, heavyDurationActive: false,
    lightExtractionMultActive: false, mediumExtractionMultActive: false, heavyExtractionMultActive: false,
  }

]

let dataUpgrades = [
  {
    id: "collectable1", name: "Data + 0.1/s", effect: 0, maxQuantity: 0, extracted: 0, identity: "light",
    effectActive: false, maxQuantityActive: false, extractedActive: false,
  },
  {
    id: "collectable2", name: "Hardware T1 layer is slightly cheaper", effect: 0, maxQuantity: 0, extracted: 0, identity: "light",
    effectActive: false, maxQuantityActive: false, extractedActive: false,
  },
  {
    id: "collectable3", name: "Extraction is slightly boosted", effect: 0, maxQuantity: 0, extracted: 0, identity: "light",
    effectActive: false, maxQuantityActive: false, extractedActive: false,
  },
  {
    id: "collectable4", name: "Multimakers are slightly stronger", effect: 0, maxQuantity: 0, extracted: 0, identity: "light",
    effectActive: false, maxQuantityActive: false, extractedActive: false,
  },


  {
    id: "collectable5", name: "Data + 1/s", effect: 0, maxQuantity: 0, extracted: 0, identity: "medium",
    effectActive: false, maxQuantityActive: false, extractedActive: false,
  },
  {
    id: "collectable6", name: "Components rankup are slightly stronger", effect: 0, maxQuantity: 0, extracted: 0, identity: "medium",
    effectActive: false, maxQuantityActive: false, extractedActive: false,
  },
  {
    id: "collectable7", name: "Boosters are stronger", effect: 0, maxQuantity: 0, extracted: 0, identity: "medium",
    effectActive: false, maxQuantityActive: false, extractedActive: false,
  },
  {
    id: "collectable8", name: "Components Cost is reduced", effect: 0, maxQuantity: 0, extracted: 0, identity: "medium",
    effectActive: false, maxQuantityActive: false, extractedActive: false,
  },
  {
    id: "collectable9", name: "Data + 10/s", effect: 0, maxQuantity: 0, extracted: 0, identity: "heavy",
    effectActive: false, maxQuantityActive: false, extractedActive: false,
  },
  {
    id: "collectable11", name: "Components Effect are slightly stronger", effect: 0, maxQuantity: 0, extracted: 0, identity: "heavy",
    effectActive: false, maxQuantityActive: false, extractedActive: false,
  },
]

//ACCEPTED
let energyBuilding = [
  {
    id: "energy1", name: "SOLAR ENERGY", description: "Energy/s: 2^Level", level: 0, active: true, effect: 0, price: 0, priceIdentity: "cells",
    levelActive: false, effectActive: false, priceActive: false
  },
  {
    id: "energy2", name: "ACCUMULATOR", description: "Max Energy: 10^Level", level: 0, active: true, effect: 0, price: 0, priceIdentity: "cells",
    levelActive: false, effectActive: false, priceActive: false
  },
  {
    id: "energy3", name: "TRANSFORMER", description: "Max Energy is boosted based on Energy/s", level: 0, active: true, effect: 0, price: 0, priceIdentity: "cells",
    levelActive: false, effectActive: false, priceActive: false
  },
  {
    id: "energy4", name: "energia4", description: "luce solare", level: 0, active: true, effect: 0, price: 0, priceIdentity: "cells",
    levelActive: false, effectActive: false, priceActive: false
  },
  {
    id: "energy5", name: "energia5", description: "luce solare", level: 0, active: true, effect: 0, price: 0, priceIdentity: "cells",
    levelActive: false, effectActive: false, priceActive: false
  },
  {
    id: "energy6", name: "energia6", description: "luce solare", level: 0, active: true, effect: 0, price: 0, priceIdentity: "cells",
    levelActive: false, effectActive: false, priceActive: false
  },
]

//ACCEPTED
let refining = [
  {
    value: 0, extractors: 0, speedExtractor: 0, effect: 0, priceExtractors: 0, speedExtractorPrice: 0, priceExtractorsIdentity: "cells", speedExtractorPriceIdentity: "cells",
    valueActive: false, extractorsActive: false, speedExtractorActive: false, effectActive: false, priceExtractorsActive: false, speedExtractorPriceActive: false
  }
]

//ACCEPTED
//sblocca i div che sono elencati nell' unlocked, quando le risorse necessarie vengono fornite
let projects = [
  {
    id: "unlockable1", name: "HARDWARE PACKAGE 1", unlocked: false, unlockable1: "Component: Booster", unlockable2: "Component: Multimaker", unlockable3: "", price1: 10 ** 6, price2: 500, price3: 0, price1Identity: "cells", price2Identity: "data", price3Identity: "",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },
  {
    id: "unlockable2", name: "SOFTWARE PACKAGE 1", unlocked: false, unlockable1: "Component: Tick Incrementer", unlockable2: "Component: Data Producer", unlockable3: "", price1: 2000, price2: 0, price3: 0, price1Identity: "data", price2Identity: "", price3Identity: "",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },

  {
    id: "unlockable3", name: "DEEP EXPLORATION", unlocked: false, unlockable1: "Rarity Layer", unlockable2: "", unlockable3: "", price1: 10 ** 8, price2: 1000, price3: 0, price1Identity: "cells", price2Identity: "data", price3Identity: "",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },

  {
    id: "unlockable4", name: "NEW RESOURCES PACKAGE 1", unlocked: false, unlockable1: "Energy Layer", unlockable2: "", unlockable3: "", price1: 10000, price2: 0, price3: 0, price1Identity: "data", price2Identity: "", price3Identity: "",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },

  {
    id: "unlockable5", name: "EXTRACTOR AUTOMATION", unlocked: false, unlockable1: "Automation: Extractor", unlockable2: "", unlockable3: "", price1: 10 ** 9, price2: 5000, price3: 0, price1Identity: "cells", price2Identity: "data", price3Identity: "energy",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },

  {
    id: "unlockable6", name: "DATA AUTOMATION", unlocked: false, unlockable1: "Automation: Data", unlockable2: "", unlockable3: "", price1: 10, price2: 0, price3: 0, price1Identity: "cells", price2Identity: "data", price3Identity: "energy",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },

  {
    id: "unlockable7", name: "RARITY AUTOMATION", unlocked: false, unlockable1: "Automation: Rarity", unlockable2: "", unlockable3: "", price1: 10, price2: 0, price3: 0, price1Identity: "cells", price2Identity: "data", price3Identity: "energy",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },

  {
    id: "unlockable8", name: "COMPONENTS AUTOMATION", unlocked: false, unlockable1: "Automation: Components", unlockable2: "", unlockable3: "", price1: 10, price2: 0, price3: 0, price1Identity: "cells", price2Identity: "data", price3Identity: "energy",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },

  {
    id: "unlockable9", name: "IDLE 1", unlocked: false, unlockable1: "Idle time extension: 1 hour", unlockable2: "", unlockable3: "", price1: 10 ** 6, price2: 500, price3: 0, price1Identity: "data", price2Identity: "", price3Identity: "",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },

  {
    id: "unlockable10", name: "IDLE 2", unlocked: false, unlockable1: "Idle time extension: 4 hour", unlockable2: "", unlockable3: "", price1: 10, price2: 0, price3: 0, price1Identity: "data", price2Identity: "", price3Identity: "",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },

  {
    id: "unlockable11", name: "IDLE 3", unlocked: false, unlockable1: "Idle time extension: 12 hour", unlockable2: "", unlockable3: "", price1: 10, price2: 0, price3: 0, price1Identity: "data", price2Identity: "", price3Identity: "",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },

  {
    id: "unlockable12", name: "IDLE 4", unlocked: false, unlockable1: "Idle time extension: 24 hour", unlockable2: "", unlockable3: "", price1: 10, price2: 0, price3: 0, price1Identity: "data", price2Identity: "", price3Identity: "",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },

  {
    id: "unlockable13", name: "COMMUNICATION PACKAGE 1", unlocked: false, unlockable1: "Component: Ally Synergy", unlockable2: "Component: Energy Synergy", unlockable3: "", price1: 10, price2: 0, price3: 0, price1Identity: "cells", price2Identity: "data", price3Identity: "energy",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },

  {
    id: "unlockable14", name: "FIRST EXPLORATION COMPONENTS", unlocked: false, unlockable1: "Component: Asteroid Enchancher", unlockable2: "Component: Asteroid Cells Booster", unlockable3: "Component: Asteroid Data Booster", price1: 10, price2: 0, price3: 0, price1Identity: "cells", price2Identity: "explorationResource1", price3Identity: "",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },

  {
    id: "unlockable15", name: "MILESTONE: FIRST PILLAR", unlocked: false, unlockable1: "Removes Limit 5e3 on Data, data x5", unlockable2: "", unlockable3: "", price1: 10, price2: 0, price3: 0, price1Identity: "cellsProd", price2Identity: "data", price3Identity: "",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },

  {
    id: "unlockable16", name: "MILESTONE: FIRST STRATUM", unlocked: false, unlockable1: "Will Unlock K2", unlockable2: "", unlockable3: "", price1: 10, price2: 0, price3: 0, price1Identity: "cellsProd", price2Identity: "data", price3Identity: "explorationResource1",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  }
]

let loadoutData = [
  {
    name: "", components1: "", components2: "", components3: ""
  },
  {
    name: "", components1: "", components2: "", components3: ""
  },
  {
    name: "", components1: "", components2: "", components3: ""
  }
]

let automation = [
  {
    id: "automation1", name: "Extractor Automation", description: "Buys Extractor upgrades if you can afford them, without expending cells", active: false
  },

  {
    id: "automation2", name: "Data Automation", description: "selects the Data Type with the least aquired data Upgrades", active: false
  },

  {
    id: "automation4", name: "Hardware Automation", description: "levels up the equipped hardware", active: false
  },

  {
    id: "automation5", name: "Software Automation", description: "levels up the equipped software", active: false
  },

  {
    id: "automation6", name: "Communication Automation", description: "levels up the equipped communication", active: false
  },
]

let showable = [
  {
    coreImage: false,

    mainGame: false, ui: false,

    optionsTab: false, options: false,

    mainGame: false, ui: false,

    cellsValute: false, cellsPerSecondValute: false, dataValute: false, dataPerSecondValute: false, energyValute: false, energyPerSecondValute: false, asteroidsValute: false, asteroidsPerSecondValute: false,

    coreTab: false, selectorTab: false, coreTab: false, hardwareTab: false, softwareTab: false, communicationTab: false,

    hardware: false, hardwareT1: false,
    refiningLayer: false,

    // rarityLayer: false,

    software: false, softwareT1: false,
    projects: false, unlockable1: false, unlockable2: false, unlockable3: false, unlockable4: false, unlockable5: false, unlockable6: false, unlockable7: false, unlockable8: false, unlockable9: false, unlockable10: false, unlockable11: false, unlockable12: false, unlockable13: false, unlockable14: false, unlockable15: false, unlockable16: false,

    data: false,

    communication: true, communicationT1: true,

    energy: true, energyTier1: false, squareEnergy1: true, squareEnergy2: true,
    squareEnergy3: true, energyTier2: false, squareEnergy4: true, squareEnergy5: true, squareEnergy6: true,

    exploration: false, exploration1: false, explorationA: false, explorationAButton: false, exploration2: false, explorationBButton: false,

    core: false, componentSelector: false, components1Module: false, components2Module: false, components3Module: false, componentInfo: false, componentsSummary: false, hardwareSummary: false, softwareSummary: false, communicationSummary: false, x1Summary: false, x2Summary: false, x3Summary: false, componentTab: false, componentRow1: false, componentRow2: false, componentRow3: false, componentRow4: false, componentRow5: false, componentsList: false, components1: false, components1Tier1: false, components2: false, components1Tier2: false, components2Tier1: false, components3: false, components3Tier1: false, components3Tier2: false,

    loadout: false, loadoutShow: false,

    equipTab: false,

    token1: false, token2: false, token3: false, token4: false, token5: false, token6: false, token7: false, token8: false, token9: false, token10: false, token11: false, token12: false, 

    automation: false, automation1: false, automation1Button: false, automation2: false, automation2Button: false, automation4: false, automation4Button: false, automation5: false, automation5Button: false, automation6: false, automation6Button: false,

    visualModule1: false, visualModule2: false, visualModule3: false, visualModule4: false, visualModule5: false, visualModule6: false,


    visualComponentTab: false,
    componentTabZone1: false, componentTabZone2: false,

    collectable1: false, collectable2: false, collectable3: false, collectable4: false, collectable5: false, collectable6: false, collectable7: false, collectable8: false, collectable9: false, collectable11: false,

    progressTab: false, progress: false, progress1: false, progress2: false, progress3: false, progress4: false, progress5: false, progress6: false, progress7: false, progress8: false, progress9: false,

    unlockable1Button: true, unlockable2Button: true, unlockable3Button: true, unlockable4Button: true, unlockable5Button: true, unlockable6Button: true, unlockable7Button: true, unlockable8Button: true, unlockable9Button: true, unlockable10Button: true, unlockable11Button: true, unlockable12Button: true, unlockable13Button: true, unlockable14Button: true, unlockable15Button: true, unlockable16Button: true,

    topProgress: false, topProgress1: false, topProgress2: false, topProgress3: false, topProgress4: false, topProgress5: false, topProgress6: false, topProgress7: false, topProgress8: false
  }
]

//setta un timer per fare in modo che si possano bloccare funzioni
let canCall = [
  {
    dataActuatorCanCall: true
  }
]

var RgameData = gameData
var RcomponentsEquipped = componentsEquipped
var Rcomponents = components
var RexplorationUpgrades = explorationUpgrades
var RexplorationSelected = explorationSelected
var Rdata = data
var RdataUpgrades = dataUpgrades
var RenergyBuilding = energyBuilding
var Rrefining = refining
// var Rrarity = rarity
var Rprojects = projects
var RloadoutData = loadoutData
var Rautomation = automation
var Rshowable = showable

//GLOBALI
var globalCellsProd = 0;
var glboalDataProd = 0;
var globalEnergyProd = 0;
var globalTickSpeedProd = 0;
var globalExplorationResource1Prod = 0;
//REFINING
var refiningValue = 0;
var refiningExtractors = 0;
var refiningSpeedExtractor = 0;
var refiningEffect = 0;
var refiningPriceExtractors = 0;
var refiningSpeedExtractorPrice = 0;
//RARITY


var actualComponentId
var actualComponentName;
var actualComponentDescription1;
var actualComponentDescription2;
var actualComponentLevel;
var actualComponentPrice;
var actualComponentEffect1;
var actualComponentEffect2;
var actualComponentIdentity1;
var actualComponentIdentity2;
var actualComponentTag1;
var actualComponentTag2;
var actualComponentTag3;
var actualComponentActive;
var actualComponentImage;
var actualSelectedComponent;

var i = 0;
var width = 0;

var competitionTabCounter = 0;
var currentTabNumber = 1;
var maxTabNumber = 2;
var init1 = true;
var ThisExplorationName = "ExplorationA1";

//necessario per offProgress(time)
var waiting = false;
var tempTickSpeed = 0;

//PARTE VISUALE
//PARTE VISUALE
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

//loadout

function loadoutLoad(number) {
  for (let x in components) {

    if (components[x].id == loadoutData[number].components1) {
      setNotIf(components, components[x].id, "active", true)
      setNotIf(componentsEquipped, null, components[x].tag1, components[x].id)
      //componentsEquipped[0][components[x].tag1] = components[x].id
    }

    if (components[x].id == loadoutData[number].components2) {
      setNotIf(components, components[x].id, "active", true)
      setNotIf(componentsEquipped, null, components[x].tag1, components[x].id)
      //componentsEquipped[0][components[x].tag1] = components[x].id
    }

    if (components[x].id == loadoutData[number].components3) {
      setNotIf(components, components[x].id, "active", true)
      setNotIf(componentsEquipped, null, components[x].tag1, components[x].id)
      //componentsEquipped[0][components[x].tag1] = components[x].id
    }

    if (components[x].id != loadoutData[number].components1 && components[x].tag1 == "components1") {
      setNotIf(components, components[x].id, "active", false)
    }

    if (components[x].id != loadoutData[number].components2 && components[x].tag1 == "components2") {
      setNotIf(components, components[x].id, "active", false)
    }

    if (components[x].id != loadoutData[number].components3 && components[x].tag1 == "components3") {
      setNotIf(components, components[x].id, "active", false)
    }

    if (loadoutData[number].components1 == "" && components[x].tag1 == "components1") {
      setNotIf(components, components[x].id, "active", false)
      setNotIf(componentsEquipped, null, components[x].tag1, "")

      //componentsEquipped[0][components[x].tag1] = ""
    }

    if (loadoutData[number].components2 == "" && components[x].tag1 == "components2") {
      setNotIf(components, components[x].id, "active", false)
      setNotIf(componentsEquipped, null, components[x].tag1, "")
      //componentsEquipped[0][components[x].tag1] = ""
    }

    if (loadoutData[number].components3 == "" && components[x].tag1 == "components3") {
      setNotIf(components, components[x].id, "active", false)
      setNotIf(componentsEquipped, null, components[x].tag1, "")
      //componentsEquipped[0][components[x].tag1] = ""
    }
  }
}

function loadoutSave(number) {

  var notPresent = 0;
  for (let x in components) {
    if (components[x].active && components[x].tag1 == "components1") {
      loadoutData[number].components1 = components[x].id;

      notPresent = 1;
    }
  }

  if (notPresent == 0) {
    loadoutData[number].components1 = "";
  }


  var notPresent = 0;
  for (let x in components) {
    if (components[x].active && components[x].tag1 == "components2") {
      loadoutData[number].components2 = components[x].id;

      notPresent = 1;
    }
  }

  if (notPresent == 0) {
    loadoutData[number].components2 = "";
  }

  var notPresent = 0;
  for (let x in components) {
    if (components[x].active && components[x].tag1 == "components3") {
      loadoutData[number].components3 = components[x].id;

      notPresent = 1;
    }
  }
  if (notPresent == 0) {
    loadoutData[number].components3 = "";
  }

}

//loadout name

function loadoutName(number) {
  loadout = document.getElementById("loadoutName" + (number + 1))
  if (loadout.disabled) {
    loadout.disabled = false;
  }

  else if (!loadout.disabled) {
    loadout.disabled = true;
    loadoutData[number].name = loadout.value
  }

}

function visual_Loadout() {
  for (let x in loadoutData) {
    var loadout = document.getElementById("loadoutName" + (parseInt(x) + 1))
    if (loadout.disabled) {
      loadout.value = loadoutData[x].name;
    }
  }
}


function visual_ComponentInfo(component) {
  for (let x in components) {
    if (components[x].id == component) {

      actualComponentId = components[x].id
      actualComponentName = components[x].name;
      actualComponentDescription1 = components[x].description1;
      actualComponentDescription2 = components[x].description2;
      actualComponentLevel = components[x].level;
      actualComponentPrice = components[x].price
      actualComponentEffect1 = components[x].effect1;
      actualComponentEffect2 = components[x].effect2;
      actualComponentIdentity1 = components[x].identity1;
      actualComponentIdentity2 = components[x].identity2;
      actualComponentActive = components[x].active;
      actualComponentTag1 = components[x].tag1;

      visualTag1 = actualComponentTag1
      if (visualTag1 == "components1") {
        visualTag1 = "HARDWARE"
      }
      if (visualTag1 == "components2") {
        visualTag1 = "SOFTWARE"
      }
      if (visualTag1 == "components3") {
        visualTag1 = "COMMUNICATION"
      }
      actualComponentTag2 = components[x].tag2;
      actualComponentTag3 = components[x].tag3;
      actualComponentImage = components[x].image;

      unlockShow("equipTab", true)
      unlockShow("visualComponentTab", true)
      unlockShow("componentTab", true)
      unlockShow("componentsSummary", true)



      update("componentRow0", "<div> LEVEL UP </div> <div>" + format(actualComponentPrice, "scientific") + " cells" + "</div> <div>EVERY 10 UPGRADES IT BOOSTS THE COMPONENT</div>")
      update("componentRow1", actualComponentLevel + "/20");
      update("componentRow2", actualComponentName)
      update("componentRow3", "[" + visualTag1 + "][" + actualComponentTag2 + "][" + actualComponentTag3 + "]");
      update("componentRow4", "<div>" + actualComponentDescription1 + format(actualComponentEffect1, "scientific") + "</div>");
      update("componentRow5", "<div>" + actualComponentDescription2 + format(actualComponentEffect2, "scientific") + "</div>");
    }

    if (actualComponentId == "") {
      update("componentRow0", "<div> LEVEL UP </div> <div><div>-</div><div>EVERY 10 UPGRADES IT BOOSTS THE COMPONENT</div>")
    }
  }
}

function show_componentInfo() {
  for (let x in components) {
    var actualComponentId = components[x].id
    var actualComponentName = components[x].name;
    var actualComponentDescription1 = components[x].description1;
    var actualComponentDescription2 = components[x].description2;
    var actualComponentLevel = components[x].level;
    var actualComponentPrice = components[x].price;
    var actualComponentEffect1 = components[x].effect1;
    var actualComponentEffect2 = components[x].effect2;
    var actualComponentIdentity1 = components[x].identity1;
    var actualComponentIdentity2 = components[x].identity2;
    var actualComponentActive = components[x].active;
    var actualComponentTag1 = components[x].tag1;
    var actualComponentTag2 = components[x].tag2;
    var actualComponentTag3 = components[x].tag3;
    actualComponentImage = components[x].image;

    if (components[x].id == componentsEquipped[0][actualComponentTag1]) {
      changeImage(actualComponentTag1 + "Module")
    }

    else if (componentsEquipped[0][actualComponentTag1] == "") {
      resetImage(actualComponentTag1 + "Module")

    }

    var componentOnClick = document.getElementById(actualComponentId);
    componentOnClick.setAttribute("onclick", "visual_ComponentInfo(" + "'" + actualComponentId + "'" + ")");
    componentOnClick.style.background = "url('" + actualComponentImage + "')";
    componentOnClick.style.backgroundSize = "100%";



  }
}

function componentSummary() {
  for (let x in components) {
    tag = components[x].tag1;
    if (components[x].id == componentsEquipped[0][tag]) {

      updateClass(components[x].tag1 + "Effect1", "<div>" + components[x].description1 + " " + format(components[x].effect1, "scientific") + "</div>");
      updateClass(components[x].tag1 + "Effect2", "<div>" + components[x].description2 + " " + format(components[x].effect2, "scientific") + "</div>");
    }

    else if (componentsEquipped[0][tag] == "") {
      updateClass(components[x].tag1 + "Effect1", "<div>.</div>");
      updateClass(components[x].tag1 + "Effect2", "<div>.</div>");
    }
  }
}

function equipButton(moduleName, operation) {
  if (operation == "equip") {
    for (x in components) {
      if (components[x].id == moduleName && components[x].tag1 == actualComponentTag1) {
        setNotIf(components, components[x].id, "active", true)
      }


      else if (components[x].id != moduleName && components[x].tag1 == actualComponentTag1) {
        setNotIf(components, components[x].id, "active", false)
      }
    }
    componentsEquipped[0][actualComponentTag1] = moduleName;
  }

  if (operation == "remove") {
    for (x in components) {
      if (components[x].id == moduleName) {
        components[x].active = false;
      }
    }
    componentsEquipped[0][actualComponentTag1] = "";
  }
}

function visual_EnergyInfo() {
  for (let x in energyBuilding) {
    var actualEnergyId = energyBuilding[x].id;
    var actualEnergyName = energyBuilding[x].name;
    var actualEnergyDescription = energyBuilding[x].description;
    var actualEnergyActive = energyBuilding[x].active;
    var actualEnergyLevel = energyBuilding[x].level;
    var actualEnergyEffect = energyBuilding[x].effect;
    var actualEnergyPrice = energyBuilding[x].price;
    var actualEnergyIdentity = energyBuilding[x].priceIdentity;

    var building = document.getElementById(actualEnergyId);
    var buildingButton = document.getElementById(actualEnergyId + "Bottone");

    building.innerHTML = "<div>" + actualEnergyName + "</div>" +
      "<div>" + actualEnergyDescription + "</div>" +
      "<div>" + "Level: " + format(actualEnergyLevel, "scientific") + "/ 10" + "</div>" +
      "<div>" + "Effect: " + format(actualEnergyEffect, "scientific") + "</div>" +
      "<div>" + "Price: " + format(actualEnergyPrice, "scientific") + " " + actualEnergyIdentity + "</div>"

  }
}

function resetEnergy(min, max) {
  for (x in energyBuilding) {
    if (x >= min && x <= max) {
      idEnergy = energyBuilding[x].id

      setNotIf(energyBuilding, idEnergy, "level", 0)
    }
  }
}

function visual_ExplorationInfo() {
  let masterKeySelected;
  let idSelected;
  const classSelector = document.getElementsByClassName("explorationSelection");

  for (let y in explorationSelected) {
    const keys = Object.keys(explorationSelected[y]);
    for (let key of keys) {
      for (let x = 0; x < classSelector.length; x++) {
        let classSelected = classSelector[x]
        if (key == classSelected.getAttribute("id")) {
          masterKeySelected = key;
          idSelected = explorationSelected[y][masterKeySelected];



          for (let a in explorationUpgrades) {

            if (explorationUpgrades[a].masterKey == masterKeySelected) {
              if (explorationUpgrades[a].id == idSelected) {
                var actualExplorationId = explorationUpgrades[a].id;
                var actualExplorationName = explorationUpgrades[a].name;
                var actualExplorationDescription = explorationUpgrades[a].description;
                var actualExplorationEffect = explorationUpgrades[a].effect;
                var actualExplorationPrice = explorationUpgrades[a].price;
                var actualExplorationLevel = explorationUpgrades[a].level;
                var actualExplorationPriceIdentity = explorationUpgrades[a].priceIdentity


                let explorationElement = document.getElementById(masterKeySelected);
                if (explorationElement) {
                  explorationElement.innerHTML = `
              <div>${actualExplorationName}</div>
              <div>${actualExplorationDescription}</div>
              <div>${"effect: " + format(actualExplorationEffect, "scientific") + "asteroids/s"}</div>
              <div>${"price: " + format(actualExplorationPrice, "scientific")} ${actualExplorationPriceIdentity + "/s"}</div>`;
                }
              }
            }
          }
        }
      }
    }
  }
}



function getExplorationSelected(a) {
  for (let x in explorationUpgrades)
    if (explorationUpgrades[x].id == a)
      for (let y in explorationSelected) {
        const keys = Object.keys(explorationSelected[y])
        for (let key of keys) {
          if (key == explorationUpgrades[x].masterKey) {
            explorationSelected[y][key] = a;
          }
        }
      }

  valuesSetter()
}

//getters
function getActualComponentName() {
  return actualComponentName
}

function getActualComponentDescription1() {
  return actualComponentDescription1
}

function getActualComponentDescription2() {
  return actualComponentDescription2
}

function getActualComponentEffect() {
  return actualComponentEffect1
}

function getActualComponentIdentity() {
  return actualComponentIdentity1
}


function visual_valute() {
  update("cellsValute", format(gameData[0].cells, "scientific") + " Cells")
  update("cellsPerSecondValute", format(gameData[0].cellsProd, "scientific") + " cells/s")

  update("dataValute", format(gameData[0].data, "scientific") + " Data")
  update("dataPerSecondValute", format(gameData[0].dataProd, "scientific") + " Data/s")

  update("energyValute", format(gameData[0].energy, "scientific") + "/" + format(gameData[0].energyMax, "scientific") + " Energy")
  update("energyPerSecondValute", format(gameData[0].energyProd, "scientific") + " Energy/s")

  update("asteroidsValute", format(gameData[0].explorationResource1, "scientific") + " Asteroids")
  update("asteroidsPerSecondValute", format(gameData[0].explorationResource1Prod, "scientific") + " Asteroids/s")
}

function getArrayValue(array, value) {
  for (let x in array) {
    return array[x][value]
  }
}

function visual_refiner() {
  var actualValue = format(refining[0].value, "scientific")
  var actualSpeedExtractor = format(refining[0].speedExtractor, "scientific")
  var actualExtractors = format(refining[0].extractors, "scientific")
  var actualPriceExtractors = format(refining[0].priceExtractors, "scientific")
  var actualPriceSpeedExtractor = format(refining[0].speedExtractorPrice, "scientific")
  var actualPriceExtractorsIdentity = refining[0].priceExtractorsIdentity
  var actualPriceSpeedExtractorIdentity = refining[0].speedExtractorPriceIdentity

  updateClass("extractorValue", "adds to the base of cells/s: " + actualValue);

  updateClass("extractors1", "<div>" + "Adds +10 to the base" + "</div>");
  updateClass("extractors2", "<div>" + actualExtractors + "/200" + "</div><div>" + " price: " + actualPriceExtractors + " " + actualPriceExtractorsIdentity + "</div>")

  updateClass("speedExtractors1", "<div>" + "multiplies Base x2" + "</div>");
  updateClass("speedExtractors2", "<div>" + actualSpeedExtractor + "/30" + "|" + " price: " + actualPriceSpeedExtractor + " " + actualPriceSpeedExtractorIdentity + "</div>")
}

function logBase(b, n) {
  return Math.log(n) / Math.log(b)
}

function visual_projects() {

  //id: "unlockable1", name: "test", unlocked: false, unlockable1: "test", unlockable2: "test", unlockable3: "test", price1: 0, price2: 0, price3: 0, identity1: "test", identity2: "test", identity3: "test"

  for (let y in projects) {

    var actualId = projects[y].id;
    var actualName = projects[y].name;
    var actualPrice1 = projects[y].price1;
    var actualPrice2 = projects[y].price2;
    var actualPrice3 = projects[y].price3;
    var actualIdentity1 = projects[y].price1Identity;
    var actualIdentity2 = projects[y].price2Identity;
    var actualIdentity3 = projects[y].price3Identity;

    if (actualIdentity1 == "cellsProd") {
      actualIdentity1 = "cells/s"
    }
    if (actualIdentity2 == "cellsProd") {
      actualIdentity2 = "cells/s"
    }
    if (actualIdentity3 == "cellsProd") {
      actualIdentity3 = "cells/s"
    }

    if (actualIdentity1 == "explorationResource1") {
      actualIdentity1 = "asteroids"
    }
    if (actualIdentity2 == "explorationResource1") {
      actualIdentity2 = "asteroids"
    }
    if (actualIdentity3 == "explorationResource1") {
      actualIdentity3 = "asteroids"
    }
    var actualUnlockable1 = projects[y].unlockable1;
    var actualUnlockable2 = projects[y].unlockable2;
    var actualUnlockable3 = projects[y].unlockable3;
    var actualUnlocked = projects[y].unlocked;
    var actualPositioned = projects[y].positioned

    var projectBox = document.getElementById(actualId + "Box")

    if (actualUnlocked == false) {
      projectBox.innerHTML = "<div>" + actualName + "</div>" +
        "<div>" + actualIdentity1 + ": " + format(actualPrice1, "scientific") + "</div>" +
        "<div>" + actualIdentity2 + ": " + format(actualPrice2, "scientific") + "</div>" +
        "<div>" + actualIdentity3 + ": " + format(actualPrice3, "scientific") + "</div>" +
        "<div>" + actualUnlockable1 + "</div>" +
        "<div>" + actualUnlockable2 + "</div>" +
        "<div>" + actualUnlockable3 + "</div>";
    }
    else if (actualUnlocked == true) {
      projectBox.innerHTML = "<div>" + actualName + "</div>" +
        "<div>" + actualUnlockable1 + "</div>" +
        "<div>" + actualUnlockable2 + "</div>" +
        "<div>" + actualUnlockable3 + "</div>";

      unlockShow(actualId + "Button", false)
    }
  }
}

function visual_dataLayer() {
  var actualDataCollection = document.getElementById("dataCollection")
  var actualDataGraphic = document.getElementById("dataGraphic")
  var actualDataUpgrade1 = document.getElementById("dataUpgrade1")
  var actualDataUpgrade2 = document.getElementById("dataUpgrade2")
  var actualDataGraph = document.getElementById("dataGraph")
  var actualDataSelector = document.getElementById("dataSelector")

  for (let x in data) {
    var actualUpgradeId1 = data[x].upgradeId1
    var actualUpgradeId2 = data[x].upgradeId2
    var actualUpgradeName1 = data[x].upgradeName1
    var actualUpgradeName2 = data[x].upgradeName2
    var actualUpgradeDescription1 = data[x].upgradeDescription1
    var actualUpgradeDescription2 = data[x].upgradeDescription2
    var actualUpgradeEffect1 = data[x].upgradeEffect1
    var actualUpgradeEffect2 = data[x].upgradeEffect2
    var actualUpgradeIdentity1 = data[x].upgradePrice1Identity
    var actualUpgradeIdentity2 = data[x].upgradePrice2Identity
    var actualUpgradePrice1 = data[x].upgradePrice1
    var actualUpgradePrice2 = data[x].upgradePrice2
  }

  actualDataUpgrade1.innerHTML = "<div>" + actualUpgradeName1 + "</div>" +
    "<div>" + actualUpgradeDescription1 + "</div>" +
    "<div>" + "effect: " + format(actualUpgradeEffect1, "scientific") + " / 15" + "</div>" +
    "<div>" + "price: " + format(actualUpgradePrice1, "scientific") + " " + actualUpgradeIdentity1 + "</div>";

  actualDataUpgrade2.innerHTML = "<div>" + actualUpgradeName2 + "</div>" +
    "<div>" + actualUpgradeDescription2 + "</div>" +
    "<div>" + "effect: " + format(actualUpgradeEffect2, "scientific") + " / 15" + "</div>" +
    "<div>" + "price: " + format(actualUpgradePrice2, "scientific") + " " + actualUpgradeIdentity2 + "</div>";

  let elemColor1 = document.getElementById("dataLightWait")
  let elemColor2 = document.getElementById("dataMediumWait")
  let elemColor3 = document.getElementById("dataHeavyWait")


  if (getNotIf(data, null, "lightExtractionMult") == 0) {
    elemColor1.style.backgroundColor = "red";
  }
  if (getNotIf(data, null, "mediumExtractionMult") == 0) {
    elemColor2.style.backgroundColor = "red";
  }
  if (getNotIf(data, null, "heavyExtractionMult") == 0) {
    elemColor3.style.backgroundColor = "red";
  }

  if (getNotIf(data, null, "lightExtractionMult") > 0) {
    elemColor1.style.backgroundColor = "lightGreen";
  }
  if (getNotIf(data, null, "mediumExtractionMult") > 0) {
    elemColor2.style.backgroundColor = "lightGreen";
  }
  if (getNotIf(data, null, "heavyExtractionMult") > 0) {
    elemColor3.style.backgroundColor = "lightGreen";
  }

  for (let y in dataUpgrades) {
    var actualDataUpgradesId = dataUpgrades[y].id
    var actualDataUpgradesEffect = format(dataUpgrades[y].effect, "scientific")
    var actualDataUpgradesMaxQuantity = format(dataUpgrades[y].maxQuantity, "scientific")
    var actualDataUpgradesExtracted = format(dataUpgrades[y].extracted, "scientific")
    var actualDataUpgradesName = dataUpgrades[y].name

    if (actualDataUpgradesExtracted > 0) {
      let actualDataUpgradesDiv = document.getElementById(actualDataUpgradesId)

      unlockShow(actualDataUpgradesId, true)

      actualDataUpgradesDiv.innerHTML = "<div>" + actualDataUpgradesName + "</div>" + "<div>" + actualDataUpgradesExtracted + "/" + actualDataUpgradesMaxQuantity + " " + actualDataUpgradesEffect + "</div>"
    }
  }

}

function visual_automation() {
  for (let x in automation) {
    var actualAutomationId = automation[x].id;
    var actualAutomationName = automation[x].name;
    var actualAutomationDescription = automation[x].description;
    var actualAutomationActive = automation[x].active;

    let autoDiv = document.getElementById(actualAutomationId)
    let autoDivButton = document.getElementById(actualAutomationId + "Button")

    autoDiv.innerHTML = "<div>" + actualAutomationName + "</div>" +
      "<div>" + actualAutomationDescription + "</div>";

    if (actualAutomationActive) {
      autoDivButton.style.backgroundColor = "green";
    }

    if (!(actualAutomationActive)) {
      autoDivButton.style.backgroundColor = "red";
    }
  }
}

//PARTE FUNZIONALE
//PARTE FUNZIONALE
//PARTE FUNZIONALE

function setActive(array, id, element, ac) {
  if (array != null) {
    for (let x in array) {
      let elementActive = element + "Active"
      let innerArray = array[x]
      for (let a in innerArray) {
        const keys = Object.keys(innerArray);
        for (let key of keys) {
          if (id == null) {
            if (key == elementActive) {
              innerArray[key] = ac;
              break;
            }
          }

          if (id != null) {
            for (let key2 of keys) {
              if (key == elementActive && innerArray[key2] == id) {
                innerArray[key] = ac;

                break;
              }
            }
          }
        }
      }
    }
  }

  //se vuoi modificare gameData array = null, id = null
  if (array == null && id == null) {
    let elementActive = element + "Active"
    gameData[elementActive] = ac;
  }
}


function getIfActive(array, id, element) {
  const elementActive = element + "Active";

  if (array) {
    for (const innerArray of array) {
      if (innerArray[elementActive] === true) {
        if (!id || Object.values(innerArray).includes(id)) {
          return innerArray[element];
        }
      } else if (innerArray[elementActive] === false) {
        if (!id || Object.values(innerArray).includes(id)) {
          return 0;
        }
      }
    }
  } else if (!id) {
    if (gameData[elementActive] === true) {
      return gameData[element];
    } else if (gameData[elementActive] === false) {
      return 0;
    }
  }
}



function getNotIf(array, id, element) {
  if (array) {
    for (const innerArray of array) {
      if (!id) {
        return innerArray[element];
      }
      if (Object.values(innerArray).includes(id)) {
        return innerArray[element];
      }
    }
  } else if (!id) {
    return gameData[element + "Active"];
  }
}

function setNotIf(array, id, element, value) {
  if (array) {
    for (const innerArray of array) {
      if (!id) {
        innerArray[element] = value;
        return;
      }
      if (Object.values(innerArray).includes(id)) {
        innerArray[element] = value;
        return;
      }
    }
  } else if (!id) {
    gameData[element + "Active"] = value;
  }
}


function setIfActive(array, id, element, value) {
  const elementActive = element + "Active";

  if (array) {
    for (const innerArray of array) {
      if (innerArray[elementActive] === true) {
        if (!id) {
          innerArray[element] = value;
          return;
        }
        if (Object.values(innerArray).includes(id)) {
          innerArray[element] = value;
          return;
        }
      }
    }
  } else if (!id) {
    if (gameData[elementActive] === true) {
      gameData[element] = value;
    }
  }
}


function setDinamic(element, value) {
  setIfActive(null, null, element, value)
}

function getDinamic(element) {
  return getIfActive(null, null, element)
}

function setStatic(element, value) {
  gameData[element] += value
}

function getStatic(element) {
  return gameData[element]
}

//serve per valori non attivi di cui vogliamo il valore = 1 senza cambiare il valore originale
function norm(x) {
  if (x == 0) {
    return 1;
  }
  return x
}

function valuesSetterDinamic() {
  //GLOBALI

  setActive(gameData, null, "cells", true)
  setActive(gameData, null, "data", true)
  setActive(gameData, null, "energy", true)
  setActive(gameData, null, "explorationResource", true)
  setActive(gameData, null, "tickSpeed", true)


  setNotIf(gameData, null, "cells", getNotIf(gameData, null, "cells") + getNotIf(gameData, null, "cellsProd"))

  setNotIf(gameData, null, "data", getNotIf(gameData, null, "data") + getNotIf(gameData, null, "dataProd"))

  if (!(getNotIf(projects, "unlockable15", "unlocked")) && getNotIf(gameData, null, "data") > 5000) {
    setNotIf(gameData, null, "data", 5000)
  }

  setNotIf(gameData, null, "energy", getNotIf(gameData, null, "energy") + getNotIf(gameData, null, "energyProd"))

  if (getNotIf(gameData, null, "energy") > getNotIf(gameData, null, "energyMax")) {
    setNotIf(gameData, null, "energy", getNotIf(gameData, null, "energyMax"))
  }

  setNotIf(gameData, null, "explorationResource1", getNotIf(gameData, null, "explorationResource1") + getNotIf(gameData, null, "explorationResource1Prod"))


  setNotIf(gameData, null, "tickSpeed", getNotIf(gameData, null, "tickSpeedProd"))

  if (getNotIf(gameData, null, "cells") < 0) {
    setNotIf(gameData, null, "cells", 0)
  }

  if (getNotIf(gameData, null, "data") < 0) {
    setNotIf(gameData, null, "data", 0)
  }

  if (getNotIf(gameData, null, "energy") < 0) {
    setNotIf(gameData, null, "energy", 0)
  }

  if (getNotIf(gameData, null, "asteroids") < 0) {
    setNotIf(gameData, null, "asteroids", 0)
  }

  if (getIfActive(projects, "unlockable9", "unlocked")) {
    setNotIf(gameData, null, "offProgressLimit", 3600)
  }

  if (getIfActive(projects, "unlockable10", "unlocked")) {
    setNotIf(gameData, null, "offProgressLimit", 14400)
  }

  if (getIfActive(projects, "unlockable11", "unlocked")) {
    setNotIf(gameData, null, "offProgressLimit", 43200)
  }

  if (getIfActive(projects, "unlockable11", "unlocked")) {
    setNotIf(gameData, null, "offProgressLimit", 86400)
  }
}

function valuesSetter() {
  //usa setActive(array, id, element, ac)(_, "", "", _)
  //getIfActive(array, id, element)(_, "", "")
  //istanziamo gli [X]nome esternamente alla funzione cosi' che
  //non vi siano errori di non referenzialita'
  //components

  setActive(gameData, null, "cellsProd", true)
  setActive(gameData, null, "dataProd", true)
  setActive(gameData, null, "energyProd", true)
  setActive(gameData, null, "explorationResource1Prod", true)
  setActive(gameData, null, "tickSpeed", true)

  var cells1 = getIfActive(refining, null, "value")
  var cells2 = getIfActive(components, "token1", "effect1")
  var cells3 = getIfActive(components, "token1", "effect2")
  var cells4 = (getNotIf(gameData, null, "tickSpeed") / 1000)
  var cells5 = getIfActive(components, "token2", "effect1")
  var cells6 = getIfActive(components, "token3", "effect1")
  var cells7 = getIfActive(components, "token7", "effect1")

  cells3 = norm(cells3)
  cells5 = norm(cells5)
  cells6 = norm(cells6)
  cells7 = norm(cells7)

  /*
    console.log("cells1 " + cells1)
    console.log("cells2 " + cells2)
    console.log("cells3 " + cells3)
    console.log("cells4 " + cells4)
    console.log("cells5 " + cells5)
    console.log("cells6 " + cells6)
    console.log("cells7 " + cells7)
    */

  let globalCellsProd = (((((cells1 + cells2) * cells3) * cells5) * cells6) * cells7) * cells4

  ////////////////////

  //data elements

  var data1 = getIfActive(dataUpgrades, "collectable1", "effect")
  var data2 = getIfActive(dataUpgrades, "collectable5", "effect")
  var data3 = getIfActive(dataUpgrades, "collectable9", "effect")
  var data4 = (getNotIf(gameData, null, "tickSpeed") / 1000)
  var data5 = getIfActive(components, "token5", "effect1")
  var data6 = getIfActive(components, "token3", "effect1")
  if (getNotIf(projects, "unlockable15", "unlocked")) {
    var data7 = 5
  }
  else {
    data7 = 1;
  }

  data6 = norm(data6)
  data5 = norm(data5)

  /*
  console.log("data1: " + data1)
  console.log("data2: " + data2)
  console.log("data3: " + data3)
  console.log("data4: " + data4)
  console.log("data5: " + data5)
  console.log("data6: " + data6)
*/

  let globalDataProd = 0 + (data1 + data2 + data3) * data5 * data4 * data6 * data7

  //////////////////

  //energy elements

  var energy1 = getIfActive(energyBuilding, "energy1", "effect")
  var energy2 = getIfActive(energyBuilding, "energy2", "effect")
  var energy3 = getIfActive(energyBuilding, "energy3", "effect")
  var energy4 = (getNotIf(gameData, null, "tickSpeed") / 1000)
  var energy5 = getIfActive(components, "token3", "effect1")
  var energy6 = getIfActive(explorationUpgrades, getNotIf(explorationSelected, null, "explorationA"), "price")
  var energy7 = getIfActive(explorationUpgrades, getNotIf(explorationSelected, null, "explorationB"), "price")

  energy1 = norm(energy1)
  energy2 = norm(energy2)
  energy3 = norm(energy3)
  energy5 = norm(energy5)


  let globalEnergyProd = (0 + energy1 * energy4 * energy5) - energy6 - energy7
  let globalEnergyMax = 10 + energy2

  ///////////////////////////

  //tickSpeed elements

  var tickspeed1 = getIfActive(gameData, null, "tickSpeed")
  var tickspeed2 = getIfActive(components, "token4", "effect1")
  var tickspeed3 = getNotIf(gameData, null, "tickspeed3")

  tickspeed2 = norm(tickspeed2)

  let globalTickSpeedProd = 1000 * tickspeed2 * tickspeed3

  //exploration elements

  var exploration1 = getIfActive(explorationUpgrades, getNotIf(explorationSelected, null, "explorationA"), "effect")
  var exploration2 = getIfActive(explorationUpgrades, getNotIf(explorationSelected, null, "explorationB"), "effect")

  exploration2 = norm(exploration2)

  let globalExplorationResource1Prod = exploration1 * exploration2;

  setNotIf(gameData, null, "cellsProd", globalCellsProd)
  setNotIf(gameData, null, "dataProd", globalDataProd)
  setNotIf(gameData, null, "energyProd", globalEnergyProd)
  setNotIf(gameData, null, "energyMax", globalEnergyMax)
  setNotIf(gameData, null, "explorationResource1Prod", globalExplorationResource1Prod)
  setNotIf(gameData, null, "tickSpeedProd", globalTickSpeedProd)
  setNotIf(gameData, null, "tickSpeed", getNotIf(gameData, null, "tickSpeedProd"))

  //BALANCING

  var bal1 = 10;
  var bal2 = 100;
  var bal3 = 1000;

  //COMPONENTS


  if (getNotIf(components, "token1", "active")) {
    setActive(components, "token1", "level", true)
    setActive(components, "token1", "effect1", true)
    setActive(components, "token1", "effect2", true)
    setActive(components, "token1", "price", true)
  }
  else if (!(getNotIf(components, "token1", "active"))) {
    setActive(components, "token1", "level", false)
    setActive(components, "token1", "effect1", false)
    setActive(components, "token1", "effect2", false)
    setActive(components, "token1", "price", false)
  }


  if (getNotIf(components, "token2", "active")) {
    setActive(components, "token2", "level", true)
    setActive(components, "token2", "effect1", true)
    setActive(components, "token2", "effect2", true)
    setActive(components, "token2", "price", true)
  }
  else if (!(getNotIf(components, "token2", "active"))) {
    setActive(components, "token2", "level", false)
    setActive(components, "token2", "effect1", false)
    setActive(components, "token2", "effect2", false)
    setActive(components, "token2", "price", false)
  }


  if (getNotIf(components, "token3", "active")) {
    setActive(components, "token3", "level", true)
    setActive(components, "token3", "effect1", true)
    setActive(components, "token3", "effect2", true)
    setActive(components, "token3", "price", true)
  }
  else if (!(getNotIf(components, "token3", "active"))) {
    setActive(components, "token3", "level", false)
    setActive(components, "token3", "effect1", false)
    setActive(components, "token3", "effect2", false)
    setActive(components, "token3", "price", false)
  }


  if (getNotIf(components, "token4", "active")) {
    setActive(components, "token4", "level", true)
    setActive(components, "token4", "effect1", true)
    setActive(components, "token4", "effect2", true)
    setActive(components, "token4", "price", true)
  }
  else if (!(getNotIf(components, "token4", "active"))) {
    setActive(components, "token4", "level", false)
    setActive(components, "token4", "effect1", false)
    setActive(components, "token4", "effect2", false)
    setActive(components, "token4", "price", false)
  }


  if (getNotIf(components, "token5", "active")) {
    setActive(components, "token5", "level", true)
    setActive(components, "token5", "effect1", true)
    setActive(components, "token5", "effect2", true)
    setActive(components, "token5", "price", true)
  }
  else if (!(getNotIf(components, "token5", "active"))) {
    setActive(components, "token5", "level", false)
    setActive(components, "token5", "effect1", false)
    setActive(components, "token5", "effect2", false)
    setActive(components, "token5", "price", false)
  }


  if (getNotIf(components, "token6", "active")) {
    setActive(components, "token6", "level", true)
    setActive(components, "token6", "effect1", true)
    setActive(components, "token6", "effect2", true)
    setActive(components, "token6", "price", true)
  }
  else if (!(getNotIf(components, "token6", "active"))) {
    setActive(components, "token6", "level", false)
    setActive(components, "token6", "effect1", false)
    setActive(components, "token6", "effect2", false)
    setActive(components, "token6", "price", false)
  }


  if (getNotIf(components, "token7", "active")) {
    setActive(components, "token7", "level", true)
    setActive(components, "token7", "effect1", true)
    setActive(components, "token7", "effect2", true)
    setActive(components, "token7", "price", true)
  }
  else if (!(getNotIf(components, "token7", "active"))) {
    setActive(components, "token7", "level", false)
    setActive(components, "token7", "effect1", false)
    setActive(components, "token7", "effect2", false)
    setActive(components, "token7", "price", false)
  }


  if (getNotIf(components, "token8", "active")) {
    setActive(components, "token8", "level", true)
    setActive(components, "token8", "effect1", true)
    setActive(components, "token8", "effect2", true)
    setActive(components, "token8", "price", true)
  }
  else if (!(getNotIf(components, "token8", "active"))) {
    setActive(components, "token8", "level", false)
    setActive(components, "token8", "effect1", false)
    setActive(components, "token8", "effect2", false)
    setActive(components, "token8", "price", false)
  }


  if (getNotIf(components, "token9", "active")) {
    setActive(components, "token9", "level", true)
    setActive(components, "token9", "effect1", true)
    setActive(components, "token9", "effect2", true)
    setActive(components, "token9", "price", true)
  }
  else if (!(getNotIf(components, "token9", "active"))) {
    setActive(components, "token9", "level", false)
    setActive(components, "token9", "effect1", false)
    setActive(components, "token9", "effect2", false)
    setActive(components, "token9", "price", false)
  }


  if (getNotIf(components, "token10", "active")) {
    setActive(components, "token10", "level", true)
    setActive(components, "token10", "effect1", true)
    setActive(components, "token10", "effect2", true)
    setActive(components, "token10", "price", true)
  }
  else if (!(getNotIf(components, "token10", "active"))) {
    setActive(components, "token10", "level", false)
    setActive(components, "token10", "effect1", false)
    setActive(components, "token10", "effect2", false)
    setActive(components, "token10", "price", false)
  }


  if (getNotIf(components, "token11", "active")) {
    setActive(components, "token11", "level", true)
    setActive(components, "token11", "effect1", true)
    setActive(components, "token11", "effect2", true)
    setActive(components, "token11", "price", true)
  }
  else if (!(getNotIf(components, "token11", "active"))) {
    setActive(components, "token11", "level", false)
    setActive(components, "token11", "effect1", false)
    setActive(components, "token11", "effect2", false)
    setActive(components, "token11", "price", false)
  }


  if (getNotIf(components, "token12", "active")) {
    setActive(components, "token12", "level", true)
    setActive(components, "token12", "effect1", true)
    setActive(components, "token12", "effect2", true)
    setActive(components, "token12", "price", true)
  }
  else if (!(getNotIf(components, "token12", "active"))) {
    setActive(components, "token12", "level", false)
    setActive(components, "token12", "effect1", false)
    setActive(components, "token12", "effect2", false)
    setActive(components, "token12", "price", false)
  }

  //producer
  let componentsToken1Level = getNotIf(components, "token1", "level")
  let componentsToken1Effect1 = 0
  let componentsToken1Effect2 = 0
  let componentsToken1price = 0


  if (getNotIf(components, "token1", "level") >= 0 && getNotIf(components, "token1", "level") < 10) {
    componentsToken1Effect1 = (2 * getNotIf(components, "token1", "level")) * getNotIf(components, "token9", "effect1")
    componentsToken1Effect2 = (1 + (0.5 * getNotIf(components, "token1", "level"))) * getNotIf(components, "token9", "effect1")
    componentsToken1price = (4.5 ** getNotIf(components, "token1", "level")) / getNotIf(dataUpgrades, "collectable8", "effect")
  }

  if (getNotIf(components, "token1", "level") >= 10 && getNotIf(components, "token1", "level") < 20) {
    componentsToken1Effect1 = (20 * getNotIf(components, "token1", "level")) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect")
    componentsToken1Effect2 = (1 + (5 * getNotIf(components, "token1", "level"))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect")
    componentsToken1price = (10 ** getNotIf(components, "token1", "level")) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token1", "level") == 20) {
    componentsToken1Effect1 = (200 * getNotIf(components, "token1", "level")) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect")
    componentsToken1Effect2 = (1 + (1000 * getNotIf(components, "token1", "level"))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect")
  }

  componentsToken1Effect1 = norm(componentsToken1Effect1)
  componentsToken1Effect2 = norm(componentsToken1Effect2)

  //booster
  let componentsToken2Level = getNotIf(components, "token2", "level")
  let componentsToken2Effect1 = 0
  let componentsToken2Effect2 = 0
  let componentsToken2price = 0

  if (getNotIf(components, "token2", "level") >= 0 && getNotIf(components, "token2", "level") < 10) {
    componentsToken2Effect1 = (1 + (0.5 * getNotIf(components, "token2", "level"))) * logBase(2, getNotIf(gameData, null, "cells")) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable7", "effect")
    componentsToken2Effect2 = 0
    componentsToken2price = ((4.5 ** getNotIf(components, "token2", "level")) * (10 ** 8)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token2", "level") >= 10 && getNotIf(components, "token2", "level") < 20) {
    componentsToken2Effect1 = (2 * (1 + (0.5 * getNotIf(components, "token2", "level"))) * logBase(2, getNotIf(gameData, null, "cells"))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable7", "effect")
    componentsToken2Effect2 = 0
    componentsToken2price = ((10 ** getNotIf(components, "token2", "level")) * (10 ** 16)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token2", "level") == 20) {
    componentsToken2Effect1 = (4 * (1 + (0.5 * getNotIf(components, "token2", "level"))) * logBase(2, getNotIf(gameData, null, "cells"))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable7", "effect")
    componentsToken2Effect2 = 0
  }

  componentsToken2Effect1 = norm(componentsToken2Effect1)

  //multimaker
  let componentsToken3Level = getNotIf(components, "token3", "level")
  let componentsToken3Effect1 = 0
  let componentsToken3Effect2 = 0
  let componentsToken3price = 0

  if (getNotIf(components, "token3", "level") >= 0 && getNotIf(components, "token3", "level") < 10) {
    componentsToken3Effect1 = 1 + (0.3 * (getNotIf(components, "token3", "level")) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable4", "effect"))
    componentsToken3Effect2 = 0
    componentsToken3price = ((4.5 ** getNotIf(components, "token3", "level")) * (10 ** 8)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token3", "level") >= 10 && getNotIf(components, "token3", "level") < 20) {
    componentsToken3Effect1 = 1 + (0.6 * getNotIf(components, "token3", "level")) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable4", "effect") * getNotIf(dataUpgrades, "collectable6", "effect")
    componentsToken3Effect2 = 0
    componentsToken3price = ((10 ** getNotIf(components, "token3", "level")) * (10 ** 16)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token3", "level") == 20) {
    componentsToken3Effect1 = 1 + (2 * getNotIf(components, "token3", "level")) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable4", "effect") * getNotIf(dataUpgrades, "collectable6", "effect")
    componentsToken3Effect2 = 0
  }

  componentsToken3Effect1 = norm(componentsToken3Effect1)

  //Tick producer
  let componentsToken4Level = getNotIf(components, "token4", "level")
  let componentsToken4Effect1 = 0
  let componentsToken4Effect2 = 0
  let componentsToken4price = 0

  if (getNotIf(components, "token4", "level") >= 0 && getNotIf(components, "token4", "level") < 10) {
    componentsToken4Effect1 = 1 + (1 * (getIfActive(components, "token4", "level")) * getNotIf(components, "token9", "effect1"))
    componentsToken4Effect2 = 0
    componentsToken4price = ((4.5 ** getNotIf(components, "token4", "level")) * (10 ** 9)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token4", "level") >= 10 && getNotIf(components, "token4", "level") < 20) {
    componentsToken4Effect1 = 1 + (1.5 * (getIfActive(components, "token4", "level")) * getNotIf(components, "token9", "effect1") * getIfActive(dataUpgrades, "collectable6", "effect"))
    componentsToken4Effect2 = 0
    componentsToken4price = ((10 ** getNotIf(components, "token4", "level")) * (10 ** 17)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token4", "level") == 20) {
    componentsToken4Effect1 = 1 + (2 * (getIfActive(components, "token4", "level")) * getNotIf(components, "token9", "effect1") * getIfActive(dataUpgrades, "collectable6", "effect"))
    componentsToken4Effect2 = 0
  }

  componentsToken4Effect1 = norm(componentsToken4Effect1)

  //Data Booster
  let componentsToken5Level = getNotIf(components, "token5", "level")
  let componentsToken5Effect1 = 0
  let componentsToken5Effect2 = 0
  let componentsToken5price = 0

  if (getNotIf(components, "token5", "level") >= 0 && getNotIf(components, "token5", "level") < 10) {
    componentsToken5Effect1 = (1 + (0.5 * (getNotIf(components, "token5", "level")))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable7", "effect")
    componentsToken5Effect2 = 0
    componentsToken5price = ((4.5 ** getNotIf(components, "token5", "level")) * (10 ** 9)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token5", "level") >= 10 && getNotIf(components, "token5", "level") < 20) {
    componentsToken5Effect1 = (1 + (1 * (getNotIf(components, "token5", "level")))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect") * getNotIf(dataUpgrades, "collectable7", "effect")
    componentsToken5Effect2 = 0
    componentsToken5price = ((10 ** getNotIf(components, "token5", "level")) * (10 ** 17)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token5", "level") == 20) {
    componentsToken5Effect1 = (1 + (2 * (getNotIf(components, "token5", "level")))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect") * getNotIf(dataUpgrades, "collectable7", "effect")
    componentsToken5Effect2 = 0
  }

  componentsToken5Effect1 = norm(componentsToken5Effect1)

  //Data Booster (not active)
  let componentsToken6Level = getNotIf(components, "token6", "level")
  let componentsToken6Effect1 = (getIfActive(components, "token6", "level"))
  let componentsToken6Effect2 = 10 * (getIfActive(components, "token6", "level"))
  let componentsToken6price = (2.5 ** getIfActive(components, "token6", "level"))

  if (getIfActive(components, "token6", "level") >= 0 && getIfActive(components, "token6", "level") < 10) {
    componentsToken6Effect1 = (getIfActive(components, "token6", "level"))
    componentsToken6Effect2 = (10 * getIfActive(components, "token6", "level"))
    componentsToken6price = (2.5 ** getIfActive(components, "token6", "level"))
  }
  if (getIfActive(components, "token6", "level") >= 10 && getIfActive(components, "token6", "level") < 20) {
    componentsToken6Effect1 = (2 * getIfActive(components, "token6", "level"))
    componentsToken6Effect2 = (20 * getIfActive(components, "token6", "level"))
    componentsToken6price = (5 ** getIfActive(components, "token6", "level"))
  }
  if (getNotIf(components, "token6", "level") == 20) {

  }


  //Energy Synergy
  let componentsToken7Level = getNotIf(components, "token7", "level")
  let componentsToken7Effect1 = 0
  let componentsToken7Effect2 = 0
  let componentsToken7price = 0

  if (getNotIf(components, "token7", "level") >= 0 && getNotIf(components, "token7", "level") < 10) {
    componentsToken7Effect1 = (4 ** logBase(10, getNotIf(gameData, null, "energy") * (1.1 * (getNotIf(components, "token7", "level"))))) * getNotIf(components, "token9", "effect1")
    componentsToken7Effect2 = 0
    componentsToken7price = ((4.5 ** getNotIf(components, "token7", "level")) * (10 ** 20)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token7", "level") >= 10 && getNotIf(components, "token7", "level") < 20) {
    componentsToken7Effect1 = (10 * ((4 ** logBase(10, getNotIf(gameData, null, "energy") * (1.1 * (getNotIf(components, "token7", "level")))))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect"))
    componentsToken7Effect2 = 0
    componentsToken7price = ((10 ** getNotIf(components, "token7", "level")) * (10 ** 30)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token7", "level") == 20) {
    componentsToken7Effect1 = (100 * ((4 ** logBase(10, getNotIf(gameData, null, "energy") * (1.1 * (getNotIf(components, "token7", "level")))))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect"))
    componentsToken7Effect2 = 0
  }

  componentsToken7Effect1 = norm(componentsToken7Effect1)


  //Asteroid Enchancer
  let componentsToken8Level = getNotIf(components, "token8", "level")
  let componentsToken8Effect1 = 0
  let componentsToken8Effect2 = 0
  let componentsToken8price = 0

  if (getNotIf(components, "token8", "level") >= 0 && getNotIf(components, "token8", "level") < 10) {
    componentsToken8Effect1 = (1 + (1 * getNotIf(components, "token8", "level"))) * getNotIf(components, "token9", "effect1")
    componentsToken8Effect2 = 0
    componentsToken8price = (10 ** getNotIf(components, "token8", "level"))
  }
  if (getNotIf(components, "token8", "level") >= 10 && getNotIf(components, "token8", "level") < 20) {
    componentsToken8Effect1 = 1 + (2 * getNotIf(components, "token8", "level")) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect")
    componentsToken8Effect2 = 0
    componentsToken8price = (20 ** getNotIf(components, "token8", "level"))
  }
  if (getNotIf(components, "token8", "level") == 20) {
    componentsToken8Effect1 = 1 + (2 * getNotIf(components, "token8", "level")) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect")
  }


  //Ally Synergy
  let componentsToken9Level = getNotIf(components, "token9", "level")
  let componentsToken9Effect1 = 0
  let componentsToken9Effect2 = 0
  let componentsToken9price = 0

  if (getNotIf(components, "token9", "level") >= 0 && getNotIf(components, "token9", "level") < 10) {
    componentsToken9Effect1 = 1 + (0.25 * getIfActive(components, "token9", "level"))
    componentsToken9Effect2 = 0
    componentsToken9price = ((4.5 ** getNotIf(components, "token9", "level")) * (10 ** 20)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token9", "level") >= 10 && getNotIf(components, "token9", "level") < 20) {
    componentsToken9Effect1 = 1 + (0.5 * getIfActive(components, "token9", "level")) * getNotIf(dataUpgrades, "collectable6", "effect")
    componentsToken9Effect2 = 0
    componentsToken9price = ((10 ** getNotIf(components, "token9", "level")) * (10 ** 30)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token9", "level") == 20) {
    componentsToken9Effect1 = 1 + (1 * getIfActive(components, "token9", "level")) * getNotIf(dataUpgrades, "collectable6", "effect")
    componentsToken9Effect2 = 0
  }

  componentsToken9Effect1 = norm(componentsToken9Effect1)


  //Energized Structure
  let componentsToken10Level = getNotIf(components, "token10", "level")
  let componentsToken10Effect1 = 0
  let componentsToken10Effect2 = 0
  let componentsToken10price = 0

  if (getNotIf(components, "token10", "level") >= 0 && getNotIf(components, "token10", "level") < 10) {
    componentsToken10Effect1 = 1 + (0.5 * getIfActive(components, "token10", "level"))
    componentsToken10Effect2 = 0
    componentsToken10price = ((4.5 ** getNotIf(components, "token10", "level")) * (10 ** 20)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token10", "level") >= 10 && getNotIf(components, "token10", "level") < 20) {
    componentsToken10Effect1 = 1 + (1 * getIfActive(components, "token10", "level")) * getNotIf(dataUpgrades, "collectable6", "effect")
    componentsToken10Effect2 = 0
    componentsToken10price = ((10 ** getNotIf(components, "token10", "level")) * (10 ** 30)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token10", "level") == 20) {
    componentsToken10Effect1 = 1 + (2 * getIfActive(components, "token10", "level")) * getNotIf(dataUpgrades, "collectable6", "effect")
    componentsToken10Effect2 = 0
  }

  componentsToken10Effect1 = norm(componentsToken10Effect1)


  //Asteroids Cells Booster
  let componentsToken11Level = getNotIf(components, "token11", "level")
  let componentsToken11Effect1 = 0
  let componentsToken11Effect2 = 0
  let componentsToken11price = 0

  if (getNotIf(components, "token11", "level") >= 0 && getNotIf(components, "token11", "level") < 10) {
    componentsToken10Effect1 = getNotIf(gameData, null, "energyProd") * 0.3;
    componentsToken10Effect2 = (4 * (1 + (0.5 * getNotIf(components, "token11", "level"))) * logBase(2, getNotIf(gameData, null, "cells"))) * getNotIf(components, "token9", "effect1")
    componentsToken10price = ((4.5 ** getNotIf(components, "token11", "level")) * (10 ** 20)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token11", "level") >= 10 && getNotIf(components, "token11", "level") < 20) {
    componentsToken10Effect1 = getNotIf(gameData, null, "energyProd") * 0.3;
    componentsToken10Effect2 = (12 * (1 + (0.5 * getNotIf(components, "token11", "level"))) * logBase(2, getNotIf(gameData, null, "cells"))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable7", "effect")
    componentsToken10price = ((10 ** getNotIf(components, "token11", "level")) * (10 ** 30)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token11", "level") == 20) {
    componentsToken10Effect1 = getNotIf(gameData, null, "energyProd") * 0.3;
    componentsToken10Effect2 = (30 * (1 + (0.5 * getNotIf(components, "token11", "level"))) * logBase(2, getNotIf(gameData, null, "cells"))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable7", "effect")
  }

  componentsToken11Effect1 = norm(componentsToken11Effect1)



  //Asteroids Data Booster
  let componentsToken12Level = getNotIf(components, "token12", "level")
  let componentsToken12Effect1 = 0
  let componentsToken12Effect2 = 0
  let componentsToken12price = 0

  if (getNotIf(components, "token12", "level") >= 0 && getNotIf(components, "token12", "level") < 10) {
    componentsToken10Effect1 = getNotIf(gameData, null, "energyProd") * 0.3;
    componentsToken10Effect2 = (1 + (4 * (getNotIf(components, "token12", "level")))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable7", "effect")
    componentsToken10price = ((4.5 ** getNotIf(components, "token12", "level")) * (10 ** 20)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token12", "level") >= 10 && getNotIf(components, "token12", "level") < 20) {
    componentsToken10Effect1 = getNotIf(gameData, null, "energyProd") * 0.3;
    componentsToken10Effect2 = (1 + (8 * (getNotIf(components, "token12", "level")))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect") * getNotIf(dataUpgrades, "collectable7", "effect")
    componentsToken10price = ((10 ** getNotIf(components, "token12", "level")) * (10 ** 30)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token12", "level") == 20) {
    componentsToken10Effect1 = getNotIf(gameData, null, "energyProd") * 0.3;
    componentsToken10Effect2 = (1 + (16 * (getNotIf(components, "token12", "level")))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect") * getNotIf(dataUpgrades, "collectable7", "effect")
  }

  componentsToken12Effect1 = norm(componentsToken12Effect1)

  setNotIf(components, "token1", "level", componentsToken1Level)
  setNotIf(components, "token1", "effect1", componentsToken1Effect1)
  setNotIf(components, "token1", "effect2", componentsToken1Effect2)
  setNotIf(components, "token1", "price", componentsToken1price)

  setNotIf(components, "token2", "level", componentsToken2Level)
  setNotIf(components, "token2", "effect1", componentsToken2Effect1)
  setNotIf(components, "token2", "effect2", componentsToken2Effect2)
  setNotIf(components, "token2", "price", componentsToken2price)

  setNotIf(components, "token3", "level", componentsToken3Level)
  setNotIf(components, "token3", "effect1", componentsToken3Effect1)
  setNotIf(components, "token3", "effect2", componentsToken3Effect2)
  setNotIf(components, "token3", "price", componentsToken3price)

  setNotIf(components, "token4", "level", componentsToken4Level)
  setNotIf(components, "token4", "effect1", componentsToken4Effect1)
  setNotIf(components, "token4", "effect2", componentsToken4Effect2)
  setNotIf(components, "token4", "price", componentsToken4price)

  setNotIf(components, "token5", "level", componentsToken5Level)
  setNotIf(components, "token5", "effect1", componentsToken5Effect1)
  setNotIf(components, "token5", "effect2", componentsToken5Effect2)
  setNotIf(components, "token5", "price", componentsToken5price)

  setNotIf(components, "token6", "level", componentsToken6Level)
  setNotIf(components, "token6", "effect1", componentsToken6Effect1)
  setNotIf(components, "token6", "effect2", componentsToken6Effect2)
  setNotIf(components, "token6", "price", componentsToken6price)

  setNotIf(components, "token7", "level", componentsToken7Level)
  setNotIf(components, "token7", "effect1", componentsToken7Effect1)
  setNotIf(components, "token7", "effect2", componentsToken7Effect2)
  setNotIf(components, "token7", "price", componentsToken7price)

  setNotIf(components, "token8", "level", componentsToken8Level)
  setNotIf(components, "token8", "effect1", componentsToken8Effect1)
  setNotIf(components, "token8", "effect2", componentsToken8Effect2)
  setNotIf(components, "token8", "price", componentsToken8price)

  setNotIf(components, "token9", "level", componentsToken9Level)
  setNotIf(components, "token9", "effect1", componentsToken9Effect1)
  setNotIf(components, "token9", "effect2", componentsToken9Effect2)
  setNotIf(components, "token9", "price", componentsToken9price)

  setNotIf(components, "token10", "level", componentsToken10Level)
  setNotIf(components, "token10", "effect1", componentsToken10Effect1)
  setNotIf(components, "token10", "effect2", componentsToken10Effect2)
  setNotIf(components, "token10", "price", componentsToken10price)

  setNotIf(components, "token11", "level", componentsToken11Level)
  setNotIf(components, "token11", "effect1", componentsToken11Effect1)
  setNotIf(components, "token11", "effect2", componentsToken11Effect2)
  setNotIf(components, "token11", "price", componentsToken11price)

  setNotIf(components, "token12", "level", componentsToken12Level)
  setNotIf(components, "token12", "effect1", componentsToken12Effect1)
  setNotIf(components, "token12", "effect2", componentsToken12Effect2)
  setNotIf(components, "token12", "price", componentsToken12price)

  //refining

  if (getNotIf(gameData, null, "cells") >= 100) {
    setActive(refining, null, "value", true)
    setActive(refining, null, "extractors", true)
    setActive(refining, null, "speedExtractor", true)
    setActive(refining, null, "effect", true)
    setActive(refining, null, "priceExtractors", true)
    setActive(refining, null, "speedExtractorPrice", true)
  }

  let refiningValue = (4 * (getIfActive(refining, null, "extractors")) * (2 ** getIfActive(refining, null, "speedExtractor"))) * getNotIf(dataUpgrades, "collectable3", "effect");

  let refiningExtractors = getIfActive(refining, null, "extractors");
  let refiningSpeedExtractor = getIfActive(refining, null, "speedExtractor");
  let refiningEffect = 0; //effetto che si applica fra extractors e speedExtractors, attualmente, non viene usato
  let refiningPriceExtractors = (1.4 ** (10 + getIfActive(refining, null, "extractors"))) / getNotIf(dataUpgrades, "collectable2", "effect");
  let refiningSpeedExtractorPrice = (10 ** (2 + getIfActive(refining, null, "speedExtractor"))) / getNotIf(dataUpgrades, "collectable2", "effect");

  setIfActive(refining, null, "value", refiningValue)
  setIfActive(refining, null, "extractors", refiningExtractors)
  setIfActive(refining, null, "speedExtractor", refiningSpeedExtractor)
  setIfActive(refining, null, "effect", refiningEffect)
  setIfActive(refining, null, "priceExtractors", refiningPriceExtractors)
  setIfActive(refining, null, "speedExtractorPrice", refiningSpeedExtractorPrice)

  //data
  setActive(data, null, "upgradeEffect1", true);
  setActive(data, null, "upgradeEffect2", true);
  setActive(data, null, "upgradeNumber1", true);
  setActive(data, null, "upgradeNumber2", true);
  setActive(data, null, "upgradePrice1", true);
  setActive(data, null, "upgradePrice2", true);
  setActive(data, null, "lightDuration", true);
  setActive(data, null, "mediumDuration", true);
  setActive(data, null, "heavyDuration", true);
  setActive(data, null, "lightExtractionMult", true);
  setActive(data, null, "mediumExtractionMult", true);
  setActive(data, null, "heavyExtractionMult", true);

  let dataUpgradeEffect1 = getIfActive(data, null, "upgradeNumber1");
  let dataUpgradePrice1 = 10 ** getIfActive(data, null, "upgradeNumber1");

  if (getIfActive(data, null, "upgradeNumber1") > 4) {
    dataUpgradePrice1 = 20 ** getIfActive(data, null, "upgradeNumber1");
  }
  let dataUpgradeNumber1 = getIfActive(data, null, "upgradeNumber1");
  let dataUpgradeEffect2 = getIfActive(data, null, "upgradeNumber2");
  let dataUpgradePrice2 = 10 ** getIfActive(data, null, "upgradeNumber2");

  if (getIfActive(data, null, "upgradeNumber2") > 4) {
    dataUpgradePrice2 = 20 ** getIfActive(data, null, "upgradeNumber2");
  }
  let dataUpgradeNumber2 = getIfActive(data, null, "upgradeNumber2");

  let dataLightDuration = 3000 / (getNotIf(gameData, null, "tickSpeed") / 1000)
  //30000
  let dataMediumDuration = 30000 / (getNotIf(gameData, null, "tickSpeed") / 1000)
  //180000
  let dataHeavyDuration = 180000 / (getNotIf(gameData, null, "tickSpeed") / 1000)
  let dataLightExtractionMult = Math.floor(1 + getIfActive(data, null, "upgradeEffect1"))

  let dataMediumExtractionMult = Math.floor(getIfActive(data, null, "upgradeEffect1") / 4)
  if (Math.floor(getIfActive(data, null, "upgradeEffect1") / 4) >= 1) {
    dataMediumExtractionMult = 1 + (getIfActive(data, null, "upgradeEffect1") - 4)
  }

  let dataHeavyExtractionMult = Math.floor(getIfActive(data, null, "upgradeEffect1") / 8)
  if (Math.floor(getIfActive(data, null, "upgradeEffect1") / 8) >= 1) {
    dataHeavyExtractionMult = 1 + (getIfActive(data, null, "upgradeEffect1") - 8)
  }


  setIfActive(data, null, "upgradeEffect1", dataUpgradeEffect1)
  setIfActive(data, null, "upgradePrice1", dataUpgradePrice1)
  setIfActive(data, null, "upgradeNumber1", dataUpgradeNumber1)
  setIfActive(data, null, "upgradeEffect2", dataUpgradeEffect2)
  setIfActive(data, null, "upgradePrice2", dataUpgradePrice2)
  setIfActive(data, null, "upgradeNumber2", dataUpgradeNumber2)
  setIfActive(data, null, "lightDuration", dataLightDuration)
  setIfActive(data, null, "mediumDuration", dataMediumDuration)
  setIfActive(data, null, "heavyDuration", dataHeavyDuration)
  setIfActive(data, null, "lightExtractionMult", dataLightExtractionMult)
  setIfActive(data, null, "mediumExtractionMult", dataMediumExtractionMult)
  setIfActive(data, null, "heavyExtractionMult", dataHeavyExtractionMult)

  //dataUpgrades
  setActive(dataUpgrades, "collectable1", "effect", true);
  setActive(dataUpgrades, "collectable1", "maxQuantity", true);
  setActive(dataUpgrades, "collectable1", "extracted", true);

  setActive(dataUpgrades, "collectable2", "effect", true);
  setActive(dataUpgrades, "collectable2", "maxQuantity", true);
  setActive(dataUpgrades, "collectable2", "extracted", true);

  setActive(dataUpgrades, "collectable3", "effect", true);
  setActive(dataUpgrades, "collectable3", "maxQuantity", true);
  setActive(dataUpgrades, "collectable3", "extracted", true);

  setActive(dataUpgrades, "collectable4", "effect", true);
  setActive(dataUpgrades, "collectable4", "maxQuantity", true);
  setActive(dataUpgrades, "collectable4", "extracted", true);

  setActive(dataUpgrades, "collectable5", "effect", true);
  setActive(dataUpgrades, "collectable5", "maxQuantity", true);
  setActive(dataUpgrades, "collectable5", "extracted", true);

  setActive(dataUpgrades, "collectable6", "effect", true);
  setActive(dataUpgrades, "collectable6", "maxQuantity", true);
  setActive(dataUpgrades, "collectable6", "extracted", true);

  setActive(dataUpgrades, "collectable7", "effect", true);
  setActive(dataUpgrades, "collectable7", "maxQuantity", true);
  setActive(dataUpgrades, "collectable7", "extracted", true);

  setActive(dataUpgrades, "collectable8", "effect", true);
  setActive(dataUpgrades, "collectable8", "maxQuantity", true);
  setActive(dataUpgrades, "collectable8", "extracted", true);

  setActive(dataUpgrades, "collectable9", "effect", true);
  setActive(dataUpgrades, "collectable9", "maxQuantity", true);
  setActive(dataUpgrades, "collectable9", "extracted", true);

  setActive(dataUpgrades, "collectable11", "effect", true);
  setActive(dataUpgrades, "collectable11", "maxQuantity", true);
  setActive(dataUpgrades, "collectable11", "extracted", true);

  //Data + 0.1/s
  let dataUpgrade1Effect = 0.1 * getIfActive(dataUpgrades, "collectable1", "extracted");
  let dataUpgrade1MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");;
  let dataUpgrade1Extracted = getIfActive(dataUpgrades, "collectable1", "extracted");


  //Hardware T1 layer is slightly cheaper
  let dataUpgrade2Effect = 1 + (0.1 * getIfActive(dataUpgrades, "collectable2", "extracted"));
  let dataUpgrade2MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");
  let dataUpgrade2Extracted = getIfActive(dataUpgrades, "collectable2", "extracted");

  //Extractor is slightly boosted
  let dataUpgrade3Effect = 1 + (0.1 * getIfActive(dataUpgrades, "collectable3", "extracted"));
  let dataUpgrade3MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");;
  let dataUpgrade3Extracted = getIfActive(dataUpgrades, "collectable3", "extracted");

  //Multimakers are slightly stronger
  let dataUpgrade4Effect = 1 + (0.1 * getIfActive(dataUpgrades, "collectable4", "extracted"));
  let dataUpgrade4MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");
  let dataUpgrade4Extracted = getIfActive(dataUpgrades, "collectable4", "extracted");

  //Data + 1/s
  let dataUpgrade5Effect = 1 * getIfActive(dataUpgrades, "collectable5", "extracted");
  let dataUpgrade5MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");;
  let dataUpgrade5Extracted = getIfActive(dataUpgrades, "collectable5", "extracted");

  //Components rankup are stronger
  let dataUpgrade6Effect = 1 + (1 * getIfActive(dataUpgrades, "collectable6", "extracted"));
  let dataUpgrade6MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");
  let dataUpgrade6Extracted = getIfActive(dataUpgrades, "collectable6", "extracted");

  //Boosters are stronger
  let dataUpgrade7Effect = 1 + (1 * getIfActive(dataUpgrades, "collectable7", "extracted"));
  let dataUpgrade7MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");;
  let dataUpgrade7Extracted = getIfActive(dataUpgrades, "collectable7", "extracted");

  //Components Cost is reduced
  let dataUpgrade8Effect = 1 + (1 * getIfActive(dataUpgrades, "collectable8", "extracted"));
  let dataUpgrade8MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");
  let dataUpgrade8Extracted = getIfActive(dataUpgrades, "collectable8", "extracted");

  //Data + 10/s
  let dataUpgrade9Effect = 10 * getIfActive(dataUpgrades, "collectable9", "extracted");
  let dataUpgrade9MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");;
  let dataUpgrade9Extracted = getIfActive(dataUpgrades, "collectable9", "extracted");

  //Components Effect are slightly stronger
  let dataUpgrade11Effect = 1 + (0.1 * getIfActive(dataUpgrades, "collectable11", "extracted"));
  let dataUpgrade11MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");;
  let dataUpgrade11Extracted = getIfActive(dataUpgrades, "collectable11", "extracted");

  setNotIf(dataUpgrades, "collectable1", "effect", dataUpgrade1Effect)
  setNotIf(dataUpgrades, "collectable1", "maxQuantity", dataUpgrade1MaxQuantity)
  setNotIf(dataUpgrades, "collectable1", "extracted", dataUpgrade1Extracted)

  setNotIf(dataUpgrades, "collectable2", "effect", dataUpgrade2Effect)
  setNotIf(dataUpgrades, "collectable2", "maxQuantity", dataUpgrade2MaxQuantity)
  setNotIf(dataUpgrades, "collectable2", "extracted", dataUpgrade2Extracted)

  setNotIf(dataUpgrades, "collectable3", "effect", dataUpgrade3Effect)
  setNotIf(dataUpgrades, "collectable3", "maxQuantity", dataUpgrade3MaxQuantity)
  setNotIf(dataUpgrades, "collectable3", "extracted", dataUpgrade3Extracted)

  setNotIf(dataUpgrades, "collectable4", "effect", dataUpgrade4Effect)
  setNotIf(dataUpgrades, "collectable4", "maxQuantity", dataUpgrade4MaxQuantity)
  setNotIf(dataUpgrades, "collectable4", "extracted", dataUpgrade4Extracted)

  setNotIf(dataUpgrades, "collectable5", "effect", dataUpgrade5Effect)
  setNotIf(dataUpgrades, "collectable5", "maxQuantity", dataUpgrade5MaxQuantity)
  setNotIf(dataUpgrades, "collectable5", "extracted", dataUpgrade5Extracted)

  setNotIf(dataUpgrades, "collectable6", "effect", dataUpgrade6Effect)
  setNotIf(dataUpgrades, "collectable6", "maxQuantity", dataUpgrade6MaxQuantity)
  setNotIf(dataUpgrades, "collectable6", "extracted", dataUpgrade6Extracted)

  setNotIf(dataUpgrades, "collectable7", "effect", dataUpgrade7Effect)
  setNotIf(dataUpgrades, "collectable7", "maxQuantity", dataUpgrade7MaxQuantity)
  setNotIf(dataUpgrades, "collectable7", "extracted", dataUpgrade7Extracted)

  setNotIf(dataUpgrades, "collectable8", "effect", dataUpgrade8Effect)
  setNotIf(dataUpgrades, "collectable8", "maxQuantity", dataUpgrade8MaxQuantity)
  setNotIf(dataUpgrades, "collectable8", "extracted", dataUpgrade8Extracted)

  setNotIf(dataUpgrades, "collectable9", "effect", dataUpgrade9Effect)
  setNotIf(dataUpgrades, "collectable9", "maxQuantity", dataUpgrade9MaxQuantity)
  setNotIf(dataUpgrades, "collectable9", "extracted", dataUpgrade9Extracted)

  setNotIf(dataUpgrades, "collectable11", "effect", dataUpgrade11Effect)
  setNotIf(dataUpgrades, "collectable11", "maxQuantity", dataUpgrade11MaxQuantity)
  setNotIf(dataUpgrades, "collectable11", "extracted", dataUpgrade11Extracted)


  //projects
  setActive(projects, "unlockable1", "price1", true)
  setActive(projects, "unlockable1", "price2", true)
  setActive(projects, "unlockable1", "price3", true)
  setActive(projects, "unlockable2", "price1", true)
  setActive(projects, "unlockable2", "price2", true)
  setActive(projects, "unlockable2", "price3", true)
  setActive(projects, "unlockable3", "price1", true)
  setActive(projects, "unlockable3", "price2", true)
  setActive(projects, "unlockable3", "price3", true)
  setActive(projects, "unlockable4", "price1", true)
  setActive(projects, "unlockable4", "price2", true)
  setActive(projects, "unlockable4", "price3", true)
  setActive(projects, "unlockable5", "price1", true)
  setActive(projects, "unlockable5", "price2", true)
  setActive(projects, "unlockable5", "price3", true)
  setActive(projects, "unlockable6", "price1", true)
  setActive(projects, "unlockable6", "price2", true)
  setActive(projects, "unlockable6", "price3", true)
  setActive(projects, "unlockable7", "price1", true)
  setActive(projects, "unlockable7", "price2", true)
  setActive(projects, "unlockable7", "price3", true)
  setActive(projects, "unlockable8", "price1", true)
  setActive(projects, "unlockable8", "price2", true)
  setActive(projects, "unlockable8", "price3", true)
  setActive(projects, "unlockable9", "price1", true)
  setActive(projects, "unlockable9", "price2", true)
  setActive(projects, "unlockable9", "price3", true)
  setActive(projects, "unlockable10", "price1", true)
  setActive(projects, "unlockable10", "price2", true)
  setActive(projects, "unlockable10", "price3", true)
  setActive(projects, "unlockable11", "price1", true)
  setActive(projects, "unlockable11", "price2", true)
  setActive(projects, "unlockable11", "price3", true)
  setActive(projects, "unlockable12", "price1", true)
  setActive(projects, "unlockable12", "price2", true)
  setActive(projects, "unlockable12", "price3", true)
  setActive(projects, "unlockable13", "price1", true)
  setActive(projects, "unlockable13", "price2", true)
  setActive(projects, "unlockable13", "price3", true)
  setActive(projects, "unlockable14", "price1", true)
  setActive(projects, "unlockable14", "price2", true)
  setActive(projects, "unlockable14", "price3", true)
  setActive(projects, "unlockable15", "price1", true)
  setActive(projects, "unlockable15", "price2", true)
  setActive(projects, "unlockable15", "price3", true)
  setActive(projects, "unlockable16", "price1", true)
  setActive(projects, "unlockable16", "price2", true)
  setActive(projects, "unlockable16", "price3", true)

  //Hardware Package 1
  let projectsUnlockable1Price1 = 2 * (10 ** 8)
  let projectsUnlockable1Price2 = 150
  let projectsUnlockable1Price3 = 0

  //Software Package 1
  let projectsUnlockable2Price1 = 750
  let projectsUnlockable2Price2 = 0
  let projectsUnlockable2Price3 = 0

  //Deep Exploration
  let projectsUnlockable3Price1 = 10 ** 6
  let projectsUnlockable3Price2 = 500
  let projectsUnlockable3Price3 = 0

  //new resources package 1
  let projectsUnlockable4Price1 = 5 * (10 ** 9)
  let projectsUnlockable4Price2 = 0
  let projectsUnlockable4Price3 = 0

  //extractors automation
  let projectsUnlockable5Price1 = 10 ** 18
  let projectsUnlockable5Price2 = 5 * (10 ** 5)
  let projectsUnlockable5Price3 = 100

  //data automation
  let projectsUnlockable6Price1 = 10 ** 18
  let projectsUnlockable6Price2 = 5 * (10 ** 5)
  let projectsUnlockable6Price3 = 100


  //rarity automation
  let projectsUnlockable7Price1 = 10 ** 7
  let projectsUnlockable7Price2 = 5000
  let projectsUnlockable7Price3 = 1000

  //components automation
  let projectsUnlockable8Price1 = 10 ** 9
  let projectsUnlockable8Price2 = 10000
  let projectsUnlockable8Price3 = 10000

  //IDLE 1
  let projectsUnlockable9Price1 = 10 ** 3
  let projectsUnlockable9Price2 = 0
  let projectsUnlockable9Price3 = 0

  //IDLE 2
  let projectsUnlockable10Price1 = 5 * (10 ** 5)
  let projectsUnlockable10Price2 = 0
  let projectsUnlockable10Price3 = 0

  //IDLE 3
  let projectsUnlockable11Price1 = 10 ** 7
  let projectsUnlockable11Price2 = 0
  let projectsUnlockable11Price3 = 0

  //IDLE 4
  let projectsUnlockable12Price1 = 10 ** 9
  let projectsUnlockable12Price2 = 0
  let projectsUnlockable12Price3 = 0

  //COMMUNICATION PACKAGE 1
  let projectsUnlockable13Price1 = 10 ** 18
  let projectsUnlockable13Price2 = 5 * (10 ** 9)
  let projectsUnlockable13Price3 = 100

  //FIRST EXPLORATION STEP
  let projectsUnlockable14Price1 = 10 ** 13
  let projectsUnlockable14Price2 = 10
  let projectsUnlockable14Price3 = 0

  //MILESTONE: FIRST PILLAR
  let projectsUnlockable15Price1 = 10 ** 16
  let projectsUnlockable15Price2 = 5000
  let projectsUnlockable15Price3 = 0

    //MILESTONE: FIRST STRATUM
    let projectsUnlockable16Price1 = 10 ** 40
    let projectsUnlockable16Price2 = 10 ** 20
    let projectsUnlockable16Price3 = 10 ** 6

  setIfActive(projects, "unlockable1", "price1", projectsUnlockable1Price1)
  setIfActive(projects, "unlockable1", "price2", projectsUnlockable1Price2)
  setIfActive(projects, "unlockable1", "price3", projectsUnlockable1Price3)
  setIfActive(projects, "unlockable2", "price1", projectsUnlockable2Price1)
  setIfActive(projects, "unlockable2", "price2", projectsUnlockable2Price2)
  setIfActive(projects, "unlockable2", "price3", projectsUnlockable2Price3)
  setIfActive(projects, "unlockable3", "price1", projectsUnlockable3Price1)
  setIfActive(projects, "unlockable3", "price2", projectsUnlockable3Price2)
  setIfActive(projects, "unlockable3", "price3", projectsUnlockable3Price3)
  setIfActive(projects, "unlockable4", "price1", projectsUnlockable4Price1)
  setIfActive(projects, "unlockable4", "price2", projectsUnlockable4Price2)
  setIfActive(projects, "unlockable4", "price3", projectsUnlockable4Price3)
  setIfActive(projects, "unlockable5", "price1", projectsUnlockable5Price1)
  setIfActive(projects, "unlockable5", "price2", projectsUnlockable5Price2)
  setIfActive(projects, "unlockable5", "price3", projectsUnlockable5Price3)
  setIfActive(projects, "unlockable6", "price1", projectsUnlockable6Price1)
  setIfActive(projects, "unlockable6", "price2", projectsUnlockable6Price2)
  setIfActive(projects, "unlockable6", "price3", projectsUnlockable6Price3)
  setIfActive(projects, "unlockable7", "price1", projectsUnlockable7Price1)
  setIfActive(projects, "unlockable7", "price2", projectsUnlockable7Price2)
  setIfActive(projects, "unlockable7", "price3", projectsUnlockable7Price3)
  setIfActive(projects, "unlockable8", "price1", projectsUnlockable8Price1)
  setIfActive(projects, "unlockable8", "price2", projectsUnlockable8Price2)
  setIfActive(projects, "unlockable8", "price3", projectsUnlockable8Price3)
  setIfActive(projects, "unlockable9", "price1", projectsUnlockable9Price1)
  setIfActive(projects, "unlockable9", "price2", projectsUnlockable9Price2)
  setIfActive(projects, "unlockable9", "price3", projectsUnlockable9Price3)
  setIfActive(projects, "unlockable10", "price1", projectsUnlockable10Price1)
  setIfActive(projects, "unlockable10", "price2", projectsUnlockable10Price2)
  setIfActive(projects, "unlockable10", "price3", projectsUnlockable10Price3)
  setIfActive(projects, "unlockable11", "price1", projectsUnlockable11Price1)
  setIfActive(projects, "unlockable11", "price2", projectsUnlockable11Price2)
  setIfActive(projects, "unlockable11", "price3", projectsUnlockable11Price3)
  setIfActive(projects, "unlockable12", "price1", projectsUnlockable12Price1)
  setIfActive(projects, "unlockable12", "price2", projectsUnlockable12Price2)
  setIfActive(projects, "unlockable12", "price3", projectsUnlockable12Price3)
  setIfActive(projects, "unlockable13", "price1", projectsUnlockable13Price1)
  setIfActive(projects, "unlockable13", "price2", projectsUnlockable13Price2)
  setIfActive(projects, "unlockable13", "price3", projectsUnlockable13Price3)
  setIfActive(projects, "unlockable14", "price1", projectsUnlockable14Price1)
  setIfActive(projects, "unlockable14", "price2", projectsUnlockable14Price2)
  setIfActive(projects, "unlockable14", "price3", projectsUnlockable14Price3)
  setIfActive(projects, "unlockable15", "price1", projectsUnlockable15Price1)
  setIfActive(projects, "unlockable15", "price2", projectsUnlockable15Price2)
  setIfActive(projects, "unlockable15", "price3", projectsUnlockable15Price3)
  setIfActive(projects, "unlockable16", "price1", projectsUnlockable16Price1)
  setIfActive(projects, "unlockable16", "price2", projectsUnlockable16Price2)
  setIfActive(projects, "unlockable16", "price3", projectsUnlockable16Price3)

  //energy

  setActive(energyBuilding, "energy1", "level", true)
  setActive(energyBuilding, "energy2", "level", true)
  setActive(energyBuilding, "energy3", "level", true)
  setActive(energyBuilding, "energy4", "level", true)
  setActive(energyBuilding, "energy5", "level", true)
  setActive(energyBuilding, "energy6", "level", true)

  setActive(energyBuilding, "energy1", "effect", true)
  setActive(energyBuilding, "energy2", "effect", true)
  setActive(energyBuilding, "energy3", "effect", true)
  setActive(energyBuilding, "energy4", "effect", true)
  setActive(energyBuilding, "energy5", "effect", true)
  setActive(energyBuilding, "energy6", "effect", true)

  setActive(energyBuilding, "energy1", "price", true)
  setActive(energyBuilding, "energy2", "price", true)
  setActive(energyBuilding, "energy3", "price", true)
  setActive(energyBuilding, "energy4", "price", true)
  setActive(energyBuilding, "energy5", "price", true)
  setActive(energyBuilding, "energy6", "price", true)

  let energyBuildingEnergy1Level = getNotIf(energyBuilding, "energy1", "level");
  let energyBuildingEnergy2Level = getNotIf(energyBuilding, "energy2", "level");
  let energyBuildingEnergy3Level = getNotIf(energyBuilding, "energy3", "level");
  let energyBuildingEnergy4Level = getNotIf(energyBuilding, "energy4", "level");
  let energyBuildingEnergy5Level = getNotIf(energyBuilding, "energy5", "level");
  let energyBuildingEnergy6Level = getNotIf(energyBuilding, "energy6", "level");

  let totLevel = getNotIf(energyBuilding, "energy1", "level") +
    getNotIf(energyBuilding, "energy2", "level") +
    getNotIf(energyBuilding, "energy3", "level") +
    getNotIf(energyBuilding, "energy4", "level") +
    getNotIf(energyBuilding, "energy5", "level") +
    getNotIf(energyBuilding, "energy6", "level")

  let energyBuildingEnergy1Effect = 2 ** getNotIf(energyBuilding, "energy1", "level");

  let energyBuildingEnergy2Effect = (10 ** getIfActive(energyBuilding, "energy2", "level")) * getNotIf(energyBuilding, "energy3", "effect");

  let energyBuildingEnergy3Effect = 1;
  if (getNotIf(energyBuilding, "energy3", "level") > 0) {
    energyBuildingEnergy3Effect = logBase(2, 2 + getNotIf(gameData, null, "energyProd")) * (2 ** getNotIf(energyBuilding, "energy3", "level"));
  }

  let energyBuildingEnergy4Effect = 0;
  let energyBuildingEnergy5Effect = 0;
  let energyBuildingEnergy6Effect = 0;


  let energyBuildingEnergy1Price = (10 ** totLevel) * ((10 ** 18) * (2 ** getNotIf(energyBuilding, "energy1", "level")));
  let energyBuildingEnergy2Price = (10 ** totLevel) * ((10 ** 18) * (2 ** getNotIf(energyBuilding, "energy2", "level")));
  let energyBuildingEnergy3Price = (10 ** totLevel) * ((10 ** 18) * (2 ** getNotIf(energyBuilding, "energy3", "level")));
  let energyBuildingEnergy4Price = 0;
  let energyBuildingEnergy5Price = 0;
  let energyBuildingEnergy6Price = 0;

  setIfActive(energyBuilding, "energy1", "level", energyBuildingEnergy1Level)
  setIfActive(energyBuilding, "energy2", "level", energyBuildingEnergy2Level)
  setIfActive(energyBuilding, "energy3", "level", energyBuildingEnergy3Level)
  setIfActive(energyBuilding, "energy4", "level", energyBuildingEnergy4Level)
  setIfActive(energyBuilding, "energy5", "level", energyBuildingEnergy5Level)
  setIfActive(energyBuilding, "energy6", "level", energyBuildingEnergy6Level)

  setIfActive(energyBuilding, "energy1", "effect", energyBuildingEnergy1Effect)
  setIfActive(energyBuilding, "energy2", "effect", energyBuildingEnergy2Effect)
  setIfActive(energyBuilding, "energy3", "effect", energyBuildingEnergy3Effect)
  setIfActive(energyBuilding, "energy4", "effect", energyBuildingEnergy4Effect)
  setIfActive(energyBuilding, "energy5", "effect", energyBuildingEnergy5Effect)
  setIfActive(energyBuilding, "energy6", "effect", energyBuildingEnergy6Effect)

  setIfActive(energyBuilding, "energy1", "price", energyBuildingEnergy1Price)
  setIfActive(energyBuilding, "energy2", "price", energyBuildingEnergy2Price)
  setIfActive(energyBuilding, "energy3", "price", energyBuildingEnergy3Price)
  setIfActive(energyBuilding, "energy4", "price", energyBuildingEnergy4Price)
  setIfActive(energyBuilding, "energy5", "price", energyBuildingEnergy5Price)
  setIfActive(energyBuilding, "energy6", "price", energyBuildingEnergy6Price)


  //exploration

  //PRICE


  if (getNotIf(gameData, null, "energyProd") < getNotIf(explorationUpgrades, getNotIf(explorationSelected, null, "explorationB"), "price")) {
    setNotIf(explorationSelected, null, "explorationB", "explorationB0")
  }

  if (getNotIf(explorationSelected, null, "explorationA") == "explorationA0" && getNotIf(gameData, null, "energyProd") > getNotIf(explorationUpgrades, getNotIf(explorationSelected, null, "explorationA"), "price")) {
    setActive(explorationUpgrades, "explorationA0", "price", true)
  }
  else (
    setActive(explorationUpgrades, "explorationA0", "price", false)
  )

  if (getNotIf(explorationSelected, null, "explorationA") == "explorationA1" && getNotIf(gameData, null, "energyProd") > getNotIf(explorationUpgrades, getNotIf(explorationSelected, null, "explorationA"), "price")) {
    setActive(explorationUpgrades, "explorationA1", "price", true)
  }
  else (
    setActive(explorationUpgrades, "explorationA1", "price", false)
  )

  if (getNotIf(explorationSelected, null, "explorationA") == "explorationA2" && getNotIf(gameData, null, "energyProd") > getNotIf(explorationUpgrades, getNotIf(explorationSelected, null, "explorationA"), "price")) {
    setActive(explorationUpgrades, "explorationA2", "price", true)
  }
  else (
    setActive(explorationUpgrades, "explorationA2", "price", false)
  )


  if (getNotIf(explorationSelected, null, "explorationB") == "explorationB0" && getNotIf(gameData, null, "energyProd") > getNotIf(explorationUpgrades, getNotIf(explorationSelected, null, "explorationB"), "price")) {
    setActive(explorationUpgrades, "explorationB0", "price", true)
  }
  else (
    setActive(explorationUpgrades, "explorationB0", "price", false)
  )

  if (getNotIf(explorationSelected, null, "explorationB") == "explorationB1" && getNotIf(gameData, null, "energyProd") > getNotIf(explorationUpgrades, getNotIf(explorationSelected, null, "explorationB"), "price")) {
    setActive(explorationUpgrades, "explorationB1", "price", true)
  }
  else (
    setActive(explorationUpgrades, "explorationB1", "price", false)
  )

  if (getNotIf(explorationSelected, null, "explorationB") == "explorationB2" && getNotIf(gameData, null, "energyProd") > getNotIf(explorationUpgrades, getNotIf(explorationSelected, null, "explorationB"), "price")) {
    setActive(explorationUpgrades, "explorationB2", "price", true)
  }
  else (
    setActive(explorationUpgrades, "explorationB2", "price", false)
  )

  //EFFECT
  if (getNotIf(explorationSelected, null, "explorationA") == "explorationA0" && getNotIf(gameData, null, "energyProd") > getNotIf(explorationUpgrades, getNotIf(explorationSelected, null, "explorationA"), "price")) {
    setActive(explorationUpgrades, "explorationA0", "effect", true)
  }
  else (
    setActive(explorationUpgrades, "explorationA0", "effect", false)
  )

  if (getNotIf(explorationSelected, null, "explorationA") == "explorationA1" && getNotIf(gameData, null, "energyProd") > getNotIf(explorationUpgrades, getNotIf(explorationSelected, null, "explorationA"), "price")) {
    setActive(explorationUpgrades, "explorationA1", "effect", true)
  }
  else (
    setActive(explorationUpgrades, "explorationA1", "effect", false)
  )

  if (getNotIf(explorationSelected, null, "explorationA") == "explorationA2" && getNotIf(gameData, null, "energyProd") > getNotIf(explorationUpgrades, getNotIf(explorationSelected, null, "explorationA"), "price")) {
    setActive(explorationUpgrades, "explorationA2", "effect", true)
  }
  else (
    setActive(explorationUpgrades, "explorationA2", "effect", false)
  )


  if (getNotIf(explorationSelected, null, "explorationB") == "explorationB0" && getNotIf(gameData, null, "energyProd") > getNotIf(explorationUpgrades, getNotIf(explorationSelected, null, "explorationB"), "price")) {
    setActive(explorationUpgrades, "explorationB0", "effect", true)
  }
  else (
    setActive(explorationUpgrades, "explorationB0", "effect", false)
  )

  if (getNotIf(explorationSelected, null, "explorationB") == "explorationB1" && getNotIf(gameData, null, "energyProd") > getNotIf(explorationUpgrades, getNotIf(explorationSelected, null, "explorationB"), "price")) {
    setActive(explorationUpgrades, "explorationB1", "effect", true)
  }
  else (
    setActive(explorationUpgrades, "explorationB1", "effect", false)
  )

  if (getNotIf(explorationSelected, null, "explorationB") == "explorationB2" && getNotIf(gameData, null, "energyProd") > getNotIf(explorationUpgrades, getNotIf(explorationSelected, null, "explorationB"), "price")) {
    setActive(explorationUpgrades, "explorationB2", "effect", true)
  }
  else (
    setActive(explorationUpgrades, "explorationB2", "effect", false)
  )


  let explorationUpgradesExplorationA0Price = 0;
  let explorationUpgradesExplorationB0Price = 0;
  let explorationUpgradesExplorationA1Price = 10 ** 3;
  let explorationUpgradesExplorationA2Price = 10 ** 7;
  let explorationUpgradesExplorationB1Price = 1;
  let explorationUpgradesExplorationB2Price = 1;


  let explorationUpgradesExplorationA0Effect = 0;
  let explorationUpgradesExplorationB0Effect = 0;
  let explorationUpgradesExplorationA1Effect = 0.1;
  let explorationUpgradesExplorationA2Effect = 2;
  let explorationUpgradesExplorationB1Effect = 50;
  let explorationUpgradesExplorationB2Effect = 1000;


  setIfActive(explorationUpgrades, "explorationA0", "price", explorationUpgradesExplorationA0Price)
  setIfActive(explorationUpgrades, "explorationB0", "price", explorationUpgradesExplorationB0Price)
  setIfActive(explorationUpgrades, "explorationA1", "price", explorationUpgradesExplorationA1Price)
  setIfActive(explorationUpgrades, "explorationA2", "price", explorationUpgradesExplorationA2Price)
  setIfActive(explorationUpgrades, "explorationB1", "price", explorationUpgradesExplorationB1Price)
  setIfActive(explorationUpgrades, "explorationB2", "price", explorationUpgradesExplorationB2Price)


  setIfActive(explorationUpgrades, "explorationA0", "effect", explorationUpgradesExplorationA0Effect)
  setIfActive(explorationUpgrades, "explorationB0", "effect", explorationUpgradesExplorationB0Effect)
  setIfActive(explorationUpgrades, "explorationA1", "effect", explorationUpgradesExplorationA1Effect)
  setIfActive(explorationUpgrades, "explorationA2", "effect", explorationUpgradesExplorationA2Effect)
  setIfActive(explorationUpgrades, "explorationB1", "effect", explorationUpgradesExplorationB1Effect)
  setIfActive(explorationUpgrades, "explorationB2", "effect", explorationUpgradesExplorationB2Effect)

}

function setTickSpeed() {

  var tickspeed1 = getIfActive(gameData, null, "tickSpeed")
  var tickspeed2 = getIfActive(components, "token4", "effect1")
  var tickspeed3 = getNotIf(gameData, null, "tickspeed3")

  tickspeed2 = norm(tickspeed2)

  console.log(tickspeed2)
  console.log(tickspeed3)

  let globalTickSpeedProd = 1000 * tickspeed2 * tickspeed3

  console.log(globalTickSpeedProd)

  setNotIf(gameData, null, "tickSpeed", globalTickSpeedProd)

}


function setComponentActive() {
  if (getNotIf(components, "token1", "active")) {
    setActive(components, "token1", "level", true)
    setActive(components, "token1", "effect1", true)
    setActive(components, "token1", "effect2", true)
    setActive(components, "token1", "price", true)
  }
  else if (!(getNotIf(components, "token1", "active"))) {
    setActive(components, "token1", "level", false)
    setActive(components, "token1", "effect1", false)
    setActive(components, "token1", "effect2", false)
    setActive(components, "token1", "price", false)
  }


  if (getNotIf(components, "token2", "active")) {
    setActive(components, "token2", "level", true)
    setActive(components, "token2", "effect1", true)
    setActive(components, "token2", "effect2", true)
    setActive(components, "token2", "price", true)
  }
  else if (!(getNotIf(components, "token2", "active"))) {
    setActive(components, "token2", "level", false)
    setActive(components, "token2", "effect1", false)
    setActive(components, "token2", "effect2", false)
    setActive(components, "token2", "price", false)
  }


  if (getNotIf(components, "token3", "active")) {
    setActive(components, "token3", "level", true)
    setActive(components, "token3", "effect1", true)
    setActive(components, "token3", "effect2", true)
    setActive(components, "token3", "price", true)
  }
  else if (!(getNotIf(components, "token3", "active"))) {
    setActive(components, "token3", "level", false)
    setActive(components, "token3", "effect1", false)
    setActive(components, "token3", "effect2", false)
    setActive(components, "token3", "price", false)
  }


  if (getNotIf(components, "token4", "active")) {
    setActive(components, "token4", "level", true)
    setActive(components, "token4", "effect1", true)
    setActive(components, "token4", "effect2", true)
    setActive(components, "token4", "price", true)
  }
  else if (!(getNotIf(components, "token4", "active"))) {
    setActive(components, "token4", "level", false)
    setActive(components, "token4", "effect1", false)
    setActive(components, "token4", "effect2", false)
    setActive(components, "token4", "price", false)
  }


  if (getNotIf(components, "token5", "active")) {
    setActive(components, "token5", "level", true)
    setActive(components, "token5", "effect1", true)
    setActive(components, "token5", "effect2", true)
    setActive(components, "token5", "price", true)
  }
  else if (!(getNotIf(components, "token5", "active"))) {
    setActive(components, "token5", "level", false)
    setActive(components, "token5", "effect1", false)
    setActive(components, "token5", "effect2", false)
    setActive(components, "token5", "price", false)
  }


  if (getNotIf(components, "token6", "active")) {
    setActive(components, "token6", "level", true)
    setActive(components, "token6", "effect1", true)
    setActive(components, "token6", "effect2", true)
    setActive(components, "token6", "price", true)
  }
  else if (!(getNotIf(components, "token6", "active"))) {
    setActive(components, "token6", "level", false)
    setActive(components, "token6", "effect1", false)
    setActive(components, "token6", "effect2", false)
    setActive(components, "token6", "price", false)
  }


  if (getNotIf(components, "token7", "active")) {
    setActive(components, "token7", "level", true)
    setActive(components, "token7", "effect1", true)
    setActive(components, "token7", "effect2", true)
    setActive(components, "token7", "price", true)
  }
  else if (!(getNotIf(components, "token7", "active"))) {
    setActive(components, "token7", "level", false)
    setActive(components, "token7", "effect1", false)
    setActive(components, "token7", "effect2", false)
    setActive(components, "token7", "price", false)
  }


  if (getNotIf(components, "token8", "active")) {
    setActive(components, "token8", "level", true)
    setActive(components, "token8", "effect1", true)
    setActive(components, "token8", "effect2", true)
    setActive(components, "token8", "price", true)
  }
  else if (!(getNotIf(components, "token8", "active"))) {
    setActive(components, "token8", "level", false)
    setActive(components, "token8", "effect1", false)
    setActive(components, "token8", "effect2", false)
    setActive(components, "token8", "price", false)
  }


  if (getNotIf(components, "token9", "active")) {
    setActive(components, "token9", "level", true)
    setActive(components, "token9", "effect1", true)
    setActive(components, "token9", "effect2", true)
    setActive(components, "token9", "price", true)
  }
  else if (!(getNotIf(components, "token9", "active"))) {
    setActive(components, "token9", "level", false)
    setActive(components, "token9", "effect1", false)
    setActive(components, "token9", "effect2", false)
    setActive(components, "token9", "price", false)
  }
}

//ZONA COMPERE

//extractors
document.getElementById("buyExtractor").onclick = function () {
  if (getNotIf(refining, null, "extractors") < 200) {
    buy(refining, "priceExtractors", refining, "extractors", 1)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("buySpeedExtractor").onclick = function () {
  if (getNotIf(refining, null, "speedExtractor") < 30) {
    buy(refining, "speedExtractorPrice", refining, "speedExtractor", 1)
    valuesSetter()
    manualVisualLoop()
  }
}

//ora vi e' una funzione che non usa buy, creala
document.getElementById("dataLight").onclick = function () {
  if (getNotIf(data, null, "lightExtractionMult") > 0) {
    dataSelected("dataLight")
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("dataMedium").onclick = function () {
  if (getNotIf(data, null, "mediumExtractionMult") > 0) {
    dataSelected("dataMedium")
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("dataHeavy").onclick = function () {
  if (getNotIf(data, null, "heavyExtractionMult") > 0) {
    dataSelected("dataHeavy")
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("dataNull").onclick = function () {
  dataSelected("dataNull")
  valuesSetter()
  manualVisualLoop()
}

//data upgrades

document.getElementById("dataButton1").onclick = function () {
  buy(data, "upgradePrice1", data, "upgradeNumber1", 1)
  valuesSetter()
  manualVisualLoop()
}

document.getElementById("dataButton2").onclick = function () {
  buy(data, "upgradePrice2", data, "upgradeNumber2", 1)
  valuesSetter()
  manualVisualLoop()
}


//projects

document.getElementById("unlockable1Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable1", "price1Identity")) < getNotIf(projects, "unlockable1", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable1", "price2Identity")) < getNotIf(projects, "unlockable1", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable1", "price3Identity")) < getNotIf(projects, "unlockable1", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable1", "unlocked"))) {
    buyIdUnlock(projects, "unlockable1", "price1", projects, "unlockable1", "unlocked", true)
    buyIdUnlock(projects, "unlockable1", "price2", projects, "unlockable1", "unlocked", true)
    buyIdUnlock(projects, "unlockable1", "price3", projects, "unlockable1", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("unlockable2Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable2", "price1Identity")) < getNotIf(projects, "unlockable2", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable2", "price2Identity")) < getNotIf(projects, "unlockable2", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable2", "price3Identity")) < getNotIf(projects, "unlockable2", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable2", "unlocked"))) {
    buyIdUnlock(projects, "unlockable2", "price1", projects, "unlockable2", "unlocked", true)
    buyIdUnlock(projects, "unlockable2", "price2", projects, "unlockable2", "unlocked", true)
    buyIdUnlock(projects, "unlockable2", "price3", projects, "unlockable2", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("unlockable3Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable3", "price1Identity")) < getNotIf(projects, "unlockable3", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable3", "price2Identity")) < getNotIf(projects, "unlockable3", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable3", "price3Identity")) < getNotIf(projects, "unlockable3", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable3", "unlocked"))) {
    buyIdUnlock(projects, "unlockable3", "price1", projects, "unlockable3", "unlocked", true)
    buyIdUnlock(projects, "unlockable3", "price2", projects, "unlockable3", "unlocked", true)
    buyIdUnlock(projects, "unlockable3", "price3", projects, "unlockable3", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("unlockable4Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable4", "price1Identity")) < getNotIf(projects, "unlockable4", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable4", "price2Identity")) < getNotIf(projects, "unlockable4", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable4", "price3Identity")) < getNotIf(projects, "unlockable4", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable4", "unlocked"))) {
    buyIdUnlock(projects, "unlockable4", "price1", projects, "unlockable4", "unlocked", true)
    buyIdUnlock(projects, "unlockable4", "price2", projects, "unlockable4", "unlocked", true)
    buyIdUnlock(projects, "unlockable4", "price3", projects, "unlockable4", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("unlockable5Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable5", "price1Identity")) < getNotIf(projects, "unlockable5", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable5", "price2Identity")) < getNotIf(projects, "unlockable5", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable5", "price3Identity")) < getNotIf(projects, "unlockable5", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable5", "unlocked"))) {
    buyIdUnlock(projects, "unlockable5", "price1", projects, "unlockable5", "unlocked", true)
    buyIdUnlock(projects, "unlockable5", "price2", projects, "unlockable5", "unlocked", true)
    buyIdUnlock(projects, "unlockable5", "price3", projects, "unlockable5", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("unlockable6Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable6", "price1Identity")) < getNotIf(projects, "unlockable6", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable6", "price2Identity")) < getNotIf(projects, "unlockable6", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable6", "price3Identity")) < getNotIf(projects, "unlockable6", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable6", "unlocked"))) {
    buyIdUnlock(projects, "unlockable6", "price1", projects, "unlockable6", "unlocked", true)
    buyIdUnlock(projects, "unlockable6", "price2", projects, "unlockable6", "unlocked", true)
    buyIdUnlock(projects, "unlockable6", "price3", projects, "unlockable6", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("unlockable7Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable7", "price1Identity")) < getNotIf(projects, "unlockable7", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable7", "price2Identity")) < getNotIf(projects, "unlockable7", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable7", "price3Identity")) < getNotIf(projects, "unlockable7", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable7", "unlocked"))) {
    buyIdUnlock(projects, "unlockable7", "price1", projects, "unlockable7", "unlocked", true)
    buyIdUnlock(projects, "unlockable7", "price2", projects, "unlockable7", "unlocked", true)
    buyIdUnlock(projects, "unlockable7", "price3", projects, "unlockable7", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("unlockable8Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable8", "price1Identity")) < getNotIf(projects, "unlockable8", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable8", "price2Identity")) < getNotIf(projects, "unlockable8", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable8", "price3Identity")) < getNotIf(projects, "unlockable8", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable8", "unlocked"))) {
    buyIdUnlock(projects, "unlockable8", "price1", projects, "unlockable8", "unlocked", true)
    buyIdUnlock(projects, "unlockable8", "price2", projects, "unlockable8", "unlocked", true)
    buyIdUnlock(projects, "unlockable8", "price3", projects, "unlockable8", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("unlockable9Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable9", "price1Identity")) < getNotIf(projects, "unlockable9", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable9", "price2Identity")) < getNotIf(projects, "unlockable9", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable9", "price3Identity")) < getNotIf(projects, "unlockable9", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable9", "unlocked"))) {
    buyIdUnlock(projects, "unlockable9", "price1", projects, "unlockable9", "unlocked", true)
    buyIdUnlock(projects, "unlockable9", "price2", projects, "unlockable9", "unlocked", true)
    buyIdUnlock(projects, "unlockable9", "price3", projects, "unlockable9", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("unlockable10Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable10", "price1Identity")) < getNotIf(projects, "unlockable10", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable10", "price2Identity")) < getNotIf(projects, "unlockable10", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable10", "price3Identity")) < getNotIf(projects, "unlockable10", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable10", "unlocked"))) {
    buyIdUnlock(projects, "unlockable10", "price1", projects, "unlockable10", "unlocked", true)
    buyIdUnlock(projects, "unlockable10", "price2", projects, "unlockable10", "unlocked", true)
    buyIdUnlock(projects, "unlockable10", "price3", projects, "unlockable10", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("unlockable11Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable11", "price1Identity")) < getNotIf(projects, "unlockable11", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable11", "price2Identity")) < getNotIf(projects, "unlockable11", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable11", "price3Identity")) < getNotIf(projects, "unlockable11", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable11", "unlocked"))) {
    buyIdUnlock(projects, "unlockable11", "price1", projects, "unlockable11", "unlocked", true)
    buyIdUnlock(projects, "unlockable11", "price2", projects, "unlockable11", "unlocked", true)
    buyIdUnlock(projects, "unlockable11", "price3", projects, "unlockable11", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("unlockable12Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable12", "price1Identity")) < getNotIf(projects, "unlockable12", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable12", "price2Identity")) < getNotIf(projects, "unlockable12", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable12", "price3Identity")) < getNotIf(projects, "unlockable12", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable12", "unlocked"))) {
    buyIdUnlock(projects, "unlockable12", "price1", projects, "unlockable12", "unlocked", true)
    buyIdUnlock(projects, "unlockable12", "price2", projects, "unlockable12", "unlocked", true)
    buyIdUnlock(projects, "unlockable12", "price3", projects, "unlockable12", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("unlockable13Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable13", "price1Identity")) < getNotIf(projects, "unlockable13", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable13", "price2Identity")) < getNotIf(projects, "unlockable13", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable13", "price3Identity")) < getNotIf(projects, "unlockable13", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable13", "unlocked"))) {
    buyIdUnlock(projects, "unlockable13", "price1", projects, "unlockable13", "unlocked", true)
    buyIdUnlock(projects, "unlockable13", "price2", projects, "unlockable13", "unlocked", true)
    buyIdUnlock(projects, "unlockable13", "price3", projects, "unlockable13", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("unlockable14Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable14", "price1Identity")) < getNotIf(projects, "unlockable14", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable14", "price2Identity")) < getNotIf(projects, "unlockable14", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable14", "price3Identity")) < getNotIf(projects, "unlockable14", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable14", "unlocked"))) {
    buyIdUnlock(projects, "unlockable14", "price1", projects, "unlockable14", "unlocked", true)
    buyIdUnlock(projects, "unlockable14", "price2", projects, "unlockable14", "unlocked", true)
    buyIdUnlock(projects, "unlockable14", "price3", projects, "unlockable14", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("unlockable15Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable15", "price1Identity")) < getNotIf(projects, "unlockable15", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable15", "price2Identity")) < getNotIf(projects, "unlockable15", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable15", "price3Identity")) < getNotIf(projects, "unlockable15", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable15", "unlocked"))) {
    buyIdUnlock(projects, "unlockable15", "price1", projects, "unlockable15", "unlocked", true)
    buyIdUnlock(projects, "unlockable15", "price2", projects, "unlockable15", "unlocked", true)
    buyIdUnlock(projects, "unlockable15", "price3", projects, "unlockable15", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("unlockable16Button").onclick = function () {
  var priceChecker = true
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable16", "price1Identity")) < getNotIf(projects, "unlockable16", "price1")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable16", "price2Identity")) < getNotIf(projects, "unlockable16", "price2")) { priceChecker = false }
  if (getNotIf(gameData, null, getNotIf(projects, "unlockable16", "price3Identity")) < getNotIf(projects, "unlockable16", "price3")) { priceChecker = false }

  if (priceChecker == true && !(getNotIf(projects, "unlockable16", "unlocked"))) {
    buyIdUnlock(projects, "unlockable16", "price1", projects, "unlockable16", "unlocked", true)
    buyIdUnlock(projects, "unlockable16", "price2", projects, "unlockable16", "unlocked", true)
    buyIdUnlock(projects, "unlockable16", "price3", projects, "unlockable16", "unlocked", true)
    valuesSetter()
    manualVisualLoop()
  }
}

//energy

document.getElementById("energy1Bottone").onclick = function () {
  if (getNotIf(energy, "energy1", "level") < 10) {
    buyId(energyBuilding, "energy1", "price", energyBuilding, "energy1", "level", 1)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("energy2Bottone").onclick = function () {
  if (getNotIf(energy, "energy2", "level") < 10) {
    buyId(energyBuilding, "energy2", "price", energyBuilding, "energy2", "level", 1)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("energy3Bottone").onclick = function () {
  if (getNotIf(energy, "energy3", "level") < 10) {
    buyId(energyBuilding, "energy3", "price", energyBuilding, "energy3", "level", 1)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("energy4Bottone").onclick = function () {
  if (getNotIf(energy, "energy4", "level") < 10) {
    buyId(energyBuilding, "energy4", "price", energyBuilding, "energy4", "level", 1)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("energy5Bottone").onclick = function () {
  if (getNotIf(energy, "energy5", "level") < 10) {
    buyId(energyBuilding, "energy5", "price", energyBuilding, "energy5", "level", 1)
    valuesSetter()
    manualVisualLoop()
  }
}

document.getElementById("energy6Bottone").onclick = function () {
  if (getNotIf(energy, "energy6", "level") < 10) {
    buyId(energyBuilding, "energy6", "price", energyBuilding, "energy6", "level", 1)
    valuesSetter()
    manualVisualLoop()
  }
}

//loadout

document.getElementById("loadout").onclick = function () {
  if (checkShow("loadoutShow")) {
    unlockShow("loadoutShow", false)
  }

  else if (!(checkShow("loadoutShow"))) {
    unlockShow("loadoutShow", true)
  }
}
//save 

document.getElementById("saveloadout1").onclick = function () {
  loadoutSave(0);

}

document.getElementById("saveloadout2").onclick = function () {
  loadoutSave(1);

}

document.getElementById("saveloadout3").onclick = function () {
  loadoutSave(2);

}

//load

document.getElementById("loadloadout1").onclick = function () {
  loadoutLoad(0);

}

document.getElementById("loadloadout2").onclick = function () {
  loadoutLoad(1);

}

document.getElementById("loadloadout3").onclick = function () {
  loadoutLoad(2);

}

//name

document.getElementById("loadoutNameMod1").onclick = function () {
  loadoutName(0);

}

document.getElementById("loadoutNameMod2").onclick = function () {
  loadoutName(1);

}

document.getElementById("loadoutNameMod3").onclick = function () {
  loadoutName(2);
}

//equip module
document.getElementById("equipButton").onclick = function () {
  equipButton(actualComponentId, "equip");
  setComponentActive()
  setTickSpeed()
  valuesSetter()
  manualVisualLoop()
  setComponentActive()
}

document.getElementById("removeButton").onclick = function () {
  equipButton(actualComponentId, "remove")
  setComponentActive()
  resetImage(actualComponentTag1 + "Module")
  setComponentActive()
  setTickSpeed()
  valuesSetter()
  manualVisualLoop()
  setComponentActive()
}

//components upgrade
document.getElementById("buttonComponentRow0").onclick = function () {
  if (getNotIf(components, actualComponentId, "active")) {
    if (getNotIf(components, actualComponentId, "level") < 20) {
      buyId(components, actualComponentId, "price", components, actualComponentId, "level", 1)
    }
  }
  if (componentsEquipped[0][actualComponentTag1 != ""]) {
    clickExpand(actualComponentTag1 + "Module")
  }

  valuesSetter()
  manualVisualLoop()
}


//automation
document.getElementById("automation1Button").onclick = function () {

  for (let x in automation) {
    if (automation[x].id == "automation1" && automation[x].active == false) {
      automation[x].active = true;
    }

    else if (automation[x].id == "automation1" && automation[x].active == true) {
      automation[x].active = false;
    }
  }
  manualVisualLoop()
}

document.getElementById("automation2Button").onclick = function () {

  for (let x in automation) {
    if (automation[x].id == "automation2" && automation[x].active == false) {
      automation[x].active = true;
    }

    else if (automation[x].id == "automation2" && automation[x].active == true) {
      automation[x].active = false;
    }
  }
  manualVisualLoop()
}

document.getElementById("automation4Button").onclick = function () {

  for (let x in automation) {
    if (automation[x].id == "automation4" && automation[x].active == false) {
      automation[x].active = true;
    }

    else if (automation[x].id == "automation4" && automation[x].active == true) {
      automation[x].active = false;
    }
  }
  manualVisualLoop()
}

document.getElementById("automation5Button").onclick = function () {

  for (let x in automation) {
    if (automation[x].id == "automation5" && automation[x].active == false) {
      automation[x].active = true;
    }

    else if (automation[x].id == "automation5" && automation[x].active == true) {
      automation[x].active = false;
    }
  }
  manualVisualLoop()
}

document.getElementById("automation6Button").onclick = function () {

  for (let x in automation) {
    if (automation[x].id == "automation6" && automation[x].active == false) {
      automation[x].active = true;
    }

    else if (automation[x].id == "automation6" && automation[x].active == true) {
      automation[x].active = false;
    }
  }
  manualVisualLoop()
}


//reallocateEnergy
document.getElementById("reallocateEnergy1").onclick = function () {
  resetEnergy(0, 2)
  valuesSetter()
  manualVisualLoop()
}

document.getElementById("reallocateEnergy2").onclick = function () {
  resetEnergy(3, 5)
  valuesSetter()
  manualVisualLoop()
}

//LayerTiers

document.getElementById("hardwareTier1").onclick = function () {
  tab("hardware")
  valuesSetter()
  manualVisualLoop()
}

document.getElementById("softwareTier1").onclick = function () {
  tab("software")
  valuesSetter()
  manualVisualLoop()
}

document.getElementById("communicationTier1").onclick = function () {
  tab("communication")
  valuesSetter()
  manualVisualLoop()
}

function buy(array, price, arrayEffector, effector, value) {
  const priceIdentity = getNotIf(array, null, price + "Identity");
  const activePrice = getNotIf(array, null, price);

  if (gameData[0][priceIdentity] >= activePrice) {
    gameData[0][priceIdentity] -= activePrice;
    if (arrayEffector) {
      setNotIf(arrayEffector, null, effector, getNotIf(arrayEffector, null, effector) + value);
      return true;
    }
  }
  return false;
}

//funzione necessaria se vuoi comprare qualcosa ma non vuoi pagare
function buyNoPrice(array, price, arrayEffector, effector, value) {
  const priceIdentity = getNotIf(array, null, price + "Identity");
  const activePrice = getNotIf(array, null, price);

  if (gameData[0][priceIdentity] >= activePrice) {
    if (arrayEffector) {
      setNotIf(arrayEffector, null, effector, getNotIf(arrayEffector, null, effector) + value);
      return true;
    }
  }
  return false;
}

function buyId(array, id, price, arrayEffector, idEffector, effector, value) {
  const priceIdentity = getNotIf(array, id, price + "Identity");
  const activePrice = getNotIf(array, id, price);

  if (gameData[0][priceIdentity] >= activePrice) {
    gameData[0][priceIdentity] -= activePrice;
    if (arrayEffector) {
      setNotIf(arrayEffector, idEffector, effector, getNotIf(arrayEffector, idEffector, effector) + value);
    }
  }
}


function buyNotIfId(array, id, price, arrayEffector, idEffector, effector, value) {
  const priceIdentity = getNotIf(array, id, price + "Identity");
  const notIfPrice = getNotIf(array, id, price);

  if (gameData[0][priceIdentity] >= notIfPrice) {
    gameData[0][priceIdentity] -= notIfPrice;
    if (arrayEffector) {
      setNotIf(arrayEffector, idEffector, effector, getNotIf(arrayEffector, idEffector, effector) + value);
      return true;
    }
  }
  return false;
}


function buyUnlock(array, price, arrayEffector, effector, value) {
  const priceIdentity = getNotIf(array, null, price + "Identity");
  const activePrice = getNotIf(array, null, price);

  if (gameData[0][priceIdentity] >= activePrice) {
    gameData[0][priceIdentity] -= activePrice;
    if (arrayEffector) {
      setNotIf(arrayEffector, null, effector, value);
      return true;
    }
  }
  return false;
}


function buyIdUnlock(array, id, price, arrayEffector, idEffector, effector, value) {
  const priceIdentity = getNotIf(array, id, price + "Identity");
  const activePrice = getNotIf(array, id, price);

  if (gameData[0][priceIdentity] >= activePrice) {
    gameData[0][priceIdentity] -= activePrice;
    if (arrayEffector) {
      setNotIf(arrayEffector, idEffector, effector, value);
      return true;
    }
  }
  return false;
}


function dataSelected(x) {
  if (x == "") {
    x = "dataNull"
  }
  var elem = document.getElementById("selectedData");

  let elem1 = document.getElementById("dataLight")
  let elem2 = document.getElementById("dataMedium")
  let elem3 = document.getElementById("dataHeavy")
  let elem4 = document.getElementById("dataNull")

  var elemX = document.getElementById(x)
  data[0].selected = x;

  if (x == "dataNull" || x == "") {
    elem1.style.backgroundColor = "black"
    elem2.style.backgroundColor = "black"
    elem3.style.backgroundColor = "black"
  }

  if (x != "dataNull") {
    elem1.style.backgroundColor = "black"
    elem2.style.backgroundColor = "black"
    elem3.style.backgroundColor = "black"
    elemX.style.backgroundColor = "green";
  }
}

function dataVisual() {
  var sumLight = 0;
  var sumMedium = 0;
  var sumHeavy = 0;
  for (var x in dataUpgrades) {
    if (dataUpgrades[x].identity == "light") {
      sumLight += dataUpgrades[x].maxQuantity - dataUpgrades[x].extracted;
    }

    if (dataUpgrades[x].identity == "medium") {
      sumMedium += dataUpgrades[x].maxQuantity - dataUpgrades[x].extracted;
    }

    if (dataUpgrades[x].identity == "heavy") {
      sumHeavy += dataUpgrades[x].maxQuantity - dataUpgrades[x].extracted;
    }
  }

  var totLight = 0;
  var totMedium = 0;
  var totHeavy = 0;
  for (var x in dataUpgrades) {
    if (dataUpgrades[x].identity == "light") {
      totLight += dataUpgrades[x].maxQuantity;
    }

    if (dataUpgrades[x].identity == "medium") {
      totMedium += dataUpgrades[x].maxQuantity;
    }

    if (dataUpgrades[x].identity == "heavy") {
      totHeavy += dataUpgrades[x].maxQuantity;
    }
  }

  var lightProgressBar = document.getElementById("dataLightProgressBar");
  var mediumProgressBar = document.getElementById("dataMediumProgressBar");
  var heavyProgressBar = document.getElementById("dataHeavyProgressBar");

  var lightProgressLabel = document.getElementById("dataLightLabel");
  var mediumProgressLabel = document.getElementById("dataMediumLabel");
  var heavyProgressLabel = document.getElementById("dataHeavyLabel");

  function updateProgressBar(bar, label, value, max) {
    var percentage = (value / max) * 100;
    bar.style.width = percentage + "%";

    if (label == lightProgressLabel) {
      label.setAttribute("data-label", value + " / " + max + " | " + " -" + getIfActive(data, null, "lightExtractionMult"));
    }

    if (label == mediumProgressLabel) {
      label.setAttribute("data-label", value + " / " + max + " | " + " -" + getIfActive(data, null, "mediumExtractionMult"));
    }

    if (label == heavyProgressLabel) {
      label.setAttribute("data-label", value + " / " + max + " | " + " -" + getIfActive(data, null, "heavyExtractionMult"));
    }
  }


  updateProgressBar(lightProgressBar, lightProgressLabel, sumLight, totLight);
  updateProgressBar(mediumProgressBar, mediumProgressLabel, sumMedium, totMedium);
  updateProgressBar(heavyProgressBar, heavyProgressLabel, sumHeavy, totHeavy);
}

document.addEventListener("DOMContentLoaded", dataVisual);


function getMaxData(y) {
  var totLight = 0;
  var totMedium = 0;
  var totHeavy = 0;
  for (x in dataUpgrades) {
    if (dataUpgrades[x].identity == "light") {
      totLight += dataUpgrades[x].maxQuantity
    }

    if (dataUpgrades[x].identity == "medium") {
      totMedium += dataUpgrades[x].maxQuantity
    }

    if (dataUpgrades[x].identity == "heavy") {
      totHeavy += dataUpgrades[x].maxQuantity
    }
  }

  if (y == "light") {
    return totLight
  }
  if (y == "medium") {
    return totMedium
  }
  if (y == "heavy") {
    return totHeavy
  }
}

function getExtractedData(y) {
  var sumLight = 0;
  var sumMedium = 0;
  var sumHeavy = 0;
  for (let x in dataUpgrades) {
    if (dataUpgrades[x].identity == "light") {
      sumLight += dataUpgrades[x].maxQuantity - dataUpgrades[x].extracted
    }

    if (dataUpgrades[x].identity == "medium") {
      sumMedium += dataUpgrades[x].maxQuantity - dataUpgrades[x].extracted
    }

    if (dataUpgrades[x].identity == "heavy") {
      sumHeavy += dataUpgrades[x].maxQuantity - dataUpgrades[x].extracted
    }
  }


  if (y == "light") {
    return sumLight
  }
  if (y == "medium") {
    return sumMedium
  }
  if (y == "heavy") {
    return sumHeavy
  }
}

async function progressBarActuator(id2, time) {
  var elem = document.getElementById(id2);
  var startTime = null;

  function frame(currentTime) {
    if (!startTime) {
      startTime = currentTime;
    }
    var progress = currentTime - startTime;
    var width = Math.min((progress / time) * 100, 100);
    elem.style.width = width + "%";
    if (width < 100) {
      requestAnimationFrame(frame);
    }

  }
  requestAnimationFrame(frame);
}




async function dataActuator() {
  if (!(getNotIf(canCall, null, "dataActuatorCanCall"))) {
    return;
  }

  if (data[0].selected != "dataNull" && data[0].selected != "") {
    if (data[0].selected == "dataLight") {

      if (getExtractedData("light") > 0) {

        progressBarActuator("dataLightWait", getIfActive(data, null, "lightDuration"));

        await pauseFunction("dataActuator", getIfActive(data, null, "lightDuration"), true);  // QUI 1

        var found = 0;
        while (found == 0) {
          var randomElement = Math.floor(Math.random() * dataUpgrades.length);
          if (dataUpgrades[randomElement].extracted < dataUpgrades[randomElement].maxQuantity && dataUpgrades[randomElement].identity == "light") {
            dataUpgrades[randomElement].extracted += getIfActive(data, null, "lightExtractionMult")
            if (dataUpgrades[randomElement].extracted > dataUpgrades[randomElement].maxQuantity) {
              dataUpgrades[randomElement].extracted = dataUpgrades[randomElement].maxQuantity
            }
            found = 1;
          }
        }
      }
    }

    if (data[0].selected == "dataMedium") {
      if (getExtractedData("medium") > 0) {

        progressBarActuator("dataMediumWait", getIfActive(data, null, "mediumDuration"));

        await pauseFunction("dataActuator", getIfActive(data, null, "mediumDuration"), true);  // QUI 1

        var found = 0;
        while (found == 0) {
          var randomElement = Math.floor(Math.random() * dataUpgrades.length);
          if (dataUpgrades[randomElement].extracted < dataUpgrades[randomElement].maxQuantity && dataUpgrades[randomElement].identity == "medium") {
            dataUpgrades[randomElement].extracted += getIfActive(data, null, "mediumExtractionMult")
            if (dataUpgrades[randomElement].extracted > dataUpgrades[randomElement].maxQuantity) {
              dataUpgrades[randomElement].extracted = dataUpgrades[randomElement].maxQuantity
            }
            found = 1;
          }
        }
      }
    }

    if (data[0].selected == "dataHeavy") {
      if (getExtractedData("heavy") > 0) {

        progressBarActuator("dataHeavyWait", getIfActive(data, null, "heavyDuration"));

        await pauseFunction("dataActuator", getIfActive(data, null, "heavyDuration"), true);  // QUI 1

        var found = 0;
        while (found == 0) {
          var randomElement = Math.floor(Math.random() * dataUpgrades.length);
          if (dataUpgrades[randomElement].extracted < dataUpgrades[randomElement].maxQuantity && dataUpgrades[randomElement].identity == "heavy") {
            dataUpgrades[randomElement].extracted += getIfActive(data, null, "heavyExtractionMult")
            if (dataUpgrades[randomElement].extracted > dataUpgrades[randomElement].maxQuantity) {
              dataUpgrades[randomElement].extracted = dataUpgrades[randomElement].maxQuantity
            }
            found = 1;
          }
        }
      }
    }
  }
}

function pauseFunction(fun, time, bool) {
  setNotIf(canCall, null, fun + "CanCall", false)
  if (time != null) {
    return new Promise(resolve => {
      setTimeout(() => {
        setNotIf(canCall, null, fun + "CanCall", true)
        resolve();
      }, time);
    });
  }

  if (time == null) {
    setNotIf(canCall, fun + "CanCall", bool)
  }
}

async function offProgress(time) {
  if (!waiting) {
    let tempTickSpeed = gameData[0].tickSpeed;

    gameData[0].tickSpeed *= time;
    waiting = true;

    await pauseFunction("offProgress", time, true);

    gameData[0].tickSpeed = tempTickSpeed;
    waiting = false;
  }
}

function clickExpand(element) {
  var selElement = document.getElementById(element)
  selElement.style.backgroundSize = "110%"
  selElement.style.backgroundPositionX = "50%"
  selElement.style.backgroundPositionY = "50%"
}



// MISCELLANEA
// MISCELLANEA
// MISCELLANEA

var VisualLoop = setInterval(function () {
  manualVisualLoop()
}, 50)

var mainGameLoop = window.setInterval(function () {

  let diff = Date.now() - gameData[0].lastTick
  let diffSec = diff / 1000;


  if (diffSec > gameData[0].offProgressLimit) {
    diffSec = gameData[0].offProgressLimit;
  }

  if (diffSec < 10) {
    diffSec = 1;
  }


  offProgress(diffSec);

  gameData[0].lastTick = Date.now()
  //setNotIf(gameData, null, "lastTick", Date.now())


  //   gameData.StructurePoints += gameData.StructurePointsPerClick * (diff / 1000)
  //   update("StructureBuilt", format(gameData.StructurePoints, "scientific") + "Structure Points")
  // prodCells();
  valuesSetterDinamic()
  //ora lo mettiamo qui, ma dovra' essere messo dopo la funzione quando finisce la ricerca di un light/medium/heavy
  dataActuator()
  automationActuator()
  valuesSetter()
}, 1000)



function manualVisualLoop() {
  //global
  visual_valute();
  LoopShow();
  //core
  if (checkShow("core", true)) {
    unlockShow("coreImage", true)
    visual_ComponentInfo(actualComponentId)
    show_componentInfo();
    componentSummary();
    visual_Loadout();
    unlockShow("topProgress", true)
  }

  if (!(checkShow("core",))) {
    unlockShow("coreImage", false)
  }

  //hardware
  if (checkShow("hardware", true)) {
    visual_refiner();
    unlockShow("topProgress", true)
  }
  //software
  if (checkShow("software", true)) {
    visual_projects();
    visual_dataLayer();
    dataVisual();
    dataSelected(getNotIf(data, null, "selected"))
    unlockShow("topProgress", true)
  }
  //communication
  if (checkShow("communication", true)) {
    visual_EnergyInfo();
    visual_ExplorationInfo();
    unlockShow("topProgress", true)
  }
  //options
  if (checkShow("options", true)) {
    visual_automation()
    unlockShow("topProgress", false)
  }
}

// Funzione per salvare i dati di gioco
// Definisci la funzione per salvare i dati di gioco


// Aggiorna tutti gli array

var SaveGameLoop = window.setInterval(function () {
  var saveData = {
    gameData: gameData,
    componentsEquipped: componentsEquipped,
    components: components,
    explorationUpgrades: explorationUpgrades,
    explorationSelected: explorationSelected,
    data: data,
    dataUpgrades: dataUpgrades,
    energyBuilding: energyBuilding,
    refining: refining,
    projects: projects,
    loadoutData: loadoutData,
    automation: automation,
    showable: showable,

    RgameData: RgameData,
    RcomponentsEquipped: RcomponentsEquipped,
    Rcomponents: Rcomponents,
    RexplorationUpgrades: RexplorationUpgrades,
    RexplorationSelected: RexplorationSelected,
    Rdata: Rdata,
    RdataUpgrades: RdataUpgrades,
    RenergyBuilding: RenergyBuilding,
    Rrefining: Rrefining,
    Rprojects: Rprojects,
    RloadoutData: RloadoutData,
    Rautomation: Rautomation,
    Rshowable: Rshowable,
  };

  localStorage.setItem("HyperStructureSave", JSON.stringify(saveData));


}, 50);

if (localStorage.getItem("HyperStructureSave") !== null) {

  var savedGameData = JSON.parse(localStorage.getItem("HyperStructureSave"));
  // Assicurati di aggiornare i dati di gioco con quelli caricati 
  if (savedGameData.gameData) {
    gameData = savedGameData.gameData;
  }

  if (savedGameData.components) {
    components = savedGameData.components;
  }

  if (savedGameData.componentsEquipped) {
    componentsEquipped = savedGameData.componentsEquipped;
  }

  if (savedGameData.explorationUpgrades) {
    explorationUpgrades = savedGameData.explorationUpgrades;
  }

  if (savedGameData.explorationSelected) {
    explorationSelected = savedGameData.explorationSelected;
  }

  if (savedGameData.data) {
    data = data;
  }

  if (savedGameData.dataUpgrades) {
    dataUpgrades = dataUpgrades;
  }

  if (savedGameData.energyBuilding) {
    energyBuilding = savedGameData.energyBuilding;
  }

  if (savedGameData.refining) {
    refining = refining;
  }

  if (savedGameData.projects) {
    projects = savedGameData.projects;
  }

  if (savedGameData.loadoutData) {
    loadoutData = savedGameData.loadoutData;
  }

  if (savedGameData.automation) {
    automation = savedGameData.automation;
  }

  if (savedGameData.showable) {
    showable = savedGameData.showable;
  }

  updateGame()
  ///////////////////////////

  if (savedGameData.RgameData) {
    savedGameData.RgameData = RgameData
  }

  if (savedGameData.Rcomponents) {
    savedGameData.Rcomponents = Rcomponents;
  }

  if (savedGameData.RcomponentsEquipped) {
    savedGameData.RcomponentsEquipped = RcomponentsEquipped
  }

  if (savedGameData.RexplorationUpgrades) {
    savedGameData.RexplorationUpgrades = RexplorationUpgrades
  }

  if (savedGameData.RexplorationSelected) {
    savedGameData.RexplorationSelected = RexplorationSelected
  }

  if (savedGameData.Rdata) {
    savedGameData.Rdata = Rdata
  }

  if (savedGameData.RdataUpgrades) {
    savedGameData.RdataUpgrades = RdataUpgrades
  }

  if (savedGameData.RenergyBuilding) {
    savedGameData.RenergyBuilding = RenergyBuilding
  }

  if (savedGameData.Rrefining) {
    savedGameData.Rrefining = Rrefining
  }

  if (savedGameData.Rprojects) {
    savedGameData.Rprojects = Rprojects
  }

  if (savedGameData.RloadoutData) {
    savedGameData.RloadoutData = RloadoutData
  }

  if (savedGameData.Rautomation) {
    savedGameData.Rautomation = Rautomation
  }

  if (savedGameData.Rshowable) {
    savedGameData.Rshowable = Rshowable
  }

}

//funziona, ma controlla come funziona
function updateSavedArrays(savedArray, defaultArray, newDefaultArray) {
  // Crea una mappa per i nuovi valori predefiniti
  const newDefaultMap = newDefaultArray.reduce((map, item) => {
    map[item.id] = item;
    return map;
  }, {});

  // Aggiorna o aggiungi elementi esistenti
  for (let i = 0; i < savedArray.length; i++) {
    const savedItem = savedArray[i];
    const newItem = newDefaultMap[savedItem.id];
    if (newItem) {
      // Aggiorna le chiavi che sono diverse
      for (let key in savedItem) {
        if (defaultArray[i][key] !== newItem[key]) {
          savedItem[key] = newItem[key];
        }
      }
      //aggiorna gli elementi delle chiavi che sono diverse

      // Rimuovi l'elemento dalla mappa per tenere traccia degli elementi già gestiti
      delete newDefaultMap[savedItem.id];
    } else {
      // Rimuovi l'elemento che non è più presente nel nuovo array predefinito
      savedArray.splice(i, 1);
      i--; // Correggi l'indice poiché un elemento è stato rimosso
    }
  }

  // Aggiungi nuovi elementi che non sono presenti nell'array salvato
  for (let id in newDefaultMap) {
    savedArray.push(newDefaultMap[id]);
  }
}



function updateGame() {
  if (init1 = true) {
    updateSavedArrays(gameData, savedGameData.RgameData, RgameData);
    updateSavedArrays(componentsEquipped, savedGameData.RcomponentsEquipped, RcomponentsEquipped);
    updateSavedArrays(components, savedGameData.Rcomponents, Rcomponents);
    updateSavedArrays(explorationUpgrades, savedGameData.RexplorationUpgrades, RexplorationUpgrades);
    updateSavedArrays(explorationSelected, savedGameData.RexplorationSelected, RexplorationSelected);
    updateSavedArrays(data, savedGameData.Rdata, Rdata);
    updateSavedArrays(dataUpgrades, savedGameData.RdataUpgrades, RdataUpgrades);
    updateSavedArrays(energyBuilding, savedGameData.RenergyBuilding, RenergyBuilding);
    updateSavedArrays(refining, savedGameData.Rrefining, Rrefining);
    updateSavedArrays(projects, savedGameData.Rprojects, Rprojects);
    updateSavedArrays(loadoutData, savedGameData.RloadoutData, RloadoutData);
    updateSavedArrays(automation, savedGameData.Rautomation, Rautomation);
    updateSavedArrays(showable, savedGameData.Rshowable, Rshowable);
  }
}

function resetSave() {
  if (localStorage.getItem("HyperStructureSave") !== null) {

    var saveData = {
      gameData: RgameData,
      componentsEquipped: RcomponentsEquipped,
      components: Rcomponents,
      explorationUpgrades: RexplorationUpgrades,
      explorationSelected: RexplorationSelected,
      data: Rdata,
      dataUpgrades: RdataUpgrades,
      energyBuilding: RenergyBuilding,
      refining: Rrefining,
      projects: Rprojects,
      loadoutData: RloadoutData,
      automation: Rautomation,
      showable: Rshowable,


      RgameData: RgameData,
      RcomponentsEquipped: RcomponentsEquipped,
      Rcomponents: Rcomponents,
      RexplorationUpgrades: RexplorationUpgrades,
      RexplorationSelected: RexplorationSelected,
      Rdata: Rdata,
      RdataUpgrades: RdataUpgrades,
      RenergyBuilding: RenergyBuilding,
      Rrefining: Rrefining,
      Rprojects: Rprojects,
      RloadoutData: RloadoutData,
      Rautomation: Rautomation,
      Rshowable: Rshowable,
    };

    localStorage.setItem("HyperStructureSave", JSON.stringify(saveData));

    var savedGameData = JSON.parse(localStorage.getItem("HyperStructureSave"));
    // Assicurati di aggiornare i dati di gioco con quelli caricati
    gameData = savedGameData.gameData;
    componentsEquipped = savedGameData.componentsEquipped
    components = savedGameData.components;
    explorationUpgrades = savedGameData.explorationUpgrades;
    explorationSelected = savedGameData.explorationSelected;
    data = savedGameData.data;
    dataUpgrades = savedGameData.dataUpgrades;
    energyBuilding = savedGameData.energyBuilding;
    refining = savedGameData.refining;
    projects = savedGameData.projects;
    loadoutData = savedGameData.loadoutData;
    automation = savedGameData.automation;
    showable = savedGameData.showable;


    RgameData = savedGameData.RgameData,
      RcomponentsEquipped = savedGameData.RcomponentsEquipped,
      Rcomponents = savedGameData.Rcomponents,
      RexplorationUpgrades = savedGameData.RexplorationUpgrades,
      RexplorationSelected = savedGameData.RexplorationSelected,
      Rdata = savedGameData.Rdata,
      RdataUpgrades = savedGameData.RdataUpgrades,
      RenergyBuilding = savedGameData.RenergyBuilding,
      Rrefining = savedGameData.Rrefining,
      Rprojects = savedGameData.Rprojects,
      RloadoutData = savedGameData.RloadoutData,
      Rautomation = savedGameData.Rautomation,
      Rshowable = savedGameData.Rshowable,

      init1 = true;

    resetStyleAll()
  }
}

function resetStyleAll() {
  for (let a in showable) {
    const keys = Object.keys(showable[a]);
    for (let key of keys) {
      console.log(key)
      document.getElementById(key).style.background = ""
    }
  }
}

function exportSave() {
  var saveData = {
    gameData: gameData,
    componentsEquipped: componentsEquipped,
    components: components,
    explorationUpgrades: explorationUpgrades,
    explorationSelected: explorationSelected,
    data: data,
    dataUpgrades: dataUpgrades,
    energyBuilding: energyBuilding,
    refining: refining,
    projects: projects,
    loadoutData: loadoutData,
    automation: automation,
    showable: showable,


    RgameData: RgameData,
    RcomponentsEquipped: RcomponentsEquipped,
    Rcomponents: Rcomponents,
    RexplorationUpgrades: RexplorationUpgrades,
    RexplorationSelected: RexplorationSelected,
    Rdata: Rdata,
    RdataUpgrades: RdataUpgrades,
    RenergyBuilding: RenergyBuilding,
    Rrefining: Rrefining,
    Rprojects: Rprojects,
    RloadoutData: RloadoutData,
    Rautomation: Rautomation,
    Rshowable: Rshowable,
  };
  document.getElementById("Save").value = JSON.stringify(saveData);

}

function importSave() {
  localStorage.setItem("HyperStructureSave", document.getElementById("Save").value);
  var savedGameData = JSON.parse(localStorage.getItem("HyperStructureSave"));
  // Assicurati di aggiornare i dati di gioco con quelli caricati
  gameData = savedGameData.gameData;
  componentsEquipped = savedGameData.componentsEquipped
  components = savedGameData.components;
  explorationUpgrades = savedGameData.explorationUpgrades;
  explorationSelected = savedGameData.explorationSelected;
  data = savedGameData.data;
  dataUpgrades = savedGameData.dataUpgrades;
  energyBuilding = savedGameData.energyBuilding;
  refining = savedGameData.refining;
  projects = savedGameData.projects;
  loadoutData = savedGameData.loadoutData;
  automation = savedGameData.automation;
  showable = savedGameData.showable;


  RgameData = savedGameData.RgameData,
    RcomponentsEquipped = savedGameData.RcomponentsEquipped,
    Rcomponents = savedGameData.Rcomponents,
    RexplorationUpgrades = savedGameData.RexplorationUpgrades,
    RexplorationSelected = savedGameData.RexplorationSelected,
    Rdata = savedGameData.Rdata,
    RdataUpgrades = savedGameData.RdataUpgrades,
    RenergyBuilding = savedGameData.RenergyBuilding,
    Rrefining = savedGameData.Rrefining,
    Rprojects = savedGameData.Rprojects,
    RloadoutData = savedGameData.RloadoutData,
    Rautomation = savedGameData.Rautomation,
    Rshowable = savedGameData.Rshowable
}

// Carica i dati di gioco solo se non sono stati già salvati in precedenza

function changeImage(component) {

  document.getElementById(component).style.background = "url(" + actualComponentImage + ")";
  document.getElementById(component).style.backgroundSize = "100%";


}


function resetImage(component) {
  document.getElementById(component).style.background = "url(images/plus.png)";
  document.getElementById(component).style.backgroundSize = "100%";
}

function format(number, type) {
  if (number != null) {
    let exponent = Math.floor(Math.log10(number))
    let mantissa = number / Math.pow(10, exponent)
    if (exponent < 3) return number.toFixed(1)
    if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
    if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
  }

  else if (number != null) {
    return number
  }
}

function tab(tab) {
  // hide all your tabs, then show the one the user selected.
  unlockShow("core", false);
  unlockShow("hardware", false);
  unlockShow("software", false);
  unlockShow("communication", false);
  unlockShow("options", false);
  unlockShow("progress", false);
  unlockShow(tab, true);
}
// go to a tab for the first time, so not all show
tab("core")

function showComponents(c) {
  unlockShow("components1", false);
  unlockShow("components2", false);
  unlockShow("components3", false);
  unlockShow(c, true);

  if (c == "components1") {
    visual_ComponentInfo(getNotIf(componentsEquipped, null, "components1"))
    unlockShow("componentsList", true)
  }

  if (c == "components2") {
    visual_ComponentInfo(getNotIf(componentsEquipped, null, "components2"))
  }

  if (c == "components3") {
    visual_ComponentInfo(getNotIf(componentsEquipped, null, "components3"))
  }
  actualSelectedComponent = c;


}

function componentsTab(a, b) {
  var componentClass = document.getElementsByClassName(a);

  var actualA = a;
  var actualB = b;
  var found = false; // Aggiunto un flag per tracciare se è stato trovato un elemento corrispondente

  for (let y = 0; y < componentClass.length; y++) {
    if (componentClass[y].getAttribute("id") == b) {
      found = true; // Imposta il flag a true se trova un elemento corrispondente
      // Esci dal ciclo una volta trovato l'elemento corrispondente
    }
    else {
      unlockShow(componentClass[y].getAttribute("id"), false);
    }
  }

  // Dopo il ciclo, chiamiamo unlockShow solo se un elemento è stato trovato
  if (found) {
    unlockShow(b, true);
  } else {
    unlockShow(b, false);
  }
}



function unlockShow(show, visibility) {
  for (let a in showable) {
    const keys = Object.keys(showable[a]);
    for (let key of keys) {

      if (key == show) {
        if (visibility == false) {
          showable[0][show] = false;
          document.getElementById(key).style.display = "none";
        }

        if (visibility == true) {
          showable[0][show] = true;
          document.getElementById(key).style.display = "inline-block";
        }
      }
    }
  }
}

function unlockShowAll(visibility) {
  for (let a in showable) {
    const keys = Object.keys(showable[a]);
    for (let key of keys) {
      if (visibility === false) {
        document.getElementById(key).style.display = "none";
      }

      if (visibility === true) {
        document.getElementById(key).style.display = "inline-block";
      }
    }
  }
}



function checkShow(show) {
  for (let a in showable) {
    const keys = Object.keys(showable[a]);
    for (let key of keys) {
      if (key == show) {
        var value = showable[a][key]
        return value;

      }
    }
  }
}
//cicla in tutti gli if per controllare se un certo layer o parte di layer dovrebbe essere mostrato.
//e' possibile capire se qualcosa e' stato sbloccato
//NB, alcuni componenti del gioco vengono mostrate per una funzione di un altro componente.
//questo e' simile.

function LoopShow() {
  //questa funzione si assicura che le impostazioni di visibilita' siano effettive
  for (let a in showable) {
    const keys = Object.keys(showable[a]);
    for (let key of keys) {
      const value = showable[a][key];
      if (value === false) {
        if (document.getElementById(key) == null) {
        }
        document.getElementById(key).style.display = "none";
      }

      if (value === true) {
        document.getElementById(key).style.display = "inline-block";
      }
    }
  }


  //POINTS

  //CORE LAYER

  //Components2
  //if (gameData.cells > 10) {
  //  unlockShow("components2Module", true);
  //}

  if (init1) {
    init1 = false

    console.log(gameData[0].topProgressCount)

    //contatore per non far riapparire topProgress vecchi
    //
    actualComponentId = ""
    tab(core)
    unlockShow("mainGame", true);
    unlockShow("ui", true)

    unlockShow("valute", true)

    unlockShow("cellsValute", true)
    unlockShow("cellsPerSecondValute", true)

    unlockShow("selectorTab", true)
    unlockShow("coreTab", true)

    unlockShow("visualComponentTab", false)

    unlockShow("optionsTab", true)
    unlockShow("loadout", true)
    unlockShow("token1", true)

    unlockShow("progressTab", true)
    unlockShow("topProgress", true)

    unlockShow("core", true)
    unlockShow("componentSelector", true)
    unlockShow("components1Module", true)
    unlockShow("components2Module", true)
    unlockShow("components3Module", true)
    unlockShow("componentInfo", true)
    unlockShow("hardwareSummary", true)
    unlockShow("softwareSummary", false)
    unlockShow("communicationSummary", false)

    unlockShow("visualModule1", true)

    unlockShow("automation", true)

  }

  //generic unlocks

  if (checkShow("componentsSummary")) {
    unlockShow("HardwareSummary", true);
    unlockShow("SoftwareSummary", false);
    unlockShow("CommunicationSummary", false);
    unlockShow("X1Summary", false);
    unlockShow("X2Summary", false);
    unlockShow("X3Summary", false);
  }

  if (checkShow("software")) {
    unlockShow("SoftwareSummary", true);
  }

  if (checkShow("communication")) {
    unlockShow("CommunicationSummary", true);
  }

  if (checkShow("componentInfo")) {
    unlockShow("componentList", true)
  }

  if (checkShow("componentTab", true)) {
    unlockShow("componentTabZone1", true)
    unlockShow("componentTabZone2", true)
    unlockShow("componentRow1", true)
    unlockShow("componentRow2", true)
    unlockShow("componentRow3", true)
    unlockShow("componentRow4", true)
    unlockShow("componentRow5", true)
  }

  if (checkShow("components1")) {
    unlockShow("components1Tier1", true);
    unlockShow("components1Tier2", true);
  }

  if (checkShow("components2")) {
    unlockShow("components2Tier1", true);
    unlockShow("components2Tier2", true);
  }

  if (checkShow("components3")) {
    unlockShow("components3Tier1", true);
    unlockShow("components3Tier2", true);
  }

  if (checkShow("hardware")) {
    unlockShow("hardwareT1", true);
    unlockShow("refiningLayer", true);
  }

  if (checkShow("software")) {
    unlockShow("softwareT1", true);
    unlockShow("data", true)
  }

  if (checkShow("communication")) {
    unlockShow("communicationT1", true);
    unlockShow("energy", true);
  }

  if (checkShow("progress")) {
    unlockShow("progress1", true)
    unlockShow("topProgress", false)
  }

  if (checkShow("topProgress")) {

    if (gameData[0].topProgressCount < 1) {
      gameData[0].topProgressCount = 1
      unlockShow("topProgress1", true)
    }
  }
  //cells: 1-1e3
  //proffed
  if (getNotIf(gameData, null, "cells") >= 1000) {
    unlockShow("hardwareTab", true)
    unlockShow("progress2", true)
    if (gameData[0].topProgressCount < 2) {
      gameData[0].topProgressCount = 2
      unlockShow("topProgress1", false)
      unlockShow("topProgress2", true)
    }
  }

  //cells: 100-1E4
  if (getNotIf(gameData, null, "cells") >= 10 ** 8) {
    unlockShow("softwareTab", true)
    unlockShow("dataValute", true)
    unlockShow("dataPerSecondValute", true)
    unlockShow("progress3", true)
    if (gameData[0].topProgressCount < 3) {
      gameData[0].topProgressCount = 3
      unlockShow("topProgress2", false)
      unlockShow("topProgress3", true)
    }
  }

  //cells: 1E4 - 1E6

  if (getNotIf(gameData, null, "data") >= 100) {
    unlockShow("projects", true);
    unlockShow("progress4", true)
    if (gameData[0].topProgressCount < 4) {
      gameData[0].topProgressCount = 4
      unlockShow("topProgress3", false)
      unlockShow("topProgress4", true)
    }
  }

  //hardware package 1
  if (checkShow("projects") && !(getNotIf(projects, "unlockable1", "unlocked"))) {
    unlockShow("unlockable1", true);
  }


  //software package 1
  if (checkShow("projects") && !(getNotIf(projects, "unlockable2", "unlocked"))) {
    unlockShow("unlockable2", true);
  }

  //idle 1
  if (checkShow("projects") && !(getNotIf(projects, "unlockable9", "unlocked"))) {
    unlockShow("unlockable9", true);
  }

  //cells: 1E6 - 1E8


  //MILESTONE 1
  if (getNotIf(gameData, null, "data") >= 100 && !(getNotIf(projects, "unlockable15", "unlocked"))) {
    unlockShow("unlockable15", true);
  }

  //cells: 1E8 - 1E10


  //new resources package 1
  if (getNotIf(gameData, null, "data") >= 1 * (10 ** 10) && !(getNotIf(projects, "unlockable4", "unlocked")) && getNotIf(projects, "unlockable15", "unlocked")) {
    unlockShow("unlockable4", true);
    unlockShow("progress6", true)

    if (gameData[0].topProgressCount < 6) {
      gameData[0].topProgressCount = 6
      unlockShow("topProgress5", false)
      unlockShow("topProgress6", true)
    }
  }

  //extraction automation
  if (getNotIf(gameData, null, "data") >= 1 * (10 ** 10) && !(getNotIf(projects, "unlockable5", "unlocked"))) {
    unlockShow("unlockable5", true);
  }

  //cells: 1E10 - 1E12

  //idle 2
  if (getNotIf(gameData, null, "data") >= 1 * (10 ** 10) && !(getNotIf(projects, "unlockable10", "unlocked"))) {
    unlockShow("unlockable10", true);
  }

  //data automation
  if (getNotIf(gameData, null, "data") >= 1 * (10 ** 10) && !(getNotIf(projects, "unlockable6", "unlocked"))) {
    unlockShow("unlockable6", true);
  }

  //communication package 1
  if (getNotIf(gameData, null, "data") >= 1 * (10 ** 10) && !(getNotIf(projects, "unlockable13", "unlocked"))) {
    unlockShow("unlockable13", true);
  }

  //cells: 1E12 - 1E14

  //idle 3
  if (getNotIf(gameData, null, "data") >= 100000000 && !(getNotIf(projects, "unlockable11", "unlocked"))) {
    unlockShow("unlockable11", true);
  }

  //cells: 1E14 - 1E16

  //idle 4
  if (getNotIf(gameData, null, "data") >= 10000 && !(getNotIf(projects, "unlockable12", "unlocked"))) {
    unlockShow("unlockable12", true);
  }

  //exploration
  if (getNotIf(gameData, null, "energy") >= 10 ** 5 && !(getNotIf(projects, "unlockable14", "unlocked"))) {
    unlockShow("unlockable14", true);
  }

  if (getNotIf(gameData, null, "energy") >= 10 ** 5) {
    unlockShow("exploration", true)
    unlockShow("asteroidsValute", true)
    unlockShow("asteroidsPerSecondValute", true)
    unlockShow("progress8", true)

    if (gameData[0].topProgressCount < 7) {
      gameData[0].topProgressCount = 7
      unlockShow("topProgress6", false)
      unlockShow("topProgress7", true)
    }

  }

  if (getNotIf(gameData, null, "cells") >= 10 ** 30 && !(getNotIf(projects, "unlockable16", "unlocked"))) {
    unlockShow("unlockable16", true);

    if (gameData[0].topProgressCount < 8) {
      gameData[0].topProgressCount = 8
      unlockShow("topProgress7", false)
      unlockShow("topProgress8", true)
    }
  }

  if (checkShow("energy", true)) {
    unlockShow("energyTier1", true)
    unlockShow("squareEnergy1", true)
    unlockShow("squareEnergy2", true)
    unlockShow("squareEnergy3", true)
    unlockShow("energyTier2", false)
    unlockShow("squareEnergy4", true)
    unlockShow("squareEnergy5", true)
    unlockShow("squareEnergy6", true)
  }

  if (checkShow("exploration", true)) {
    unlockShow("exploration1", true)
    unlockShow("explorationA", true)
    unlockShow("explorationAButton", true)
    unlockShow("exploration2", false)
    unlockShow("explorationBButton", false)
  }

  unlockShow("cellsValute", true)
  unlockShow("cellsPerSecondValute", true)


  //hardware package 1
  if (getNotIf(projects, "unlockable1", "unlocked")) {
    document.getElementById("unlockable1").style.backgroundColor = "#939393";
    unlockShow("token2", true)
    unlockShow("token3", true)
  }

  //software package 1
  if (getNotIf(projects, "unlockable2", "unlocked")) {
    document.getElementById("unlockable2").style.backgroundColor = "#939393";
    unlockShow("visualModule2", true)
    unlockShow("token4", true)
    unlockShow("token5", true)
    unlockShow("softwareSummary", true)
  }

  //deep exploration
  if (getNotIf(projects, "unlockable3", "unlocked")) {
    document.getElementById("unlockable3").style.backgroundColor = "#939393";
    //unlockShow("rarityLayer", true)
  }

  //new resources package 1
  if (getNotIf(projects, "unlockable4", "unlocked")) {
    document.getElementById("unlockable4").style.backgroundColor = "#939393";
    unlockShow("communicationTab", true)
    unlockShow("energyValute", true)
    unlockShow("energyPerSecondValute", true)
    unlockShow("energy", true)
    unlockShow("progress7", true)

  }

  //extraction automation
  if (getNotIf(projects, "unlockable5", "unlocked")) {
    document.getElementById("unlockable5").style.backgroundColor = "#939393";
    unlockShow("automation1", true)
    unlockShow("automation1Button", true)
  }

  //data automation
  if (getNotIf(projects, "unlockable6", "unlocked")) {
    document.getElementById("unlockable6").style.backgroundColor = "#939393";
    unlockShow("automation2", true)
    unlockShow("automation2Button", true)
  }

  //components automation
  if (getNotIf(projects, "unlockable8", "unlocked")) {
    document.getElementById("unlockable8").style.backgroundColor = "#939393";
    unlockShow("automation4", true)
    unlockShow("automation4Button", true)

    unlockShow("automation5")
    unlockShow("automation5Button")

    unlockShow("automation6", true)
    unlockShow("automation6Button", true)
  }

  //idle 1
  if (getNotIf(projects, "unlockable9", "unlocked")) {
    document.getElementById("unlockable9").style.backgroundColor = "#939393";
  }

  //idle 2
  if (getNotIf(projects, "unlockable10", "unlocked")) {
    document.getElementById("unlockable10").style.backgroundColor = "#939393";
  }

  //idle 3
  if (getNotIf(projects, "unlockable11", "unlocked")) {
    document.getElementById("unlockable11").style.backgroundColor = "#939393";
  }

  //idle 4
  if (getNotIf(projects, "unlockable12", "unlocked")) {
    document.getElementById("unlockable12").style.backgroundColor = "#939393";
  }

  //communication package 1
  if (getNotIf(projects, "unlockable13", "unlocked")) {
    document.getElementById("unlockable13").style.backgroundColor = "#939393";
    unlockShow("visualModule3", true)
    unlockShow("communicationSummary", true)
    unlockShow("token7", true)
    unlockShow("token9", true)
  }

  //exploration
  if (getNotIf(projects, "unlockable14", "unlocked")) {
    document.getElementById("unlockable14").style.backgroundColor = "#939393";
    unlockShow("token8", true)
    unlockShow("token11", true)
    unlockShow("token12", true)
  }

  if (getNotIf(projects, "unlockable15", "unlocked")) {
    document.getElementById("unlockable15").style.backgroundColor = "#939393";
    unlockShow("progress5", true)
    if (gameData[0].topProgressCount < 5) {
      gameData[0].topProgressCount = 5
      unlockShow("topProgress4", false)
      unlockShow("topProgress5", true)
    }
  }

}

//FUNZIONI DI SERVIZIO

function screen(x) {
  const ele = document.getElementById(x);
  ele.style.cursor = 'grab';

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';

    pos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  // Attach the handler
  ele.addEventListener('mousedown', mouseDownHandler);
}

//horizontal scroller hardware
var item = document.getElementById("hardware");
window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) item.scrollLeft += 100;
  else item.scrollLeft -= 100;
});

//horizontal scroller software
var item2 = document.getElementById("software");
window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) item2.scrollLeft += 100;
  else item2.scrollLeft -= 100;
});

//horizontal scroller communication
var item3 = document.getElementById("communication");
window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) item3.scrollLeft += 100;
  else item3.scrollLeft -= 100;
});

function addCells(x) {
  gameData[0].cells += x;
}

function addData(x) {
  gameData[0].data += x;
}

function addEnergy(x) {
  gameData[0].energy += x;
}

function addAsteroids(x) {
  gameData[0].asteroidsValute += x;
}

function boostTickspeed(x) {
  gameData[0].tickspeed3 = x;
  valuesSetter()
}

function automationActuator() {
  //automator estrattore
  if (getNotIf(automation, "automation1", "active")) {
    buyNoPrice(refining, "priceExtractors", refining, "extractors", 1)
    manualVisualLoop()

    buyNoPrice(refining, "speedExtractorPrice", refining, "speedExtractor", 1)
    manualVisualLoop()
    valuesSetter()
  }

  //automator data
  if (getNotIf(automation, "automation2", "active")) {
    var restLight = getMaxData("light") - (getMaxData("light") - getExtractedData("light"));

    var restMedium = getMaxData("medium") - (getMaxData("medium") - getExtractedData("medium"));

    var restHeavy = getMaxData("heavy") - (getMaxData("heavy") - getExtractedData("heavy"));

    var multLight = getNotIf(data, null, "lightExtractionMult")

    var multMedium = getNotIf(data, null, "mediumExtractionMult")

    var multHeavy = getNotIf(data, null, "heavyExtractionMult")

    if (restLight >= restMedium && multLight > 0 || restLight >= restHeavy && multLight > 0) {
      dataSelected("dataLight")
    }

    if (restMedium >= restLight && multMedium > 0 || restMedium >= restHeavy && multMedium > 0) {
      dataSelected("dataMedium")
    }

    if (restHeavy >= restMedium && multHeavy > 0 || restHeavy >= restLight && multHeavy > 0) {
      dataSelected("dataHeavy")
    }
    valuesSetter()
  }


  //fuck not possible
  if (getNotIf(automation, "automation4", "active")) {

  }

  //fuck not possible
  if (getNotIf(automation, "automation5", "active")) {

  }

  //fuck not possible
  if (getNotIf(automation, "automation6", "active")) {

  }
}


if (typeof savedGameData.gameData !== "undefined") gameData = savedGameData.gameData
if (typeof savedGameData.componentsEquipped !== "undefined") componentsEquipped = savedGameData.componentsEquipped
if (typeof savedGameData.components !== "undefined") components = savedGameData.components
if (typeof savedGameData.explorationUpgrades !== "undefined") explorationUpgrades = savedGameData.explorationUpgrades
if (typeof savedGameData.explorationSelected !== "undefined") explorationSelected = savedGameData.explorationSelected
if (typeof savedGameData.data !== "undefined") data = savedGameData.data
if (typeof savedGameData.dataUpgrades !== "undefined") dataUpgrades = savedGameData.dataUpgrades
if (typeof savedGameData.energyBuilding !== "undefined") energyBuilding = savedGameData.energyBuilding
if (typeof savedGameData.refining !== "undefined") refining = savedGameData.refining
//if (typeof savedGameData.rarity !== "undefined") rarity = savedGameData.rarity
if (typeof savedGameData.projects !== "undefined") projects = savedGameData.projects
if (typeof savedGameData.loadoutData !== "undefined") loadoutData = savedGameData.loadoutData
if (typeof savedGameData.automation !== "undefined") automation = savedGameData.automation
if (typeof savedGameData.showable !== "undefined") showable = savedGameData.showable



if (typeof savedGameData.RgameData !== "undefined") RgameData = savedGameData.RgameData
if (typeof savedGameData.RcomponentsEquipped !== "undefined") RcomponentsEquipped = savedGameData.RcomponentsEquipped
if (typeof savedGameData.Rcomponents !== "undefined") Rcomponents = savedGameData.Rcomponents
if (typeof savedGameData.RexplorationUpgrades !== "undefined") RexplorationUpgrades = savedGameData.RexplorationUpgrades
if (typeof savedGameData.RexplorationSelected !== "undefined") RexplorationSelected = savedGameData.RexplorationSelected
if (typeof savedGameData.Rdata !== "undefined") Rdata = savedGameData.Rdata
if (typeof savedGameData.RdataUpgrades !== "undefined") RdataUpgrades = savedGameData.RdataUpgrades
if (typeof savedGameData.RenergyBuilding !== "undefined") RenergyBuilding = savedGameData.RenergyBuilding
if (typeof savedGameData.Rrefining !== "undefined") Rrefining = savedGameData.Rrefining
//if (typeof savedGameData.Rrarity !== "undefined") Rrarity = savedGameData.Rrarity
if (typeof savedGameData.Rprojects !== "undefined") Rprojects = savedGameData.Rprojects
if (typeof savedGameData.RloadoutData !== "undefined") RloadoutData = savedGameData.RloadoutData
if (typeof savedGameData.Rautomation !== "undefined") Rautomation = savedGameData.Rautomation
if (typeof savedGameData.Rshowable !== "undefined") Rshowable = savedGameData.Rshowable

//VALORI DI MANAGEMENT RESET DATI

/*
gameData = savedGameData.RgameData
componentsEquipped = savedGameData.RcomponentsEquipped
components = savedGameData.Rcomponents
explorationUpgrades = savedGameData.RexplorationUpgrades
explorationSelected = savedGameData.RexplorationSelected
data = savedGameData.Rdata
dataUpgrades = savedGameData.RdataUpgrades
energyBuilding = savedGameData.RenergyBuilding
refining = savedGameData.Rrefining
//rarity = savedGameData.Rrarity
projects = savedGameData.Rprojects
loadoutData = savedGameData.RloadoutData
automation = savedGameData.Rautomation
showable = savedGameData.Rshowable

RgameData= savedGameData.RgameData,
RcomponentsEquipped= savedGameData.RcomponentsEquipped,
Rcomponents= savedGameData.Rcomponents,
RexplorationUpgrades= savedGameData.RexplorationUpgrades,
RexplorationSelected= savedGameData.RexplorationSelected,
Rdata= savedGameData.Rdata,
RdataUpgrades= savedGameData.RdataUpgrades,
RenergyBuilding= savedGameData.RenergyBuilding,
Rrefining= savedGameData.Rrefining,
//Rrarity= savedGameData.Rrarity,
Rprojects= savedGameData.Rprojects,
RloadoutData= savedGameData.RloadoutData,
Rautomation = savedGameData.Rautomation
Rshowable= savedGameData.Rshowable
*/