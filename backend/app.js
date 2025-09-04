import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'user System API',
      version: '1.0.1',
      description: 'API para gerenciamento de usuários ',
    },
    servers: [
      { url: process.env.SERVER },
    ],
  },
  apis: ['./docs/*.js'],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config(); 

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use('/api', userRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api-docs.json', (req, res) => {
  res.json(swaggerDocs);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
