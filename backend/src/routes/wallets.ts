import { Router } from 'express';
import { WalletController } from "../controllers/wallets/wallet.controller";
import { isObject } from 'util';


export const walletRoutes = Router();

walletRoutes.get('/wallets/:id', async (req, res) => {
    const walletController = new WalletController()

    console.log(req.params.id);

    const wallet = await walletController.getWalletById(req.params.id);

    if(typeof isObject(wallet))
        return res.status(404).send(wallet)
    return res.status(200).send(wallet);

});
