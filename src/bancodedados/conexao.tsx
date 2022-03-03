import * as SQlite from 'expo-sqlite';
export const Conexao={
    getConnection:()=>SQlite.openDatabase("bancodoCarro.db"),
};