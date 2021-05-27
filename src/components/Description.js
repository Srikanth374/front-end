function productdescrition (props){
    const products=[
        {
         name :'realme C12 (Power Silver, 32 GB)',
         imgSrc:'https://rukminim1.flixcart.com/image/312/312/kdxfc7k0/mobile/h/c/e/realme-c12-rmx2189-original-imafupuyahzxtwfq.jpeg?q=70',
         specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Lithium Polymer Battery', 'MediaTek Helio G25 Processor', 'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'] ,
         price: '₹7,999',
         offer:'20% off',
         exchange:'Exchange, 100% Money back',
         noCost:'No Cost EMI', 
          id: 'p1',
          description:'Work or play, the Redmi 9i is an ideal companion that helps you go through your everyday tasks with ease. With a huge HD+ IPS display, the powerful Helio G25 processor, a massive 5000 mAh battery, two powerful cameras, and a ton of other innovative features, the Redmi 9i is ready to take any challenge that comes its way.',
          Ratingsreviews: [
              {
                  ratings:4.5,
                  review:'good quality'
              },
              {
                ratings:3.5,
                review:'Excellent quality'
            }
          ]
      },
      {
         name :'REDMI 9i (Sea Blue, 64 GB)',
         imgSrc:'https://rukminim1.flixcart.com/image/312/312/kesv0y80/mobile/b/y/9/redmi-9i-mzb0815in-original-imafvehwghyuphbc.jpeg?q=70',
         specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Lithium Polymer Battery', 'MediaTek Helio G25 Processor', 'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'] ,
         price: '₹7,999' ,
         offer:'20% off',
         exchange:'Exchange, 100% Money back',
         noCost:'No Cost EMI',
          id: 'p2',
          description:'Work or play, the Redmi 9i is an ideal companion that helps you go through your everyday tasks with ease. With a huge HD+ IPS display, the powerful Helio G25 processor, a massive 5000 mAh battery, two powerful cameras, and a ton of other innovative features, the Redmi 9i is ready to take any challenge that comes its way.',
          Ratingsreviews: [
            {
                ratings:4.5,
                review:'good quality'
            },
            {
              ratings:3.5,
              review:'Excellent quality'
          }
        ]
      },
      {
         name :'POCO M3 (Power Black, 128 GB)',
         imgSrc:'https://rukminim1.flixcart.com/image/312/312/kklhbbk0/mobile/m/s/f/m3-mzb0879in-poco-original-imafzxf686qtxq2x.jpeg?q=70',
         specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Lithium Polymer Battery', 'MediaTek Helio G25 Processor', 'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'] ,
         price: '₹7,999' ,
         offer:'20% off',
         exchange:'Exchange, 100% Money back',
         noCost:'No Cost EMI',
          id: 'p3',
          description:'Work or play, the Redmi 9i is an ideal companion that helps you go through your everyday tasks with ease. With a huge HD+ IPS display, the powerful Helio G25 processor, a massive 5000 mAh battery, two powerful cameras, and a ton of other innovative features, the Redmi 9i is ready to take any challenge that comes its way.',
          Ratingsreviews: [
            {
                ratings:4.5,
                review:'good quality'
            },
            {
              ratings:3.5,
              review:'Excellent quality'
          }
        ] 
      },
      {
         name :'realme Narzo 20 (Glory Silver, 128 GB)',
         imgSrc:'https://rukminim1.flixcart.com/image/312/312/kfbfr0w0/mobile/b/k/h/realme-narzo-20-rmx2193-original-imafvswety9jxxsg.jpeg?q=70',
         specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Lithium Polymer Battery', 'MediaTek Helio G25 Processor', 'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'] ,
         price: '₹7,999' ,
         offer:'20% off',
         exchange:'Exchange, 100% Money back',
         noCost:'No Cost EMI' ,
         id: 'p4',
         description:'Work or play, the Redmi 9i is an ideal companion that helps you go through your everyday tasks with ease. With a huge HD+ IPS display, the powerful Helio G25 processor, a massive 5000 mAh battery, two powerful cameras, and a ton of other innovative features, the Redmi 9i is ready to take any challenge that comes its way.',
         Ratingsreviews: [
            {
                ratings:4.5,
                review:'good quality'
            },
            {
              ratings:3.5,
              review:'Excellent quality'
          }
        ]
      },
      {
         name :'GIONEE Max (Royal Blue, 32 GB)',
         imgSrc:'https://rukminim1.flixcart.com/image/312/312/ke1pnrk0/mobile/j/q/r/gionee-max-gionee-max-original-imafutmrmdaz2dau.jpeg?q=70',
         specifications:['4 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.59 cm (6.53 inch) HD+ Display', '13MP Rear Camera | 5MP Front Camera', '5000 mAh Lithium Polymer Battery', 'MediaTek Helio G25 Processor', 'Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'] ,
         price: '₹7,999',
         offer:'20% Off',
         exchange:'Exchange, 100% Money back',
         noCost:'No Cost EMI' ,
          id: 'p5',
          description:'Work or play, the Redmi 9i is an ideal companion that helps you go through your everyday tasks with ease. With a huge HD+ IPS display, the powerful Helio G25 processor, a massive 5000 mAh battery, two powerful cameras, and a ton of other innovative features, the Redmi 9i is ready to take any challenge that comes its way.',
          Ratingsreviews: [
            {
                ratings:4.5,
                review:'good quality'
            },
            {
              ratings:3.5,
              review:'Excellent quality'
          }
        ] 
      }
     ];
     const {match} =props;
     const product = products.find(product=> product.id === match.params.productId);
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-10 mx-auto mt-4">
                    {product.description ? (
                        <p defaultChecked="text-justify-left">Description{product.description}</p>
                    ) : ''}

                </div>

            </div>
        
        </div>
    )
}
export default productdescrition;