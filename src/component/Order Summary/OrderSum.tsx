import HeadphoneProduct1 from '../../picture/Product.jpg'
import HeadphoneProduct2 from '../../picture/Product2.jpg'
import HeadphoneProduct3 from '../../picture/Product3.jpg'
import HeadphoneProduct4 from '../../picture/Product4.jpg'
import HeadphoneProduct5 from '../../picture/Product5.jpg'
import HeadphoneProduct6 from '../../picture/Product6.jpg'
import HeadphoneProduct7 from '../../picture/Product7.jpg'
import HeadphoneProduct8 from '../../picture/Product8.jpg'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


function OrderSummary() {

   const products = [
  {
    id: 1,
    name: "Sony WH-1000XM5",
    description: "ที่สุดของการตัดเสียงรบกวน ด้วยโปรเซสเซอร์คู่และไมโครโฟน 8 ตัว ให้เสียงที่บริสุทธิ์ที่สุด",
    price: 12900,
    type: "Headphone",
    category: "Noise Cancelling",
    image: HeadphoneProduct1,
    discount: 10,
    rating: 5,
    reviews: 1240,
    isStock: true,
    color: ["Black", "Silver"] ,
    brand:'Sony' ,
    connectivity:'Wired'
  },
  {
    id: 2,
    name: "AirPods Max",
    description: "ดีไซน์ที่ผสมผสานความหรูหราเข้ากับเสียงคุณภาพสูง ฟังเพลงได้ต่อเนื่อง 20 ชั่วโมงพร้อมระบบเสียงตามตำแหน่ง",
    price: 19900,
    type: "Headphone",
    category: "Premium",
    image: HeadphoneProduct2,
    discount: 0,
    rating: 4.5,
    reviews: 856,
    isStock: true,
    color: ["Space Gray", "Silver", "Sky Blue", "Pink"] ,
    brand:'Huawei' ,
    connectivity:'Wired'
  },
  {
    id: 3,
    name: "Beats Powerbeats Pro",
    description: "หูฟังไร้สายประสิทธิภาพสูงที่สร้างมาเพื่อการเคลื่อนไหว มาพร้อมขาคล้องหูที่ปรับได้และกระชับมั่นคง",
    price: 8900,
    type: "Airpods",
    category: "Sport",
    image: HeadphoneProduct3,
    discount: 25,
    rating: 3.5,
    reviews: 432,
    isStock: true,
    color: ["Black", "Navy"] ,
    brand:'Sony' ,
    connectivity:'Wired'
  },
  {
    id: 4,
    name: "Sennheiser Momentum 4",
    description: "แรงบันดาลใจจากเสียงเพลง ด้วยระบบเสียงออดิโอไฟล์ระดับตำนาน พร้อมดีไซน์ที่สวมใส่สบายตลอดวัน",
    price: 13500,
    type: "Earphone",
    category: "Audiophile",
    image: HeadphoneProduct4,
    discount: 15,
    rating: 5,
    reviews: 120,
    isStock: false,
    color: ["Black", "White"] ,
    brand:'Sony' ,
    connectivity:'Wireless'
  },
  {
    id: 5,
    name: "Marshall Major IV",
    description: "ไอคอนิกดีไซน์ที่มาพร้อมการใช้งานที่ยาวนานกว่า 80 ชั่วโมง และเสียงเบสที่หนักแน่นตามสไตล์ Marshall",
    price: 5490,
    type: "Headphone",
    category: "Lifestyle",
    image: HeadphoneProduct5,
    discount: 5,
    rating: 3,
    reviews: 2150,
    isStock: true,
    color: ["Black", "Brown"] ,
    brand:'Apple' ,
    connectivity:'Wireless'
    
  },
  {
    id: 6,
    name: "JBL Reflect Flow Pro",
    description: "หูฟังออกกำลังกายกันน้ำมาตรฐาน IP68 พร้อมเทคโนโลยีเสริมการรับยินเสียงรอบข้างเพื่อความปลอดภัย",
    price: 6990,
    type: "Headphone",
    category: "Sport",
    image: HeadphoneProduct6,
    discount: 30,
    rating: 2,
    reviews: 98,
    isStock: true,
    color: ["Black", "Blue"] ,
    brand:'Huawei' ,
    connectivity:'Wireless'
  },
  {
    id: 7,
    name: "Logitech G Pro X 2",
    description: "หูฟังเกมมิ่งระดับโปร พร้อมไดรเวอร์ Graphene 50 มม. เพื่อเสียงที่แม่นยำและการสื่อสารที่ชัดเจน",
    price: 8990,
    type: "Headphone",
    category: "Gaming",
    image: HeadphoneProduct7,
    discount: 12,
    rating: 4.5,
    reviews: 310,
    isStock: true,
    color: ["Black", "White", "Pink"] ,
    brand:'Apple' ,
    connectivity:'Bluetooth'
  },
  {
    id: 8,
    name: "Audio-Technica M50xBT2",
    description: "หูฟังมอนิเตอร์ระดับสตูดิโอในเวอร์ชันไร้สาย ให้เสียงที่เที่ยงตรงและเป็นธรรมชาติที่สุด",
    price: 7690,
    type: "Headphone",
    category: "Studio",
    image: HeadphoneProduct8,
    discount: 0,
    rating: 4,
    reviews: 5200,
    isStock: true,
    color: ["Black", "Lantern Orange"] ,
    brand:'Huawei' ,
    connectivity:'Bluetooth'
  }
];

const deliveryData = [
    { label: 'Name:', value: 'Peach' },
    { label: 'Address:', value: '9/196 ต.เสม็ด อ.เมือง ถ.พระยาสัจจา' },
    { label: 'City:', value: 'Chonburi' },
    { label: 'Zip Code:', value: '20000' },
    { label: 'Mobile:', value: '0988929171' },
];

    return <>
        <div style={{display:'grid' , gridTemplateColumns:'repeat(auto-fit, minmax(350px, 1fr))' , gap:'20px' , margin:'40px'}}>
            <div style={{display:'grid' , gridTemplateRows:'auto auto' , gap:'20px'}}>
                <div style={{
                    border: '1px solid #b9b9b9',
                    borderRadius: 10,
                    padding: '30px', 
                    minHeight: '300px'
                            }}>
                        <h2 style={{ fontSize: 28, marginBottom: 20, marginTop: 0 }}>Review Item And Shipping</h2>
    
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', // ให้ยืดหยุ่นถ้าจอแคบ
                            alignItems: 'center',
                            gap: '20px' ,
                                    }}>
                           
                            <img 
                                style={{ width: '100%', maxWidth: 220, aspectRatio: '1/1.1', objectFit: 'cover' }} 
                                src={products[0].image} 
                                alt={products[0].name} 
                            />

                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px'}}>
                                <h3 style={{ margin: 0, fontSize: 20 }}>{products[0].name}</h3>
                                <p style={{ margin: 0, color: '#666' , alignSelf:'start' }}>Color: Pink</p>
                            </div>

                           
                            <div style={{ textAlign: 'right' }}>
                                <h3 style={{ margin: 0, fontSize: 22 }}>${products[0].price}</h3>
                                <p style={{ margin: 0, color: '#666' }}>Quantity: 01</p>
                            </div>
                        </div>
                </div>
                <div style={{
        minHeight: '400px', 
        border: '1px solid #b9b9b9', 
        borderRadius: 10, 
        padding: '30px'
    }}>
        <div style={{display:'flex' , justifyContent:'space-between' , marginBottom:'25px' , alignItems:'flex-start'}}>
        <h2 style={{ marginTop: 0 }}>Delivery Information</h2>
        <button style={{ borderRadius:999 , border:'none' , cursor:'pointer' , padding:'10px 20px'}}>Edit Information</button>
        </div>
        
        {}
        <div style={{ 
        borderRadius: 10, 
        padding: '30px',
        display: 'flex',
        flexDirection: 'column', 
        gap: '5vh' 
        }}>
            {deliveryData.map((item, index) => (
                <div key={index}>
                    <span style={{ fontWeight: 'bold', color: '#333' , minWidth: '100px',
            display: 'inline-block' }}>{item.label}</span>
                    <span style={{ color: '#888' }}> {item.value}</span>
                </div>
            ))}
        </div>
    </div>
            </div>
                <div style={{minHeight:'300px' , border:'1px solid #b9b9b9' , borderRadius:10 , padding:'30px'}}>
    <h2>Order Summary</h2>
    <div style={{
    display: 'flex',                 
    justifyContent: 'space-between', 
    alignItems: 'center',            
    width: '100%',                 
    backgroundColor: '#f5f5f5',     
    border: '1px solid #e0e0e0',    
    borderRadius: '999px',          
    padding: '4px 4px 4px 20px',    
    marginTop: '15px'
}}>
    <input 
        type="text" 
        placeholder="Enter Coupon Code" 
        style={{
            border: 'none',          
            background: 'none',      
            outline: 'none',        
            color: '#333',          
            flex: 1,                 
            fontSize: '14px'
        }} 
    />
    <button style={{
        padding: '10px 20px', 
        borderRadius: '999px', 
        backgroundColor: '#074d0d', 
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold'
    }}>
        Apply Coupon
    </button>
</div>

<hr className='mthr'></hr>

<h2>Payment Detail</h2>

<hr className='mthr'></hr>


      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Cash on Delivery" control={<Radio sx={{color:'#074d0d' , '&.Mui-checked': { color: '#074d0d' }}} />} label="Cash on Delivery" />
        <FormControlLabel value="Shopcart Card" control={<Radio sx={{color:'#074d0d' , '&.Mui-checked': { color: '#074d0d' }}} />} label="Shopcart Card" />
        <FormControlLabel value="Paypal" control={<Radio sx={{color:'#074d0d' , '&.Mui-checked': { color: '#074d0d' }}} />} label="Paypal" />
        <FormControlLabel value="Credit or Debut Card" control={<Radio sx={{color:'#074d0d' , '&.Mui-checked': { color: '#074d0d' }}} />} label="Credit or Debut Card" />
      </RadioGroup>
        
        <p style={{marginTop:20}}>Email*</p>
        <input style={{padding:'10px 50px 10px 10px'}} type='email' placeholder='Type here...'></input>
        <p style={{marginTop:20}}>Card Holder Name*</p>
        <input style={{padding:'10px 50px 10px 10px'}} type='email' placeholder='Type here...'></input>
</div>  
        </div>
    </>
}

export default OrderSummary