export type Post = {
    id: String,
    title: string, 
    description: string,
    slug: string,
    createdAt: Date, 
    isReference: boolean
    deletedAt?: Date, 
    imageUrl?: string
}