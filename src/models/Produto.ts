import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
  id: number;
  name: string;
  description: string;
  category: Categoria;
  user: Usuario;
  price: number;
  image_url: string;
  data?: string | number | Date;
}
