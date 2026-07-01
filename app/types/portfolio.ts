export interface Portfolio {
    id:number
    slug:string
    title:string
    description:string
    icon:string
    color:string
    cover:string
    projectCount?:number
}

export interface Project {
    id: number
    portfolio: string
    slug: string
    title: string
    subtitle: string
    description: string
    cover: string
    type: string
    technologies: string[]
    uploadedAt: string
    featured: boolean
}