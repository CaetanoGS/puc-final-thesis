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
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
},
);

Wallet.hasMany(Transaction)
Transaction.belongsTo(Wallet)

Transaction.sync({ force: true }).then(
    () => console.log("Sync complete")
);