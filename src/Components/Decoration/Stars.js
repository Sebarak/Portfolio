import {useEffect, useState} from "react";


const Stars = () =>{
    const [stars,setStars] = useState([]);

    useEffect(() => {

            for (let i = 0; i < 800; i++) {
                setStars(prev => [...prev, i]);
            }

        },
        []);
    return(
        <section className='stars'>
            {stars.map(el=>(
                    <div className="star" key={el} />
                ))}
        </section>
    )
}

export {Stars}