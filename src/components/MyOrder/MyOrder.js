import React, { useEffect, useReducer, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Icon } from 'react-icons-kit'
import './MyOrder.css'
import { trash } from 'react-icons-kit/feather/trash'
import useAuth from '../../Hooks/useAuth';


const MyOrder = () => {
    const { user } = useAuth()
    const [myOrder, setMyOrder] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                // setMyOrder(data)
                if (user.email == data.email) {

                    // setMyOrder(data)
                }
                const userEmail = user.email;
                const order = data.filter(mo => mo.email === userEmail)
                setMyOrder(order)
                console.log(order)
            })
    }, [])

    //    useEffect(()=>{
    //        if(use.email=== )
    //    },[]) 
    return (
        <div className="h-100">
            <h1 className=" text-center mt-5">My Order</h1>
            <div className="h-100 table-section text-center p-5">
                <Table className=" w-50 mb-5" hover>
                    {myOrder.length > 0 ?
                        <>
                            <thead>
                                <tr>
                                    <th>Destination</th>
                                    <th>Duration</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    myOrder.map(or => <>
                                        <tr>
                                            <td>{or.booking.title} </td>
                                            <td>{or.booking.offer} </td>
                                            <td>{or.lasttName}</td>
                                            <td><button className="btn btn-outline-danger"><Icon size={15} icon={trash} /></button></td>
                                        </tr>
                                    </>)
                                }



                                {/* <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td><button className="btn btn-outline-danger"><Icon size={15} icon={trash} /></button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td >Larry the Bird</td>
                            <td >Larry the Bird</td>
                            <td><button className="btn btn-outline-danger"><Icon size={15} icon={trash} /></button></td>
                        </tr> */}
                            </tbody>
                        </>
                        :
                        ' Please Order something'
                    }
                </Table>
            </div>
            {/* <div className="h-100"></div> */}
        </div>
    );
};

export default MyOrder;