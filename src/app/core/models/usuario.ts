import { Deserializable } from './_deserializable';
import { Reproduccion } from './reproduccion';
import { Votacion } from './votacion';
import { Comentario } from './comentario';
import { Video } from './video';
import { Avatar } from './avatar';

export class Usuario implements Deserializable {
  id: number;
  email: string;
  password: string;
  confirmPassword: string;
  avatar: Avatar;
  videos: (Video)[] | null;
  comentarios: (Comentario)[] | null;
  votaciones: (Votacion)[] | null;
  reproducciones: (Reproduccion)[] | null;
  
  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

}