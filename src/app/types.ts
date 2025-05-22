export interface usuario{
    id:number;
    firstname:string,
    lastname:string,
    age:number,
    activo:boolean,
    loan?: loan[]
}

export interface loan{
    id:number,
    amount:number,
    interesRate:number,
    term:number,
    startDate:Date,
    endDate:Date,
    status:loanStatus
}

export type loanStatus='pendinete'|'aprovado'|'rechazado'|'pagado'