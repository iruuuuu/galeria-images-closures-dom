import { imagesData } from "../data/images";

export function createImageCard(image,onImageClick,onFavoriteToggle){
//    Contenedor principal
    const card = document.createElement("div");
    card.className = "bg-white rounded-lg shadow-md overflow-hidden, hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group relative";

    card.dataset.imageId = image.id;

    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.title;
    img.className = "w-full h-64 object-cover group-hover:opacitiy-90 transition-opacity";
    //img.onerror = () =>
        //img.src = "aqui iria la url de una imagen que simbolice no disponible";

    card.appendChild(img);

    //gestionar el corazon de favorito


    //informacion de la imagen
    const infoContainer = document.createElement("div");
    infoContainer.className = "p-4 bg-white";

    const title = document.createElement("h3");
    title.className = "text-lg font-bold text-gray-800 mb-2";
    title.textContent = image.title;

    infoContainer.appendChild(title);

    const author = document.createElement("p");
    author.className = "font-semibold text-sm text-gray-600";
    author.textContent = `Realizado por: ${image.author}`;
    infoContainer.appendChild(author);

    //introducir en card toda la informacion
    card.appendChild(infoContainer);

    //evento de la tarjeta
    card.onclick=()=>{
        alert(image.id);
    };
    //retornar el componente
    return {
        element: card
        // xxxx aqui irian las funciones
        // isFavourite <-- es favorita la imagen
        //setFavourite<-- convertir favorita esta imagen
    }

}


export function createImageGrid(images, onImageClick, onFavoriteToggle) {

    //creamos un MAP privado que guarde todas las tarjetas
    const cards=new Map();

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";
    //creamos las tarjetas
    images.forEach(image => {
        const cardComponent = createImageCard(
            image, 
            onImageClick,
            onFavoriteToggle
        );
        cards.set(image.id,cardComponent);
        grid.appendChild(cardComponent.element);
    });
    return {element:grid};

}


