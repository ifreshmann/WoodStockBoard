import React from 'react'

const Logo = () => {

    const logoImage = {
        url: './LogoWoodStock.jpg',
    }

    return (
        <div className="container">
            <img src={logoImage.url} alt="Logo" width="100%" height="150" />
        </div>

    )
}

export default Logo
