import React from 'react'
import './Disciplinas.css'
import img1 from "../../assets/imagenes/fotochiani.png";
import img2 from "../../assets/imagenes/contact-us.jpg";
import img3 from "../../assets/imagenes/imagen.png";
import img4 from "../../assets/imagenes/foto1.jpg";
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const Disciplinas = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{border:"solid 1px gold", padding: "20px", borderRadius:"20px"}}>

        <div className='card'>
            <div className='face front'>
                <img src={img1} alt="" />
                <h3>Hipnosis</h3>
            </div>
            <div className='face back'>
                <h3>Hipnosis</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla beatae facere adipisci sapiente, hic quibusdam sed earum minima, omnis accusantium ipsam aut voluptas ratione?</p>
            </div>
        </div>

        <div className='card'>
            <div className='face front'>
                <img src={img1} alt="" />
                <h3>Neurociencia</h3>
            </div>
            <div className='face back'>
                <h3>Neurociencia</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla beatae facere adipisci sapiente, hic quibusdam sed earum minima, omnis accusantium ipsam aut voluptas ratione?</p>
            </div>
        </div>

        <div className='card'>
            <div className='face front'>
                <img src={img1} alt="" />
                <h3>PNL</h3>
            </div>
            <div className='face back'>
                <h3>PNL</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla beatae facere adipisci sapiente, hic quibusdam sed earum minima, omnis accusantium ipsam aut voluptas ratione?</p>
            </div>
        </div>

        <div className='card'>
            <div className='face front'>
                <img src={img1} alt="" />
                <h3>Coaching</h3>
            </div>
            <div className='face back'>
                <h3>Coaching</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla beatae facere adipisci sapiente, hic quibusdam sed earum minima, omnis accusantium ipsam aut voluptas ratione?</p>
            </div>
        </div>
    </div>
)
}

export default Disciplinas