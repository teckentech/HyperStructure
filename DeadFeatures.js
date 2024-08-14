
/*
function visual_JobsInfo() {
    var jobPart1 = document.getElementsByClassName("job_part1");
    var job_part2 = document.getElementsByClassName("job_part2");
    var job_part3 = document.getElementsByClassName("jobBar");
    var assignPointJobsplus1 = document.getElementsByClassName("assignPointJobs+1");
    var assignPointJobsminus1 = document.getElementsByClassName("assignPointJobs-1");
    var assignedJob = document.getElementsByClassName("jobAssigned");
  
    for (let x in jobs) {
      actualJobName = jobs[x].name;
      actualJobDisplayName = jobs[x].displayName;
      actualJobActive = jobs[x].active;
      actualJobLevel = jobs[x].level;
      actualJobMaxLevel = jobs[x].maxLevel;
      actualJobEffect = jobs[x].effect();
      actualJobAssigned = jobs[x].assigned;
      actualJobValue = jobs[x].value;
      actualJobMax = jobs[x].max;
      actualJobIdentity = jobs[x].identity;
  
      jobPart1[x].innerHTML = "<span>" + actualJobName + "</span> Level: <span>" + actualJobLevel + "</span> / <span>" + actualJobMaxLevel + "</span>"
        + "<div>" + actualJobDisplayName + "</div>";
      job_part3[x].innerHTML = '<span>' + actualJobAssigned + '</span> <span>' + actualJobValue + '/' + actualJobMax + '</span>';
      job_part3[x].style.width = actualJobValue + "%";
      assignPointJobsplus1[x].setAttribute("data-nomeAssign", actualJobName);
      assignPointJobsminus1[x].setAttribute("data-nomeAssign", actualJobName);
      assignedJob[x].innerHTML = actualJobAssigned;
    }
  }

  function jobs_job_js() {
    for (let x in jobs) {
      if (jobs[x].value >= jobs[x].max) {
        jobs[x].value = jobs[x].max;
  
      }
      if (jobs[x].active && jobs[x].value < jobs[x].max) {
        jobs[x].value += jobs[x].assigned;
        if (jobs[x].value >= jobs[x].max) {
  
          if ((jobs[x].level += 1) < jobs[x].maxLevel) { jobs[x].value = 0; }
  
        }
      }
    }
  }
  
  function assignPointsJob(value, nameIdentifier) {
    for (let x in jobs) {
      if (jobs[x].name == nameIdentifier && (jobs[x].assigned + value) > -1) {
        jobs[x].assigned += value;
      }
    }
  }

  //ATTUALMENTE NON E' COMPATIBILECON IL METODO DI, ACTIVE NOT ACTIVE ,GET ACTIVE ,SET ACTIVE , CHE E' STATO CREATO
function prodCells() {
  let cell_Base = + components.reduce((multi, current) => { if (current.active && current.identity1 == 'cell_Base') { multi += current.effect1() } return multi }, 0);
 
  cell_Base += rarity.reduce((multi, current) => { { multi += current.effect() } return multi }, 0);
  let cell_Multi = 1;
  let cell_Exp = 1;
  let cell_Divisor = 1;
  let cell_Softcap = 1;
  let cell_rate = rarity[0][rarity[0].selected];
 
  var randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber < cell_rate) {
    result = ((cell_Base * cell_Multi) ** cell_Exp) / (cell_Divisor * cell_Softcap);
    gameData.prodCells = result;
    gameData.cells += gameData.prodCells;
  }
}
*/

/*
function startCompetition(a, button) {
 
  for (let x in competitions) {
    if (competitions[x].id == a && competitions[x].completed == 0) {
      competitions[x].completed = 1;
      competitionTabCounter++;
 
 
      // Controlla se tutti e tre i pulsanti sono stati premuti
      if (competitionTabCounter % 3 === 0) {
        // Nascondi il tab corrente
        if (currentTabNumber + 1 <= maxTabNumber) {
          document.querySelector(`.CompetitionTab[data-number="${currentTabNumber}"]`).style.display = "none";
 
          // Incrementa il numero del tab corrente e mostra il tab successivo
          currentTabNumber++;
          document.querySelector(`.CompetitionTab[data-number="${currentTabNumber}"]`).style.display = "inline-block";
        }
      }
    }
  }
 
}


function refiner() {
  var actualValue = refining[0].value;
  var actualSpeedExtractor = refining[0].speedExtractor;
  var actualExtractors = refining[0].extractors;
  var actualEffect = refining[0].effect;
  //value1,  capacityExtractor, speedExtractor
  refining[0].value = actualValue;

}


/*
function visual_CompetionInfo() {
 var elem = document.getElementsByClassName("Competition");
 var elemTab = document.getElementsByClassName("CompetitionTab");

 for (let z = 0; z < elemTab.length; z++) {
   elemTab[z].style.display = "none";
 }

 elemTab[currentTabNumber - 1].style.display = "inline-block";

 for (let x in competitions) {
   actualCompetitionId = competitions[x].id;
   actualCompetitionCompleted = competitions[x].completed;
   actualCompetitionName = competitions[x].name;
   actualCompetitionDescription = competitions[x].description;
   actualCompetitionEffect = competitions[x].effect();
   actualCompetitionIdentity = competitions[x].identity;

   // Utilizza un ciclo for per iterare sugli elementi della HTMLCollection
   for (let y = 0; y < elem.length; y++) {
     if (actualCompetitionId == elem[y].getAttribute("id")) {
       update(actualCompetitionId, actualCompetitionName + " " + actualCompetitionDescription + " " + actualCompetitionEffect)
     }
   }
 }
}
*/


//HTML

