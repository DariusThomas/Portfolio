const pages = [
    {
        id: 0,
        title: "My Projects",
        route: "my-projects"
    },
    {
        id: 1,
        title: "About Me",
        route: "about-me"
    },
    {
        id: 2,
        title: "Contact Me",
        route: "contact-me"
    },
]

interface pageinfo {
    id: number,
    title: string,
    route: string
}
export {
    pages,
    pageinfo
}