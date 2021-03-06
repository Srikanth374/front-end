import React, {useState, useEffect} from 'react';
import axios from '../axios';
import {Link} from 'react-router-dom';

function Myorders() {
    const [orders, setOrders] = useState([]);
    const myOrdersApi = () => {
        axios.get(`v1/orders/${localStorage.getItem('dl-userId')}`).then((resp) => {
            const {data} = resp;
            if (data.orders) {    
                data.orders.forEach(order => {
                    const createdDate = new Date(order.createdAt);
                    order.createdAt = `${createdDate.getDate()}-${createdDate.getMonth()}-${createdDate.getFullYear()} ${createdDate.getHours()}:${createdDate.getMinutes()}`;
                });
                setOrders(data.orders);
            }
        }).catch(error => {

        });
    };
    useEffect(() => {
        myOrdersApi();
    }, []);
    return (
        <div className="container-fluid">
            {orders.length > 0 ? (
                <React.Fragment>
                    <h2 className="my-2">My Orders</h2>
                    {orders.map(order => (
                        <div className="row my-4 py-3 border-bottom border-dark" key={order._id}>
                            <div className="col-sm-9">
                                {order.products.map(product => (
                                    <div className="row my-2" key={product._id}>
                                        <div className="col-sm-6">
                                            <img src={product.imgSrc} height="120px" />
                                        </div>
                                        <div className="col-sm-6">
                                            <h4>{product.name}</h4>
                                            <h6>Price: RS {product.price}</h6>
                                            <h6>Quantity: {product.quantity}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-sm-3">
                                <h6>Order Id: {order._id}</h6>
                                <h6>Created Date: {order.createdAt}</h6>      
                                <h6>Total Amount: RS {order.totalPrice}</h6>                      
                            </div>
                        </div>
                    ))}

                </React.Fragment>
            ) : (
                <div className="row my-4 py-4">
                    <div className="col-sm">
                        <h2>No orders found.</h2>
                        <p>Place orders to view it here</p>
                        <Link to={'products'}><button className="btn btn-primary py-2">Products</button></Link>
                    </div>
                </div>
            )}
            
            
        </div>
    )
}

export default Myorders;