/*
<div id="Competition">
<p>Player Info</p>
<div id="CompetitionDisplay">
    <div class="CompetitionTab" data-number="1">
        <button onclick="startCompetition('c1', this)" id="c1" class="Competition">Competition 1</button>
        <button onclick="startCompetition('c2', this)" id="c2" class="Competition">Competition 2</button>
        <button onclick="startCompetition('c3', this)" id="c3" class="Competition">Competition 3</button>
    </div>

    <div class="CompetitionTab" data-number="2">
        <button onclick="startCompetition('c4', this)" id="c4" class="Competition">Competition 4</button>
        <button onclick="startCompetition('c5', this)" id="c5" class="Competition">Competition 5</button>
        <button onclick="startCompetition('c6', this)" id="c6" class="Competition">Competition 6</button>
    </div>
</div>
</div>

    mainGame: false, ui: false, structureBuilt: false, showSciencePoints: false, 
    
    selectorTab: false, coreTab: false, hardwareTab: false, softwareTab: false, communicationTab: false, 

    hardware: false, component1: false, refiningLayer: false, 

    rarityLayer: false,

    software: false, component2: false, projects: false,  unlockable1: false,  unlockable2: false, unlockable3: false,

    data: false, collectable1: false, collectable2: false, 

    communication: false, component3: false, energyScreen: false, energy: false, energyTier1: false, squareEnergy1: false,  squareEnergy2: false,
    squareEnergy3: false, energyTier2: false, squareEnergy4: false, squareEnergy5: false,  squareEnergy6: false, 

    exploration: false, exploration1: false,  explorationA: false, explorationAButton: false, exploration2: false,  explorationBButton: false, 

    core: false, componentSelector: false, components1Module: false, components2Module: false, components3Module: false, componentInfo: false, componentsSummary: false, hardwareSummary: false, softwareSummary: false, communicationSummary: false, x1Summary: false, x2Summary: false, x3Summary: false, componentTab: false, componentRow1: false, componentRow2: false, componentRow3: false, componentRow4: false, componentRow5: false, componentRow6: false, componentsList: false, components1: false, components1Tier1: false, token1: false, token2: false, token3: false, token4: false, token5: false, token6: false, components2: false, components1Tier2: false, components2Tier1: false, components3: false, components3Tier1: false, components3Tier2: false, 


    <progress id="dataMediumWait" value="0" max="100">Medium</progress>
*/


if (typeof savedGameData.resetValueGameData !== "undefined") resetValueGameData = savedGameData.resetValueGameData
if (typeof savedGameData.resetValueComponentsEquipped !== "undefined") resetValueComponentsEquipped = savedGameData.resetValueComponentsEquipped
if (typeof savedGameData.resetValueComponents !== "undefined") resetValueComponents = savedGameData.resetValueComponents
if (typeof savedGameData.resetValueExplorationUpgrades !== "undefined") resetValueExplorationUpgrades = savedGameData.resetValueExplorationUpgrades
if (typeof savedGameData.resetValueExplorationSelected !== "undefined") resetValueExplorationSelected = savedGameData.resetValueExplorationSelected
if (typeof savedGameData.resetValueData !== "undefined") resetValueData = savedGameData.resetValueData
if (typeof savedGameData.resetValueDataUpgrades !== "undefined") resetValueDataUpgrades = savedGameData.resetValueDataUpgrades
if (typeof savedGameData.resetValueEnergyBuilding !== "undefined") resetValueEnergyBuilding = savedGameData.resetValueEnergyBuilding
if (typeof savedGameData.resetValueRefining !== "undefined") resetValueRefining = savedGameData.resetValueRefining
if (typeof savedGameData.resetValueRarity !== "undefined") resetValueRarity = savedGameData.resetValueRarity
if (typeof savedGameData.resetValueProjects !== "undefined") resetValueProjects = savedGameData.resetValueProjects
if (typeof savedGameData.resetValueLoadoutData !== "undefined") resetValueLoadoutData = savedGameData.resetValueLoadoutData
if (typeof savedGameData.resetValueShowable !== "undefined") resetValueShowable = savedGameData.resetValueShowable


/*
function updateData() {

  for (let a in savedGameData) {
    console.log
  }
}


/*
        const keys = Object.keys(showable[a]);
        for (let key of keys) {
    
          if (key == show) {
            if (visibility == false) {
    let dati = 
*/

<div id="rarityLayer">
<button id="increaseRarityButton"><div id="increaseRarityButtonDiv" class="rarity1 redimension">INCREASE RARITY</div></button>
<button id="selectedRarity" class="redimension">selected</button>
<div data-value="" id="rarityExtracted"></div>
<button  
        onclick="raritySelected('t0')"><div data-value="" class="redimension rarity"></div></button>
<button  
        onclick="raritySelected('t1')"><div data-value="" class="redimension rarity"></div></button>
<button  
        onclick="raritySelected('t2')"><div data-value="" class="redimension rarity"></div></button>
<button  
        onclick="raritySelected('t3')"><div data-value="" class="redimension rarity"></div></button>
<button  
        onclick="raritySelected('t4')"><div data-value="" class="redimension rarity"></div></button>
<button  
        onclick="raritySelected('t5')"><div data-value="" class="redimension rarity"></div></button>
<button  
        onclick="raritySelected('t6')"><div data-value="" class="redimension rarity"></div></button>
<button  
        onclick="raritySelected('t7')"><div data-value="" class="redimension rarity"></div></button>
<button  
        onclick="raritySelected('t8')"><div data-value="" class="redimension rarity"></div></button>
<button  
        onclick="raritySelected('t9')"><div data-value="" class="redimension rarity"></div></button>
</div>
</div>
</div>