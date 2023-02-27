export interface IWallet{
    getWalletById(walletId: string): Promise<Response|Error>;
}