export interface Continents {
  continents: Continent[];
}

export interface Continent {
  code: string;
  name: string;
}

export interface CountriesFromContinent {
  continent: {
    code: string;
    name: string;
    countries: Country[]
  }
}

export interface Country {
  code: string;
  name: string;
  emoji: string;
}

export interface CountryDetails {
  country: {
    name: string;
    capital: string;
    currency: string;
    languages: [
      {
        name: string
      }
    ]
  }
}
