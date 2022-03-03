import { Contato } from '../modelo/Carro'
import {Conexao} from '../bancodedados/conexao'

const table = "contato"
const db=Conexao.getConnection()

export default class contatoCliente {
     static addData(param: Contato) {
        return new Promise((resolve, reject) =>db.transaction(
            tx => {
                tx.executeSql(`insert into ${table} (nome,email,cpf,marca) 
                values (?,?,?,?,?)`, 
                [param.nome, param.placa, param.ano, param.marca,param.proprietario], 
                (_, { insertId, rows }) => {
                    console.log("id insert: " + insertId);
                    resolve(insertId)
                }), (sqlError) => {
                    console.log(sqlError);
                }}, (txError) => {
                console.log(txError);
            }));
    }

     static deleteById(id: number) {
        db.transaction(
            tx => {
                tx.executeSql(`delete from ${table} where id = ?;`, [id], (_, { rows }) => {
                }), (sqlError) => {
                    console.log(sqlError);
                }}, (txError) => {
                console.log(txError);
    
            });
    }


     static updateByObjeto(param: Contato) {
        return new Promise((resolve, reject) =>db.transaction(tx => {
                tx.executeSql(`update ${table} set nome = ? , placa = ? , ano = ?, marca = ? where id = ?;`, [param.nome,  param.placa, param.ano, param.marca, param.id], () => {
                }), (sqlError) => {
                    console.log(sqlError);
                }}, (txError) => {
                console.log(txError);
    
            }));
    }

     static findById(id: number) {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table} where id=?`, [id], (_, { rows }) => {
                resolve(rows)
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);

        }));
    }

      static findAll() {        
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
                resolve(rows)
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);
        }))


    }


}