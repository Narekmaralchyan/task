import './style.css'
import image from './assets/image.svg'
export  default function Footer(){
    return <div id="footer">
        <div>
            <span className='save50'>Save 50% Now</span>
            <button className='getDiscountBtn'>GET MY DISCOUNT</button>
        </div>
        <img src={image} alt=""/>
    </div>
}