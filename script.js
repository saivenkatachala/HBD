document.addEventListener("DOMContentLoaded", () => {
    const balloons = document.querySelectorAll(".balloon");
    balloons.forEach(balloon => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 60 + 40;
      balloon.style.left = `${x}vw`;
      balloon.style.top = `${y}vh`;
      balloon.style.width = `${size}px`;
      balloon.style.height = `${size * 1.33}px`;
    });
  
    // Create floating images
    const floatingImagesContainer = document.getElementById("floating-images-container");
    const images = ['deeku1.jpg', 'deeku.jpg', 'd1.jpg', 'deeku2.jpg', 'deeku5.jpg']; // Add more images as needed
    for (let i = 0; i < 15; i++) { // Adjust number for more or fewer images
      const image = document.createElement("div");
      image.classList.add("floating-image");
      image.style.backgroundImage = `url('${images[Math.floor(Math.random() * images.length)]}')`;
      image.style.left = `${Math.random() * 100}vw`;
      image.style.top = `${Math.random() * 100}vh`;
      image.style.width = `${Math.random() * 150 + 100}px`;
      image.style.height = `${Math.random() * 150 + 100}px`;
      // Add random animation duration and delay
      const duration = Math.random() * 20 + 10; // Between 10s and 30s
      const delay = Math.random() * 10; // Between 0s and 10s
      image.style.animationDuration = `${duration}s`;
      image.style.animationDelay = `-${delay}s`;
      floatingImagesContainer.appendChild(image);
    }
  
    // Create party popups
    const popupContainer = document.getElementById("popups-container");
    for (let i = 0; i < 10; i++) {
      const popup = document.createElement("div");
      popup.classList.add("popup");
      popup.style.left = `${Math.random() * 100}vw`;
      popup.style.top = `${Math.random() * 100}vh`;
      popupContainer.appendChild(popup);
    }
    
  });
  