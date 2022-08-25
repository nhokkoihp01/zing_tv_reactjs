import React from 'react';
import styled from "styled-components";
import Partner1 from '../../../assets/images/partner/img-partners-4.png'
import Partner2 from '../../../assets/images/partner/img-partners-5.png'


function Partner(props) {
    return (
        <PartnerContainer>
          <h2 className="partner__title">Đối Tác</h2>
            <div className="partner__contact">
                <img src={Partner1} alt=""/>
                <img src={Partner2} alt=""/>
            </div>

        </PartnerContainer>
    );
}
const PartnerContainer = styled.div`
    width: 100%;
  background-color: #EEEEEE;
  .partner__title{
    padding-top: 20px;
    text-align: center;
  }
  .partner__contact{
    display: flex;
    align-items: center;
    flex-direction: column;
    img{
      width: 600px;
      @media only screen and (max-width: 600px) {
        width: 500px;

      }
    }
  }


`;

export default Partner;
