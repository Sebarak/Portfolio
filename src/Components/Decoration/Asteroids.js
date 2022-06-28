import {useEffect, useState} from "react";

const Asteroids = () => {
    const [asteroids,setAsteroids] = useState([]);

    useEffect(()=>{
        for (let i = 0; i < 100; i++){
            setAsteroids(prev => [...prev, i])
        }
    },[])

    return(
        <section className="asteroids">
            {asteroids.map(el=>(
                <div className="asteroid" key={el}/>
            ))}
        </section>
    )
}

export {Asteroids}