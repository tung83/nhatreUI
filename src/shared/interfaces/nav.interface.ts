import { ImageSharp } from '.';

export interface NavItem {
    id: any;
    title?: string;
    link: string;
    svg?: string;
    subTitle?: string;
    enabled?: boolean;
    icon: ImageSharp;
}

export interface NavNode {
    id: any;
    name?: string;
    is_button?: boolean;
    item: NavItem;
    children?: NavItem[];
}
