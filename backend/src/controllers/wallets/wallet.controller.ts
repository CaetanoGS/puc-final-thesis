import { IWallet } from "./interface/wallet.interface";
import { Wallet } from '../../db/models/wallet.model';

export class WalletController implements IWallet{

    constructor(
    ){}

    async getWalletById(walletId: string): Promise<typeof Wallet | Error> {
        const retrieveWalletError = new Error("Invalid wallet ID");

        if(!walletId)
            return retrieveWalletError.message

        const wallet = await Wallet.findOne(
            {where: {id: walletId}}
        )

        if(!wallet)
            return retrieveWalletError.message
        return wallet
    }


}