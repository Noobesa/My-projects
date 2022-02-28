import React, { useState } from 'react';
import './movieRow.css';

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);
    const handLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    const handRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x) 
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--right" onClick={handRightArrow}>
                <h2><i class="fa-solid fa-angle-right" style={{fontSize: 50}}></i></h2>
            </div>
            <div className="movieRow--left" onClick={handLeftArrow}>
                <h2><i class="fa-solid fa-angle-left" style={{fontSize: 50}}></i></h2>
            </div>

            <div className="movieRow__listarea">
                <div className="movieRow__list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow__item">
                            <img src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div> /* movieRow__item */                 
                    ))}
                </div> {/* movieRow__list */} 
            </div> {/* movieRow__listarea */} 
        </div>/* movieRow  */
    );
}