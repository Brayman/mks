const projectService = require("../services/project")

const proj = [
    {
        name: 'Hamburg',
        img: [
            '/img/storage1.jpg',
            '/img/storage2.jpg'
        ],
        preview_desc: "Unsere durchgeführten Arbeiten umfassten die Montage von Lagerregalen in einem neuen Lagergebäude sowie die Installation von Beleuchtungssteckdosen und Lichtschaltern in diesem neuen Bereich.",
        desc: "Unsere durchgeführten Arbeiten umfassten die Montage von Lagerregalen in einem neuen Lagergebäude sowie die Installation von Beleuchtungssteckdosen und Lichtschaltern in diesem neuen Bereich. Für die Montage der Lagerregale haben wir unser erfahrenes Team von Monteuren eingesetzt, die mit großer Sorgfalt und Präzision die Regale gemäß den spezifischen Anforderungen des Kunden aufgebaut haben. Die Montage erfolgte effizient und gewährleistete eine optimale Raumnutzung für die Lagerung verschiedener Produkte. Darüber hinaus haben wir auch die elektrische Infrastruktur des neuen Lagerbereichs installiert. Dies beinhaltete die fachgerechte Montage von Steckdosen für die Beleuchtung sowie die korrekte Positionierung der Lichtschalter, um eine komfortable und praktische Nutzung des Lagerbereichs zu gewährleisten. Unser Team arbeitete eng mit dem Kunden zusammen, um sicherzustellen, dass die Montage der Lagerregale und die Installation der elektrischen Komponenten den individuellen Anforderungen und Standards entsprachen. Mit unserer Fachkenntnis und unserem Engagement haben wir sichergestellt, dass das neue Lagergebäude optimal ausgestattet ist, um den Bedürfnissen des Kunden gerecht zu werden"
    },
    {
        name: 'Berlin',
        img: [
            '/img/lamp_roof.jpg',
        ]
    },
    {
        name: 'München',
        img: [
            '/img/empty_factory2.jpg',
        ]
    },
]

class projects {
    addProject = async (ctx) => {
        try {
            await projectService.addProject()
            ctx.status = 201
            ctx.body = { message: 'success!' }
        } catch (error) {
            ctx.status = 500

        }
    }
    editProject = async (ctx) => {

    }
    deleteProject = async (ctx) => {

    }
    getProject = async (ctx) => {
        try {
            const project = await projectService.getProject(ctx.params.id)
            ctx.status = 200
            ctx.body = project
        } catch (error) {
            ctx.status = 404
        }
    }
    getProjects = async (ctx) => {
        try {
            const projects = await projectService.getProjects()
            ctx.status = 200
            ctx.body = projects
        } catch (error) {
            ctx.status = 500
        }
    }
}

module.exports = new projects()