/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Rotas de gerenciamento de usuários
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Cria um ou mais usuários
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             oneOf:
 *               - type: object
 *                 required:
 *                   - name
 *                   - email
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "Wandrey"
 *                   email:
 *                     type: string
 *                     example: "wand@example.com"
 *               - type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - name
 *                     - email
 *                   properties:
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *     responses:
 *       201:
 *         description: Usuário(s) criado(s) com sucesso
 *       400:
 *         description: Erro ao criar usuário(s)
 */

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Registra um novo usuário com senha
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Wandrey"
 *               email:
 *                 type: string
 *                 example: "wand@example.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Dados inválidos
 *       409:
 *         description: Email já em uso
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Faz login do usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: "wand@example.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 * 
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       400:
 *         description: Email ou senha ausentes
 *       401:
 *         description: Senha incorreta
 *       404:
 *         description: Usuário não encontrado
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lista todos os usuários, com filtro opcional por name ou email
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtra usuários pelo nome (case-insensitive)
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: Filtra usuários pelo email
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *       400:
 *         description: Erro ao buscar usuários
 */

/**
 * @swagger
 * /api/users/{_id}:
 *   get:
 *     summary: Busca um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Usuário não encontrado
 */

/**
 * @swagger
 * /api/users/name/{name}:
 *   put:
 *     summary: Busca usuários pelo nome (case-insensitive)
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Nome a ser buscado
 *     responses:
 *       200:
 *         description: Usuários encontrados
 *       400:
 *         description: Erro ao buscar usuários
 */

/**
 * @swagger
 * /api/users/password:
 *   patch:
 *     summary: Atualiza a senha de um usuário pelo email
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: "wand@example.com"
 *               password:
 *                 type: string
 *                 example: "novaSenha123"
 *     responses:
 *       200:
 *         description: Senha atualizada com sucesso
 *       400:
 *         description: Dados inválidos ou erro ao atualizar
 */

/**
 * @swagger
 * /api/users/{_id}:
 *   delete:
 *     summary: Deleta um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Usuário não encontrado
 */
