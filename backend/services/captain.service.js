const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstName, lastName, email, password,
    color, number, capacity, vehicleType
}) => {
    if (!firstName || !lastName || !email || !password) {
        throw new Error('All fields are required');
    }

    const captain = captainModel.create({
        fullName: {
            firstName,
            lastName,
        },
        email,
        password,
        vehicle: {
            color,
            number,
            capacity,
            vehicleType,
        },
    });
    return captain;
}