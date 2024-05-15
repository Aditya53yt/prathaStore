import React from 'react'
import logo2 from "../assets/pngegg.png"
import ShopIcon from '@mui/icons-material/Shop';
import image3 from "../assets/image2.png"
import image4 from "../assets/image 3.png"
const Footer = () => {
  return (
    <>
    <div class="section" id="app" style={{padding:"30px"}}>
    <div class="container flex">
        <div class="app-photo">
            <img width="500px" src={logo2} alt="" />
        </div>

        <div class="text">
            <h2 class="secondary">Download The FoodLover App</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                laudantium velit iure illo facilis at delectus sint, doloribus
                magnam officiis rerum nobis, perspiciatis maxime repellat qui
                consequuntur? Aspernatur, architecto voluptatum!
            </p>

            <div class="download flex">
                <div class="app-store">
                <img src={image4} width={40}/>
                    <p>
                        GET IT ON <br />
                        <span>Google Play</span>
                    </p>
                </div>

                <div class="app-store">
                <img src={image3} width={40}/>
                    <p>
                        Donload on the <br />
                        <span>App Store</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="footer">
    <div class="container flex">
        <div class="footer-about">
            <h2>About</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                aspernatur sit deleniti enim voluptas voluptatum incidunt rerum,
                exercitationem voluptate nemo quo impedit ad perspiciatis tempore
                nulla dolore fugit, fuga eos.
            </p>
        </div>

        <div class="footer-category">
            <h2>Our Menu</h2>

            <ul>
                <li>Biryani</li>
                <li>Chicken</li>
                <li>Pizza</li>
                <li>Burger</li>
                <li>Pasta</li>
            </ul>
        </div>

        <div class="quick-links">
            <h2>Quick Links</h2>

            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Menu</li>
                <li>Order</li>
                <li>Services</li>
            </ul>
        </div>

        <div class="get-in-touch">
            <h2>Get in touch</h2>
            <ul>
                <li>Account</li>
                <li>Support Center</li>
                <li>Feedback</li>
                <li>Suggession</li>
            </ul>
        </div>
    </div>

    <div class="copyright">
        <p>Copyright &copy; 2024 Design By Developer Krushna J</p>
    </div>
</div>
</>
  )
}

export default Footer