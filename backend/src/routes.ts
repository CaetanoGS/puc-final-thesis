import express from 'express';
import { authenticationRoutes } from './routes/authentication';
import { transationRoutes } from './routes/transaction';
import { userRoutes } from './routes/users';
import { walletRoutes } from './routes/wallets';

export const routes = express.Router();

routes.use(userRoutes);
routes.use(walletRoutes);
routes.use(authenticationRoutes);
routes.use(transationRoutes);