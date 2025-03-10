export interface User{
    id: string;
    user: string;
    email: string;
    password: string;
    cpf: string;
    birth_date?: Date;
    plan?: string;
}