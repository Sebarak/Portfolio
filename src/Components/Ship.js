import {useEffect} from "react";

const Ship = () => {

    useEffect(() => {
        const ship = document.querySelector('.spaceship').getBoundingClientRect();
        const asteroids = document.querySelectorAll('.asteroid');

        asteroids.forEach(asteroid => {
            asteroid.getBoundingClientRect();
            console.log(asteroid);
        })
    },[])

    return <div className="spaceship" />
}

export {Ship}