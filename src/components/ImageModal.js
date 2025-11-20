export function createImageModal() {
    // Contenedor principal del modal (overlay)
    const modal = document.createElement("div");
    modal.id = "imageModal";
    modal.className =
        "hidden fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center transition-opacity duration-300";

    // Contenedor del contenido del modal
    const modalContent = document.createElement("div");
    modalContent.id = "modalContent";
    modalContent.className = "bg-white p-4 rounded-lg shadow-2xl max-w-3xl w-full relative";

    // Botón para cerrar
    const closeBtn = document.createElement("button");
    closeBtn.className = "absolute -top-4 -right-4 text-white bg-red-600 rounded-full w-10 h-10 text-2xl font-bold flex items-center justify-center hover:bg-red-800 transition-colors";
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = () => close();

    // Imagen que se mostrará en el modal
    const modalImage = document.createElement("img");
    modalImage.id = "modalImage";
    modalImage.className = "w-full h-auto max-h-[80vh] object-contain";

    // Ensamblamos el modal
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalImage);
    modal.appendChild(modalContent);

    // --- Lógica para abrir y cerrar ---

    function open(image) {
        modalImage.src = image.url;
        modalImage.alt = image.title;
        modal.classList.remove("hidden");
    }

    function close() {
        modal.classList.add("hidden");
    }

    // Evento para cerrar haciendo click fuera del contenido
    modal.addEventListener("click", (e) => {
        if (!modalContent.contains(e.target)) {
            close();
        }
    });

    // Evento para cerrar con la tecla ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
            close();
        }
    });

    // API pública del componente
    return {
        element: modal,
        open,
        close,
    };
}