import express from 'express';
import { addInfo, deteleInfo, getT, updateInfo } from '../controllers/control.js';


const route = express.Router();
route.get('/', getT);
route.post('/add', addInfo);
route.put('/update/:id', updateInfo);
route.delete('/delete/:id', deteleInfo);

export default route;