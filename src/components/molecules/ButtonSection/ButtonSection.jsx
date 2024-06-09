import React from 'react';
import Image from '../../atoms/Image/Image';
import C1 from "../../assets/C1.png"
import C2 from "../../assets/C2.png"
import C3 from "../../assets/C3.png"
import C4 from "../../assets/C4.png"
import C5 from "../../assets/C5.png"
import C6 from "../../assets/C6.png"
import C7 from "../../assets/C7.png"
import './ButtonSection.css';

const ButtonSection = () => {
    return (
        <div className="buttons-section">
            <div className="div-buttonSection">
                <Image src={C4} alt="Seção 1" />
            </div>
            <div className="div-buttonSection">
                <Image src={C6} alt="Seção 2" />
            </div>
            <div className="div-buttonSection">
                <Image src={C1} alt="Seção 3" />
            </div>
            <div className="div-buttonSection">
                <Image src={C7} alt="Seção 4" />
            </div>
            <div className="div-buttonSection">
                <Image src={C2} alt="Seção 5" />
            </div>
            <div className="div-buttonSection">
                <Image src={C5} alt="Seção 6" />
            </div>
            <div className="div-buttonSection">
                <Image src={C3} alt="Seção 7" />
            </div>
        </div>
    );
};

export default ButtonSection;
