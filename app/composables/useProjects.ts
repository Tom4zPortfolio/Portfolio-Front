import type { Project } from "~/types/portfolio"

export const useProjects = () => {

    const projects: Project[] = [
        {
            id: 1,
            portfolio: "personal",
            slug: "portfolio-v3",
            title: "Portfolio V3",
            subtitle: "Mon portfolio personnel",
            description: "Développement complet sous Nuxt avec une identité visuelle moderne.",
            cover: "/images/projects/portfolio.webp",
            type: "Application Web",
            technologies: [
                "Nuxt",
                "Vue",
                "Tailwind"
            ],
            uploadedAt: "2025-06-12",
            featured: true
        },

        {
            id: 2,
            portfolio: "personal",
            slug: "task-manager",
            title: "Task Manager",
            subtitle: "Gestion collaborative",
            description: "Application de gestion de tâches avec authentification.",
            cover: "/images/projects/task.webp",
            type: "Application Web",
            technologies: [
                "Symfony",
                "Vue",
                "Docker"
            ],
            uploadedAt: "2025-03-21",
            featured: false
        }
    ]

    const getProjects = (portfolio: string) =>
        projects.filter(p => p.portfolio === portfolio)

    const getProject = (
        portfolio: string,
        slug: string
    ) =>

        projects.find(
            p =>
                p.portfolio === portfolio &&
                p.slug === slug
        )

    return {
        projects,
        getProjects,
        getProject
    }

}