import HeadphoneProduct1 from '../../picture/Product.jpg'
import HeadphoneProduct2 from '../../picture/Product2.jpg'
import HeadphoneProduct3 from '../../picture/Product3.jpg'
import HeadphoneProduct4 from '../../picture/Product4.jpg'
import HeadphoneProduct5 from '../../picture/Product5.jpg'
import HeadphoneProduct6 from '../../picture/Product6.jpg'
import HeadphoneProduct7 from '../../picture/Product7.jpg'
import HeadphoneProduct8 from '../../picture/Product8.jpg'
import TextRating from '../Home/Star'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'



function MainProductPage() {

  const { id } = useParams();


    
const products = [
  {
    id: 1,
    name: "Sony WH-1000XM5",
    description: "ที่สุดของการตัดเสียงรบกวน ด้วยโปรเซสเซอร์คู่และไมโครโฟน 8 ตัว ให้เสียงที่บริสุทธิ์ที่สุด",
    price: 12900,
    type: "Over-Ear",
    category: "Noise Cancelling",
    image: HeadphoneProduct1,
    discount: 10,
    rating: 5,
    reviews: 1240,
    isStock: true,
    color: ["Black", "Silver"]
  },
  {
    id: 2,
    name: "AirPods Max",
    description: "ดีไซน์ที่ผสมผสานความหรูหราเข้ากับเสียงคุณภาพสูง ฟังเพลงได้ต่อเนื่อง 20 ชั่วโมงพร้อมระบบเสียงตามตำแหน่ง",
    price: 19900,
    type: "Over-Ear",
    category: "Premium",
    image: HeadphoneProduct2,
    discount: 0,
    rating: 4.5,
    reviews: 856,
    isStock: true,
    color: ["Space Gray", "Silver", "Sky Blue", "Pink"]
  },
  {
    id: 3,
    name: "Beats Powerbeats Pro",
    description: "หูฟังไร้สายประสิทธิภาพสูงที่สร้างมาเพื่อการเคลื่อนไหว มาพร้อมขาคล้องหูที่ปรับได้และกระชับมั่นคง",
    price: 8900,
    type: "In-Ear",
    category: "Sport",
    image: HeadphoneProduct3,
    discount: 25,
    rating: 3.5,
    reviews: 432,
    isStock: true,
    color: ["Black", "Navy"]
  },
  {
    id: 4,
    name: "Sennheiser Momentum 4",
    description: "แรงบันดาลใจจากเสียงเพลง ด้วยระบบเสียงออดิโอไฟล์ระดับตำนาน พร้อมดีไซน์ที่สวมใส่สบายตลอดวัน",
    price: 13500,
    type: "Over-Ear",
    category: "Audiophile",
    image: HeadphoneProduct4,
    discount: 15,
    rating: 5,
    reviews: 120,
    isStock: false,
    color: ["Black", "White"]
  },
  {
    id: 5,
    name: "Marshall Major IV",
    description: "ไอคอนิกดีไซน์ที่มาพร้อมการใช้งานที่ยาวนานกว่า 80 ชั่วโมง และเสียงเบสที่หนักแน่นตามสไตล์ Marshall",
    price: 5490,
    type: "On-Ear",
    category: "Lifestyle",
    image: HeadphoneProduct5,
    discount: 5,
    rating: 3,
    reviews: 2150,
    isStock: true,
    color: ["Black", "Brown"]
  },
  {
    id: 6,
    name: "JBL Reflect Flow Pro",
    description: "หูฟังออกกำลังกายกันน้ำมาตรฐาน IP68 พร้อมเทคโนโลยีเสริมการรับยินเสียงรอบข้างเพื่อความปลอดภัย",
    price: 6990,
    type: "In-Ear",
    category: "Sport",
    image: HeadphoneProduct6,
    discount: 30,
    rating: 2,
    reviews: 98,
    isStock: true,
    color: ["Black", "Blue"]
  },
  {
    id: 7,
    name: "Logitech G Pro X 2",
    description: "หูฟังเกมมิ่งระดับโปร พร้อมไดรเวอร์ Graphene 50 มม. เพื่อเสียงที่แม่นยำและการสื่อสารที่ชัดเจน",
    price: 8990,
    type: "Over-Ear",
    category: "Gaming",
    image: HeadphoneProduct7,
    discount: 12,
    rating: 4.5,
    reviews: 310,
    isStock: true,
    color: ["Black", "White", "Pink"]
  },
  {
    id: 8,
    name: "Audio-Technica M50xBT2",
    description: "หูฟังมอนิเตอร์ระดับสตูดิโอในเวอร์ชันไร้สาย ให้เสียงที่เที่ยงตรงและเป็นธรรมชาติที่สุด",
    price: 7690,
    type: "Over-Ear",
    category: "Studio",
    image: HeadphoneProduct8,
    discount: 0,
    rating: 4,
    reviews: 5200,
    isStock: true,
    color: ["Black", "Lantern Orange"]
  }
];

  const product = products.find((item) => item.id.toString() === id);

  const recommendedProducts = products
  .filter((item) => item.id.toString() !== id) 
  .sort(() => 0.5 - Math.random())
  .slice(0, 4); 

    return (
        <>
            <p className="section">Electronic / Audio / Headphone</p>
            <div className="grid">
                <div className='max'>
                    <img src={product?.image} className='img'></img>
                    <div className='flex'>
                    {recommendedProducts.map((rec) => (
                        <div>
                        <Link to={`/product/${rec.id}`}>
                        <img src={rec.image} className='small'></img>
                        </Link>
                        </div>
                    
                ))}
                </div>
                </div>
                
                <div className='ml'>
                    <h1>{product?.name}</h1>
                    <p className='smallp'>{product?.description}</p>
                    <TextRating value={product?.rating ?? 0}></TextRating>
                    <hr className='mthr'></hr>
                    <h2 className='smallp'>${product?.price} OR {((product?.price ?? 0) / 12).toFixed(2) + ' / Month'}</h2>
                    <p>Suggested payments with 12 months special financing </p>
                    <hr className='mthr'></hr>
                    <h2>Choose Color</h2>
                    <button className='btnred'></button>
                    <button className='btnblue'></button>
                    <button className='btnpink'></button>
                    <button className='btnblack'></button>
                    <button className='btnwhite'></button>
                    <hr className='mthr'></hr>
                    <div style={{display:'flex' , alignItems:'center'}}>
                    <button style={{width:'150px' , 
                      height:50 , 
                      borderRadius:999 ,
                      border:2 ,
                      display:'inline-flex' ,
                      justifyContent:'space-around'
                      }}>
                    <RemoveIcon sx={{alignSelf:'center'}}></RemoveIcon>
                    <p style={{display:'inline' , marginBottom:0}}>1</p>
                    <AddIcon sx={{alignSelf:'center'}}></AddIcon>
                    </button>
                    <div style={{display:'inline-flex' , flexDirection:'column' , marginLeft:10 }}>
                    <span>Only 12 Items Left!</span>
                    <span>Don't miss it</span>
                    </div>
                    </div>
                    <button style={{width:180 , height:60 , borderRadius:999 , backgroundColor:"#054209" , border:3 , color:'white' , fontFamily:"Roboto" , fontSize:16 , marginTop:20}}>Buy Now</button>
                    <button style={{width:180 , height:60 , borderRadius:999 , backgroundColor:"#ffffff" , border:2 , borderStyle:'solid' , borderColor:"#054209" , color:"#054209" , fontWeight:500 , fontFamily:"Roboto" , fontSize:16 , marginTop:20 , marginLeft:20}}>Add to cart</button>
                    
                    <div style={{
                    display: 'grid',
                    gridTemplateRows: '75px 75px',
                    border: '1px solid #b9b9b9',
                    backgroundColor: 'white' ,
                    marginTop: '20px'
                    }}>
                      <p style={{ 
                      height: '75px' ,
                      margin: 0, 
                      borderBottom: '1px solid #b9b9b9', // เส้นคั่นกลาง
                      display: 'flex', 
                      flexDirection: 'column' ,
                      justifyContent: 'center' ,
                      padding: '0 10px' 
                    }}>Free Delevery <br/> <span style={{color:'#b9b9b9' , textDecoration:'underline' }}>Enter Your Postal code for Delivery Availibility</span></p>
                    <p style={{ 
                      height: '75px' ,
                      margin: 0, 
                      borderBottom: '1px solid #b9b9b9', // เส้นคั่นกลาง
                      display: 'flex', 
                      flexDirection: 'column' ,
                      justifyContent: 'center' ,
                      padding: '0 10px' 
                    }}>Free Delevery <br/> <span style={{color:'#b9b9b9' , textDecoration:'underline' }}>Enter Your Postal code for Delivery Availibility</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainProductPage