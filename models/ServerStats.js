const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class ServerStats extends Model {
        static associate(models) {}
    }

    ServerStats.init({

        serverDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        },


    }, { sequelize, modelName: 'ServerStats' });

    return ServerStats;
};
