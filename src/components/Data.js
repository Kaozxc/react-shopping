import MORTY from '../images/MORTY.png'
import RICK from '../images/RICK.png';
import BETH from '../images/BETH.png';
import JERRY from '../images/JERRY.png';
import uniqid from "uniqid";

const data = {
    productItems: [
        {
            id: uniqid(),
            name: "New Morty",
            price: 999,
            image: MORTY,
        },
        {
            id: uniqid(),
            name: "Used Rick",
            price: 444,
            image: RICK,
        },
        {
            id: uniqid(),
            name: "Very Used Beth",
            price: 555,
            image: BETH,
        },
        {
            id: uniqid(),
            name: "Broken Jerry",
            price: 111,
            image: JERRY,
        },
    ],
};

export default data;