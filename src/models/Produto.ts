import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
    id: bigint;
    name: string;
    description: string;
    category: Categoria | null;
    user: Usuario | null;
    price: number;
    img_url: string;
}