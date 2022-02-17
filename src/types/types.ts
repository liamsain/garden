export interface IVeg {
	name: string;
	inGarden: boolean;
	sowingIndoorsRange?: [number, number];
  sowingIndoorsAdvice?: string;
	sowingOutdoorsRange?: [number, number];
  sowingOutdoorsAdvice?: string;
	plantingOutSeedlingsRange?: [number, number];
  plantingOutSeedlingsAdvice?: string;
	harvestingRange: [number, number];
  harvestingAdvice?: string;
  img: string;
}

export enum JobType {
  SowIndoors,
  SowOutdoors,
  PlantOutSeedlings,
  Harvest
};