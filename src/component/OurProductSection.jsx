import React from 'react'

const OurProductSection = () => {
  return (
    <section class="section-meals">
        <div class="txt">
            <h1>Our Product</h1>
        </div>
        <div class="container grid grid--3-cols margin-right-md">
            <div class="meal">
                <img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="meal-img" alt="Japanese Gyozas" />
                <div class="meal-content">
                    <div class="meal-tags">
                        <span class="tag tag--vegetarian">Vegetarian</span>
                    </div>
                    <p class="meal-title">Japanese Gyozas</p>
                    <ul class="meal-attributes">
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="flame-outline"></ion-icon><span><strong>650</strong>
                                calories</span>
                        </li>
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon><span>NutriScore &reg;
                                <strong>74</strong></span>
                        </li>
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="star-outline"></ion-icon><span><strong>4.9</strong> rating
                                (537)</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="meal">
                <img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="meal-img" alt="Avocado Salad" />
                <div class="meal-content">
                    <div class="meal-tags">
                        <span class="tag tag--vegan">Vegan</span>
                        <span class="tag tag--paleo">Paleo</span>
                    </div>
                    <p class="meal-title">Avocado Salad</p>
                    <ul class="meal-attributes">
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="flame-outline"></ion-icon><span><strong>400</strong>
                                calories</span>
                        </li>
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon><span>NutriScore &reg;
                                <strong>92</strong></span>
                        </li>
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="star-outline"></ion-icon><span><strong>4.8</strong> rating
                                (441)</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="meal">
                <img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    class="meal-img" alt="Japanese Gyozas" />
                <div class="meal-content">
                    <div class="meal-tags">
                        <span class="tag tag--vegan">Vegan</span>
                    </div>
                    <p class="meal-title">Thai Red Curry</p>
                    <ul class="meal-attributes">
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="flame-outline"></ion-icon><span><strong>450</strong>
                                calories</span>
                        </li>
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon><span>NutriScore &reg;
                                <strong>86</strong></span>
                        </li>
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="star-outline"></ion-icon><span><strong>4.4</strong> rating
                                (349)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

  )
}

export default OurProductSection