import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextRating from './Star';
import Button from '@mui/material/Button';
import HeadphoneProduct1 from '../../picture/Product.jpg'
import HeadphoneProduct2 from '../../picture/Product2.jpg'
import HeadphoneProduct3 from '../../picture/Product3.jpg'
import HeadphoneProduct4 from '../../picture/Product4.jpg'
import HeadphoneProduct5 from '../../picture/Product5.jpg'
import HeadphoneProduct6 from '../../picture/Product6.jpg'
import HeadphoneProduct7 from '../../picture/Product7.jpg'
import HeadphoneProduct8 from '../../picture/Product8.jpg'
import { Link } from 'react-router-dom';

type filters = {
  type:string
  price:string,
  review:string,
  brand:string,
  connectivity:string
}

type props = {
  filters:filters
}


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

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



export default function BasicGridmap({filters}:props) {
  
  let sortedProducts = [...products]; 

if (filters.price === 'price-asc') {
 
  sortedProducts.sort((a, b) => a.price - b.price);
} else if (filters.price === 'price-desc') {

  sortedProducts.sort((a, b) => b.price - a.price);
} else if (filters.review === 'top-rated') {
  sortedProducts.sort((a, b) => b.rating - a.rating);
} else if (filters.review === "low-rating") {
  sortedProducts.sort((a, b) => a.rating - b.rating);
} else if (filters.type === "Headphone") {
  sortedProducts = sortedProducts.filter((product => product.type === "Headphone"))
} else if (filters.type === "Earphone") {
  sortedProducts = sortedProducts.filter((product => product.type === "Earphone"))
} else if (filters.type === "Airpods") {
  sortedProducts = sortedProducts.filter((product => product.type === "Airpods"))
} else if (filters.brand === "Apple") {
  sortedProducts = sortedProducts.filter((product => product.brand === "Apple"))
} else if (filters.brand === "Huawei") {
  sortedProducts = sortedProducts.filter((product => product.brand === "Huawei"))
} else if (filters.brand === "Sony") {
  sortedProducts = sortedProducts.filter((product => product.brand === "Sony"))
} else if (filters.connectivity === "Wired") {
  sortedProducts = sortedProducts.filter((product => product.connectivity === "Wired"))
} else if (filters.connectivity === "Wireless") {
  sortedProducts = sortedProducts.filter((product => product.connectivity === "Wireless"))
} else if (filters.connectivity === "Bluetooth") {
  sortedProducts = sortedProducts.filter((product => product.connectivity === "Bluetooth"))
}

  return <div>
    <Box sx={{ flexGrow: 1}}>
    <Grid container spacing={4} sx={{ ml:10 , mr:10 , mt:5 }}>
    {sortedProducts.map((product) => (     
        <Grid key={product.id} size={3} className="center">
          <Link style={{textDecoration:'none' , color:'inherit'}} to={`/product/${product.id}`}>
          <img src={product.image} className='Pic'></img>
          <p className='p'>{product.name}</p>
          <p className='p'>{product.description}</p>
          </Link>
          <TextRating value={product.rating}></TextRating>
          <Button sx={{'&:hover':{bgcolor:"#1b5e20" , color:"#ffffff"} , color:'black' , borderColor:'black', borderRadius:10 , alignSelf:"flex-start" , mt:2}} variant="outlined">Add to Cart</Button>
        </Grid>    
    ))}
    </Grid>
    </Box>
  </div>
}