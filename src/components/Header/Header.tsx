import React from 'react';
import './Header.scss'
import Image from '../../Images/github2.svg'

const Header = () => {
  return (
    <div className="header">
      <a href="https://github.com/srgmkv" title="github.com/srgmkv">
        <img src={Image} />
      </a>
      <div className="title">{`{</>}`} Github repo finder</div>
    </div>

  );
}

export default Header;