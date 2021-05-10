export interface GqlCollectionNode<T> {
    node: T;
}

export interface GqlCollection<T> {
    edges: GqlCollectionNode<T>[];
}
