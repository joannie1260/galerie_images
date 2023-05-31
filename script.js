
// Récupérer le conteneur du carrousel, les boutons de navigation et le formulaire d'ajout manuel
const carousel = document.querySelector('.carousel');
const prevButton = carousel.querySelector('.prev-button');
const nextButton = carousel.querySelector('.next-button');
const manualForm = document.querySelector('.manual-form');
const addButton = manualForm.querySelector('.add-button');
const urlInput = manualForm.querySelector('.url-input');

// Récupérer les images depuis l'URL (initial)
const imageURLs = [
  'https://images.pexels.com/photos/4113353/pexels-photo-4113353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/7131703/pexels-photo-7131703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/4113353/pexels-photo-4113353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',


];

// Fonction pour créer les éléments d'image et les ajouter au carrousel
function createCarouselImages() {
  const carouselImagesContainer = carousel.querySelector('.carousel-images');

  // Parcourir les URL d'images et créer les éléments d'image correspondants
  for (let i = 0; i < imageURLs.length; i++) {
    const image = document.createElement('img');
    image.src = imageURLs[i];
    image.alt = 'Image ' + (i + 1);

    // Ajouter chaque image au conteneur du carrousel
    carouselImagesContainer.appendChild(image);
  }
}


// Fonction pour ajouter manuellement une URL au carrousel
function addManualURL() {
  const url = urlInput.value.trim();

  if (url !== '') {
    imageURLs.push(url);

    const newImage = document.createElement('img');
    newImage.src = url;
    newImage.alt = 'Image ' + (imageURLs.length);

    carousel.querySelector('.carousel-images').appendChild(newImage);

    urlInput.value = '';
  }
}



// Ajouter un écouteur d'événement au bouton "Ajouter"
addButton.addEventListener('click', addManualURL);

// Créer les éléments d'image et les ajouter au carrousel
createCarouselImages();
