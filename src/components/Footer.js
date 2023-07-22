import React from 'react';
import facebookIcon from '../asset/facebook-official.png';
import twitterIcon from '../asset/twitter.png'; 



export const Footer= () => {
  return (
    <footer style={footerStyle}>
        <p style={textStyle}> Copyright &copy; 2016. PT Company</p>
        <div style={iconContainer}>
        <img src={facebookIcon} alt="Facebook" style={iconStyle} />
        <img src={twitterIcon} alt="Twitter" style={iconStyle} />
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
};

const textStyle = {
  fontSize: '14px',
};

const iconContainer = {
    marginTop: '5px',
};
  
const iconStyle = {
    width: '20px',
    height: '20px',
    margin: '0 5px',
};

