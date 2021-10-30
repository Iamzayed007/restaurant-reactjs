import React from 'react';
import { Table } from 'react-bootstrap';
import { Icon } from 'react-icons-kit'
import './MyOrder.css'
import { trash } from 'react-icons-kit/feather/trash'

const MyOrder = () => {
    return (
        <div className="h-100">
            <h1 className=" text-center mt-5">My Order</h1>
            <div className="h-100 table-section text-center p-5">
                <Table className=" w-50 mb-5" hover>
                    <thead>
                        <tr>
                            <th>Destination</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td><button className="btn btn-outline-danger"><Icon size={15} icon={trash} /></button></td>
                        </tr>
                        <tr>
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
                        </tr>
                    </tbody>
                </Table>
            </div>
            {/* <div className="h-100"></div> */}
        </div>
    );
};

export default MyOrder;