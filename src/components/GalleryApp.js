import { imagesData } from "../data/images";
import { createImageGrid } from "./ImageCard";

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

    //contador de favoritos
    const counterComponent = document.createElement("h2")
    counterComponent.textContent="<-- aqui ira el componente FavouritesCounter-->"

    //modal de imagen

    const imageModal= document.createElement("h2")
    imageModal.textContent="<-- aqui ira el componente ImageModal-->"

    //grid de imagenes

    const gridComponent = document.createElement("h2")
    gridComponent.textContent=
    "<-- aqui ira el componente gridComponent-->"
    // const imageGrid= createImageGrid();
    const imageComponent = createImageGrid(imagesData);
    
    main.appendChild(imageComponent.element);



    //añadimos  todo al main

    main.appendChild(counterComponent)
    main.appendChild(imageModal)
    main.appendChild(gridComponent)



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







    return {
        element: container,

    }
}