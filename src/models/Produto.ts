import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
  id: number;
  name: string;
  description: string;
  category?: Categoria | null;
  user?: Usuario | null;
  price: number;
  image_url: string;
  data?: string | number | Date;
}
