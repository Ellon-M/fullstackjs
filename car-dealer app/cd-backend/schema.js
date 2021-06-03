const { buildSchema } = require('graphql');
const newCarSchema = buildSchema(`
  type Query {
      vehicles: [NewCar],
      vehiclebyId(id: Int!): NewCar
  }

  type NewCar {
    id: Int,
    brand: String,
    model: String,
    year: Int,
    transmission: String,
    fuel: String,
    topSpeed: String,
    engineSize: String,
    bodyType: String,
    color: String
  }
`);

module.exports = newCarSchema;