import React from 'react'
import {  Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const HomePage = () => {

    //const [autoplay, setAutoplay] = useState(true);
    const autoplay = true
    const slideImages = [
        'imagemain/1.jpg',
        'imagemain/2.jpg',
        'imagemain/3.jpg',
        'imagemain/4.jpg'
    ];

    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        width:'100%',
        height: '320px'


    }

    return (
        <>
            <div className="container">
                <div className="jumbotron">
                    <h1>ยินดีต้อนรับ</h1>
                    <p>
                        เว็บไซต์นี้พัฒนาเพื่อเก็บข้อมูลรูปภาพ สถานที่ท่องเที่ยวและกิจกรรม
                    </p>

                    <br/>

                    <div className="slide-container">
                        <Fade autoplay={autoplay}>
                            <div>
                                <img
                                    src={slideImages[0]}
                                    style={style} />
                            </div>
                            <div>
                                <img
                                    src={slideImages[1]}
                                    style={style} />
                            </div>
                            <div>
                                <img
                                    src={slideImages[2]}
                                    style={style} />
                            </div>
                            <div>
                                <img
                                    src={slideImages[3]}
                                    style={style} />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default HomePage
