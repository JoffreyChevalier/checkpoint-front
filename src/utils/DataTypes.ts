export interface Continents {
  continents: Continent[];
}

export interface Continent {
  code: string;
  name: string;
}

export interface CountriesFromContinent extends Continent {
  countries: Country[];
}

export interface Country {
  code: string;
  name: string;
  emoji: string;
}
