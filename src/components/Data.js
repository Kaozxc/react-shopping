import biden from '../images/biden.jpg';
import garmin from '../images/garmin.webp';
import gShock from '../images/g-shock.jpg';
import watchMe from '../images/watchme.webp';
import uniqid from "uniqid";

const data = {
    productItems: [
        {
            id: uniqid(),
            name: "Garmin Forerunner 245",
            price: 129,
            image: garmin,
        },
        {
            id: uniqid(),
            name: "Biden Quartz Watch",
            price: 204,
            image: biden,
        },
        {
            id: uniqid(),
            name: "Watch Me for girls",
            price: 100,
            image: watchMe,
        },
        {
            id: uniqid(),
            name: "Casio G-Shock",
            price: 400,
            image: gShock,
        },
    ],
};

export default data;