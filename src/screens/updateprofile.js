import {useForm} from 'react-hook-form';
// import {Link} from 'react-router-dom';
import axios from '../axios';
import { useEffect} from 'react';
import {useHistory} from 'react-router-dom';
function Updateprofile() {
    const {register , handleSubmit, formState:{ errors } , setValue}= useForm();
    const history = useHistory();
    const MyProfileApi = () => {
        axios.get(`v1/users/${localStorage.getItem('dl-userId')}`).then((resp) => {
            const { data } =resp;
            console.log(data);
            if(data.user) {
               
                const fileds =['email', 'mobile', 'firstName', 'lastName'];
                fileds.forEach(field => {
                    setValue(field, data.user[field]);
                });

            }
        }).catch (error => {

        });
    };
    useEffect(() => {
        MyProfileApi();
    }, []);
    const updateUser = (data) =>{
        console.log(data);
        axios.put(`v1/users/${localStorage.getItem('dl-userId')}`, data).then( resp => {
            const{data} = resp;
            if(data.data.user){
                alert('Updated successfully');
                history.push('/myprofile')
            }
        }).catch( err => {

        })
    };

    return(
        <div className="container">
            <div className="row justify-content-md-center">
           <div className="col-md-6 my-4">
               <h2 className="py-4">Edit Profile</h2>
             <form onSubmit={handleSubmit(updateUser)}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" name="firstName" className="form-control" id="firstname" {...register('firstName')} placeholder="First Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="last name">Last Name</label>
                  <input type="text"  className="form-control" name="lastname" id="lastname" {...register('lastName')}   placeholder="last Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="email"  {...register('email')}  aria-describedby="emailHelp" placeholder="Enter email" />
                  
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile No</label>
                  <input type="text"  name="mobile" id="mobile" {...register('mobile')} className="form-control"  placeholder="Mobile No " />
                </div>
      
                {/* <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                  
                </div> */}
                <button className="btn btn-primary">Update</button>
              </form>
            </div>
        </div>
      </div>
    );
}
export default Updateprofile;

