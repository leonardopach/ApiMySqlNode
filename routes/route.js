import express from 'express';
import { addInfo, getT, updateInfo } from '../controllers/control.js';


const route = express.Router();
route.get('/', getT);
route.post('/add', addInfo);
route.put('/update/:id', updateInfo);

export default route;