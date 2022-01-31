import { IVeg } from '../types/types';
import carrotImg from '../assets/veg/carrot.png';
import fennel from '../assets/veg/001-fennel.png';
import courgette from '../assets/veg/002-zucchini.png';
import aubergine from '../assets/veg/003-aubergine.png';
import parsnip from '../assets/veg/004-parsnip.png';
import chicory from '../assets/veg/005-chicory.png';
import leek from '../assets/veg/006-leek.png';
import onion from '../assets/veg/007-onion.png';
import beetroot from '../assets/veg/008-beetroot.png';
import runnerBeans from '../assets/veg/009-edamame.png';
import cucumber from '../assets/veg/010-cucumber.png';
import shallot from '../assets/veg/001-shallot.png';
import tomato from '../assets/veg/002-tomato.png';
import potato from '../assets/veg/003-potato.png';
import garlic from '../assets/veg/004-garlic.png';
import springOnion from '../assets/veg/005-spring-onion.png';
export const veg: IVeg[] = [
  {
    name: 'Aubergine',
    inGarden: false,
    sowingIndoorsRange: [1, 2],
    plantingOutSeedlingsRange: [3, 4],
    harvestingRange: [6, 8],
    img: aubergine
  },
  {
    name: 'Beetroot',
    inGarden: false,
    sowingOutdoorsRange: [2, 5],
    harvestingRange: [5, 7],
    img: beetroot
  },
  {
    name: 'Runner beans',
    inGarden: false,
    sowingIndoorsRange: [3, 4],
    sowingOutdoorsRange: [4, 5],
    plantingOutSeedlingsRange: [5, 6],
    harvestingRange: [6, 8],
    img: runnerBeans
  },
  {
    name: 'Carrots',
    inGarden: false,
    sowingOutdoorsRange: [1, 5],
    harvestingRange: [5, 8],
    img: runnerBeans
    // img: carrotImg
  },
  {
    name: 'Chicory',
    inGarden: false,
    sowingOutdoorsRange: [2, 4],
    harvestingRange: [9, 2],
    img: chicory
  },
  {
    name: 'Courgettes',
    inGarden: false,
    sowingIndoorsRange: [3, 4],
    sowingOutdoorsRange: [4, 5],
    harvestingRange: [6, 10],
    img: courgette
  },
  {
    name: 'Cucumber',
    inGarden: false,
    sowingIndoorsRange: [2, 3],
    sowingOutdoorsRange: [4, 4],
    harvestingRange: [5, 6],
    img: cucumber
  },
  {
    name: 'Fennel',
    inGarden: false,
    sowingOutdoorsRange: [3, 6],
    harvestingRange: [5, 10],
    img: fennel
  },
  {
    name: 'Garlic',
    inGarden: false,
    sowingOutdoorsRange: [1, 2],
    harvestingRange: [4, 8],
    img: garlic
  },
  {
    name: 'Leek',
    inGarden: false,
    sowingIndoorsRange: [0, 1],
    sowingOutdoorsRange: [2, 3],
    plantingOutSeedlingsRange: [4, 5],
    harvestingRange: [8, 3],
    img: leek
  },
  {
    name: 'Onions',
    inGarden: false,
    sowingIndoorsRange: [11, 0],
    sowingOutdoorsRange: [1, 1],
    plantingOutSeedlingsRange: [3, 3],
    harvestingRange: [4, 7],
    img: onion
  },
  {
    name: 'Parsnips',
    inGarden: false,
    sowingOutdoorsRange: [1, 3],
    harvestingRange: [7, 2],
    img: parsnip
  },
  {
    name: 'Potatos',
    inGarden: false,
    sowingOutdoorsRange: [2, 4],
    harvestingRange: [5, 8],
    img: potato
  },
  {
    name: 'Shallots',
    inGarden: false,
    sowingOutdoorsRange: [1, 2],
    harvestingRange: [5, 7],
    img: shallot
  },
  {
    name: 'Spring onions',
    inGarden: false,
    sowingOutdoorsRange: [1, 7],
    harvestingRange: [1, 9],
    img: springOnion
  },
  {
    name: 'Tomatos',
    inGarden: false,
    sowingIndoorsRange: [1, 3],
    plantingOutSeedlingsRange: [4, 4],
    harvestingRange: [6, 8],
    img: tomato
  },
];