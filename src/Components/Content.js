import React, { useEffect, useState } from 'react';

import '../Styles/content.css';
import CreationCard from './CreationCard'

import img1 from '../Images/desktop/image-deep-earth.jpg';
import img2 from '../Images/desktop/image-night-arcade.jpg';
import img3 from '../Images/desktop/image-soccer-team.jpg';
import img4 from '../Images/desktop/image-grid.jpg';
import img5 from '../Images/desktop/image-from-above.jpg';
import img6 from '../Images/desktop/image-pocket-borealis.jpg';
import img7 from '../Images/desktop/image-curiosity.jpg';
import img8 from '../Images/desktop/image-fisheye.jpg';

function Content(props) {
    const [studioData, setStudioData] = useState([]);

    const creationData = [
        {title: "DEEP EARTH", imgLink: img1},
        {title: "NIGHT ARCADE", imgLink: img2},
        {title: "SOCCER TEAM VR", imgLink: img3},
        {title: "THE GRID", imgLink: img4},
        {title: "FROM UP ABOVE VR", imgLink: img5},
        {title: "POCKET BOREALIS", imgLink: img6},
        {title: "THE CURIOSITY", imgLink: img7},
        {title: "MAKE IT FISHEYE", imgLink: img8}
    ];

    const loopStudiosData = ()=>{
         setStudioData(creationData)
    }
    useEffect(()=>{
        loopStudiosData();
    }, [])
    
    return (
        <div className="content">
            <div className="part1">
                <div>
                    <h3 className="fw-normal" >THE LEADER IN<br/> INTERACTIVE VR</h3>
                    <p className="mt-4">Founded in 2011, Loopstudios has been producing world-class virtual reality 
                        projects for some of the best companies around the globe. Our award-winning 
                        creations have transformed businesses through digital experiences that bind 
                        to their brand.
                    </p>
                </div>
            </div>
            <div className="part2 mt-5">
                <div className="our-creation">
                    <h3>OUR CREATIONS</h3>
                    <button type="button" className="btn btn-outline-dark px-4 py-1" id="see-all">SEE ALL</button>    
                </div>
                
                <div className="row card-list">
                        {studioData.map((item, index)=> {
                            return <CreationCard className="col-1 col-md-3" key={index} item={item}/>
                        })}
                </div>
                
            </div>
            
        </div>
    );
}

export default Content;