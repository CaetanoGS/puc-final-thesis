import express from 'express';
import { authenticationRoutes } from './authentication';
import { transationRoutes } from './transaction';
import { walletRoutes } from './wallets';
import { userRoutes1 } from './users';


export const routes = express.Router();

//routes.use(walletRoutes);
routes.use(authenticationRoutes);
routes.use(userRoutes1);
//routes.use(transationRoutes);