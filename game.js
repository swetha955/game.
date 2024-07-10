const imageSources = [
    'imagesnew1.png', 'imagesnew3.jpeg', 'imagenew2.jpeg', 'imagenew4.jpeg', 
        'imagenew5.jpeg', 'imagesnew6.jpeg', 'imagesnew7.jpeg', 'imagesnew8.jpeg', 
        'imagesnew9.jpeg', 'imagesnew10.jpeg'
    ];

    function changeBackgroundImage() {
        const randomIndex = Math.floor(Math.random() * imageSources.length);
        document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
    }

    // Change the background image every 5 seconds (1000 milliseconds)
    setInterval(changeBackgroundImage, 1000);