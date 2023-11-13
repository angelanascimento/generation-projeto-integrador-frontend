import Produto from "./Produto";

export default interface Usuario {
    id: bigint;
    cpf: string;
    cnpj: string;
    cep: String;
    name: string;
    about: string;
    gender: string;
    ethnicity: string;
    born: string;
    url: string;
    type: string;
    email: string;
    password: string;
    token: string;
    created_at: string;
    products: Produto | null;
}