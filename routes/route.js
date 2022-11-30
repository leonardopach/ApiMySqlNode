import express from 'express';
import { addInfo, getT } from '../controllers/control.js';


const route = express.Router();
route.get('/', getT);
route.post('/add', addInfo);

export default route;