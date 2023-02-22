import express from 'express';
import { authenticationRoutes } from './authentication';
import { transationRoutes } from './transaction';
import { userRoutes } from './users';
import { walletRoutes } from './wallets';

export const routes = express.Router();

routes.use(userRoutes);
routes.use(walletRoutes);
routes.use(authenticationRoutes);
routes.use(transationRoutes);