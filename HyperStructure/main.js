//control + shift + f: auto indent 

let gameData = {
  //variabili test
  cells: 0,
  cellsProd: 0,
  cellsProdActive: false,

  data: 0,
  dataProd: 0,
  dataProdActive: false,

  energy: 0,
  energyProd: 0,
  energyProdActive: false,

  tickSpeed: 1000,
  tickSpeedActive: false,

  //Unione Risorse Speciali
  explorationResource1: 0,
  explorationResource1Prod: 0,
  explorationResource1ProdActive: false

  //Unione Componenti

  //COMPONENTS


  //PROJECTS

  //ENERGY

  //COMPETITION

  //EXPLORATION
};
//concetto:
//1) Le funzioni degli upgrade/componenti danno in output un valore
//2) le funzioni hanno a loro associato anche possibile: costo/ prerequisiti/ effetto(duh)/identita'/valore se non esiste
//3) i valori di queste funzioni vengono aggiunte alla variabile che accomuna le funzioni con la stessa identita'
//4) le variabili si implementano in una formula, cosi' che la formula comprende elegantemente tutti gli upgrade
//5) Magia
//consideriamo i token come fossero upgrade mono uso, questo vuol dire che dobbiamo solo considerare se questi upgrade sono sbloccati o meno.

//aggiungi unlocked quando comincerai a lavorare su science

//ACCEPTED
let components = [
  {
    name: "token1", description: "descrizione del token1", level: 1, effect1: 0, effect2: 0, identity1: "a_Base", identity2: "a_Base", active: false, image: 'images/token_1.jpg', tag1: "Hardware", tag2: "test", tag3: "test",
    levelActive: false, effect1Active: false, effect2Active: false
  },
  {
    name: "token2", description: "descrizione del token2", level: 1, effect1: 0, effect2: 0, identity1: "cell_Base", identity2: "a_Base", active: false, image: 'images/token_2.jpg', tag1: "Hardware", tag2: "test", tag3: "test",
    levelActive: false, effect1Active: false, effect2Active: false
  },
  {
    name: "token3", description: "descrizione del token1", level: 1, effect1: 0, effect2: 0, identity1: "a_Base", identity2: "a_Base", active: false, image: 'images/token_1.jpg', tag1: "Software", tag2: "test", tag3: "test",
    levelActive: false, effect1Active: false, effect2Active: false
  },
  {
    name: "token4", description: "descrizione del token2", level: 1, effect1: 0, effect2: 0, identity1: "cell_Base", identity2: "a_Base", active: false, image: 'images/token_2.jpg', tag1: "Software", tag2: "test", tag3: "test",
    levelActive: false, effect1Active: false, effect2Active: false
  },
  {
    name: "token5", description: "descrizione del token1", level: 1, effect1: 0, effect2: 0, identity1: "a_Base", identity2: "a_Base", active: false, image: 'images/token_1.jpg', tag1: "Communication", tag2: "test", tag3: "test",
    levelActive: false, effect1Active: false, effect2Active: false
  },
  {
    name: "token6", description: "descrizione del token2", level: 1, effect1: 0, effect2: 0, identity1: "cell_Base", identity2: "a_Base", active: false, image: 'images/token_2.jpg', tag1: "Communication", tag2: "test", tag3: "test",
    levelActive: false, effect1Active: false, effect2Active: false
  }
]

//ACCEPTED

//ACCEPTED
let explorationUpgrades = [
  {
    effectActive: false,
    priceActive: false,
    id: "explorationA1", masterKey: "explorationA", name: "Space Dust Field", description: "thousands of pounds of Space Dust fall on earth every day, lets collect some ",
    effect: 0, price: 0, priceIdentity: "cells"
  },
  {
    effectActive: false,
    priceActive: false,
    id: "explorationA2", masterKey: "explorationA", name: "Catch Asteroids", description: "Catch Some Asteroids! ",
    effect: 0, price: 0, priceIdentity: "cells"
  },

  {
    effectActive: false,
    priceActive: false,
    id: "explorationB1", masterKey: "explorationB", name: "glimpse in a sun", description: "send a satellite inside the sun",
    effect: 0, price: 0, priceIdentity: "cells"
  },

  {
    effectActive: false,
    priceActive: false,
    id: "explorationB2", masterKey: "explorationB", name: "glimpse in a black hole", description: "send a satellite inside a black hole",
    effect: 0, price: 0, priceIdentity: "cells"
  },
]

let explorationSelected = [
  {
    explorationA: "explorationA1",
    explorationB: "explorationB1"
  }
]

let data = [
  {
    upgradeId1: "test", upgradeId2: "test",
    upgradeName1: "upgrade1", upgradeName2: "upgrade2",
    upgradeDescription1: "descrizione 1", upgradeDescription2: "descrizione 2",
    upgradeEffect1: 0, upgradeEffect2: 0,
    upgradePrice1: 0, upgradePrice2: 0, selected: "",
    upgradePrice1Identity: "cells", upgradePrice2Identity: "cells",
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
    id: "collectable1", name: "data +1/s", effect: 0, maxQuantity: 0, extracted: 0, identity: "light",
    effectActive: false, maxQuantityActive: false, extractedActive: false,
  },
  {
    id: "collectable2", name: "+ 1 cell base", effect: 0, maxQuantity: 0, extracted: 0, identity: "medium",
    effectActive: false, maxQuantityActive: false, extractedActive: false,
  }
]

//K0,1
//NOT ACCEPTED
/*
const competitions = [
  { id: "c1", completed: "0", name: "competizion1", description: "descrizione1", effect: function () { let x = 1; return x }, identity: "" },
  { id: "c2", completed: "0", name: "competizion2", description: "descrizione2", effect: function () { let x = 1; return x }, identity: "" },
  { id: "c3", completed: "0", name: "competizion3", description: "descrizione3", effect: function () { let x = 1; return x }, identity: "" },
  { id: "c4", completed: "0", name: "competizion4", description: "descrizione4", effect: function () { let x = 1; return x }, identity: "" },
  { id: "c5", completed: "0", name: "competizion5", description: "descrizione5", effect: function () { let x = 1; return x }, identity: "" },
  { id: "c6", completed: "0", name: "competizion6", description: "descrizione6", effect: function () { let x = 1; return x }, identity: "" }
]
*/


