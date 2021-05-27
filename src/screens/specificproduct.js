import './specificproduct.css';
import {Route, Link} from 'react-router-dom';
import productdescrition from '../components/Description';
import RatingsReviews from '../components/Ratings-reviews';
function Specificproduct(props){
    const products=[
        {
         name :'realme C12 (Power Silver, 32 GB)',
         imgSrc:'https://rukminim1.flixcart.com/image/312/312/kdxfc7k0/mobile/h/c/e/realme-c12-rmx2189-original-imafupuyahzxtwfq.jpeg?q=70',
         specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Lithium Polymer Battery', 'MediaTek Helio G25 Processor', 'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'] ,
         price: '₹7,999',
         offer:'20% off',
         exchange:'Exchange, 100% Money back',
         noCost:'No Cost EMI', 
          id: 'p1'
      },
      {
         name :'REDMI 9i (Sea Blue, 64 GB)',
         imgSrc:'https://rukminim1.flixcart.com/image/312/312/kesv0y80/mobile/b/y/9/redmi-9i-mzb0815in-original-imafvehwghyuphbc.jpeg?q=70',
         specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Lithium Polymer Battery', 'MediaTek Helio G25 Processor', 'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'] ,
         price: '₹7,999' ,
         offer:'20% off',
         exchange:'Exchange, 100% Money back',
         noCost:'No Cost EMI',
          id: 'p2' 
      },
      {
         name :'POCO M3 (Power Black, 128 GB)',
         imgSrc:'https://rukminim1.flixcart.com/image/312/312/kklhbbk0/mobile/m/s/f/m3-mzb0879in-poco-original-imafzxf686qtxq2x.jpeg?q=70',
         specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Lithium Polymer Battery', 'MediaTek Helio G25 Processor', 'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'] ,
         price: '₹7,999' ,
         offer:'20% off',
         exchange:'Exchange, 100% Money back',
         noCost:'No Cost EMI',
          id: 'p3' 
      },
      {
         name :'realme Narzo 20 (Glory Silver, 128 GB)',
         imgSrc:'https://rukminim1.flixcart.com/image/312/312/kfbfr0w0/mobile/b/k/h/realme-narzo-20-rmx2193-original-imafvswety9jxxsg.jpeg?q=70',
         specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Lithium Polymer Battery', 'MediaTek Helio G25 Processor', 'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'] ,
         price: '₹7,999' ,
         offer:'20% off',
         exchange:'Exchange, 100% Money back',
         noCost:'No Cost EMI' ,
         id: 'p4'
      },
      {
         name :'GIONEE Max (Royal Blue, 32 GB)',
         imgSrc:'https://rukminim1.flixcart.com/image/312/312/ke1pnrk0/mobile/j/q/r/gionee-max-gionee-max-original-imafutmrmdaz2dau.jpeg?q=70',
         specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Lithium Polymer Battery', 'MediaTek Helio G25 Processor', 'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'] ,
         price: '₹7,999',
         offer:'20% Off',
         exchange:'Exchange, 100% Money back',
         noCost:'No Cost EMI',
          id: 'p5' 
      }
     ];
     const {match} =props;
     const product = products.find(product=> product._id === match.params.productId);
    console.log(`${match.url}/description`);
     return(
         <div>
             {product ? (
                 <div className="container products my-4">
                 <div className ="row my-4 border-bottom border-drak pb-3">
                     <div className ="col-sm-3">
                         <img src={product.imgSrc} alt="mobile" width ="10px"/>
                     </div>
                     <div className="col-sm-6">
                         <h4>{product.name}</h4>
                         <ul className="list-group specifications" >
                             {product.specifications.map((specification)=> (
                                 <li className='list-group-items' key={specification}>{specification}</li>
                                 ))}
                             </ul>
                          </div>
                         <div className="col-sm-3">
                             <h3>{product.price}</h3>
                             <div className="textline">₹999</div>
                             <h6>{product.offer}</h6>
                             <div className='text'><p>{product.exchange}</p> </div>
                            <p>{product.noCost}</p>
                             <button className="btn btn-primary">Add to cart</button>
                         </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                                    <div className="collapse navbar-collapse" id="navbarText">
                                        <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to={`${match.url}/description`}>Description</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link className="nav-link" to={`${match.url}/ratingsreviews`}>{'Ratings & Reviews'}</Link>
                                        </li>  
                                        </ul>
                                        
                                    </div>
                                </nav>
                                <Route path={`${match.path}/description`}component={productdescrition} exact></Route>
                                <Route path={`${match.path}/ratingsreviews`}component={RatingsReviews} exact></Route>
                            </div>   

                        </div>
                </div> 
             ) : (
                 <div> No matching</div>
             ) }
        </div>
        );
        
}

export default Specificproduct;