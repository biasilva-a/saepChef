import { usuarioRepository } from "../repositories/usuarioRepository.js";

export const usuarioController = {
    async registro(req, res) {
        try {
            const { id_usuario, nome, nome_usuario, email, senha, imagem_usuario, tipo } = req.body;

            if (!id_usuario || !nome || !nome_usuario || !email || !senha || !imagem_usuario || !tipo) {
                return res.status(400).json({ erro: "Todos os campos (incluindo id_usuario) são obrigatórios." });
            }

            const usuarioExiste = await usuarioRepository.getByEmail(email);
            if (usuarioExiste) {
                return res.status(400).json({ erro: "E-mail já cadastrado." });
            }

            const novoUsuario = await usuarioRepository.create({
                id_usuario,
                nome,
                nome_usuario,
                email,
                senha,
                imagem_usuario,
                tipo
            });

            return res.status(201).json(novoUsuario);
        } catch (error) {
            console.error("Erro no registro:", error);
            return res.status(500).json({ erro: "Erro interno do servidor." });
        }
    },

    async login(req, res) {
        try {
            const { email, senha } = req.body;

            if (!email || !senha) {
                return res.status(400).json({ erro: "E-mail e senha são obrigatórios." });
            }

            const usuario = await usuarioRepository.getByEmail(email);

            if (!usuario || String(usuario.senha).trim() !== String(senha).trim()) {
                return res.status(401).json({ erro: "Credenciais inválidas." });
            }

            delete usuario.senha;
            return res.status(200).json({ mensagem: "Login realizado com sucesso", usuario });
        } catch (error) {
            console.error("Erro no login:", error);
            return res.status(500).json({ erro: "Erro interno do servidor." });
        }
    },

    async getAllUsuarios(req, res) {
        try {
            const usuarios = await usuarioRepository.getAll();
            return res.status(200).json(usuarios);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            return res.status(500).json({ erro: "Erro interno do servidor." });
        }
    }
};