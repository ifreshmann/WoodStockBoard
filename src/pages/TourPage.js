import React from 'react'

import { Spinner } from 'react-bootstrap'
import axios from 'axios'
import {  useHistory } from 'react-router-dom'

const TourPage = () => {

    const [tour, setTour] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const history = useHistory()
    const cancelTolken = React.useRef(null)

    const getData = async () => {
        try {
            setLoading(true)
            const resp = await axios.get('http://45.77.254.49/Woodstock/service/tour.php')
            //const resp = await axios.post('http://45.77.254.49/Vaccine/vaccinedesc/getvaccine_desc_list.php')
            console.log(resp.data.data)
            setTour(resp.data.data)

        } catch (ex) {
            console.log(ex)
            setError(ex)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        cancelTolken.current = axios.CancelToken.source()
        getData()

        return () => {
            cancelTolken.current.cancel()
            //console.log('exit product page')
        }
    }, [])

    if (loading === true) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" variant="secondary" />
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center mt-5 text-danger">
                <p>เกิดข้อผิดพลาดการดึงข้อมูล</p>
                {/* <p>{error.response.data.message}</p> */}
            </div>
        )
    }

    const handleRoute = (id) =>{ 
        history.push("/tourdetail/" + id)
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <h1>สถานที่ท่องเที่ยว</h1>
                <div className="col-md-12">
                    <div className="row mt-4">
                        <div className="row row-cols-1 row-cols-md-3">
                            {
                                tour.map((t, index) => {
                                    return (
                                        <div className="col mb-3" key={index} onClick={() => handleRoute(t.id)}>
                                            <div className="card" >
                                                <img className="card-img-top" src={"imagetour/" + t.Picture} alt="Picture" />
                                                <div className="card-body" >
                                                    <p className="card-text">
                                                        {t.Title}
                                                    </p>
                                                    <footer className="blockquote-footer">
                                                        <small className="text-muted">
                                                            ยอดเยี่ยมชม {' ' + t.View}
                                                        </small>
                                                    </footer>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourPage
