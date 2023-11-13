import Produto from "./Produto";

export default interface Categoria {
    id: bigint;
    name: string;
    description: string;
    products: Produto | null;
}