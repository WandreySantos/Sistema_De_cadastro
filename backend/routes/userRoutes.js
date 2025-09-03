import express from 'express';
import * as userController from '../controllers/userController.js';
const router = express.Router();

router.post('/users', userController.createUser);
router.post('/login', userController.LogineUser);
router.post('/register', userController.registerUser);

router.get('/users', userController.getUsers);
router.get('/users/:_id', userController.getUsersById);

router.put('/users/name/:name', userController.setNameuser);
// router.put('/users/email/:email', userController);

router.patch('/users/password', userController.setPassworduser);

router.delete('/users/:_id', userController.deleteUser);

export default router;
