import { DataTypes } from 'sequelize';
import { db } from '../database';
import { Wallet } from './wallet.model';

export const Transaction = db.sequelize.define("transactions", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    value: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: true,
    }
);

Wallet.hasMany(Transaction)
Transaction.belongsTo(Wallet)