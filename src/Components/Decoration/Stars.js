import {useEffect, useState} from "react";


const Stars = () =>{
    const [width,setWidth] = useState(0);
    const [height,setHeight] = useState(0);
    const [starsSizes,setStarsSizes] = useState([]);

    useEffect(() => {
            setWidth(document.querySelector('.space').clientWidth);
            setHeight(document.querySelector('.space').clientHeight);


            for (let i = 0; i < 500; i++) {
                setStarsSizes(prev => [...prev,(Math.floor(Math.random() * (10 - 5)) + 5)]);
            }

        },
        []);
    return(
        <section className='stars'>
            {starsSizes.map((el,id)=>{
                const style = {
                    top: Math.floor(Math.random() * (height - 10) + 10),
                    left: Math.floor(Math.random() * (width - 10) + 10),
                    width: el,
                    height: el,
                }
                return(
                    <div className="star" key={id} style={style}/>
                )
            })}
        </section>
    )
}

export {Stars}