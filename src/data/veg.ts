import { IVeg } from '../types/types';
import carrot from '../assets/veg/carrot.png';
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
    sowingIndoorsAdvice: `Sow in pots or modules filled with seed compost.\nIf they will be growing outdoors, delay sowing indoors until early March`,
    plantingOutSeedlingsRange: [3, 4],
    plantingOutSeedlingsAdvice: `Aubergines need a lot of warmth and sun to crop well, so are best grown in a greenhouse. They can be grown outside, but rarely do well except in mild areas or very warm summers\nGrow initially in 9cm (3½in) pots, then when the roots fill the pot, transfer to 23cm (9in) pots at the following times:\n-in April if growing in a heated greenhouse\n-in early May if growing in an unheated greenhouse\n-in late May/early June if they will be growing outdoors\nAubergines can also be planted in the ground in warm areas of Britain:\n-Choose your warmest, sunniest, most sheltered position, ideally against a sunny wall\n-Warm the soil with polythene or cloches two weeks before planting, once there is no danger of frost\n-Space plants 60cm (2ft) apart\n-Cover young plants with cloches or fleece for a further two weeks until acclimatised\nAftercare\nPlants need staking, as they can grow tall and top-heavy. Tie in the main stem as it grows\nWhen plants are 30cm (1ft) high, pinch out the tip of the main stem, to encourage sideshoots\nWater regularly and feed with a high potassium liquid fertiliser every two weeks once the first fruit starts to form\nMist the leaves regularly (at least twice daily) with tepid water to discourage red spider mites and improve fruiting\nRemove any further flowers once five or six fruits have started to form – cultivars that produce small or round fruits can be allowed to produce many more`,
    harvestingRange: [6, 8],
    harvestingAdvice: 'Harvest fruits individually as soon as they are ripe, with a glossy skin.',
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
    sowingOutdoorsAdvice: `Carrots grow best in full sun and light, fertile, well-drained soil. If your soil is stony, shallow or heavy clay, you may end up with stunted or forked roots, so try short-rooted types.

Before sowing dig over the area to a spades depth, removing weeds, and as many stones as possible. Incorporate plenty of well-rotted manure or compost or / and granular general fertiliser. Ideally allow the to ground to settle and consolidate before sowing.

Early varieties can be sown in February or March under cloches or covered with fleece. The main outdoor sowing season is from April to early July. The seed packet will state whether it’s an early or maincrop variety.
Sow the seeds as thinly as possible, 1cm (½in) deep, in rows 15–30cm (6–12in) apart. Seeds can be slow to germinate, so be patient. 

Seedlings can be vulnerable to slugs and snails, so put protection in place.
Thin out the seedlings if necessary, aiming for plants 5–7.5cm (2–3in) apart. Sowing small batches every three to four weeks will give you continuous harvests.`,
    harvestingRange: [5, 8],
    harvestingAdvice: `Carrots are ready about 12–16 weeks after sowing. So from repeated sowings you can enjoy fresh carrots from late spring to autumn.

Harvest as soon as they’re large enough to use – don’t aim for the largest roots or you’ll sacrifice flavour.

Lift the roots carefully using a fork if your soil is heavy.`,
    img: carrot
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
    sowingIndoorsAdvice: `Sow seed in pots or modules of seed or multi-purpose compost. Keep pots moist`,
    sowingOutdoorsRange: [2, 3],
    sowingOutdoorsAdvice: `Sow seeds directly into well prepared soil and thin them later`,
    plantingOutSeedlingsRange: [4, 5],
    plantingOutSeedlingsAdvice: `Transplant seedlings when they are about 20cm high\nLeeks need a sunny, sheltered site with well-drained, well prepared soil with plenty of added manure or fertiliser. To plant the traditional way, make a hole with a dibber, 20cm deep, drop a seedling in and water in. This method, called ‘puddling in’ will produce large single leeks with well-blanched stems. `,
    harvestingRange: [8, 3],
    harvestingAdvice: 'Use a fork to lift leeks singly or in clumps without disturbing neighbouring plants. Leeks can be left in the ground until you are ready to use them. Once harvested, they will store in the fridge or a cool larder for a couple of weeks',
    img: leek
  },
  {
    name: 'Onions',
    inGarden: false,
    sowingIndoorsRange: [11, 0],
    sowingIndoorsAdvice: `Sow onion seeds in modules in mid- to late winter and keep in a greenhouse at 10–16°C (50–60°F)\n
Although one plant per module is effective, growing three to four per module saves space. Sow five or six seeds per module, then thin out if necessary to three or four plants. Harden off indoor-sown plants in spring, before transplanting into the ground. When multi-seeded modules are planted out, the onions form a clump of bulbs.`,
    sowingOutdoorsRange: [1, 1],
    sowingOutdoorsAdvice: `Sow seeds 1.3cm (½in) deep in rows 20cm (8in) apart. Thin out seedlings first to 5cm (2in) apart, and later to 10cm (4in). Closer planting will result in more bulbs and a larger overall crop, but smaller individual bulbs`,
    plantingOutSeedlingsRange: [3, 3],
    plantingOutSeedlingsAdvice: `Water in prolonged dry spells every 14 days, and give an occasional feed with a general liquid fertiliser. But stop watering and feeding once the onions have swollen in mid-summer. Watering spring-planted crops after mid-summer can mean they store less successfully. Try to avoid overhead watering, as this can encourage fungal diseases.
In late winter, give autumn-planted onions a nitrogen-rich fertiliser, such as sulphate of ammonia, at a rate of 35g (1oz) per square metre/yard. This not only enhances growth but can also suppress premature flowering. Alternatively, use dry poultry manure.`,
    harvestingRange: [4, 7],
    harvestingAdvice: `Yellowing and toppling of the foliage is a sign that the crop is reaching maturity. Harvest before the foliage dies down completely. Carefully lift the bulbs with fork, taking care not to damage or bruise them, as this could cause them to rot in storage. Use any damaged onions straight away.`,
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
    name: 'Tomatoes',
    inGarden: false,
    sowingIndoorsRange: [1, 3],
    sowingIndoorsAdvice: `Sow seeds in 7.5cm pots of moist compost, top with a thin layer of vermiculite, then water and cover with cling film. Stand on a warm, bright windowsill or in a propagator.

When your seeds have germinated, remove the cling film (or take them out of the propagator) and keep the compost damp. Transplant seedlings when they reach about 2-3cm tall into 5cm pots filled with moist multi-purpose compost. Return them to the windowsill. Keep potting on as necessary. Support stems by tying them to a pea stick with soft string`,
    plantingOutSeedlingsRange: [4, 4],
    plantingOutSeedlingsAdvice: `Move your tomatoes outside after the last frost in May. Choose a sunny, sheltered spot, where you can plant them into a border (into soil that has had plenty of well-rotted garden compost added), or into 30cm pots, or put two or three plants in a growing bag. If growing tomatoes in a greenhouse, try growing alongside basil, which thrives in the same conditions.
    Tall-growing cordon tomatoes will require pinching out (removing side-shoots) and staking (tying plants to canes with soft string). When the first tiny fruits begin to appear, strip away the leaves underneath to allow light and air to reach them better. When there are four trusses (clusters) of flowers, pinch out the plant’s growing tip.
    Once flowers appear, feed your plants weekly with liquid tomato food, such as Tomorite. Keep tomatoes well watered because irregular watering causes fruit to split or develop hard black patches, known as blossom-end rot. This is caused by a lack of calcium, which is found in water.

With bush tomatoes, which have a sprawling habit, you can pretty much leave them to get on with it. If the fruits are hidden under the leaves, thin out the foliage a little to let the sun through to ripen them. Support heavy trusses on top of upturned flowerpots to prevent their stems snapping.`,
    harvestingRange: [6, 8],
    harvestingAdvice: 'Leave tomatoes on the plants so they can ripen naturally, which greatly improves the flavour. Towards the end of the season, prune off the older leaves to let in more light and prevent grey mould fungus taking hold. If the weather turns cold, pick the trusses to ripen indoors.',
    img: tomato
  },
];