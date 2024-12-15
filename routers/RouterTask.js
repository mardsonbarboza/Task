const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Gerenciamento de tarefas
 */

/**
 * @swagger
 * /task:
 *   post:
 *     summary: Cria uma nova tarefa
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: O título da tarefa.
 *               description:
 *                 type: string
 *                 description: A descrição da tarefa.
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso.
 *       400:
 *         description: Erro na criação da tarefa.
 */
router.post('/task', TaskController.create);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Lista todas as tarefas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tarefas retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID da tarefa.
 *                   title:
 *                     type: string
 *                     description: O título da tarefa.
 *                   description:
 *                     type: string
 *                     description: A descrição da tarefa.
 *                   status:
 *                     type: string
 *                     description: Status da tarefa.
 */
router.get('/tasks', TaskController.findAllTask);

/**
 * @swagger
 * /task/{id}:
 *   put:
 *     summary: Atualiza uma tarefa existente
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: O título da tarefa.
 *               description:
 *                 type: string
 *                 description: A descrição da tarefa.
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso.
 *       404:
 *         description: Tarefa não encontrada.
 */
router.put('/task/:id', TaskController.updateTask);

/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Deleta uma tarefa
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa.
 *     responses:
 *       200:
 *         description: Tarefa deletada com sucesso.
 *       404:
 *         description: Tarefa não encontrada.
 */
router.delete('/task/:id', TaskController.deleteTask);

/**
 * @swagger
 * /task/{id}:
 *   patch:
 *     summary: Atualiza o status de uma tarefa
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da tarefa.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Novo status da tarefa.
 *     responses:
 *       200:
 *         description: Status da tarefa atualizado com sucesso.
 *       404:
 *         description: Tarefa não encontrada.
 */
router.patch('/task/:id', TaskController.status);

/**
 * @swagger
 * /task/{status}:
 *   get:
 *     summary: Lista todas as tarefas por status
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: status
 *         required: true
 *         schema:
 *           type: string
 *         description: O status das tarefas a serem listadas.
 *     responses:
 *       200:
 *         description: Lista de tarefas filtrada pelo status retornada com sucesso.
 *       404:
 *         description: Nenhuma tarefa encontrada para o status fornecido.
 */
router.get('/task/:status', TaskController.findStatus);

module.exports = router;
