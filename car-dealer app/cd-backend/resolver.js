const NewCar = require('./Models/NewCar');

const resolvers = {
    vehicles: () => {
        return NewCar.find({})
    },
    vehiclebyId: (args) => {
        return NewCar.findOne({id: args.id})
    }
}

module.exports = resolvers;
