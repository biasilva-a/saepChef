import express from 'express';
import dotenv from 'dotenv';
import usuarioRoutes from '../routes/usuarioRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use(usuarioRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor BACKEND rodando na porta: ${PORT}...`);
});
