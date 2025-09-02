import User from '../models/User.js';

export const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new User({ name, email });
        await newUser.save();
        res.status(201).json(newUser);

        const users = req.body; // espera um array de usuários
        const createdUsers = await User.insertMany(users); // insere todos de uma vez
        res.status(201).json(createdUsers);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar usuário', error });
    }
};
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao buscar usuários', error });
    }
};
export const getUsersByName = async (req, res) => {
    try {
        const { name } = req.params;
        const users = await User.find({ name: { $regex: name, $options: 'i' } }); // busca case-insensitive
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao buscar usuários por nome', error });
    }
};