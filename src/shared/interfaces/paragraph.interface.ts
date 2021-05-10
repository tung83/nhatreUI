import { MediaExtra } from './media-extra.interface';

export interface Paragraph {
    id: number;
    body?: string;
    before_image?: MediaExtra;
    after_image?: MediaExtra;
}
