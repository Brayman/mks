import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        "id": 1,
        name: 'Hamburg',
        img: [
            '/img/storage1.jpg',
            '/img/storage2.jpg'
        ],
        preview_desc: "Unsere durchgeführten Arbeiten umfassten die Montage von Lagerregalen in einem neuen Lagergebäude sowie die Installation von Beleuchtungssteckdosen und Lichtschaltern in diesem neuen Bereich.",
        desc: "Unsere durchgeführten Arbeiten umfassten die Montage von Lagerregalen in einem neuen Lagergebäude sowie die Installation von Beleuchtungssteckdosen und Lichtschaltern in diesem neuen Bereich. Für die Montage der Lagerregale haben wir unser erfahrenes Team von Monteuren eingesetzt, die mit großer Sorgfalt und Präzision die Regale gemäß den spezifischen Anforderungen des Kunden aufgebaut haben. Die Montage erfolgte effizient und gewährleistete eine optimale Raumnutzung für die Lagerung verschiedener Produkte. Darüber hinaus haben wir auch die elektrische Infrastruktur des neuen Lagerbereichs installiert. Dies beinhaltete die fachgerechte Montage von Steckdosen für die Beleuchtung sowie die korrekte Positionierung der Lichtschalter, um eine komfortable und praktische Nutzung des Lagerbereichs zu gewährleisten. Unser Team arbeitete eng mit dem Kunden zusammen, um sicherzustellen, dass die Montage der Lagerregale und die Installation der elektrischen Komponenten den individuellen Anforderungen und Standards entsprachen. Mit unserer Fachkenntnis und unserem Engagement haben wir sichergestellt, dass das neue Lagergebäude optimal ausgestattet ist, um den Bedürfnissen des Kunden gerecht zu werden"
    },
    {
        "id": 2,
        name: 'Berlin',
        img: [
            '/img/lamp_roof.jpg',
        ]
    },
    {
        "id": 3,
        name: 'München',
        img: [
            '/img/empty_factory2.jpg',
        ]
    },
    {
        name: 'Köln',
        img: [
            '/img/factory1.jpg',
            '/img/factory2.jpg',
            '/img/factory3.jpg'
        ],
    },
    {
        name: 'Essen'
    },
    {
        name: 'Stuttgart'
    },
    {
        name: 'Duisburg'
    },
    {
        name: 'Dortmund'
    }
]


export const projects = state => state.projects

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action) => {
            state.projects.push(action.payload)
        }
    }
})

export const { addProject } = projectsSlice.actions

export default projectsSlice.reducer