import {useEffect, useState} from "react";
import {Stars} from "./Decoration/Stars";
import {Asteroids} from "./Decoration/Asteroids";
let x = 0;
let y = 0;
let xShip = -50;
let yShip = -50;

const Space = () => {
    const [spaceSize,setSpaceSize] = useState([0,0]);


    useEffect(() => {
        const space = document.querySelector('.space');
        setSpaceSize([space.clientWidth, space.clientHeight]);
    },[]);

    useEffect(()=>{
        window.scrollTo((spaceSize[0]/2)-(window.innerWidth/2),(spaceSize[1]/2)-(window.innerHeight/2));
    },[spaceSize])

    const space = document.querySelector('.space');
    const ship = document.querySelector('.spaceship');
    if (space !== null) {
        let i = 20;

        window.addEventListener('keydown', event => {

            switch (event.key) {
                case 'a':
                case "ArrowLeft":
                    if (xShip > -50) {
                        xShip -= 20;
                        ship.style.transform = `translate(${xShip}%,${yShip}%)`;
                    }else{
                        if (space.getBoundingClientRect().left <= -20) {
                            x += 20;
                            space.style.transform = `translate(${x}px, ${y}px)`;
                            // if (i < 80) {
                            //     i += 20;
                            // }
                        } else {
                            if (ship.getBoundingClientRect().left > 10) {
                                xShip -= 20;
                                ship.style.transform = `translate(${xShip}%,${yShip}%)`;
                            }
                        }
                    }
                    break;
                case 'd':
                case "ArrowRight":
                    if (xShip < -50){
                        xShip += 20;
                        ship.style.transform = `translate(${xShip}%,${yShip}%)`;
                    }else {
                        if (space.getBoundingClientRect().right - window.innerWidth >= 20) {
                            x -= 20;
                            space.style.transform = `translate(${x}px, ${y}px)`;
                            // if (i < 80) {
                            //     i += 20;
                            // }
                        } else {
                            if (ship.getBoundingClientRect().right - window.innerWidth <-10) {
                                xShip += 20;
                                ship.style.transform = `translate(${xShip}%,${yShip}%)`;
                            }
                        }
                    }
                    break;
                case 'w':
                case "ArrowUp":
                    if (yShip > -50){
                        yShip -= 10;
                        ship.style.transform = `translate(${xShip}%,${yShip}%)`;
                    } else {
                        if (space.getBoundingClientRect().top <= -20) {
                            y+=20;
                            space.style.transform = `translate(${x}px, ${y}px)`;
                        } else {
                            if (ship.getBoundingClientRect().top > 10){
                                yShip -= 10;
                                ship.style.transform = `translate(${xShip}%,${yShip}%)`;
                            }
                        }
                    }
                    // if (i < 80) {
                    //     i += 20;
                    // }
                    break;
                case 's':
                case "ArrowDown":
                    if (yShip < -50){
                        yShip += 10;
                        ship.style.transform = `translate(${xShip}%,${yShip}%)`;
                    } else {
                        if (space.getBoundingClientRect().bottom - window.innerHeight >= 20) {
                            y-=20;
                            space.style.transform = `translate(${x}px, ${y}px)`;
                        } else {
                            if (ship.getBoundingClientRect().bottom - window.innerHeight < -10){
                                yShip += 10;
                                ship.style.transform = `translate(${xShip}%,${yShip}%)`;
                            }
                        }
                    }
                    // if (i < 80) {
                    //     i += 20;
                    // }
                    break;
            }
        });


        // window.addEventListener('keyup', e => {
        //
        //     switch (e.key) {
        //         case 'a':
        //         case "ArrowLeft":
        //             if (space.getBoundingClientRect().left < -20) {
        //                 x += i;
        //                 space.style.transform = `translate(${x}px, ${y}px)`;
        //                 i = 20;
        //             }else{
        //                 space.style.transform = `translate(${x-i-20}px, ${y}px)`;
        //                 x-=i-20;
        //             }
        //             break;
        //         case 'd':
        //         case "ArrowRight":
        //             x-=i;
        //             space.style.transform = `translate(${x}px, ${y}px)`;
        //             i = 20;
        //             break;
        //         case 'w':
        //         case "ArrowUp":
        //             y-=i;
        //             space.style.transform = `translate(${x}px, ${y}px)`;
        //             i = 20;
        //             break;
        //         case 's':
        //         case "ArrowDown":
        //             y+=i;
        //             space.style.transform = `translate(${x}px, ${y}px)`;
        //             i = 20;
        //             break;
        //     }
        // });
    }
    return(
        <>
            <main className='space'>
                <Stars />
                <Asteroids />
            </main>
        </>
    )
}



export {Space}