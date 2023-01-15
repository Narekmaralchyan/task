import './style.css'
import discout from './assets/discount.svg'
import cyberMonday from './assets/cyberMonday.svg'
import vector from  './assets/vector.svg'
import ratingStars from  './assets/ratingStars.svg'
import capterra from './assets/capterra.svg'
import crowd from './assets/crowd.svg'
import getApp from './assets/getApp.svg'

export default function Info(){
    return(
        <div className='infoContent'>
            <div className='about'>
                <img src={cyberMonday} alt="cyberMonday"/>
                <span>
                    Cyber Monday saves you money,<br></br>
                    WebWork saves you time.
                </span>
                <button className='saveBtn'>SAVE BIG NOW</button>
                <div className='trialInfo'>
                    <img src={vector} alt="vector"/>
                    <span>14-day free trial  |  No credit card required</span>
                </div>
                <div className='reviewsInfo'>
                    <img src={ratingStars} alt="5stars"/>
                    <span>Reviews from 51K+ happy users below and beyond</span>
                </div>
                <div className='logos'>
                    <img src={capterra} alt="capterraLogo"/>
                    <img src={crowd} alt="crowd"/>
                    <img src={getApp} alt="getApp"/>
                </div>
            </div>
            <img src={discout} alt="discout"/>
        </div>
    )
}