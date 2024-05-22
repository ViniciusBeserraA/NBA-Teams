import {consulta} from '../database/connection.js'

class TeamRepository {
   
    findAll(){
        const sql = "SELECT * FROM teams"
        return consulta(sql, 'Não foi possível buscar')
    }

    findById(id){
        const sql = "SELECT * FROM teams where id=?"
        return consulta(sql, id, 'Não foi possível buscar')
    }

    create(team){
        const sql = "INSERT INTO teams SET ?"
        return consulta(sql, team, 'Não foi possível criar')
    }

    update(team, id){
        const sql = "UPDATE teams SET ? WHERE id=?"
        return consulta(sql, [team, id], 'Não foi possível atualizar')
    }
    

    delete(id){
        const sql = "DELETE FROM teams where id=?"
        return consulta(sql, id, 'Não foi possível excluir registro')
    }
}

export default new TeamRepository