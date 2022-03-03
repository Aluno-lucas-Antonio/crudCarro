import { Conexao } from "./conexao";
var db=null
var atualizar=0

export default class DatabaseInit{
    constructor(){
        db=Conexao.getConnection()
        db.exec([{sql:'PRAGMA foreign_keys=ON;',args:[]}],false,() =>
        console.log('Chaves Estrangeiras ligadas')
        );
        this.InitDb() 
    }
    private InitDb(){
        if(atualizar==1){
            var sql=[
                `DROP TABLE IF EXISTS contato:` ,
                `create table if not exists contato(
                    id integer primery key autoincrement,
                    nome Text,
                    proprietario Text,
                    placa Text,
                    ano integer,
                    marca Text
                    );`
            ];
            }
            else{
                var sql =[
               // `DROP TABLE IF EXISTS contato:` ,
                `create table if not exists contato(
                    id integer primery key autoincrement,
                    nome Text,
                    proprietario Text,
                    placa Text,
                    ano integer,
                    marca text);`
                ]
            }
            db.transaction(
                tx => {
                    for(var i = 0; i < sql.length ; i++){
                        console.log("execute sql: " + sql[i]);
                        tx.executeSql(sql[i]);
                    }
                },
                (error)=>{
                    console.log("erro "+JSON.stringify(error));
                    console.log(error);
                },() =>{
                      console.log("transaction complete callback");
            }
            );
            
        }
    }
