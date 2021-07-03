import { gql } from '@apollo/client';

export const newVehicles = gql`
  query {
    vehicles {
      brand,
      model,
      year,
      transmission,
      fuel,
      topSpeed,
      engineSize,
      bodyType,
      color
    }
  }
  `;