import { gql } from '@apollo/client'

export const GET_CONTINENTS = gql`
    query GetAllContinents {
        continents {
            code
            name
        }
    }`

export const GET_COUNTRIES_FROM_CONTINENT = gql`
    query GetCountriesFromContinent($code: ID!) {
        continent(code: $code) {
            code
            name
            countries {
                code
                name
                emoji
            }
        }
    }`
export const GET_COUNTRY = gql`
    query getCountry($code: ID!) {
        country(code: $code) {
            name
            capital
            currency
            languages {
                name
            }
        }
    }`
