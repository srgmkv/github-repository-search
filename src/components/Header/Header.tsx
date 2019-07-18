import React from 'react';
import './Header.css'

const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <a href="https://github.com/srgmkv" title="github.com/srgmkv"><div className="srgmkv"></div></a>
        <div className="header-name">{`{</>}`} Github repo finder</div>
      </div>
    </>
  );
}

export default Header;