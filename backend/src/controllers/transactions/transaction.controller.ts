import { ITransaction } from './interfaces/transaction.interface';
import { Transaction } from '../../db/models/transactions.model';
import { Wallet } from '../../db/models/wallet.model';

export const possibleTransactionTypes = ["debit", "credit"]
export const possibleTransactionCategories = ["stock", "salary", "market", "travel", "house", "hobbies"]

export class TransactionController implements ITransaction {

    async getTransaction(): Promise<typeof Transaction| null> {
        return await Transaction.findAll();
    }

    async getTransactionById(transactionId: string): Promise<typeof Transaction | Error> {
        const retrieveTransactionError = new Error("Invalid transaction ID");
        if (!transactionId)
            return retrieveTransactionError.message

        const transaction = await Transaction.findOne(
            { where: { id: transactionId } }
        )

        if (!transaction)
            return retrieveTransactionError;

        return transaction;
    }

    async createTransaction(value: number, type: string, category: string, userId: string): Promise<typeof Transaction | Error> {

        if (!possibleTransactionTypes.includes(type)) {
            const createTransactionTypeError = new Error(`Invalid type, the type must be in this list ${possibleTransactionTypes}`)
            return createTransactionTypeError.message
        }
        

        console.log(`Category: ${category} nao faz parte do array ${possibleTransactionCategories}`)

        if (!possibleTransactionCategories.includes(category)) {
            const createTransactionCategoryError = new Error(`Invalid category, the category must be in this list ${possibleTransactionCategories}`)
            return createTransactionCategoryError.message
        }

        const wallet = await Wallet.findOne({
            where: {
                userId: userId
            }
        });

        if(wallet)
            return await Transaction.create(
                {
                    value: value,
                    type: type,
                    walletId: wallet.id,
                    category: category
                }
            );
        const userHasNoWalletError = new Error("User has no wallet")
        return userHasNoWalletError.message;
    }

    async updateTransaction(transactionId: string, value: number, type: string): Promise<typeof Transaction | Error> {
        const retrievedTransaction = await Transaction.findOne(
            { where: { id: transactionId } }
        )
        const notFoundError = new Error(`Transaction with id ${transactionId} does not exists`);

        if (!retrievedTransaction)
            return notFoundError.message;

        await retrievedTransaction.update(
            {
                value: value,
                type: type
            }
        );

        await retrievedTransaction.save();

        return retrievedTransaction;
    }

    async deleteTransaction(transactionId: string): Promise< void | string> {
        const transactionToDelete = await Transaction.findOne(
            { where: { id: transactionId } }
        );

        const notFoundError = new Error(`Transaction with id ${transactionId} does not exists`);

        if (!transactionToDelete)
            return notFoundError.message;
        
        await transactionToDelete.destroy();
    }

}