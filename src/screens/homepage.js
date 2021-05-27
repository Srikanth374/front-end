// import './homepage.css';
import logo from '../components/react imgs/intro.jpg';
function HomePage (){
    console.log(process.env.REACT_APP_API_URL);
    return(
        // <div >
        // <img src={logo} alt={'Flipcart'} width={'100%'} heigth={'50px'}  />
        // <div>
        //     <Link to={`/products`} class="btn btn-danger btn-lng active">shop now</Link>
        // </div>
        // </div>
        
            <div> 
            <img src={logo} alt={'Flipcart'} width = "100%" height = "600vh"/>
             <div className="container">
                 {/* <div id="banner_content">
                    <div>
                        <Link to={'/products'} class="btn btn-danger btn-lng active">shop now</Link>
                     </div>
                </div> */}
            </div>
        </div>
        
 
    );
}
export default HomePage;