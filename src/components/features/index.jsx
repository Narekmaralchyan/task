import {useState} from 'react';
import './style.css'
import checkIcon from './assests/checkIcon.svg'
import {data} from './data';


export default function Features (){
    const [state,setState] = useState({
        data:data,
        active:0
    })
    const currentFeature = state.data[state.active]
    function changeActive(index){
        setState(prev=>({
            ...prev,
            active: index
        }))
    }

    return(
        <div className='features'>
            <div className='featuresHeader'>
                {state.data.map((item,index)=>{
                    return <div key={index} onClick={()=>{changeActive(index)}} className={state.active===index?"active feature":"feature"}>
                        <img className='featureLogo' src={item.logo} alt="logo"/>
                        <span>{item.title}</span>
                    </div>
                })}
            </div>
            <div className='featuresContent'>
                <div className='contentInfo'>
                    <span className='contentTitle'>{currentFeature.info}</span>
                    <div className='opportunities'>
                        {currentFeature.opportunities.map((opportunity,index)=>{
                            return <div key={index} className='opportunity'>
                                <img src={checkIcon} alt="check"/>
                                <span>{opportunity}</span>
                            </div>
                        })}
                    </div>
                    <button className='reserveBtn'>RESERVE YOUR SEAT</button>
                </div>
                <img src={currentFeature.image} alt="photo"/>
            </div>
        </div>
    )
}