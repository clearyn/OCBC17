export interface Country {
    name: string;
    capital: string;
    area: number;
    population: number;
    gdp: number;
    currency: string;
}
export const Country = [
    { countryName: 'United States', capital: 'Washington, D.C', area: 9525067, population: 325365189, gdp: 18569100, currency: "United States Dollar" },
    { countryName: 'Japan', capital: 'Tokyo', area: 364555, population: 126476461, gdp: 5064872, currency: "Japanese Yen" },
    { countryName: 'Rusia', capital: 'Moscow', area: 532425, population: 145934462, gdp: 9569100, currency: "Russian Ruble" },
    { countryName: 'China', capital: 'Beijing', area: 9388211, population: 1439323776, gdp: 14722730, currency: "Chinese Yuan" },
    { countryName: 'Canada', capital: 'Ottawa', area: 9093510, population: 37742154, gdp: 1643407, currency: "Canadian Dollar" }
];