export interface StrapiModelAuthor {
    firstname: string;
    lastname: string;
}

export interface StrapiModelBase {
    id: number;
    created_by: StrapiModelAuthor;
    updated_by: StrapiModelAuthor;
    created_at: Date;
    update_at: Date;
    published_at?: Date;
}
