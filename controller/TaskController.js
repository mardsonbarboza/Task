const Task = require('../model/Task');
const momenet = require('moment');
class TaskController{
    async create(req,res){
        try {
            var {name,description} = req.body;
            var created_at = momenet().toDate();
            await Task.createTask(name,description,created_at);
            return res.status(200).json({msg: 'Tarefa criada com sucesso'});
        } catch (error) {
            return res.status(500).json({msg: 'problema ao criar task'});
        }
    }
    async findAllTask(req,res){
        try {
            var task = await Task.findAll();
            return res.status(200).json(task);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
    async deleteTask(req,res){
        var id = req.params.id;
        try {
            await Task.delete(id);
            return res.status(200).json({msg:'Tarefa deletada com sucesso'});
        } catch (error) {
            return res.status(400).json({msg:'Erro ao deletar a tarefa',error:error});
        }
    }
    async updateTask(req,res){
        var id = req.params.id;
        var {name,description} = req.body;
        var upadated_at = momenet().toDate();
        try {
            await Task.upadate(id,name,description,upadated_at);
            return res.status(200).json({msg:'Tarefa atualizada com sucesso'});
        } catch (error) {
            return res.status(400).json({msg:'Erro ao atualizar a tarefa',error:error});
        }
    }
    async status(req,res){
        var id = req.params.id;
        var status = req.body.id;
        try {
            await Task.upadateStatus(id,status);
            if (status === 'concluida') {
                return res.status(200).json({msg:'Tarefa concluida'})
            }
            if(status === 'pendente') {
                return res.status(200).json({msg:'Tarefa pendente'})
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    }
    async findStatus(req,res){
        var status = req.params.status;
        try {
            var finded = await Task.findByStatus(status);
            return res.status(200).json(finded);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = new TaskController();