import type { Portfolio } from "~/types/portfolio"

export const usePortfolios = () => {

    const portfolios: Portfolio[] = [

        {
            id: 1,
            slug: "personal",
            title: "Personnel",
            description: "Mes projets personnels et expérimentations.",
            icon: "ph:user-bold",
            color: "from-violet-500 to-purple-600",
            cover: "/images/portfolio/personal.jpg"
        },

        {
            id: 2,
            slug: "electronic",
            title: "Électronique",
            description: "IoT, Arduino et électronique.",
            icon: "ph:cpu-bold",
            color: "from-blue-500 to-indigo-600",
            cover: "/images/portfolio/electronic.jpg"
        },

        {
            id: 3,
            slug: "bts",
            title: "BTS",
            description: "Mes projets de BTS SIO.",
            icon: "ph:code-bold",
            color: "from-emerald-500 to-teal-600",
            cover: "/images/portfolio/bts.jpg"
        },

        {
            id: 4,
            slug: "bac4",
            title: "BAC+4",
            description: "Conception d'applications avancées.",
            icon: "ph:rocket-launch-bold",
            color: "from-orange-500 to-red-600",
            cover: "/images/portfolio/bac4.jpg"
        }

    ]

    const getPortfolio = (slug: string) =>
        portfolios.find(p => p.slug === slug)

    return {

        portfolios,

        getPortfolio

    }

}