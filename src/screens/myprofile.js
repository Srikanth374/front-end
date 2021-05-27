import React, {useState, useEffect} from 'react';
import axios from '../axios';
import {Link} from 'react-router-dom';
function MyProfile() {
    const [userInfo, setUserInfo] = useState({});
    const MyProfileApi = () => {
        axios.get(`v1/users/${localStorage.getItem('dl-userId')}`).then((resp) => {
            const { data } =resp;
            console.log(data);
            if(data.user) {
                setUserInfo(data.user);
            }
        }).catch (error => {

        });
    };
    useEffect(() => {
        MyProfileApi();
    }, []);
    return(
        <div className= "container my-5 pb-6">
            <div className="row">
                <div className="col-sm">
                    <h2 className="my-3">My Profile Details</h2>
                    <h6 className="my-3">First Name :<span className="text-success">{userInfo.firstName}</span></h6>
                    <h6 className="my-3">last Name :<span className="text-success">{userInfo.lastName}</span></h6>
                    <h6 className="my-3">Email Address :<span className="text-success">{userInfo.email}</span></h6>
                    <h6 className="my-3">Mobile No:<span className="text-success">{userInfo.mobile}</span></h6>
                    <Link to={'updateprofile'}><button className="btn btn-primary">Edit</button></Link>
                </div>

            </div>

        </div>
    );
}
export default MyProfile;