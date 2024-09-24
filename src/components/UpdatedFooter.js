import React from 'react';
import Newsletter from './NewsLetter';
import './updatedfooter.css';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
export default function UpdatedFooter() {
    return (
        <section className='footer-main'>

            <div className='newss'>
                <Newsletter />

            </div>
            {/* Main-Footer */}
            <div className='footer-pro'>
                <div className='company'>
                    <h1>UnlockDiscounts</h1>
                    <p>We have clothes that suits your style and which you're produe to wear. From women to men..</p>
                    <div className='social-links'>
                        <a href='' target='_blank'><FaTwitter /></a>
                        <a href='https://www.facebook.com/people/UnlockDiscounts/61560425212006/' target='_blank'><FaFacebook /></a>
                        <a href='https://www.instagram.com/unlock_discounts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'><IoLogoInstagram /></a>
                        <a href='https://chat.whatsapp.com/ESR3BCiCQHTIUIZKwRuLMQ' target='_blank'><FaWhatsapp /></a>
                    </div>
                </div>
                <div className='footer-links'>
                    <div className='direct-links'>
                        <span>
                            <p>ONLINE LEARNING</p>

                            <li><a href='/distancelearning'>Colleges</a></li>
                            <li><a href='/distancelearning'>Courses</a></li>

                        </span>
                        <span>
                            <p>FASHION</p>

                            <li><a href='/fashion/mens-wear'>Men's Wear</a></li>
                            <li><a href='/fashion/womens-wear'>Womens's Wear</a></li>
                            <li><a href='/fashion/kids-wear'>Kid's Wear</a></li>

                        </span>
                    </div>
                    <div className='direct-links'>
                        <span>
                            <p>ELECTRONICS</p>

                            <li><a href='/electronics/phones-accessories'>Mobile</a></li>
                            <li><a href='/electronics/appliances'>Laptops</a></li>
                            <li><a href='/electronics/appliances'>Health Care</a> </li>
                            <li><a href='/electronics/appliances'>Home Appliances</a> </li>

                        </span>
                        <span>
                            <p>BANKING</p>

                            <li><a href='/banking'>Credit Cards</a></li>
                            <li><a href='/banking'>Zero Saving Account</a></li>
                            <li><a href='/banking'>Saving Application</a></li>

                        </span>
                    </div>

                </div>

            </div>
        </section>
    )
}
