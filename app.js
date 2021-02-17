// y: negativo va arriba y positivo va abajo
// autoRotate: hace que el objeto que es animado se vaya rotando y tenga mas fluidez en la animación
const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 100, y: -20 },
        { x: 300, y: 10 },
        { x: 500, y: 100 },
        { x: 750, y: -100 },
        { x: 350, y: -50 },
        { x: 600, y: 100 },
        { x: 800, y: 0 },
        { x: window.innerWidth, y: -250 },
    ],
};

const tween = new TimelineLite();

// El segundo parametro es duration en este caso 1s
tween.add(
    TweenLite.to('.paper-plane', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);




// ScrollMagic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        triggerElement: '.animation',
        duration: 1000,
        triggerHook: 0,
    })
    .setTween(tween)
    .addIndicators()
    .setPin('.animation') // Hace que se quede en la pagina en este caso donde tenemos la animación
    .addTo(controller);