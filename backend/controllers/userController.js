import mongoose from 'mongoose';
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
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: 'Nome, email e senha são obrigatórios' });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email já está em uso' });
    }
    const newUser = new User({ name, email, password });
    await newUser.save();
    res
      .status(201)
      .json({ message: 'Usuário registrado com sucesso', newUser });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar usuário', error });
  }
};
export const LogineUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email e senha são obrigatórios' });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: '❌ Senha incorreta' });
    }
    res.status(200).json({
      message: 'Login realizado com sucesso',
      user,
    });
  } catch (error) {
    res.status(400).json({ message: 'Erro no servidor', error });
  }
};
export const getUsers = async (req, res) => {
  try {
    const { name, email } = req.query;

    let filter = {};
    if (name) filter.name = { $regex: name, $options: 'i' }; // busca case-insensitive
    if (email) filter.email = email;

    const users = await User.find(filter);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao buscar usuários', error });
  }
};
export const getUsersById = async (req, res) => {
  try {
    const { _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({ message: 'ID de usuário inválido' });
    }
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Erro ao buscar usuários por nome', error });
  }
};

export const setNameuser = async (req, res) => {
  try {
    const { name } = req.params;
    const users = await User.find({ name: { $regex: name, $options: 'i' } }); // busca case-insensitive
    res.status(200).json(users);
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Erro ao buscar usuários por nome', error });
  }
};
export const setPassworduser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email e senha são obrigatórios' });
    }
    const user = await User.findOne({ email });
    user.password = password;
    await user.save();
    res.status(200).json({ message: 'Senha trocada', user });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao buscar usuários', error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({ message: 'ID de usuário inválido' });
    }
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.status(200).json({ message: 'Usuário deletado com sucesso', user });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao deletar usuário', error });
  }
};
