import React from 'react'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AvTimerIcon from '@mui/icons-material/AvTimer';
const Section1 = () => {
  return (
    <div class="section" id="how-it-works">
        <div class="txt">
            <h1>How It's Work</h1>
        </div>

        <div class="container flex">
            <div class="box">
                <h3>Easy Order</h3>
               <AvTimerIcon  sx={{fontSize:"40px"}}/>
                <p>
                    You Can Order anything in our menu by our Krushna's Food Mall App.
                </p>
            </div>

            <div class="box active">
                <h3>Best Quality</h3>
              < ProductionQuantityLimitsIcon  sx={{fontSize:"40px"}}/>
                <p>
                    We Provides quality of KFS Brand.
                </p>
            </div>

            <div class="box">
                <h3>Fast Delivery</h3>
            <DeliveryDiningIcon   sx={{fontSize:"40px"}}/>
                <p>
                    We Provide Fastest delivery within given time to custome in our Krushna's Food Mall App.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Section1