import { menuImages } from "./data";

const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * menuImages.length);
    return menuImages[randomIndex];
};

const fetchRandomImage = async () => {
    try {
        const response = await fetch('https://foodish-api.com/api/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.image;
    } catch (error) {
        return getRandomImage();
    }
};

export { fetchRandomImage };