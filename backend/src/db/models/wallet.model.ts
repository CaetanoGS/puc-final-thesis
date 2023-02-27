import { DataTypes } from 'sequelize';
import { db } from '../database';
import { User } from './user.model';

export const Wallet = db.sequelize.define("wallets", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    }
 },
 {
    timestamps: false,
  });

User.hasOne(Wallet);
Wallet.belongsTo(User);


Wallet.sync({ force: true }).then(
  () => console.log("Sync complete")
);
