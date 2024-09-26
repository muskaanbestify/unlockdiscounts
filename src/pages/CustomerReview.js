import React, { useContext } from 'react';
import './CustomerReview.css';

        
        const CustomerReview = () => {
          return (
        

            <div    className="parent-card">
           
              
                 <div className="review-card">
              <div className="review-rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span> 
              </div>
              <div className="review-author">
                <strong>Rakshith</strong> <span className="verified">&#x2705;</span>
              </div>
              <p className="review-text">
                "Finding clothes that align with my personal style used to be a challenge until I discovered UnlockDiscounts. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
              </p>

              
            </div>
            <div className="review-card">
              <div className="review-rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span> {/* Half star */}
              </div>
              <div className="review-author">
                <strong>Rakshith</strong> <span className="verified">&#x2705;</span>
              </div>
              <p className="review-text">
                "Finding clothes that align with my personal style used to be a challenge until I discovered UnlockDiscounts. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
              </p>

              
              
            </div>
            <div className="review-card">
              <div className="review-rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span> {/* Half star */}
              </div>
              <div className="review-author">
                <strong>Rakshith</strong> <span className="verified">&#x2705;</span>
              </div>
              <p className="review-text">
                "Finding clothes that align with my personal style used to be a challenge until I discovered UnlockDiscounts. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
              </p>
              </div>
            </div>

            //   export default CustomerReview;

            
          );

        };
        
 export default CustomerReview;
