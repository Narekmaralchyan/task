import './style.css'
import checkIcon from './assets/checkIcon.svg'
import monthlyExPrice from './assets/mothlyExPrice.svg'
import yearlyExPrice from './assets/yearlyExPrice.svg'
import discountMonthly from './assets/discountMonthly.svg'
import discountYearly from './assets/discountYearly.svg'
export default function Benefits(){
    return(
        <div className='benefitContent'>
            <span className='BenefitWaysTitle'>Benefit both ways - monthly or yearly</span>
            <div className='benefits'>
                <div className='benefit'>
                    <img className='discount' src={discountMonthly} alt="dicount"/>
                    <span className='title'>Monthly</span>
                    <div className='priceInfo'>
                        <img className='exPrice' src={monthlyExPrice} alt="monthlyExPrice"/>
                        <span className='price'>$2.49</span>
                        <span className='pricePer'>per user/month</span>
                    </div>
                    <div className='opportunities'>
                        <div  className='opportunity'>
                            <img src={checkIcon} alt="check"/>
                            <span className='opportunityText'>14-day Free Trial</span>
                        </div>
                        <div  className='opportunity'>
                            <img src={checkIcon} alt="check"/>
                            <span className='opportunityText'>Access to All Features</span>
                        </div>
                        <div  className='opportunity'>
                            <img src={checkIcon} alt="check"/>
                            <span className='opportunityText'>24/7 Support</span>
                        </div>
                    </div>
                    <button className='getBtn'>GET YOUR DEAL</button>
                    <span className='timeFor'>*for 6 months</span>
                </div>
                <div className='benefit'>
                    <img className='discount' src={discountYearly} alt="dicount"/>
                    <span className='title'>Yearly</span>
                    <div className='priceInfo'>
                        <img className='exPrice' src={yearlyExPrice} alt="monthlyExPrice"/>
                        <span className='price'>$2.05</span>
                        <span className='pricePer'>per user/month</span>
                    </div>
                    <div className='opportunities'>
                        <div  className='opportunity'>
                            <img src={checkIcon} alt="check"/>
                            <span className='opportunityText'>14-day Free Trial</span>
                        </div>
                        <div  className='opportunity'>
                            <img src={checkIcon} alt="check"/>
                            <span className='opportunityText'>Access to All Features</span>
                        </div>
                        <div  className='opportunity'>
                            <img src={checkIcon} alt="check"/>
                            <span className='opportunityText'>24/7 Support</span>
                        </div>
                    </div>
                    <button className='getBtn'>GET YOUR DEAL</button>
                </div>
            </div>
        </div>
    )
}