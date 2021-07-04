import React from 'react';

const Footer = () => {

    return (
        <>
            <footer className="container">
                <div className="text-center mt-5">
                    <p>© 2013–{(new Date().getFullYear())} WoodStock </p>
                </div>

                <hr/>

            </footer>
        </>
    )
}

export default Footer
