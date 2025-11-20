import { imagesData } from "../data/images";

export function createImageCard(image, onImageClick, onFavoriteToggle) {

    let isFav = image.isFavourite ?? false;

    const card = document.createElement("div");
    card.className =
        "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group relative";
    card.dataset.imageId = image.id;

    // Imagen
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.title;
    img.className = "w-full h-64 object-cover group-hover:opacity-90 transition-opacity";
    card.appendChild(img);

    // ❤️ Botón de favorito
    const favBtn = document.createElement("button");
    favBtn.className =
        "absolute top-2 right-2 text-white text-xl p-2 bg-black bg-opacity-40 rounded-full";
    favBtn.innerHTML = isFav ? "❤️" : "🤍";
    favBtn.onclick = (e) => {
        e.stopPropagation(); // NO abrir modal
        isFav = !isFav;
        favBtn.innerHTML = isFav ? "❤️" : "🤍";
        if (onFavoriteToggle) onFavoriteToggle(image, isFav);
    };
    card.appendChild(favBtn);

    // Información
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

    card.appendChild(infoContainer);

    // Evento click para abrir modal
    card.onclick = () => {
        if (onImageClick) onImageClick(image);
    };

    // 🔥 Retornar API pública
    return {
        element: card,
        isFavourite: () => isFav,
        setFavourite: (value) => {
            isFav = value;
            favBtn.innerHTML = isFav ? "❤️" : "🤍";
        }
    };
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


