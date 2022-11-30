import express from 'express';
import { getT } from '../controllers/control.js';


const route = express.Router();
route.get('/', getT);

export default route;