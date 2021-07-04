import React from 'react'
import Pagination from "react-js-pagination";
import axios from 'axios'
import { Spinner, Table } from 'react-bootstrap'

const pageSize = 10

const HospitalPage = () => {

    const [hospital, setHospital] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const cancelTolken = React.useRef(null)

    //pagination
    const [page, setPage] = React.useState(1)
    const [total, setTotal] = React.useState(0)

    const getData = async (page) => {
        try {
            setLoading(true)
            const resp = await axios.get(
                `https://api.codingthailand.com/api/hospital2?page=${page}&page_size=${pageSize}`, {
                cancelToken: cancelTolken.current.token
            })
            //console.log(resp.data.data)
            setTotal(resp.data.meta.pagination.total)
            setHospital(resp.data.data)

        } catch (error) {
            console.log(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        cancelTolken.current = axios.CancelToken.source()
        getData(page)

        return () => {
            //console.log('exit product page')
            cancelTolken.current.cancel()
        }
    }, [page])

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
                <p>{error.response.data.message}</p>
            </div>
        )
    }

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber)
    }

    return (
        <>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-12">
                        <h2>สถานพยาบาล</h2>
                        <Table striped bordered hove size="sm">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>code</th>
                                    <th>ชื่อสถานพยาบาล</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    hospital.map((h, index) => {
                                        return (
                                            <tr key={h.id}>
                                                <td>{h.id}</td>
                                                <td>{h.code}</td>
                                                <td>{h.h_name}</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </Table>

                        <Pagination
                            activePage={page}
                            itemsCountPerPage={pageSize}
                            totalItemsCount={total}
                            pageRangeDisplayed={10}
                            onChange={handlePageChange}
                            itemClass="page-item"
                            linkClass="page-link"
                            prevPageText="ก่อนหน้า"
                            nextPageText="ถัดไป"
                            firstPageText="หน้าแรก"
                            lastPageText="หน้าสุดท้าย"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HospitalPage
