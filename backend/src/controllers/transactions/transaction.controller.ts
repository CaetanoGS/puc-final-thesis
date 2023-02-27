import { ITransaction } from './interfaces/transaction.interface';
import { Transaction } from '../../db/models/transactions.model';

export class TransactionController implements ITransaction{

    async getTransaction(): Promise<typeof Transaction | Error> {
        return await Transaction.findAll();
    }

    async getTransactionById(transactionId: string): Promise<typeof Transaction | Error> {
        const retrieveTransactionError = new Error("Invalid transaction ID");
        if(!transactionId)
            return retrieveTransactionError.message
        
        const transaction = await Transaction.findOne(
            {where: {id: transactionId}}
        )

        if(!transaction)
            return retrieveTransactionError;
        
        return transaction;
    }

}