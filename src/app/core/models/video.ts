import { Votacion } from './votacion';
import { Comentario } from './comentario';
import { Categoria } from './categoria';

export interface Video {
  id: number;
  titulo: string;
  sinopsis: string;
  fechaCreacion: string;
  urlImagen: string;
  urlVideo: string;
  urlGif: string;
  categoriaId: number;
  categoria: Categoria;
  comentarios?: (Comentario)[] | null;
  votaciones?: (Votacion)[] | null;
}