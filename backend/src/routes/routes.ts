import express from 'express';
import { authenticationRoutes } from './authentication';
import { transationRoutes } from './transaction';
import { walletRoutes } from './wallets';
const userRoutes = require ('./users')


export const routes = express.Router();

routes.use(userRoutes);
routes.use(walletRoutes);
routes.use(authenticationRoutes);
routes.use(transationRoutes);