
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
  var tickspeed2 = getNotIf(components, "token4", "effect1")
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

  //producer
  let componentsToken1Level = getNotIf(components, "token1", "level")
  let componentsToken1Effect1 = getNotIf(components, "token1", "level") * getNotIf(components, "token9", "effect1")
  let componentsToken1Effect2 = (1 + (0.1 * getNotIf(components, "token1", "level"))) * getNotIf(components, "token9", "effect1")
  let componentsToken1price = (getNotIf(components, "token1", "level")) / getNotIf(dataUpgrades, "collectable8", "effect")


  if (getNotIf(components, "token1", "level") >= 0 && getNotIf(components, "token1", "level") < 10) {
    componentsToken1Effect1 = (getNotIf(components, "token1", "level")) * getNotIf(components, "token9", "effect1")
    componentsToken1Effect2 = (1 + (0.1 * getNotIf(components, "token1", "level"))) * getNotIf(components, "token9", "effect1")
    componentsToken1price = (3 ** getNotIf(components, "token1", "level")) / getNotIf(dataUpgrades, "collectable8", "effect")
  }

  if (getNotIf(components, "token1", "level") >= 10 && getNotIf(components, "token1", "level") <= 20) {
    componentsToken1Effect1 = (4 * getNotIf(components, "token1", "level")) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect")
    componentsToken1Effect2 = (1 + (0.2 * getNotIf(components, "token1", "level"))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect")
    componentsToken1price = (5 ** getNotIf(components, "token1", "level")) / getNotIf(dataUpgrades, "collectable8", "effect")
  }

  componentsToken1Effect1 = norm(componentsToken1Effect1)
  componentsToken1Effect2 = norm(componentsToken1Effect2)

  //booster
  let componentsToken2Level = getNotIf(components, "token2", "level")
  let componentsToken2Effect1 = (logBase(30, getNotIf(gameData, null, "cells") * (1 + (1.05 * (getNotIf(components, "token2", "level")))))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable7", "effect")
  let componentsToken2Effect2 = 0
  let componentsToken2price = ((2.5 ** getNotIf(components, "token2", "level")) * (10 ** 4)) / getNotIf(dataUpgrades, "collectable8", "effect")

  if (getNotIf(components, "token2", "level") >= 0 && getNotIf(components, "token2", "level") < 10) {
    componentsToken2Effect1 = (1 + (0.1 * getNotIf(components, "token2", "level"))) * logBase(80, getNotIf(gameData, null, "cells")) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable7", "effect")
    componentsToken2Effect2 = 0
    componentsToken2price = ((2.5 ** getNotIf(components, "token2", "level")) * (10 ** 4)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token2", "level") >= 10 && getNotIf(components, "token2", "level") <= 20) {
    componentsToken2Effect1 = (2 * (1 + (0.1 * getNotIf(components, "token2", "level"))) * logBase(80, getNotIf(gameData, null, "cells"))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable7", "effect") * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable7", "effect")
    componentsToken2Effect2 = 0
    componentsToken2price = ((5 ** getNotIf(components, "token2", "level")) * (10 ** 4)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }

  componentsToken2Effect1 = norm(componentsToken2Effect1)

  //multimaker
  let componentsToken3Level = getNotIf(components, "token3", "level")
  let componentsToken3Effect1 = 1 + (0.3 * (getNotIf(components, "token3", "level")) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable4", "effect"))
  let componentsToken3Effect2 = 0
  let componentsToken3price = ((2.5 ** getNotIf(components, "token3", "level")) * (10 ** 6)) / getNotIf(dataUpgrades, "collectable8", "effect")

  if (getNotIf(components, "token3", "level") >= 0 && getNotIf(components, "token3", "level") < 10) {
    componentsToken3Effect1 = 1 + (0.3 * (getNotIf(components, "token3", "level")) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable4", "effect"))
    componentsToken3Effect2 = 0
    componentsToken3price = ((2.5 ** getNotIf(components, "token3", "level")) * (10 ** 4)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token3", "level") >= 10 && getNotIf(components, "token3", "level") <= 20) {
    componentsToken3Effect1 = 1 + (0.6 * getNotIf(components, "token3", "level")) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable4", "effect") * getNotIf(dataUpgrades, "collectable6", "effect")
    componentsToken3Effect2 = 0
    componentsToken3price = ((5 ** getNotIf(components, "token3", "level")) * (10 ** 4)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }

  componentsToken3Effect1 = norm(componentsToken3Effect1)

  //Tick producer
  let componentsToken4Level = getNotIf(components, "token4", "level")
  let componentsToken4Effect1 = 1 + (0.1 * (getIfActive(components, "token4", "level")) * getNotIf(components, "token9", "effect1"))

  let componentsToken4Effect2 = 0
  let componentsToken4price = ((2.5 ** getNotIf(components, "token4", "level")) * (10 ** 7)) / getNotIf(dataUpgrades, "collectable8", "effect")

  if (getNotIf(components, "token4", "level") >= 0 && getNotIf(components, "token4", "level") < 10) {
    componentsToken4Effect1 = 1 + (0.1 * (getIfActive(components, "token4", "level")) * getNotIf(components, "token9", "effect1"))
    componentsToken4Effect2 = 0
    componentsToken4price = ((2.5 ** getNotIf(components, "token4", "level")) * (10 ** 6)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token4", "level") >= 10 && getNotIf(components, "token4", "level") <= 20) {
    componentsToken4Effect1 = 1 + (0.1 * (getIfActive(components, "token4", "level")) * getNotIf(components, "token9", "effect1") * getIfActive(dataUpgrades, "collectable6", "effect"))
    componentsToken4Effect2 = 0
    componentsToken4price = ((5 ** getNotIf(components, "token4", "level")) * (10 ** 6)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }

  componentsToken4Effect1 = norm(componentsToken4Effect1)

  //Data Booster
  let componentsToken5Level = getNotIf(components, "token5", "level")
  let componentsToken5Effect1 = (1 + (0.5 * (getNotIf(components, "token5", "level")))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable7", "effect")
  let componentsToken5Effect2 = 0
  let componentsToken5price = ((2.5 ** getNotIf(components, "token5", "level")) * (10 ** 6)) / getNotIf(dataUpgrades, "collectable8", "effect")

  if (getNotIf(components, "token5", "level") >= 0 && getNotIf(components, "token5", "level") < 10) {
    componentsToken5Effect1 = (1 + (0.5 * (getNotIf(components, "token5", "level")))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable7", "effect")
    componentsToken5Effect2 = 0
    componentsToken5price = ((2.5 ** getNotIf(components, "token5", "level")) * (10 ** 6)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token5", "level") >= 10 && getNotIf(components, "token5", "level") <= 20) {
    componentsToken5Effect1 = (1 + (1 * (getNotIf(components, "token5", "level")))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect") * getNotIf(dataUpgrades, "collectable7", "effect")
    componentsToken5Effect2 = 0
    componentsToken5price = ((5 ** getNotIf(components, "token5", "level")) * (10 ** 6)) / getNotIf(dataUpgrades, "collectable8", "effect")
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
  if (getIfActive(components, "token6", "level") >= 10 && getIfActive(components, "token6", "level") <= 20) {
    componentsToken6Effect1 = (2 * getIfActive(components, "token6", "level"))
    componentsToken6Effect2 = (20 * getIfActive(components, "token6", "level"))
    componentsToken6price = (5 ** getIfActive(components, "token6", "level"))
  }


  //Energy Synergy
  let componentsToken7Level = getNotIf(components, "token7", "level")
  let componentsToken7Effect1 = (4 ** logBase(10, getNotIf(gameData, null, "energy") * (1.1 * (getNotIf(components, "token7", "level"))))) * getNotIf(components, "token9", "effect1")
  let componentsToken7Effect2 = 0
  let componentsToken7price = ((2.5 ** getNotIf(components, "token7", "level")) * (10 ** 11)) / getNotIf(dataUpgrades, "collectable8", "effect")

  if (getNotIf(components, "token7", "level") >= 0 && getNotIf(components, "token7", "level") < 10) {
    componentsToken7Effect1 = (4 ** logBase(10, getNotIf(gameData, null, "energy") * (1.1 * (getNotIf(components, "token7", "level"))))) * getNotIf(components, "token9", "effect1")
    componentsToken7Effect2 = 0
    componentsToken7price = ((2.5 ** getNotIf(components, "token7", "level")) * (10 ** 11)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token7", "level") >= 10 && getNotIf(components, "token7", "level") <= 20) {
    componentsToken7Effect1 = (10 * ((4 ** logBase(10, getNotIf(gameData, null, "energy") * (1.1 * (getNotIf(components, "token7", "level")))))) * getNotIf(components, "token9", "effect1") * getNotIf(dataUpgrades, "collectable6", "effect"))
    componentsToken7Effect2 = 0
    componentsToken7price = ((5 ** getNotIf(components, "token7", "level")) * (10 ** 11)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }

  componentsToken7Effect1 = norm(componentsToken7Effect1)

  //Asteroid Booster (not active, needs to make all asteroid upgrades)
  let componentsToken8Level = getNotIf(components, "token8", "level")
  let componentsToken8Effect1 = 1 + (getNotIf(components, "token8", "level"))
  let componentsToken8Effect2 = 10 * (getNotIf(components, "token8", "level"))
  let componentsToken8price = (2.5 ** getNotIf(components, "token8", "level"))

  if (getNotIf(components, "token8", "level") >= 0 && getNotIf(components, "token8", "level") < 10) {
    componentsToken8Effect1 = (1 + getNotIf(components, "token8", "level"))
    componentsToken8Effect2 = (10 * getNotIf(components, "token8", "level"))
    componentsToken8price = (2.5 ** getNotIf(components, "token8", "level"))
  }
  if (getNotIf(components, "token8", "level") >= 10 && getNotIf(components, "token8", "level") <= 20) {
    componentsToken8Effect1 = 1 + (2 * getNotIf(components, "token8", "level"))
    componentsToken8Effect2 = (20 * getNotIf(components, "token8", "level"))
    componentsToken8price = (5 ** getNotIf(components, "token8", "level"))
  }


  //Ally Synergy
  let componentsToken9Level = getNotIf(components, "token9", "level")
  let componentsToken9Effect1 = 1 + (0.1 * getIfActive(components, "token9", "level"))
  let componentsToken9Effect2 = 0
  let componentsToken9price = ((2.5 ** getNotIf(components, "token9", "level")) * (10 ** 11)) / getNotIf(dataUpgrades, "collectable8", "effect")

  if (getNotIf(components, "token9", "level") >= 0 && getNotIf(components, "token9", "level") < 10) {
    componentsToken9Effect1 = 1 + (0.25 * getIfActive(components, "token9", "level"))
    componentsToken9Effect2 = 0
    componentsToken9price = ((2.5 ** getNotIf(components, "token9", "level")) * (10 ** 11)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }
  if (getNotIf(components, "token9", "level") >= 10 && getNotIf(components, "token9", "level") <= 20) {
    componentsToken9Effect1 = 1 + (0.5 * getIfActive(components, "token9", "level")) * getNotIf(dataUpgrades, "collectable6", "effect")
    componentsToken9Effect2 = 0
    componentsToken9price = ((5 ** getNotIf(components, "token9", "level")) * (10 ** 11)) / getNotIf(dataUpgrades, "collectable8", "effect")
  }

  componentsToken9Effect1 = norm(componentsToken9Effect1)

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

  //refining

  if (getNotIf(gameData, null, "cells") >= 100) {
    setActive(refining, null, "value", true)
    setActive(refining, null, "extractors", true)
    setActive(refining, null, "speedExtractor", true)
    setActive(refining, null, "effect", true)
    setActive(refining, null, "priceExtractors", true)
    setActive(refining, null, "speedExtractorPrice", true)
  }

  let refiningValue = ((getIfActive(refining, null, "extractors")) * (2 ** getIfActive(refining, null, "speedExtractor"))) * getNotIf(dataUpgrades, "collectable3", "effect");

  let refiningExtractors = getIfActive(refining, null, "extractors");
  let refiningSpeedExtractor = getIfActive(refining, null, "speedExtractor");
  let refiningEffect = 0; //effetto che si applica fra extractors e speedExtractors, attualmente, non viene usato
  let refiningPriceExtractors = (getIfActive(refining, null, "extractors") ** 3) / getNotIf(dataUpgrades, "collectable2", "effect");
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
  let dataUpgradeNumber1 = getIfActive(data, null, "upgradeNumber1");
  let dataUpgradeEffect2 = getIfActive(data, null, "upgradeNumber2");
  let dataUpgradePrice2 = 10 ** getIfActive(data, null, "upgradeNumber2");
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
  let dataUpgrade2Effect = 1 + (0.01 * getIfActive(dataUpgrades, "collectable2", "extracted"));
  let dataUpgrade2MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");
  let dataUpgrade2Extracted = getIfActive(dataUpgrades, "collectable2", "extracted");

  //Extractor is slightly boosted
  let dataUpgrade3Effect = 1 + (0.01 * getIfActive(dataUpgrades, "collectable3", "extracted"));
  let dataUpgrade3MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");;
  let dataUpgrade3Extracted = getIfActive(dataUpgrades, "collectable3", "extracted");

  //Multimakers are slightly stronger
  let dataUpgrade4Effect = 1 + (0.01 * getIfActive(dataUpgrades, "collectable4", "extracted"));
  let dataUpgrade4MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");
  let dataUpgrade4Extracted = getIfActive(dataUpgrades, "collectable4", "extracted");

  //Data + 1/s
  let dataUpgrade5Effect = 1 * getIfActive(dataUpgrades, "collectable5", "extracted");
  let dataUpgrade5MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");;
  let dataUpgrade5Extracted = getIfActive(dataUpgrades, "collectable5", "extracted");

  //Components rankup are stronger
  let dataUpgrade6Effect = 1 + (0.1 * getIfActive(dataUpgrades, "collectable6", "extracted"));
  let dataUpgrade6MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");
  let dataUpgrade6Extracted = getIfActive(dataUpgrades, "collectable6", "extracted");

  //Boosters are stronger
  let dataUpgrade7Effect = 1 + (0.1 * getIfActive(dataUpgrades, "collectable7", "extracted"));
  let dataUpgrade7MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");;
  let dataUpgrade7Extracted = getIfActive(dataUpgrades, "collectable7", "extracted");

  //Components Cost is reduced
  let dataUpgrade8Effect = 1 + (0.1 * getIfActive(dataUpgrades, "collectable8", "extracted"));
  let dataUpgrade8MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");
  let dataUpgrade8Extracted = getIfActive(dataUpgrades, "collectable8", "extracted");

  //Data + 10/s
  let dataUpgrade9Effect = 10 * getIfActive(dataUpgrades, "collectable9", "extracted");
  let dataUpgrade9MaxQuantity = 10 + getIfActive(data, null, "upgradeEffect2");;
  let dataUpgrade9Extracted = getIfActive(dataUpgrades, "collectable9", "extracted");

  //Components Effect are slightly stronger
  let dataUpgrade11Effect = 1 + (0.01 * getIfActive(dataUpgrades, "collectable11", "extracted"));
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

  //Hardware Package 1
  let projectsUnlockable1Price1 = 10 ** 5
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
  let projectsUnlockable4Price1 = 5 * (10 ** 5)
  let projectsUnlockable4Price2 = 0
  let projectsUnlockable4Price3 = 0

  //extractors automation
  let projectsUnlockable5Price1 = 10 ** 7
  let projectsUnlockable5Price2 = 5 * (10 ** 5)
  let projectsUnlockable5Price3 = 100

  //data automation
  let projectsUnlockable6Price1 = 10 ** 7
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
  let projectsUnlockable13Price1 = 10 ** 8
  let projectsUnlockable13Price2 = 5 * (10 ** 5)
  let projectsUnlockable13Price3 = 100

  //FIRST EXPLORATION STEP
  let projectsUnlockable14Price1 = 10 ** 13
  let projectsUnlockable14Price2 = 10
  let projectsUnlockable14Price3 = 0

  //MILESTONE 1
  let projectsUnlockable15Price1 = 10 ** 5
  let projectsUnlockable15Price2 = 5000
  let projectsUnlockable15Price3 = 0

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


  let energyBuildingEnergy1Price = (10 ** totLevel) * ((10 ** 6) * (2 ** getNotIf(energyBuilding, "energy1", "level")));
  let energyBuildingEnergy2Price = (10 ** totLevel) * ((10 ** 6) * (2 ** getNotIf(energyBuilding, "energy2", "level")));
  let energyBuildingEnergy3Price = (10 ** totLevel) * ((10 ** 6) * (2 ** getNotIf(energyBuilding, "energy3", "level")));
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
  let explorationUpgradesExplorationA2Price = 10 ** 5;
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

/////////////////////////




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
  if (getNotIf(gameData, null, "data") >= 5 * (10 ** 5) && !(getNotIf(projects, "unlockable4", "unlocked")) && getNotIf(projects, "unlockable15", "unlocked")) {
    unlockShow("unlockable4", true);
    unlockShow("progress6", true)

    if (gameData[0].topProgressCount < 6) {
      gameData[0].topProgressCount = 6
      unlockShow("topProgress5", false)
      unlockShow("topProgress6", true)
    }
  }

  //extraction automation
  if (getNotIf(gameData, null, "data") >= 5 * (10 ** 5) && !(getNotIf(projects, "unlockable5", "unlocked"))) {
    unlockShow("unlockable5", true);
  }

  //cells: 1E10 - 1E12

  //idle 2
  if (getNotIf(gameData, null, "data") >= 5 * (10 ** 5) && !(getNotIf(projects, "unlockable10", "unlocked"))) {
    unlockShow("unlockable10", true);
  }

  //data automation
  if (getNotIf(gameData, null, "data") >= 5 * (10 ** 5) && !(getNotIf(projects, "unlockable6", "unlocked"))) {
    unlockShow("unlockable6", true);
  }

  //communication package 1
  if (getNotIf(gameData, null, "data") >= 5 * (10 ** 5) && !(getNotIf(projects, "unlockable13", "unlocked"))) {
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



  /////////////////////



  
  <div id="progress">
  <div id="progress1">
      <b>Initiate Hardware</b>
      <br>
      In a lonely place, a scientist was working on a machine that could grow forever.
      After decades his work was stalling, the machine could not grow without help.
      In the vastness of the universe, hundreds of dimensions far from earth an Entity responded.
      It gave the Structure life, it was called USER
      <br>
      <b>HARDWARE LAYER AT 100 CELLS</b>
      <br>
      <br>
  </div>

  <div id="progress2">
      <b>Extractor Unlocked</b>
      <br>
      The first drill is built, it is weak and lonely but never stops working.
      <br>
      Earth crust starts being tempered.
      <br>
      <b>SOFTWARE LAYER AT 1E4 CELLS</b>
      <br>
      <br>
  </div>

  <div id="progress3">
      <b>Data Unlocked</b>
      <br>
      Two Cells filament give a simple command, a hundred are able to make a decision, a thousand make a
      thought, ten thousand make a change.
      <br>
      <b>PROJECTS AT 100 DATA</b>
      <br>
      <br>
  </div>

  <div id="progress4">
      <b>Projects Unlocked</b>
      <br>
      One must use all his resources to make progress real, tinker, build, think, create!
      <br>
      This is the way for the structure to grow.
      <br>
      <b>COMPLETE THE PROJECT: THE FIRST PILLAR</b>
      <br>
      <br>
  </div>

  <div id="progress5">
      <b>The First Pillar</b>
      <br>
      The structure after many iterations is finally finding his true path, people start accepting this
      reality.
      <br>
      The Pillar is necessary for people to live in the structure, it has all necessities, many
      will grow to the sky, separated by a sea of machines.
      <br>
      <b>NEXT PROJECTS AT 5E5 DATA</b>
      <br>
      <br>
  </div>

  <div id="progress6">
      <b>New Projects New Me</b>
      <br>
      Components are the heart of the structure, they decide the direction in which progress is made,
      never forget them, inventions will become obsolete, but not components.
      <br>
      <br>
  </div>

  <div id="progress7">
      <b>Energy, life of the structure</b>
      <br>
      Energy flows in every crevice of the structure, never filling it enough, seeking a way to make this
      overflowing energy a stepping stone for your never ending expansion.
      <br>
      <b>EXPLORATION AT 1E5 ENERGY</b>
      <br>
      <br>
  </div>

  <div id="progress8">
      <b>New Horizons</b>
      <br>
      Looking at the stars inspired countless generations to dream bigger, and set sight on something
      greater on themself, can the structure dream? will its path be forged in the stars?
      <br>
      <b>BUILD THE FIRST STRATUM</b>
      <br>
      <br>
  </div>

  <div id="progress9">
      <b>A new age awaits</b>
      <br>
      Every City destroyed and rebuilt, every human inhabits the pillars, the gray walls give life, the
      humming machines give peace, and we humans will feed the structure, because the structure must grow.
      <br>
      <b>CURRENT ENDGAME, THANKS FOR PLAYING</b>
      <br>
      <br>
  </div>
</div>

<div id="topProgress">
  <div id="topProgress1">
      <b>HARDWARE LAYER AT 100 CELLS</b>
  </div>

  <div id="topProgress2">
      <b>SOFTWARE LAYER AT 1E4 CELLS</b>
  </div>

  <div id="topProgress3">
      <b>PROJECTS AT 100 DATA</b>
  </div>

  <div id="topProgress4">
      <b>COMPLETE THE PROJECT: THE FIRST PILLAR</b>
  </div>

  <div id="topProgress5">
      <b>NEXT PROJECTS AT 5E5 DATA</b>
  </div>

  <div id="topProgress6">
      <b>EXPLORATION AT 1E5 ENERGY</b>
  </div>

  <div id="topProgress7">
      <b>BUILD THE FIRST STRATUM</b>
  </div>

  <div id="topProgress8">
      <b>CURRENT ENDGAME, THANKS FOR PLAYING</b>
  </div>
</div>