import Produto from "./Produto";

export default interface Usuario {
    id: number,
    cpf: string,
    cnpj: string,
    cep: string,
    name: string,
    about: string,
    gender: string,
    ethnicity: string,
    born: string,
    url: string,
    type: string,
    email: string,
    password?: string,
    created_at?: string,
    products?: Produto | null
 }