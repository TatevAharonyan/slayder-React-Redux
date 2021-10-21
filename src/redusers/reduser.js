import { SET_CHOOSE } from "../constatn/constatnt";

const initialState = {
    imgArr: [
        {
            id: 1,
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/800px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg",
            history: "Colosseo (Rome, Italy, 72-80 years, height 48m)",
        },
        {
            id: 2,
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/The_Great_Wall_of_China_at_Jinshanling.jpg/1024px-The_Great_Wall_of_China_at_Jinshanling.jpg",
            history: "Great Wall of China (China, 3rd century BC e, Size	21.196km, height 5-8 m)",
        },
        {
            id: 3,
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg/800px-Machu_Picchu%2C_Peru_%282018%29.jpg",
            history: "Machu Picchu (Cuzco Region, Peru, founded 1450 year, destroyed 1572year, UNESCO world heritage)",
        },
        {
            id: 4,
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Petra_Jordan_BW_37.JPG/800px-Petra_Jordan_BW_37.JPG",
            history: "Petra (Jordan, ancient city, built	possibly as early as 5th century BC, area	264 square km)",
        },
        {
            id: 5,
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Taj_Mahal_in_March_2004.jpg/728px-Taj_Mahal_in_March_2004.jpg",
            history: "Taj Mahal (Agra, Uttar Pradesh, India, Built	1632–53 years, height 73m, area	17 hectares)",
        },
        {
            id: 6,
            img: "https://www.atlantic.lv/uploads/tour/276f53549392b318edc1a22bf1511eb3.jpg",
            history: "Christ the Redeemer (Rio de Janeiro, Brazil, founded 1920 year, width	28 m, Height	30 m (38m with its pedestal))",
        },
        {
            id: 7,
            img: "https://cdn-imgix.headout.com/tour/24016/TOUR-IMAGE/1bc2b81d-5a1b-4e14-9b16-c366e5fc823b-12516-cancun-early-access--chiche-n-itza--archaeological-site-skip-the-line-guided-tour-05.jpg?auto=compress&fm=pjpg&w=1080&h=675&crop=faces&fit=min",
            history: "Chichen Itza (Mexico Yucatan, Mexico, founded around 455 year, destroyed 1178 year,  UNESCO world heritage)",
        },
    ],
    imagNamber: 0,
}
export const reduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHOOSE:
            return {
                ...state,
                imagNamber: action.value,
            }
        default:
            return state;
    }
}