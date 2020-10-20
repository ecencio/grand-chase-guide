const EVO = new Array(25).fill(40);
const CHASER_CRYSTALS = [40,40,40,40,40,76,76,76,76,76,142,142,142,142,142,238,238,238,238,238,364,364,364,364,364]
const ORO = [0,0,0,0,12,0,0,0,0,16,0,0,0,0,20,0,0,0,0,24,0,0,0,0,28]
const PRANA = [10000,10000,10000,10000,0,10000,10000,10000,10000,0,10000,10000,10000,10000,0,10000,10000,10000,10000,0,10000,10000,10000,10000,0]

const FREE_ENERGY = 150
const DAILY_ENEGY = 288
const GEMS_ENERGY = 1500
const GEMS_ENERGY_COST = 2000
const ENERGY_COST_CHASER_ENTRANCE = 240

const OPEN_CHASER_COST = {
  evo: 40,
  chaserCrystals: 150,
  gold: 5,
  dupes: 1,
  prana: 0,
}

const quantityDivisorsBy5 = (from, to) => {
  let qty = 0
  for(let i = from; i <= to; i++){
    if (i % 5 === 0) qty++
  }
  return qty
}

export const calculateResources = (from, to, openChaser = false) => {
  const prana = PRANA.slice(from, to).reduce((total, amount) => total + amount)
  let chaserCrystals = CHASER_CRYSTALS.slice(from, to).reduce((total, amount) => total + amount)
  let gold = ORO.slice(from, to).reduce((total, amount) => total + amount)
  let evo = EVO.slice(from, to).reduce((total, amount) => total + amount)
  
  let dupes = quantityDivisorsBy5(from, to)

  if(openChaser){
    chaserCrystals += OPEN_CHASER_COST.chaserCrystals
    gold += OPEN_CHASER_COST.gold
    dupes += OPEN_CHASER_COST.dupes
    evo += OPEN_CHASER_COST.evo
  }

  return {
    evo,
    chaserCrystals,
    dupes: `${dupes} / ${dupes*2}`,
    prana,
    gold: gold * 1000000, 
  }
}

export const calculateCosts = (chaserCrystalsRequired, chaserCrystalsInPossession, cantidadPorMundo) => {
  const chaserDungeonRuns = Math.ceil((chaserCrystalsRequired - chaserCrystalsInPossession) / cantidadPorMundo)
  const energyRequired = chaserDungeonRuns * ENERGY_COST_CHASER_ENTRANCE
  const daysRequiredFree = (energyRequired / (FREE_ENERGY + DAILY_ENEGY)).toFixed(2)
  const daysRequiredWithGems = (energyRequired / (FREE_ENERGY + DAILY_ENEGY + GEMS_ENERGY)).toFixed(2)
  const gemsCost = Math.ceil((daysRequiredWithGems * GEMS_ENERGY_COST) / 200 ) * 200

  return {
    chaserDungeonRuns,
    energyRequired,
    daysRequiredFree,
    daysRequiredWithGems,
    gemsCost
  }
}

