
        // Select all heart buttons and icons
        const heartButtons = document.querySelectorAll('.heartBtn');
        
        heartButtons.forEach((heartBtn) => {
          heartBtn.addEventListener('click', function(event) {
           
    
            const heartIcon = this.querySelector('.heartIcon'); // Get the icon inside the clicked button
    
            // Toggle between regular (outline) and solid heart
            if (heartIcon.classList.contains('fa-regular')) {
              heartIcon.classList.remove('fa-regular');
              heartIcon.classList.add('fa-solid');
            } else {
              heartIcon.classList.remove('fa-solid');
              heartIcon.classList.add('fa-regular');
            }
          });
        });
    