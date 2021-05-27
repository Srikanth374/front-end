import './products.css';
import {Link} from 'react-router-dom';
import { useEffect , useState} from 'react';
import axios from '../axios'; 
function Products (){
    // const products=[
    //    {
    //     name :'realme C12 (Power Silver, 32 GB)',
    //     imgSrc:'https://rukminim1.flixcart.com/image/312/312/kdxfc7k0/mobile/h/c/e/realme-c12-rmx2189-original-imafupuyahzxtwfq.jpeg?q=70',
    //     specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Lithium Polymer Battery', 'MediaTek Helio G25 Processor', 'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'] ,
    //     price: '₹7,999',
    //     offer:'20% off',
    //     exchange:'Exchange, 100% Money back',
    //     noCost:'No Cost EMI', 
    //      id: 'p1'
    //  },
    //  {
    //     name :'REDMI 9i (Sea Blue, 64 GB)',
    //     imgSrc:'https://rukminim1.flixcart.com/image/312/312/kesv0y80/mobile/b/y/9/redmi-9i-mzb0815in-original-imafvehwghyuphbc.jpeg?q=70',
    //     specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Lithium Polymer Battery', 'MediaTek Helio G25 Processor', 'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'] ,
    //     price: '₹7,999' ,
    //     offer:'20% off',
    //     exchange:'Exchange, 100% Money back',
    //     noCost:'No Cost EMI',
    //      id: 'p2' 
    //  },
    //  {
    //     name :'POCO M3 (Power Black, 128 GB)',
    //     imgSrc:'https://rukminim1.flixcart.com/image/312/312/kklhbbk0/mobile/m/s/f/m3-mzb0879in-poco-original-imafzxf686qtxq2x.jpeg?q=70',
    //     specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Lithium Polymer Battery', 'MediaTek Helio G25 Processor', 'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'] ,
    //     price: '₹7,999' ,
    //     offer:'20% off',
    //     exchange:'Exchange, 100% Money back',
    //     noCost:'No Cost EMI',
    //      id: 'p3' 
    //  },
    //  {
    //     name :'realme Narzo 20 (Glory Silver, 128 GB)',
    //     imgSrc:'https://rukminim1.flixcart.com/image/312/312/kfbfr0w0/mobile/b/k/h/realme-narzo-20-rmx2193-original-imafvswety9jxxsg.jpeg?q=70',
    //     specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Lithium Polymer Battery', 'MediaTek Helio G25 Processor', 'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'] ,
    //     price: '₹7,999' ,
    //     offer:'20% off',
    //     exchange:'Exchange, 100% Money back',
    //     noCost:'No Cost EMI' ,
    //     id: 'p4'
    //  },
    //  {
    //     name :'GIONEE Max (Royal Blue, 32 GB)',
    //     imgSrc:'https://rukminim1.flixcart.com/image/312/312/ke1pnrk0/mobile/j/q/r/gionee-max-gionee-max-original-imafutmrmdaz2dau.jpeg?q=70',
    //     specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Lithium Polymer Battery', 'MediaTek Helio G25 Processor', 'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'] ,
    //     price: '₹7,999',
    //     offer:'20% Off',
    //     exchange:'Exchange, 100% Money back',
    //     noCost:'No Cost EMI' ,
    //      id: 'p5' 
    //  }
    // ];
   
    const [products , setProducts] = useState([]);
    const getAllproducts = () => {
        axios.get('v1/products').then((response) => {
         console.log(response.data.data);
         if (response && response.data) {
             setProducts(response.data.data);
         }
        }).catch((error) => {

        });
    };
    useEffect(() =>{
        getAllproducts();
    }, []);
    
   const addTocart = (product) => {
       console.log(product);
       if (localStorage.getItem('dl-products')){
           const products = JSON.parse(localStorage.getItem('dl-products'));
           let isFound = false;
           products.forEach( prod => {
               if (prod._id === product._id){
                   prod.quantity += 1;
                   prod.price = Number(prod.price);
                   isFound = true;

               }
           });
           if (isFound){
            alert('updated successfull');
           } else {
               products.push({...product , quantity : 1 , price: Number(product.price)});
               alert('Add successfull')
           }
           localStorage.setItem('dl-products' , JSON.stringify(products));
       }else {
           const products = [];
           products.push({...product , quantity : 1 , price: Number(product.price)});
           localStorage.setItem('dl-products', JSON.stringify(products));
       }

   }
    return(
    <div className="container products my-4">
        {products.map((product, index) => (
            <div className ="row my-4 border-bottom border-drak pb-4" key={index + 1}>
             <div className ="col-sm-4 p-6" >
                 <img src={product.imgSrc} alt='Flipcart' width="170px"/>
             </div>
             <div className="col-sm-5">
                 <Link to={`/specificproduct/${product.id}`}><h4>{product.name}</h4></Link>
                 <ul className="list-group specification" >
                     {product.specifications.map((specification)=> (
                     <li className='list-group-items' key={specification}>{specification}</li>
                     ))}
                    
                 </ul>
              </div>
             <div className="col-sm-3">
                 <h3>₹{product.price}</h3>
                 <div id="textline">₹10,000</div>
                 <h6>{product.offer}</h6>
                 <div id='text'><p>Exchange, 100% Money back</p> </div>
                <div className="nocost"><p>No Cost EMI</p></div>
                 <button className="btn btn-primary" onClick={ () => addTocart(product)}>Add to cart</button>
             </div>
            </div>
        ))}
        </div>
                     )
                     }
export default Products;
