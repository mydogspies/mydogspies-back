const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class SiteStatus extends Model {
        static associate(models) {}
    }

    SiteStatus.init({

        online: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        },


    }, { sequelize, modelName: 'SiteStatus' });

    return SiteStatus;
};
