import { imagesData } from "../data/images";
import { createImageGrid } from "./ImageCard";
import { createFavouritesCounter } from "./FavouritesCounter";
import { createImageModal } from "./ImageModal";

export function createGalleryApp(){
    
    //contenedor principal
    const container = document.createElement("div");
    container.className='min-h-screen bg-linear-to-br from-purple-100 via-white to-pink-300'

    //header<-----------------------------------------------------
    const header = document.createElement("header")
    header.className="bg-white shadow-lg sticky top-0 z-40 "

    const headerContentDiv = document.createElement("div")
    headerContentDiv.className="max-w-7xl mx-auto px-6 py-6 text-center "

    const headerTitle= document.createElement("h1")
    headerTitle.className="text-3xl font-bold text-purple-800 mb-2"
    headerTitle.textContent = "🎨 Galeria de Imágenes"

    const headerSubtitle= document.createElement("p")
    headerSubtitle.className="text-gray-600"
    headerSubtitle.textContent = "Aprende Clousures, funciones fabrica y manipulación DOM "

    headerContentDiv.appendChild(headerTitle)
    headerContentDiv.appendChild(headerSubtitle)

    header.appendChild(headerContentDiv)


    //main<-------------------------------------------------------


    const main = document.createElement("main")
    main.className="max-w-7xl mx-auto px-6 py-8 text-center ";

    // Llevamos la cuenta de los favoritos aquí, en el componente padre.
    let favoritesCount = imagesData.filter(img => img.isFavourite).length;

    // Creamos el contador con el número inicial de favoritos.
    const counterComponent = createFavouritesCounter(favoritesCount);

    // Esta función se ejecutará cada vez que se haga clic en el corazón de una tarjeta.
    const handleFavoriteToggle = (image, isFav) => {
        // Actualizamos el contador. Si es favorito, sumamos 1; si no, restamos 1.
        favoritesCount = isFav ? favoritesCount + 1 : favoritesCount - 1;
        // Le pedimos al componente del contador que muestre el nuevo número.
        counterComponent.updateCount(favoritesCount);
    };

    const imageModalComponent = createImageModal();

    //añadimos  todo al main
    main.appendChild(counterComponent.element);

    // Ahora pasamos las 3 funciones que la rejilla necesita:
    // 1. Los datos, 2. Qué hacer al hacer clic en la imagen, 3. Qué hacer al marcar/desmarcar favorito.
    const imageGridComponent = createImageGrid(imagesData, imageModalComponent.open, handleFavoriteToggle);
    main.appendChild(imageGridComponent.element);



    //footer<-----------------------------------------------------

const footer =document.createElement("footer")
footer.className="bg-gray-900 text-white py-4 text-center"


const footerContentDiv = document.createElement("div")
footerContentDiv.className="max-w-7xl mx-auto px-6 text center"

const footerText = document.createElement("p")
footerText.className="text-gray-200"
footerText.innerHTML=`
Ejercicio DOM By Iruuu <br>
https://github.com/iruuuuu
`;
footerContentDiv.appendChild(footerText)
footer.appendChild(footerContentDiv)



    //Añadimos todo al container 
    container.appendChild(header)
    container.appendChild(main)
    container.appendChild(footer)

    container.appendChild(imageModalComponent.element);







    return {
        element: container,

    }
}