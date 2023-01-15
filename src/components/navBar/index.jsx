import './style.css'
import logo from './assets/logo.svg'

export default function NavBar(){

    return (
        <div className='navBar'>
            <img src={logo} alt="logo"/>
            <button className='getNowBtn'>GET NOW</button>
        </div>
    )
}