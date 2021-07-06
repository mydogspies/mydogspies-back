const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class ServerStats extends Model {
        static associate(models) {}
    }

    ServerStats.init({

        serverDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: 1
        },


    }, { sequelize, modelName: 'ServerStats' });

    return ServerStats;
};
