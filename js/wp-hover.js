// JavaScript for image switching
document.addEventListener('DOMContentLoaded', function () {
    // Get all accordion items
    const accordionItems = document.querySelectorAll('.accordion-item');
    // Get the image element
    const projectImage = document.querySelector('.project-img img');
    // Store the default image src
    const defaultImageSrc = projectImage.src;

    // Add event listeners to each accordion item
    accordionItems.forEach(item => {
        // Mouse enter event - change the image
        item.addEventListener('mouseenter', function () {
            // Get the image path from the data attribute
            const imageSrc = this.getAttribute('data-image');

            if (imageSrc) {
                // Add fade out class
                projectImage.classList.add('image-fade');

                // After a small delay, change the image and fade it back in
                setTimeout(() => {
                    projectImage.src = imageSrc;
                    projectImage.classList.remove('image-fade');
                }, 300);
            }
        });

        // Optional: Mouse leave event - revert to default image
        item.addEventListener('mouseleave', function () {
            // Only add this if you want to revert to a default image when not hovering
            // Otherwise, the last hovered image will remain

            // Uncomment the lines below if you want to revert to default
            /*
            projectImage.classList.add('image-fade');
            setTimeout(() => {
                projectImage.src = defaultImageSrc;
                projectImage.classList.remove('image-fade');
            }, 300);
            */
        });
    });
});