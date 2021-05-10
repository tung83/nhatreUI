import { ImageSharp } from './image-sharp.interface';

export interface TextBlock {
    id: any;
    title?: string;
    subtitle?: string;
    body?: string;
    media?: ImageSharp;
    svg1?: string;
    svg2?: string;
}
