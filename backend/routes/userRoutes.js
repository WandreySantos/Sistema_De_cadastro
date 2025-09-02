import express from 'express';
import { createUser, getUsers, getUsersByName} from '../controllers/userController.js';

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/name/:name', getUsersByName);

export default router; 