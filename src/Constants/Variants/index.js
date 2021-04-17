export const variantContainer = {
    hidden: {
        opacity: 0,
        y: '-100vh',
        scale: 0.5
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1  
    },
    exit:{
        opacity: 0,
        y: '-100vh',
        scale: 1.2
    }
}

export const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1
}


export const variantSVG = {
    hidden: {
        opacity: 0,
        y: '10vh'
    },
    show: {
        transition:{
            duration: 2
        },
        opacity: 1,
        y: '0'
    }
}