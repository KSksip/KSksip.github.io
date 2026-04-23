type Tech = {
    [key: string]: {
        icon: string,
        name: string,
    }[]
}

export const tech: Tech = {
    Languages: [
        { 
            icon: "simple-icons:typescript",
            name: "Typescript",
        },
        {
            icon: "simple-icons:javascript",
            name: "Javascript",
        },
        { 
            icon: "simple-icons:html5",
            name: "HTML",
        },
        { 
            icon: "simple-icons:css3",
            name: "CSS",
        },
    ],


    Frameworks: [
        { 
            icon: "simple-icons:vuedotjs",
            name: "VueJS",
        },
        {
            icon: "game-icons:fox-tail",
            name: "ElysiaJS",
        },
        { 
            icon: "simple-icons:tailwindcss",
            name: "TailwindCSS",
        },
        {
            icon: "simple-icons:nuxt",
            name: "NuxtJS",
        },
    ],

    Database: [
        {
            icon: "simple-icons:drizzle",
            name: "Drizzle ORM"
        },
        {
            icon: "simple-icons:sqlite",
            name: "SQLite"  
        },
        {
            icon: "simple-icons:mariadb",
            name: "MariaDB"
        }
    ],

    Exploring: [
        {
            icon: "simple-icons:rust",
            name: "Rust",
        },
    ]
}