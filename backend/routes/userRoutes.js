import express from 'express';
import * as userController from '../controllers/userController.js';
const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:_id', userController.getUsersById);

router.put('/users/name/:name', userController.setNameuser);
// router.put('/users/email/:email', userController);
router.put('/users/password', userController.setPassworduser);

export default router; 