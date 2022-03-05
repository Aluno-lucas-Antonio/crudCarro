export class Contato{
    constructor(){

    }
    public id : number;
    public nome : string;
    public proprietario : string;
    public placa : string;
    public ano : string;
    public marca : string;
     
    


    toString(){
        return this.id+''+this.nome+''+
        this.proprietario+''+this.placa+''+this.ano+''+this.marca;
    }
}