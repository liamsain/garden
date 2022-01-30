export interface IVeg {
	name: string;
	inGarden: boolean;
	sowingIndoorsRange?: [number, number];
	sowingOutdoorsRange?: [number, number];
	plantingOutSeedlingsRange?: [number, number];
	harvestingRange: [number, number];
  img?: string;
}