const knex = require('../database/connetion');

class Task{
    async findAll(){
        return await knex.select('*').table('tasks')
    }
    async findById(id){
        return await knex.select('*').where({id}).table('tasks');
    }
    async createTask(name,description,created_at){
        return await knex.insert(name,description,created_at).table('tasks');
    }
    async delete(id){
        return await knex.delete({id}).table('tasks');
    }
    async upadate(id,name,description,upadated_at){
        return await knex.update(name,description,upadated_at).where(id).table('tasks');
    }
    async upadateStatus(id,status){
        return await knex.update(status).where(id).table('tasks');
    }
    async findByStatus(status){
        return await knex.select('*').where({status:status}).table('tasks');
    }
}

module.exports = new Task();