//ACCEPTED
let energyBuilding = [
  {
    id: "energy1", name: "energi1", description: "luce solare", level: 0, active: true, effect: 0, price: 0, priceIdentity: "cells",
    levelActive: false, effectActive: false, priceActive: false
  },
  {
    id: "energy2", name: "energia2", description: "luce solare", level: 0, active: true, effect: 0, price: 0, priceIdentity: "cells",
    levelActive: false, effectActive: false, priceActive: false
  },
  {
    id: "energy3", name: "energia3", description: "luce solare", level: 0, active: true, effect: 0, price: 0, priceIdentity: "cells",
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
let rarity = [
  {
    selected: "t0",
    level: 1, effect: 0, price: 0, priceIdentity: "cells",
    t0Effect: 0,
    t1Effect: 0, t2Effect: 0, t3Effect: 0,
    t4Effect: 0, t5Effect: 0, t6Effect: 0,
    t7Effect: 0, t8Effect: 0, t9Effect: 0,
    t1Log: 0, t2Log: 0, t3Log: 0,
    t4Log: 0, t5Log: 0, t6Log: 0,
    t7Log: 0, t8Log: 0, t9Log: 0,
    t0: 0, t1: 0, t2: 0,
    t3: 0, t4: 0, t5: 0,
    t6: 0, t7: 0, t8: 0,
    t9: 0,

    levelActive: false, effectActive: false, priceActive: false,
    t0EffectActive: false,
    t1EffectActive: false, t2EffectActive: false, t3EffectActive: false,
    t4EffectActive: false, t5EffectActive: false, t6EffectActive: false,
    t7EffectActive: false, t8EffectActive: false, t9EffectActive: false,
    t1LogActive: false, t2LogActive: false, t3LogActive: false,
    t4LogActive: false, t5LogActive: false, t6LogActive: false,
    t7LogActive: false, t8LogActive: false, t9LogActive: false,
    t0Active: false, t1Active: false, t2Active: false,
    t3Active: false, t4Active: false, t5Active: false,
    t6Active: false, t7Active: false, t8Active: false,
    t9Active: false
  }
]

//ACCEPTED
//sblocca i div che sono elencati nell' unlocked, quando le risorse necessarie vengono fornite
let projects = [
  {
    id: "unlockable1", name: "unlockable1", unlocked: false, unlockable1: "banana", unlockable2: "mela", unlockable3: "pera", price1: 10, price2: 0, price3: 0, price1Identity: "cells", price2Identity: "cells", price3Identity: "cells",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },
  {
    id: "unlockable2", name: "unlockable2", unlocked: false, unlockable1: "banana", unlockable2: "mela", unlockable3: "pera", price1: 10, price2: 0, price3: 0, price1Identity: "cells", price2Identity: "cells", price3Identity: "cells",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  },
  {
    id: "unlockable3", name: "unlockable3", unlocked: false, unlockable1: "banana", unlockable2: "mela", unlockable3: "pera", price1: 10, price2: 0, price3: 0, price1Identity: "cells", price2Identity: "cells", price3Identity: "cells",
    positioned: false,
    price1Active: false, price2Active: false, price3Active: false
  }

]


let showable = [
  {

    mainGame: false, ui: false, structureBuilt: false, showSciencePoints: false,

    selectorTab: false, coreTab: false, hardwareTab: false, softwareTab: false, communicationTab: false,

    hardware: false, component1: false, refiningLayer: false,

    rarityLayer: false,

    software: false, component2: false, projects: false, unlockable1: false, unlockable2: false, unlockable3: false,

    data: false,

    communication: true, component3: true, energyScreen: true, energy: false, energyTier1: true, squareEnergy1: true, squareEnergy2: true,
    squareEnergy3: true, energyTier2: true, squareEnergy4: true, squareEnergy5: true, squareEnergy6: true,

    exploration: false, exploration1: false, explorationA: false, explorationAButton: false, exploration2: false, explorationBButton: false,

    core: false, componentSelector: false, components1Module: false, components2Module: false, components3Module: false, componentInfo: false, componentsSummary: false, hardwareSummary: false, softwareSummary: false, communicationSummary: false, x1Summary: false, x2Summary: false, x3Summary: false, componentTab: false, componentRow1: false, componentRow2: false, componentRow3: false, componentRow4: false, componentRow5: false, componentRow6: false, componentsList: false, components1: false, components1Tier1: false, token1: false, token2: false, token3: false, token4: false, token5: false, token6: false, components2: false, components1Tier2: false, components2Tier1: false, components3: false, components3Tier1: false, components3Tier2: false,

  }
]


//setta un timer per fare in modo che si possano bloccare funzioni
let canCall = [
  {
    dataActuatorCanCall: true,
  }
]

const resetValueGameData = gameData
const resetValueComponents = components
const resetValueExplorationUpgrades = explorationUpgrades
const resetValueExplorationSelected = explorationSelected
const resetValueData = data
const resetValueDataUpgrades = dataUpgrades
const resetValueEnergyBuilding = energyBuilding
const resetValueRefining = refining
const resetValueRarity = rarity
const resetValueProjects = projects
const resetValueShowable = showable
//variabili ValuesSetter():

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
let rarityLevel = 0;
let rariryEffect = 0;
let rarityPrice = 0;
let rarityT0Effect = 0;
let rarityT1Effect = 0;
let rarityT2Effect = 0;
let rarityT3Effect = 0;
let rarityT4Effect = 0;
let rarityT5Effect = 0;
let rarityT6Effect = 0;
let rarityT7Effect = 0;
let rarityT8Effect = 0;
let rarityT9Effect = 0;

let rarityT1Log = 0;
let rarityT2Log = 0;
let rarityT3Log = 0;
let rarityT4Log = 0;
let rarityT5Log = 0;
let rarityT6Log = 0;
let rarityT7Log = 0;
let rarityT8Log = 0;
let rarityT9Log = 0;

let rarityT0 = 0;
let rarityT1 = 0;
let rarityT2 = 0;
let rarityT3 = 0;
let rarityT4 = 0;
let rarityT5 = 0;
let rarityT6 = 0;
let rarityT7 = 0;
let rarityT8 = 0;
let rarityT9 = 0;


var actualComponentName;
var actualComponentDescription;
var actualComponentLevel;
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


function visual_ComponentInfo(component) {
  for (let x in components) {
    if (components[x].name == component) {
      actualComponentName = components[x].name;
      actualComponentDescription = components[x].description;
      actualComponentLevel = components[x].level;
      actualComponentEffect1 = components[x].effect1;
      actualComponentEffect2 = components[x].effect2;
      actualComponentIdentity1 = components[x].identity1;
      actualComponentIdentity2 = components[x].identity2;
      actualComponentActive = components[x].active;
      actualComponentTag1 = components[x].tag1;
      actualComponentTag2 = components[x].tag2;
      actualComponentTag3 = components[x].tag3;
      actualComponentImage = components[x].image;
      components[x].active = true;

      for (let y in components) {
        if (components[y].name != component && components[y].tag1 == actualComponentTag1) {
          components[y].active = false;
        }
      }
      update("componentRow1", actualComponentLevel + "|" + actualComponentName);
      update("componentRow2", actualComponentTag1 + "|" + actualComponentTag2 + "|" + actualComponentTag3);
      update("componentRow3", actualComponentDescription);
      update("componentRow4", actualComponentEffect1);
      update("componentRow5", actualComponentEffect2);
      changeImage(actualSelectedComponent + "Module");
    }
  }
}

function show_componentInfo() {

  for (let x in components) {
    let actualComponentName = components[x].name;
    let actualComponentDescription = components[x].description;
    let actualComponentLevel = components[x].level;
    let actualComponentEffect1 = components[x].effect1;
    let actualComponentEffect2 = components[x].effect2;
    let actualComponentIdentity1 = components[x].identity1;
    let actualComponentIdentity2 = components[x].identity2;
    let actualComponentComponentType = components[x].componentType;
    let actualComponentActive = components[x].active;
    let actualComponentImage = components[x].image;


    var componentOnClick = document.getElementById(actualComponentName);
    componentOnClick.setAttribute("onclick", "visual_ComponentInfo(" + "'" + actualComponentName + "'" + ")");
    componentOnClick.style.background = "url('" + actualComponentImage + "')";
    componentOnClick.style.backgroundSize = "100%";
  }
}

function componentSummary() {
  for (let x in components) {
    if (components[x].active) {

      updateClass(components[x].tag1 + "Effect1", components[x].effect1());
      updateClass(components[x].tag1 + "Effect2", components[x].effect2());

    }

  }
}

/*
function visual_ExplorationInfo() {
  var elem = document.getElementsByClassName("Exploration");
  for (let x in explorationUpgrades) {
    actualExplorationId = explorationUpgrades[x].id;
    actualExplorationName = explorationUpgrades[x].nome;
    actualExplorationDescription = explorationUpgrades[x].description;
    actualExplorationEffect = explorationUpgrades[x].effect;
    actualExplorationCost = explorationUpgrades[x].price;
    actualExplorationIdentity = explorationUpgrades[x].identity;

    // Utilizza un ciclo for per iterare sugli elementi della HTMLCollection
    for (let y = 0; y < elem.length; y++) {
      if (actualExplorationId == elem[y].getAttribute("id")) {
        update(actualExplorationId, actualExplorationName + " " + actualExplorationDescription + " " + actualExplorationEffect + " " + actualExplorationCost)
      }
    }
  }
}
*/

function visual_EnergyInfo() {
  for (let x in energyBuilding) {
    let actualEnergyId = energyBuilding[x].id;
    let actualEnergyName = energyBuilding[x].name;
    let actualEnergyDescription = energyBuilding[x].description;
    let actualEnergyActive = energyBuilding[x].active;
    let actualEnergyLevel = energyBuilding[x].level;
    let actualEnergyEffect = energyBuilding[x].effect;
    let actualEnergyPrice = energyBuilding[x].price;
    let actualEnergyIdentity = energyBuilding[x].priceIdentity;

    var building = document.getElementById(actualEnergyId);
    var buildingButton = document.getElementById(actualEnergyId + "Bottone");

    building.innerHTML = "<div>" + actualEnergyName + "</div>" +
      "<div>" + actualEnergyDescription + "</div>" +
      "<div>" + actualEnergyEffect + "</div>" +
      "<div>" + actualEnergyLevel + "</div>" +
      "<div>" + actualEnergyPrice + " " + actualEnergyIdentity + "</div>"



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
                let actualExplorationId = explorationUpgrades[a].id;
                let actualExplorationName = explorationUpgrades[a].name;
                let actualExplorationDescription = explorationUpgrades[a].description;
                let actualExplorationEffect = explorationUpgrades[a].effect;
                let actualExplorationPrice = explorationUpgrades[a].price;
                let actualExplorationLevel = explorationUpgrades[a].level;
                let actualExplorationPriceIdentity = explorationUpgrades[a].priceIdentity


                let explorationElement = document.getElementById(masterKeySelected);
                if (explorationElement) {
                  explorationElement.innerHTML = `
              <div>${actualExplorationName}</div>
              <div>${actualExplorationDescription}</div>
              <div>${actualExplorationEffect}</div>
              <div>${actualExplorationPrice} ${actualExplorationPriceIdentity}</div>
              
            `;
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
}

//getters
function getActualComponentName() {
  return actualComponentName
}

function getActualComponentDescription() {
  return actualComponentDescription
}

function getActualComponentEffect() {
  return actualComponentEffect1
}

function getActualComponentIdentity() {
  return actualComponentIdentity1
}


function visual_Cells() {
  update("structureBuilt", format(gameData.cells, "scientific") + " Structure" + " " + format(gameData.cellsProd, "scientific"))
}

function getArrayValue(array, value) {
  for (let x in array) {
    return array[x][value]
  }
}

function getNestedArrayValue(array, id, value) {

}

function visual_refiner() {
  var actualValue = refining[0].value;
  var actualSpeedExtractor = refining[0].speedExtractor;
  var actualExtractors = refining[0].extractors;
  var actualPriceExtractors = refining[0].priceExtractors;
  var actualPriceSpeedExtractor = refining[0].speedExtractorPrice;
  var actualPriceExtractorsIdentity = refining[0].priceExtractorsIdentity;
  var actualPriceSpeedExtractorIdentity = refining[0].speedExtractorPriceIdentity;

  updateClass("extractorValue", format(actualValue, "scientific"));
  updateClass("extractors1", "<div>" + "Adds +1 to the base" + "</div>");
  updateClass("extractors2", "<div>" + actualExtractors + "</div><div>" + " price: " + actualPriceExtractors + " " + actualPriceExtractorsIdentity + "</div>")

  updateClass("speedExtractors1", "<div>" + "multiplies Base x2" + "</div>");
  updateClass("speedExtractors2", "<div>" + actualSpeedExtractor + "|" + " price: " + format(actualPriceSpeedExtractor, "scientific") + " " + actualPriceSpeedExtractorIdentity + "</div>")
}

function visual_rarity() {
  var elems = document.getElementsByClassName("rarity");
  var selection = document.getElementById("selectedRarity");
  selection.innerHTML = rarity[0].selected
  for (let y = 0; y < elems.length; y++) {

    var elem = elems[y];
    var te = "t" + (y);

    elem.setAttribute("data-value", te + ": " + rarity[0][te].toFixed(1) + "%");
    elem.innerHTML = elem.getAttribute('data-value');
  }

  if (rarity[0].level > 0) {
    //t1
    if (logBase(rarity[0].t1Log, rarity[0].level) <= 100) {
      rarity[0].t1 = logBase(rarity[0].t1Log, rarity[0].level);
    }
    else {
      rarity[0].t1 = 100;
    }

    //t2
    if (logBase(rarity[0].t2Log, rarity[0].level) <= 100) {
      rarity[0].t2 = logBase(rarity[0].t2Log, rarity[0].level);
    }
    else {
      rarity[0].t2 = 100;
    }

    //t3
    if (logBase(rarity[0].t3Log, rarity[0].level) <= 100) {
      rarity[0].t3 = logBase(rarity[0].t3Log, rarity[0].level);
    }
    else {
      rarity[0].t3 = 100;
    }


    //t4
    if (logBase(rarity[0].t4Log, rarity[0].level) <= 100) {
      rarity[0].t4 = logBase(rarity[0].t4Log, rarity[0].level);
    }
    else {
      rarity[0].t4 = 100;
    }


    //t5
    if (logBase(rarity[0].t5Log, rarity[0].level) <= 100) {
      rarity[0].t5 = logBase(rarity[0].t5Log, rarity[0].level);
    }
    else {
      rarity[0].t5 = 100;
    }


    //t6
    if (logBase(rarity[0].t6Log, rarity[0].level) <= 100) {
      rarity[0].t6 = logBase(rarity[0].t6Log, rarity[0].level);
    }
    else {
      rarity[0].t6 = 100;
    }

    //t7
    if (logBase(rarity[0].t7Log, rarity[0].level) <= 100) {
      rarity[0].t7 = logBase(rarity[0].t7Log, rarity[0].level);
    }
    else {
      rarity[0].t7 = 100;
    }

    //t8
    if (logBase(rarity[0].t8Log, rarity[0].level) <= 100) {
      rarity[0].t8 = logBase(rarity[0].t8Log, rarity[0].level);
    }
    else {
      rarity[0].t8 = 100;
    }

    //t9
    if (logBase(rarity[0].t9Log, rarity[0].level) <= 100) {
      rarity[0].t9 = logBase(rarity[0].t9Log, rarity[0].level);
    }
    else {
      rarity[0].t9 = 100;
    }



  }
}

function logBase(b, n) {
  return Math.log(n) / Math.log(b)
}

function visual_projects() {

  //id: "unlockable1", name: "test", unlocked: false, unlockable1: "test", unlockable2: "test", unlockable3: "test", price1: 0, price2: 0, price3: 0, identity1: "test", identity2: "test", identity3: "test"

  for (let y in projects) {

    let actualId = projects[y].id;
    let actualName = projects[y].name;
    let actualPrice1 = projects[y].price1;
    let actualPrice2 = projects[y].price2;
    let actualPrice3 = projects[y].price3;
    let actualIdentity1 = projects[y].identity1;
    let actualIdentity2 = projects[y].identity2;
    let actualIdentity3 = projects[y].identity3;
    let actualUnlockable1 = projects[y].unlockable1;
    let actualUnlockable2 = projects[y].unlockable2;
    let actualUnlockable3 = projects[y].unlockable3;
    let actualUnlocked = projects[y].unlocked;
    let actualPositioned = projects[y].positioned

    var projectBox = document.getElementById(actualId + "Box")

    projectBox.innerHTML =
      "<div class='projectNames'></div>" +
      "<div class='projectInvests'></div>" +
      "<div class='projectSeparators'></div>" +
      "<div class='projectRewards'></div>"

    var projectInvests = document.getElementsByClassName("projectInvests");
    var projectSeparators = document.getElementsByClassName("projectsSeparators");
    var projectRewards = document.getElementsByClassName("projectRewards");
    var projectSectors = document.getElementsByClassName("projectSectors");
    var projectNames = document.getElementsByClassName("projectNames")
    var projectButtons = document.getElementsByClassName("projectButtons")

    var projectInvest = projectInvests[y];
    var projectSeparator = projectSeparators[y];
    var projectReward = projectRewards[y];
    var projectSector = projectSectors[y];
    var projectName = projectNames[y];
    var projectButton = projectButtons[y];

    if (actualUnlocked == false) {

      projectName.innerHTML = "<div>" + actualName + "</div>";

      projectInvest.innerHTML = "<div>" + actualIdentity1 + ": " + actualPrice1 + "</div>" +
        "<div>" + actualIdentity2 + ": " + actualPrice2 + "</div>" +
        "<div>" + actualIdentity3 + ": " + actualPrice3 + "</div>"
      projectReward.innerHTML = "<div>" + actualUnlockable1 + "</div>" +
        "<div>" + actualUnlockable2 + "</div>" +
        "<div>" + actualUnlockable3 + "</div>";
    }
  }
}

function balance(formula, tempo) {
  var found = false;
  var x = 1;
  var newFormula = formula;
  while (found == false) {


    if (formula > tempo) {

      found = true;
    }
    x++;

    if (x > 1000) {
      found = true;
    }
  }
}

function visual_dataLayer() {
  let actualDataCollection = document.getElementById("dataCollection")
  let actualDataGraphic = document.getElementById("dataGraphic")
  let actualDataUpgrade1 = document.getElementById("dataUpgrade1")
  let actualDataUpgrade2 = document.getElementById("dataUpgrade2")
  let actualDataGraph = document.getElementById("dataGraph")
  let actualDataSelector = document.getElementById("dataSelector")

  for (let x in data) {
    let actualUpgradeId1 = data[x].upgradeId1
    let actualUpgradeId2 = data[x].upgradeId2
    let actualUpgradeName1 = data[x].upgradeName1
    let actualUpgradeName2 = data[x].upgradeName2
    let actualUpgradeDescription1 = data[x].upgradeDescription1
    let actualUpgradeDescription2 = data[x].upgradeDescription2
    let actualUpgradeEffect1 = data[x].upgradeEffect1
    let actualUpgradeEffect2 = data[x].upgradeEffect2
    let actualUpgradeIdentity1 = data[x].upgradePrice1Identity
    let actualUpgradeIdentity2 = data[x].upgradePrice2Identity
    let actualUpgradePrice1 = data[x].upgradePrice1
    let actualUpgradePrice2 = data[x].upgradePrice2

  }


  actualDataUpgrade1.setAttribute("data-value", "<div>" + actualUpgradeName1 + "</div>" +
    "<div>" + "desc " + actualUpgradeDescription1 + "</div>" +
    "<div>" + "effetto" + actualUpgradeEffect1 + "</div>" +
    "<div>" + "prezzo: " + actualUpgradePrice1 + " " + actualUpgradeIdentity1 + "</div>");

  actualDataUpgrade1.innerHTML = actualDataUpgrade1.getAttribute('data-value');

  actualDataUpgrade2.setAttribute("data-value", "<div>" + actualUpgradeName2 + "</div>" +
    "<div>" + "desc" + actualUpgradeDescription2 + "</div>" +
    "<div>" + "effetto" + actualUpgradeEffect2 + "</div>" +
    "<div>" + "prezzo: " + actualUpgradePrice2 + " " + actualUpgradeIdentity2 + "</div>");

  actualDataUpgrade2.innerHTML = actualDataUpgrade2.getAttribute('data-value');



  for (let y in dataUpgrades) {
    let actualDataUpgradesId = dataUpgrades[y].id
    let actualDataUpgradesEffect = dataUpgrades[y].effect
    let actualDataUpgradesMaxQuantity = dataUpgrades[y].maxQuantity
    let actualDataUpgradesExtracted = dataUpgrades[y].extracted

    if (actualDataUpgradesExtracted > 0) {
      let actualDataUpgradesDiv = document.getElementById(actualDataUpgradesId)

      actualDataUpgradesDiv.innerHTML = "<div>" + format(actualDataUpgradesExtracted, "scientific") + "/" + format(actualDataUpgradesMaxQuantity, "scientific") + " " + format(actualDataUpgradesEffect, "scientific") + "</div>"
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
  if (array != null) {
    for (let x in array) {
      let elementActive = element + "Active"
      let innerArray = array[x]
      for (let a in innerArray) {
        const keys = Object.keys(innerArray);
        for (let key of keys) {
          if (id == null) {
            if (innerArray[elementActive] == true) {
              return innerArray[element];
            }

            if (innerArray[elementActive] == false) {
              return 0
            }
          }
          if (id != null) {
            for (let key2 of keys) {
              if (innerArray[elementActive] == true && innerArray[key2] == id) {
                return innerArray[element];
              }

              if (innerArray[elementActive] == false && innerArray[key2] == id) {
                return 0
              }
            }
          }
        }
      }
    }
  }



  if (array == null && id == null) {
    let elementActive = element + "Active"
    if (gameData[elementActive] == true) {
      return gameData[element]
    }

    if (gameData[elementActive] == false) {
      return 0
    }
  }
}

function getNotIf(array, id, element) {
  if (array != null) {
    for (let x in array) {
      let elementActive = element + "Active"
      let innerArray = array[x]
      for (let a in innerArray) {
        const keys = Object.keys(innerArray);
        for (let key of keys) {
          if (id == null) {
            return innerArray[element];
          }
          if (id != null) {
            for (let key2 of keys) {
              if (innerArray[key2] == id) {
                return innerArray[element];
              }
            }
          }
        }
      }
    }
  }

  if (array == null && id == null) {
    let elementActive = element + "Active"
    return gameData[element]
  }
}

function setNotIf(array, id, element, value) {
  if (array != null) {
    for (let x in array) {
      let elementActive = element + "Active"
      let innerArray = array[x]
      for (let a in innerArray) {
        const keys = Object.keys(innerArray);
        for (let key of keys) {
          if (id == null) {
            innerArray[element] = value
          }
          if (id != null) {
            for (let key2 of keys) {
              if (innerArray[key2] == id) {
                innerArray[element] = value
              }
            }
          }
        }
      }
    }
  }

  if (array == null && id == null) {
    let elementActive = element + "Active"
    gameData[element] = value;
  }
}

function setIfActive(array, id, element, value) {
  if (array != null) {
    for (let x in array) {
      let elementActive = element + "Active"
      let innerArray = array[x]
      for (let a in innerArray) {
        const keys = Object.keys(innerArray);
        for (let key of keys) {
          if (id == null) {
            if (innerArray[elementActive] == true) {

              innerArray[element] = value
            }
          }
          if (id != null) {
            for (let key2 of keys) {
              if (innerArray[elementActive] == true && innerArray[key2] == id) {
                innerArray[element] = value
              }
            }
          }
        }
      }
    }
  }

  if (array == null && id == null) {
    let elementActive = element + "Active"
    if (gameData[elementActive] == true) {
      gameData[element] = value
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


function valuesSetter() {
  //usa setActive(array, id, element, ac)(_, "", "", _)
  //getIfActive(array, id, element)(_, "", "")
  //istanziamo gli [X]nome esternamente alla funzione cosi' che
  //non vi siano errori di non referenzialita'

  //GLOBALI

  setActive(null, null, "cellsProd", true)

  let globalCellsProd = getIfActive(refining, null, "value") * (1 + getIfActive(rarity, null, "effect"));
  let globalDataProd = 0;
  let globalEnergyProd = 0;
  let globalTickSpeedProd = 0;
  let globalExplorationResource1Prod = 0;

  setStatic("cells", globalCellsProd)

  setDinamic("cellsProd", globalCellsProd)
  setDinamic("dataProd", globalDataProd)
  setDinamic("energyProd", globalEnergyProd)
  setDinamic("tickSpeedProd", globalTickSpeedProd)
  setDinamic("explorationResource1Prod", globalExplorationResource1Prod)

  //refining
  setActive(refining, null, "value", true)
  setActive(refining, null, "extractors", true)
  setActive(refining, null, "speedExtractor", true)
  setActive(refining, null, "effect", true)
  setActive(refining, null, "priceExtractors", true)
  setActive(refining, null, "speedExtractorPrice", true)

  let refiningValue = getIfActive(refining, null, "extractors") * (1 + getIfActive(refining, null, "speedExtractor"));
  let refiningExtractors = getIfActive(refining, null, "extractors");
  let refiningSpeedExtractor = getIfActive(refining, null, "speedExtractor");
  let refiningEffect = 0; //effetto che si applica fra extractors e speedExtractors, attualmente, non viene usato
  let refiningPriceExtractors = getIfActive(refining, null, "extractors") ** 2;
  let refiningSpeedExtractorPrice = 2 ** getIfActive(refining, null, "speedExtractor");


  setIfActive(refining, null, "value", refiningValue)
  setIfActive(refining, null, "extractors", refiningExtractors)
  setIfActive(refining, null, "speedExtractor", refiningSpeedExtractor)
  setIfActive(refining, null, "effect", refiningEffect)
  setIfActive(refining, null, "priceExtractors", refiningPriceExtractors)
  setIfActive(refining, null, "speedExtractorPrice", refiningSpeedExtractorPrice)

  //rarity
  setActive(rarity, null, "level", true)


  var randomRarityEffect = Math.floor(Math.random() * 100) + 1;
  if (randomRarityEffect <= getNotIf(rarity, null, getNotIf(rarity, null, "selected"))) {
    setActive(rarity, null, "effect", true)
  }
  if (randomRarityEffect > getNotIf(rarity, null, getNotIf(rarity, null, "selected"))) {
    setActive(rarity, null, "effect", false)
  }

  setActive(rarity, null, "price", true)

  setActive(rarity, null, "t0Effect", true)
  setActive(rarity, null, "t1Effect", true)
  setActive(rarity, null, "t2Effect", true)
  setActive(rarity, null, "t3Effect", true)
  setActive(rarity, null, "t4Effect", true)
  setActive(rarity, null, "t5Effect", true)
  setActive(rarity, null, "t6Effect", true)
  setActive(rarity, null, "t7Effect", true)
  setActive(rarity, null, "t8Effect", true)
  setActive(rarity, null, "t9Effect", true)

  setActive(rarity, null, "t1Log", true)
  setActive(rarity, null, "t2Log", true)
  setActive(rarity, null, "t3Log", true)
  setActive(rarity, null, "t4Log", true)
  setActive(rarity, null, "t5Log", true)
  setActive(rarity, null, "t6Log", true)
  setActive(rarity, null, "t7Log", true)
  setActive(rarity, null, "t8Log", true)
  setActive(rarity, null, "t9Log", true)

  setActive(rarity, null, "t0", true)
  setActive(rarity, null, "t1", true)
  setActive(rarity, null, "t2", true)
  setActive(rarity, null, "t3", true)
  setActive(rarity, null, "t4", true)
  setActive(rarity, null, "t5", true)
  setActive(rarity, null, "t6", true)
  setActive(rarity, null, "t7", true)
  setActive(rarity, null, "t8", true)
  setActive(rarity, null, "t9", true)

  let rarityLevel = getIfActive(rarity, null, "level");
  let rarityEffect = getIfActive(rarity, null, "effect");
  let rarityPrice = getIfActive(rarity, null, "level") * 10;
  let rarityT0Effect = 1;
  let rarityT1Effect = 5;
  let rarityT2Effect = 25;
  let rarityT3Effect = 100;
  let rarityT4Effect = 200;
  let rarityT5Effect = 500;
  let rarityT6Effect = 2000;
  let rarityT7Effect = 10000;
  let rarityT8Effect = 50000;
  let rarityT9Effect = 1000000;

  let rarityT1Log = 2;
  let rarityT2Log = 2;
  let rarityT3Log = 2;
  let rarityT4Log = 2;
  let rarityT5Log = 2;
  let rarityT6Log = 2;
  let rarityT7Log = 2;
  let rarityT8Log = 2;
  let rarityT9Log = 2;

  let rarityT0 = 100;
  let rarityT1 = logBase(getIfActive(rarity, null, "t1Log"), getIfActive(rarity, null, "level"));
  let rarityT2 = logBase(getIfActive(rarity, null, "t2Log"), getIfActive(rarity, null, "level"));
  let rarityT3 = logBase(getIfActive(rarity, null, "t3Log"), getIfActive(rarity, null, "level"));
  let rarityT4 = logBase(getIfActive(rarity, null, "t4Log"), getIfActive(rarity, null, "level"));
  let rarityT5 = logBase(getIfActive(rarity, null, "t5Log"), getIfActive(rarity, null, "level"));
  let rarityT6 = logBase(getIfActive(rarity, null, "t6Log"), getIfActive(rarity, null, "level"));
  let rarityT7 = logBase(getIfActive(rarity, null, "t7Log"), getIfActive(rarity, null, "level"));
  let rarityT8 = logBase(getIfActive(rarity, null, "t8Log"), getIfActive(rarity, null, "level"));
  let rarityT9 = logBase(getIfActive(rarity, null, "t9Log"), getIfActive(rarity, null, "level"));



  setIfActive(rarity, null, "level", rarityLevel)
  setIfActive(rarity, null, "effect", rarityEffect)
  setIfActive(rarity, null, "price", rarityPrice)

  setIfActive(rarity, null, "t0Effect", rarityT0Effect)
  setIfActive(rarity, null, "t1Effect", rarityT1Effect)
  setIfActive(rarity, null, "t2Effect", rarityT2Effect)
  setIfActive(rarity, null, "t3Effect", rarityT3Effect)
  setIfActive(rarity, null, "t4Effect", rarityT4Effect)
  setIfActive(rarity, null, "t5Effect", rarityT5Effect)
  setIfActive(rarity, null, "t6Effect", rarityT6Effect)
  setIfActive(rarity, null, "t7Effect", rarityT7Effect)
  setIfActive(rarity, null, "t8Effect", rarityT8Effect)
  setIfActive(rarity, null, "t9Effect", rarityT9Effect)

  setIfActive(rarity, null, "t1Log", rarityT1Log)
  setIfActive(rarity, null, "t2Log", rarityT2Log)
  setIfActive(rarity, null, "t3Log", rarityT3Log)
  setIfActive(rarity, null, "t4Log", rarityT4Log)
  setIfActive(rarity, null, "t5Log", rarityT5Log)
  setIfActive(rarity, null, "t6Log", rarityT6Log)
  setIfActive(rarity, null, "t7Log", rarityT7Log)
  setIfActive(rarity, null, "t8Log", rarityT8Log)
  setIfActive(rarity, null, "t9Log", rarityT9Log)

  setIfActive(rarity, null, "t0", rarityT0)
  setIfActive(rarity, null, "t1", rarityT1)
  setIfActive(rarity, null, "t2", rarityT2)
  setIfActive(rarity, null, "t3", rarityT3)
  setIfActive(rarity, null, "t4", rarityT4)
  setIfActive(rarity, null, "t5", rarityT5)
  setIfActive(rarity, null, "t6", rarityT6)
  setIfActive(rarity, null, "t7", rarityT7)
  setIfActive(rarity, null, "t8", rarityT8)
  setIfActive(rarity, null, "t9", rarityT9)




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

  let dataUpgradeEffect1 = 2 ** getIfActive(data, null, "upgradeNumber1");
  let dataUpgradePrice1 = 10 ** getIfActive(data, null, "upgradeNumber1");
  let dataUpgradeNumber1 = getIfActive(data, null, "upgradeNumber1");
  let dataUpgradeEffect2 = 2 ** getIfActive(data, null, "upgradeNumber2");
  let dataUpgradePrice2 = 10 ** getIfActive(data, null, "upgradeNumber2");
  let dataUpgradeNumber2 = getIfActive(data, null, "upgradeNumber2");
  let dataLightDuration = 5000
  let dataMediumDuration = 5000
  let dataHeavyDuration = 120000
  let dataLightExtractionMult = 1
  let dataMediumExtractionMult = 0.1
  let dataHeavyExtractionMult = 0.01


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


  let dataUpgrade1Effect = 0.1 * getIfActive(dataUpgrades, "collectable1", "extracted");
  let dataUpgrade1MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");;
  let dataUpgrade1Extracted = getIfActive(dataUpgrades, "collectable1", "extracted");
  let dataUpgrade2Effect = 2 * getIfActive(dataUpgrades, "collectable2", "extracted");
  let dataUpgrade2MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");
  let dataUpgrade2Extracted = getIfActive(dataUpgrades, "collectable2", "extracted");

  setIfActive(dataUpgrades, "collectable1", "effect", dataUpgrade1Effect)
  setIfActive(dataUpgrades, "collectable1", "maxQuantity", dataUpgrade1MaxQuantity)
  setIfActive(dataUpgrades, "collectable1", "extracted", dataUpgrade1Extracted)
  setIfActive(dataUpgrades, "collectable2", "effect", dataUpgrade2Effect)
  setIfActive(dataUpgrades, "collectable2", "maxQuantity", dataUpgrade2MaxQuantity)
  setIfActive(dataUpgrades, "collectable2", "extracted", dataUpgrade2Extracted)



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

  let projectsUnlockable1Price1 = 1
  let projectsUnlockable1Price2 = 0
  let projectsUnlockable1Price3 = 0
  let projectsUnlockable2Price1 = 10
  let projectsUnlockable2Price2 = 10
  let projectsUnlockable2Price3 = 0
  let projectsUnlockable3Price1 = 1000
  let projectsUnlockable3Price2 = 0
  let projectsUnlockable3Price3 = 0

  setIfActive(projects, "unlockable1", "price1", projectsUnlockable1Price1)
  setIfActive(projects, "unlockable1", "price2", projectsUnlockable1Price2)
  setIfActive(projects, "unlockable1", "price3", projectsUnlockable1Price3)
  setIfActive(projects, "unlockable2", "price1", projectsUnlockable2Price1)
  setIfActive(projects, "unlockable2", "price2", projectsUnlockable2Price2)
  setIfActive(projects, "unlockable2", "price3", projectsUnlockable2Price3)
  setIfActive(projects, "unlockable3", "price1", projectsUnlockable3Price1)
  setIfActive(projects, "unlockable3", "price2", projectsUnlockable3Price2)
  setIfActive(projects, "unlockable3", "price3", projectsUnlockable3Price3)


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

  let energyBuildingEnergy1Level = getIfActive(energyBuilding, "energy1", "level");
  let energyBuildingEnergy2Level = getIfActive(energyBuilding, "energy2", "level");
  let energyBuildingEnergy3Level = getIfActive(energyBuilding, "energy3", "level");
  let energyBuildingEnergy4Level = getIfActive(energyBuilding, "energy4", "level");
  let energyBuildingEnergy5Level = getIfActive(energyBuilding, "energy5", "level");
  let energyBuildingEnergy6Level = getIfActive(energyBuilding, "energy6", "level");

  let energyBuildingEnergy1Effect = 0;
  let energyBuildingEnergy2Effect = 0;
  let energyBuildingEnergy3Effect = 0;
  let energyBuildingEnergy4Effect = 0;
  let energyBuildingEnergy5Effect = 0;
  let energyBuildingEnergy6Effect = 0;

  let energyBuildingEnergy1Price = 10;
  let energyBuildingEnergy2Price = 10;
  let energyBuildingEnergy3Price = 10;
  let energyBuildingEnergy4Price = 10;
  let energyBuildingEnergy5Price = 10;
  let energyBuildingEnergy6Price = 10;

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
  setActive(explorationUpgrades, "explorationA1", "price", true)
  setActive(explorationUpgrades, "explorationA2", "price", true)
  setActive(explorationUpgrades, "explorationB1", "price", true)
  setActive(explorationUpgrades, "explorationB2", "price", true)

  setActive(explorationUpgrades, "explorationA1", "effect", true)
  setActive(explorationUpgrades, "explorationA2", "effect", true)
  setActive(explorationUpgrades, "explorationB1", "effect", true)
  setActive(explorationUpgrades, "explorationB2", "effect", true)

  let explorationUpgradesExplorationA1Price = 10;
  let explorationUpgradesExplorationA2Price = 10;
  let explorationUpgradesExplorationB1Price = 10;
  let explorationUpgradesExplorationB2Price = 10;

  let explorationUpgradesExplorationA1Effect = 1;
  let explorationUpgradesExplorationA2Effect = 1;
  let explorationUpgradesExplorationB1Effect = 1;
  let explorationUpgradesExplorationB2Effect = 1;

  setIfActive(explorationUpgrades, "explorationA1", "price", explorationUpgradesExplorationA1Price)
  setIfActive(explorationUpgrades, "explorationA2", "price", explorationUpgradesExplorationA2Price)
  setIfActive(explorationUpgrades, "explorationB1", "price", explorationUpgradesExplorationB1Price)
  setIfActive(explorationUpgrades, "explorationB2", "price", explorationUpgradesExplorationB2Price)

  setIfActive(explorationUpgrades, "explorationA1", "effect", explorationUpgradesExplorationA1Effect)
  setIfActive(explorationUpgrades, "explorationA2", "effect", explorationUpgradesExplorationA2Effect)
  setIfActive(explorationUpgrades, "explorationB1", "effect", explorationUpgradesExplorationB1Effect)
  setIfActive(explorationUpgrades, "explorationB2", "effect", explorationUpgradesExplorationB2Effect)

}

//ZONA COMPERE

document.getElementById("buyExtractor").onclick = function () {
  buy(refining, "priceExtractors", refining, "extractors", 1)
}

document.getElementById("buySpeedExtractor").onclick = function () {
  buy(refining, "speedExtractorPrice", refining, "speedExtractor", 1)
}

//ora vi e' una funzione che non usa buy, creala
document.getElementById("dataLight").onclick = function () {
  dataSelected("dataLight")
  buy(data, "data", refining, "speedExtractor", 1)
}

document.getElementById("dataMedium").onclick = function () {
  dataSelected("dataMedium")
  buy(data, "speedExtractorPrice", refining, "speedExtractor", 1)
}

document.getElementById("dataHeavy").onclick = function () {
  dataSelected("dataHeavy")
  buy(data, "speedExtractorPrice", refining, "speedExtractor", 1)
}

document.getElementById("dataNull").onclick = function () {
  dataSelected("dataNull")
}

//data upgrades
document.getElementById("dataButton1").onclick = function () {
  buy(data, "upgradePrice1", data, "upgradeNumber1", 1)
}

document.getElementById("dataButton2").onclick = function () {
  buy(data, "upgradePrice2", data, "upgradeNumber2", 1)
}


//projects

visual_projects();
document.getElementById("unlockable1Button").onclick = function () {
  buyIdUnlock(projects, "unlockable1", "price1", projects, "unlockable1", "unlocked", false)
  buyIdUnlock(projects, "unlockable1", "price2", projects, "unlockable1", "unlocked", false)
  buyIdUnlock(projects, "unlockable1", "price3", projects, "unlockable1", "unlocked", true)
}
visual_projects();
document.getElementById("unlockable2Button").onclick = function () {
  buyIdUnlock(projects, "unlockable2", "price1", projects, "unlockable2", "unlocked", false)
  buyIdUnlock(projects, "unlockable2", "price2", projects, "unlockable2", "unlocked", false)
  buyIdUnlock(projects, "unlockable2", "price3", projects, "unlockable2", "unlocked", true)
}

document.getElementById("unlockable3Button").onclick = function () {
  buyIdUnlock(projects, "unlockable3", "price1", projects, "unlockable3", "unlocked", false)
  buyIdUnlock(projects, "unlockable3", "price2", projects, "unlockable3", "unlocked", false)
  buyIdUnlock(projects, "unlockable3", "price3", projects, "unlockable3", "unlocked", true)
}

//energy

document.getElementById("energy1Bottone").onclick = function () {
  buyId(energyBuilding, "energy1", "price", energyBuilding, "energy1", "level", 1)
}

document.getElementById("energy2Bottone").onclick = function () {
  buyId(energyBuilding, "energy2", "price", energyBuilding, "energy2", "level", 1)
}

document.getElementById("energy3Bottone").onclick = function () {
  buyId(energyBuilding, "energy3", "price", energyBuilding, "energy3", "level", 1)
}

document.getElementById("energy4Bottone").onclick = function () {
  buyId(energyBuilding, "energy4", "price", energyBuilding, "energy4", "level", 1)
}

document.getElementById("energy5Bottone").onclick = function () {
  buyId(energyBuilding, "energy5", "price", energyBuilding, "energy5", "level", 1)
}

document.getElementById("energy6Bottone").onclick = function () {
  buyId(energyBuilding, "energy6", "price", energyBuilding, "energy6", "level", 1)
}

//rarity

document.getElementById("increaseRarityButton").onclick = function() {
  buy(rarity, "price", rarity, "level", 1)
}



function buy(array, price, arrayEffector, effector, value) {
  let priceIdentity = getNotIf(array, null, price + "Identity")

  if (gameData[priceIdentity] >= getIfActive(array, null, price)) {
    gameData[priceIdentity] -= getIfActive(array, null, price)
    if (arrayEffector != null) {
      setNotIf(arrayEffector, null, effector, getIfActive(arrayEffector, null, effector) + value)
    }
  }
}

function buyId(array, id, price, arrayEffector, idEffector, effector, value) {
  let priceIdentity = getNotIf(array, id, price + "Identity")
  if (gameData[priceIdentity] >= getIfActive(array, id, price)) {
    gameData[priceIdentity] -= getIfActive(array, id, price)
    if (arrayEffector != null) {
      setNotIf(arrayEffector, idEffector, effector, getIfActive(arrayEffector, idEffector, effector) + value)
    }
  }
}

function buyUnlock(array, price, arrayEffector, effector, value) {
  let priceIdentity = getNotIf(array, null, price + "Identity")
  if (gameData[priceIdentity] >= getIfActive(array, null, price)) {
    gameData[priceIdentity] -= getIfActive(array, null, price)
    if (arrayEffector != null) {
      setNotIf(arrayEffector, null, effector, value)
    }
  }
}

function buyIdUnlock(array, id, price, arrayEffector, idEffector, effector, value) {
  let priceIdentity = getNotIf(projects, "unlockable1", "price1Identity")
  if (gameData[priceIdentity] >= getIfActive(array, id, price)) {
    gameData[priceIdentity] -= getIfActive(array, id, price)
    if (arrayEffector != null) {
      setNotIf(arrayEffector, idEffector, effector, value)
    }
  }
}

function raritySelected(x) {
  var elem = document.getElementById("selectedRarity");

  rarity[0].selected = x;
  elem.innerHTML = x;
  var actualRarity = x + "Effect"
  for (x in rarity)
    if (rarity[x] == actualRarity);
  rarity[0].effect = rarity[0][actualRarity];
}

function dataSelected(x) {
  var elem = document.getElementById("selectedData");

  let elem1 = document.getElementById("dataLight")
  let elem2 = document.getElementById("dataMedium")
  let elem3 = document.getElementById("dataHeavy")
  let elem4 = document.getElementById("dataNull")

  var elemX = document.getElementById(x)
  data[0].selected = x;

  if (x == "dataNull") {
    elem1.style.backgroundColor = "white"
    elem2.style.backgroundColor = "white"
    elem3.style.backgroundColor = "white"
  }

  if (x != "dataNull") {
    elem1.style.backgroundColor = "white"
    elem2.style.backgroundColor = "white"
    elem3.style.backgroundColor = "white"
    elemX.style.backgroundColor = "#90EE90";
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
      label.setAttribute("data-label", value + " / " + max);
  }

  updateProgressBar(lightProgressBar, lightProgressLabel, sumLight, totLight);
  updateProgressBar(mediumProgressBar, mediumProgressLabel, sumMedium, totMedium);
  updateProgressBar(heavyProgressBar, heavyProgressLabel, sumHeavy, totHeavy);
}

document.addEventListener("DOMContentLoaded", dataVisual);


function getMaxData(x) {
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

  if (x == "light") {
    return totLight
  }
  if (x == "medium") {
    return totMedium
  }
  if (x == "heavy") {
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


async function dataActuator() {
  if (!(getNotIf(canCall, null, "dataActuatorCanCall"))) {
    return;
  }

  if (data[0].selected != "dataNull" && data[0].selected != "") {
    if (data[0].selected == "dataLight") {

      if (getExtractedData("light") > 0) {

        await pauseFunction("dataActuator", getIfActive(data, null, "lightDuration"), true);  // QUI 1
        
        var found = 0;
        while (found == 0) {
          var randomElement = Math.floor(Math.random() * dataUpgrades.length);
          if (dataUpgrades[randomElement].extracted < dataUpgrades[randomElement].maxQuantity && dataUpgrades[randomElement].identity == "light") {
            dataUpgrades[randomElement].extracted += getIfActive(data, null, "lightExtractionMult") * getIfActive(data, null, "upgradeEffect1");
            if(dataUpgrades[randomElement].extracted > dataUpgrades[randomElement].maxQuantity){
            dataUpgrades[randomElement].extracted = dataUpgrades[randomElement].maxQuantity
            }
            found = 1;
          }
        }
      }
    }

    if (data[0].selected == "dataMedium") {
      if (getExtractedData("medium") > 0) {

        await pauseFunction("dataActuator", getIfActive(data, null, "mediumDuration"), true);  // QUI 1

        var found = 0;
        while (found == 0) {
          var randomElement = Math.floor(Math.random() * dataUpgrades.length);
          if (dataUpgrades[randomElement].extracted < dataUpgrades[randomElement].maxQuantity && dataUpgrades[randomElement].identity == "medium") {
            dataUpgrades[randomElement].extracted += getIfActive(data, null, "mediumExtractionMult") * getIfActive(data, null, "upgradeEffect1");
            if(dataUpgrades[randomElement].extracted > dataUpgrades[randomElement].maxQuantity){
              dataUpgrades[randomElement].extracted = dataUpgrades[randomElement].maxQuantity
              }
            found = 1;
          }
        }
      }
    }

    if (data[0].selected == "dataHeavy") {
      if (getExtractedData("heavy") > 0) {

        await pauseFunction("dataActuator", getIfActive(data, null, "heavyDuration"), true);  // QUI 1

        var found = 0;
        while (found == 0) {
          var randomElement = Math.floor(Math.random() * dataUpgrades.length);
          if (dataUpgrades[randomElement].extracted < dataUpgrades[randomElement].maxQuantity && dataUpgrades[randomElement].identity == "heavy") {
            dataUpgrades[randomElement].extracted += getIfActive(data, null, "heavyExtractionMult") * getIfActive(data, null, "upgradeEffect1");
            if(dataUpgrades[randomElement].extracted > dataUpgrades[randomElement].maxQuantity){
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
  console.log(fun + "CanCall")
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


// MISCELLANEA
// MISCELLANEA
// MISCELLANEA

var mainGameLoop = window.setInterval(function () {
  //   diff = Date.now() - gameData.lastTick;
  //   gameData.lastTick = Date.now()
  //   gameData.StructurePoints += gameData.StructurePointsPerClick * (diff / 1000)
  //   update("StructureBuilt", format(gameData.StructurePoints, "scientific") + "Structure Points")
  // prodCells();
  valuesSetter()

  //ora lo mettiamo qui, ma dovra' essere messo dopo la funzione quando finisce la ricerca di un light/medium/heavy
  dataActuator()
}, 1000)

var VisualLoop = setInterval(function () {
  visual_ExplorationInfo();
  /*
  visual_CompetionInfo();
  */
  visual_Cells();
  show_componentInfo();
  visual_EnergyInfo();
  LoopShow();
  componentSummary();
  document.addEventListener('DOMContentLoaded', screen('energyScreen'));
  visual_refiner();
  visual_rarity();
  visual_projects();
  visual_dataLayer();
  dataVisual();
}, 100)

// Funzione per salvare i dati di gioco
// Definisci la funzione per salvare i dati di gioco


var SaveGameLoop = window.setInterval(function () {
  var saveData = {
    gameData: gameData,
    components: components,
    explorationUpgrades: explorationUpgrades,
    explorationSelected: explorationSelected,
    data: data,
    dataUpgrades: dataUpgrades,
    energyBuilding: energyBuilding,
    refining: refining,
    rarity: rarity,
    projects: projects,
    showable: showable
  };
  localStorage.setItem("HyperStructureSave", JSON.stringify(saveData));
}, 1500);

if (localStorage.getItem("HyperStructureSave") !== null) {
  var savedGameData = JSON.parse(localStorage.getItem("HyperStructureSave"));
  // Assicurati di aggiornare i dati di gioco con quelli caricati

  gameData = savedGameData.gameData;


  if (savedGameData.components) {
    components = savedGameData.components;
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

  if (savedGameData.rarity) {
    rarity = savedGameData.rarity;
  }

  if (savedGameData.projects) {
    projects = savedGameData.projects;
  }

  //  if (savedGameData.showable) {
  //    showable = savedGameData.showable;
  //  }
}


function resetSave() {
  if (localStorage.getItem("HyperStructureSave") !== null) {

    var saveData = {
      gameData: resetValueGameData,
      components: resetValueComponents,
      explorationUpgrades: resetValueExplorationUpgrades,
      explorationSelected: resetValueExplorationSelected,
      data: resetValueData,
      dataUpgrades: resetValueDataUpgrades,
      energyBuilding: resetValueEnergyBuilding,
      refining: resetValueRefining,
      rarity: resetValueRarity,
      projects: resetValueProjects,
      showable: resetValueShowable
    };

    localStorage.setItem("HyperStructureSave", JSON.stringify(saveData));

    var savedGameData = JSON.parse(localStorage.getItem("HyperStructureSave"));
    // Assicurati di aggiornare i dati di gioco con quelli caricati
    gameData = savedGameData.gameData;

    components = savedGameData.components;

    explorationUpgrades = savedGameData.explorationUpgrades;

    explorationSelected = savedGameData.explorationSelected;

    data = savedGameData.data;

    dataUpgrades = savedGameData.dataUpgrades;

    energyBuilding = savedGameData.energyBuilding;

    refining = savedGameData.refining;

    rarity = savedGameData.rarity;

    projects = savedGameData.projects;

    /*
    if (savedGameData.showable) {
      showable = savedGameData.showable;
    }
    */
  }
}

// Carica i dati di gioco solo se non sono stati già salvati in precedenza




function changeImage(component) {
  document.getElementById(component).style.background = "url(" + actualComponentImage + ")";
  document.getElementById(component).style.backgroundSize = "contain";
}

function format(number, type) {
  let exponent = Math.floor(Math.log10(number))
  let mantissa = number / Math.pow(10, exponent)
  if (exponent < 3) return number.toFixed(1)
  if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
  if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
}

function tab(tab) {
  // hide all your tabs, then show the one the user selected.
  unlockShow("core", false);
  unlockShow("hardware", false);
  unlockShow("software", false);
  unlockShow("communication", false);
  unlockShow(tab, true);
}
// go to a tab for the first time, so not all show
tab("core")

function showComponents(c) {
  unlockShow("components1", false);
  unlockShow("components2", false);
  unlockShow("components3", false);
  unlockShow(c, true);
  actualSelectedComponent = c;
  var ret = true;
  if (ret) {
    unlockShow("componentTab", true);
  }
  ret = false;

}
showComponents("a")

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

//   showSciencePoints: false,  OutsideTab: false, components2Module: false, components3Module: false,
//   components1Tier2: false, components2Tier2: false, components3Tier2, 
//   EnergyTier2: false, Exploration: false, Competition: false

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
    console.log("inizializzazione")
    unlockShow("mainGame", true);
    unlockShow("ui", true)
    unlockShow("structureBuilt", true)
    unlockShow("showSciencePoints")

    unlockShow("selectorTab", true)
    unlockShow("coreTab", true)
    unlockShow("hardwareTab", true)
    unlockShow("softwareTab", true)
    unlockShow("communicationTab", true)
    /*
    unlockShow("hardware", true)
*/
    /*
    unlockShow("component1", true)
    unlockShow("refiningLayer", true)
    
    unlockShow("rarityLayer", true)
*/
    /*
        unlockShow("software", true)
        unlockShow("component2", true)
        unlockShow("projects", true)
    
        unlockShow("data", true)
    
        unlockShow("communication", true)
        unlockShow("component3", true)
        unlockShow("energyScreen", true)
        unlockShow("energy", true)
        unlockShow("energyTier1", true)
        unlockShow("squareEnergy1", true)
        unlockShow("squareEnergy2", true)
        unlockShow("squareEnergy3", true)
        unlockShow("energyTier2", true)
        unlockShow("squareEnergy4", true)
        unlockShow("squareEnergy5", true)
        unlockShow("squareEnergy6", true)
    
        unlockShow("exploration", true)
        unlockShow("exploration1", true)
        unlockShow("explorationA", true)
        unlockShow("explorationAButton", true)
        unlockShow("exploration2", true)
        unlockShow("explorationBButton", true)
    */
    unlockShow("core", true)
    unlockShow("componentSelector", true)
    unlockShow("components1Module", true)
    unlockShow("components2Module", true)
    unlockShow("components3Module", true)
    unlockShow("componentInfo", true)
    unlockShow("componentsSummary", true)
    unlockShow("hardwareSummary", true)
    unlockShow("softwareSummary", true)
    unlockShow("communicationSummary", true)
    unlockShow("x1Summary", true)
    unlockShow("x2Summary", true)
    unlockShow("x3Summary", true)
    unlockShow("componentTab", true)
    unlockShow("componentsList", true)

  }

  if (checkShow("componentsSummary")) {
    unlockShow("HardwareSummary", true);
    unlockShow("SoftwareSummary", true);
    unlockShow("CommunicationSummary", true);
    unlockShow("X1Summary", true);
    unlockShow("X2Summary", true);
    unlockShow("X3Summary", true);
  }


  if (checkShow("componentInfo")) {
    unlockShow("componentsSummary", true)
    unlockShow("componentList", true)
    unlockShow("componentTab", true)
  }

  if (checkShow("components1")) {
    unlockShow("components1Tier1", true);
  }

  if (checkShow("components2")) {
    unlockShow("components2Tier1", true);
  }

  if (checkShow("components3")) {
    unlockShow("components3Tier1", true);
  }

  unlockShow("valute", true);

  if (checkShow("hardware")) {
    unlockShow("component1", true);
    unlockShow("refiningLayer", true);
    unlockShow("rarityLayer", true);
  }

  if (checkShow("software")) {
    unlockShow("component2", true);
    unlockShow("projects", true);
    unlockShow("data", true)
  }

  if (checkShow("communication")) {
    unlockShow("component3", true);
    unlockShow("energyScreen", true);
    unlockShow("exploration", true);
  }

  if (checkShow("energyScreen", true)) {
    unlockShow("energy", true)
    unlockShow("energyTier1", true)
    unlockShow("squareEnergy1", true)
    unlockShow("squareEnergy2", true)
    unlockShow("squareEnergy3", true)
    unlockShow("energyTier2", true)
    unlockShow("squareEnergy4", true)
    unlockShow("squareEnergy5", true)
    unlockShow("squareEnergy6", true)
  }

  if (checkShow("exploration", true)) {
    unlockShow("exploration1", true)
    unlockShow("explorationA", true)
    unlockShow("explorationAButton", true)
    unlockShow("exploration2", true)
    unlockShow("explorationBButton", true)
  }
  //Component2T2

  //Components3

  //Component3T1

  //Component3T2

  //componentSummary
  // unlockShow("HardwareSummary", true);

  //OUTSIDE LAYER

  //Energy

  //Energy T1

  //Energy T1

  //Exploration

  //Selector

  //Competition


  //Projects


  if (gameData.cells > 1000 && !(getNotIf(projects, "unlockable1", "unlocked"))) {
    unlockShow("unlockable1", true);
  }


  if (gameData.cells > 1000 && !(getNotIf(projects, "unlockable2", "unlocked"))) {
    unlockShow("unlockable2", true);
  }


  if (gameData.cells > 1000 && !(getNotIf(projects, "unlockable3", "unlocked"))) {
    unlockShow("unlockable3", true);
  }


  if (getNotIf(projects, "unlockable1", "unlocked")) {
    unlockShow("unlockable1", false);
  }


  if (getNotIf(projects, "unlockable2", "unlocked")) {
    unlockShow("unlockable2", false);
  }

  if (getNotIf(projects, "unlockable3", "unlocked")) {
    unlockShow("unlockable3", false);
  }

  //All Projects


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

function addCells(x) {
  gameData.cells += x;
}

if (typeof savedGameData.gameData !== "undefined") gameData = savedGameData.gameData
if (typeof savedGameData.components !== "undefined") components = savedGameData.components
if (typeof savedGameData.explorationUpgrades !== "undefined") explorationUpgrades = savedGameData.explorationUpgrades
if (typeof savedGameData.explorationSelected !== "undefined") explorationSelected = savedGameData.explorationSelected
if (typeof savedGameData.data !== "undefined") data = savedGameData.data
if (typeof savedGameData.dataUpgrades !== "undefined") dataUpgrades = savedGameData.dataUpgrades
if (typeof savedGameData.energyBuilding !== "undefined") energyBuilding = savedGameData.energyBuilding
if (typeof savedGameData.refining !== "undefined") refining = savedGameData.refining
if (typeof savedGameData.rarity !== "undefined") rarity = savedGameData.rarity
if (typeof savedGameData.projects !== "undefined") projects = savedGameData.projects
if (typeof savedGameData.showable !== "undefined") showable = savedGameData.showable