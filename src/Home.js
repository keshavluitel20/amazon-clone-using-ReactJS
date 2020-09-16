import React from 'react'
import './Home.css';
import './Product'
import Product from './Product';
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <div className="home__row">
                    < Product
                        id="6298265454"
                        title='The lean startup: How Constant Innovation
                        creates Radically Successful Business Paperback'
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={5}
                    />
                    < Product
                        id="654146461"
                        title='Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with
                        K-beater, Dough Hoom and Whisk, 5 Litre
                        Glass Bowl'
                        price={239.0}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    < Product
                        id="55623154897"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        rating={3}
                    />
                    < Product
                        id="32651546"
                        title="Amazon Echo (3rd generation) | Smart speaker
                        with Alexa, Charcoal Fabric"
                        price={98.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8XBuv9CBzorYIPpiUis_vACCDzC2D_pRAjA&usqp=CAU"
                        rating={5}
                    />
                    < Product
                        id="32651253264"
                        title="New Apple iPadPro(12.9-inch, Wi-Fi, 128GB) - Silver(4th Generation)"
                        price={598.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        rating={4}
                    />

                </div>


                <div className="home__row">
                    < Product
                        id="12156315"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor
                        - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={4}
                    />


                </div>

            </div>
        </div>
    )
}

export default Home
