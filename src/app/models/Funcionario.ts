export interface Funcionario {
    id : string;
    nome: string;
    sobrenome : string;
    departamento : string;
    ativo : boolean;
    turno : string;
    dataDeCriacao : string;
    dataDeAlteracao? : string;

}