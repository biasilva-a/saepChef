import { usuarioRepository } from "../repositories/usuarioRepository.js";

export const usuarioController = {

  async login(req, res) {

    try {

      const { email, senha } = req.body;

      if (!email) {
        return res.status(400).json({
          erro: "E-mail inválido ou vazio."
        });
      }

      if (!senha) {
        return res.status(400).json({
          erro: "A senha é obrigatória e não pode estar vazia."
        });
      }

      const usuario = await usuarioRepository.login(email, senha);

      if (!usuario) {
        return res.status(404).json({
          erro: "Usuário não encontrado ou senha incorreta."
        });
      }

      return res.status(200).json({
        id: usuario.id,
        nome: usuario.nome,
        nome_usuario: usuario.nome_usuario,
        email: usuario.email,
        imagem_usuario: usuario.imagem_usuario,
        tipo: usuario.tipo
      });

    } catch (error) {

      console.error("Erro no login:", error);

      return res.status(500).json({
        erro: "Erro interno do servidor."
      });
    }
  },

  async getAllUsuarios(req, res) {

    try {

      const usuarios = await usuarioRepository.getAllUsuarios();

      return res.status(200).json(usuarios);

    } catch (error) {

      console.error("Erro ao buscar usuários:", error);

      return res.status(500).json({
        erro: "Erro interno do servidor."
      });
    }
  }
};