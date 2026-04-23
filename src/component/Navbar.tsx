import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HeadphoneProduct1 from '../picture/HeadPhone.jpg'
import HeadphoneProduct2 from '../picture/Product2.jpg'
import HeadphoneProduct3 from '../picture/Product3.jpg'
import HeadphoneProduct4 from '../picture/Product4.jpg'
import HeadphoneProduct5 from '../picture/Product5.jpg'
import HeadphoneProduct6 from '../picture/Product6.jpg'
import HeadphoneProduct7 from '../picture/Product7.jpg'
import HeadphoneProduct8 from '../picture/Product8.jpg'

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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  right:0 ,
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function SearchAppBar() {

  const [searchQuery, setSearchQuery] = useState("");

const filteredProducts = products.filter(item => 
  item.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <Box>
      <AppBar position="static" sx={{backgroundColor:'white'}} >
        <Toolbar sx={{justifyContent:'space-between'}}>
          <Box sx={{display:'flex', gap:5 , alignItems:'center' }}>
            <Link to={'/'} style={{textDecoration:'none'}}>
            <div style={{display:'flex'}}>
           <ShoppingCartCheckoutIcon sx={{ mt: 0.5 , color:'green'}} />
           <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'green',
              textDecoration: 'none',
            }}
          >
            Shopcart
          </Typography>
          </div>
          </Link>

          <Typography
            sx={{ display: { xs: 'none', sm: 'flex' } , color:'black' }}
          >
            Categories
          </Typography>

          <Typography
            sx={{ display: { xs: 'none', sm: 'flex' } , color:'black' }}
          >
            Deals
          </Typography>

          <Typography
            sx={{ display: { xs: 'none', sm: 'block' } , color:'black' }}
          >
            What's New
          </Typography>

          <Typography
            sx={{ display: { xs: 'none', sm: 'block' } , color:'black' }}
          >
            Delivery
          </Typography>
          </Box>

          <Box sx={{display:'flex'}}>
          <Search sx={{ color: 'black', backgroundColor: '#EBEBEB', position: 'relative' }}>
  <SearchIconWrapper>
    <SearchIcon />
  </SearchIconWrapper>

  <StyledInputBase
    placeholder="ค้นหาสินค้า..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    sx={{width:'20vw'
      
    }}
  />


  {searchQuery !== "" && (
    <div style={{
      position: 'absolute',
      top: '100%', 
      left: 0,
      right: 0,
      backgroundColor: 'white',
      boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
      zIndex: 1000,
      maxHeight: '300px',
      overflowY: 'auto',
      borderRadius: '0 0 4px 4px' 
    }}>
      {filteredProducts.map(item => (
        <Link 
          to={`/product/${item.id}`} 
          key={item.id}

          onClick={() => setSearchQuery("")} 
          style={{ textDecoration: 'none', color: 'black', display: 'block' }}
        >
          <div style={{ 
            padding: '12px 15px', 
            borderBottom: '1px solid #f0f0f0',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
          >
            {item.name}
          </div>
        </Link>
      ))}
      
     
      {filteredProducts.length === 0 && (
        <div style={{ padding: '15px', color: 'gray', textAlign: 'center' }}>
          ไม่พบสินค้า "{searchQuery}"
        </div>
      )}
    </div>
  )}
</Search>
          </Box>


          <Box sx={{display:'flex' , gap:5}}>
          <Typography
            sx={{ display: { xs: 'none', sm: 'block' } , color:'black' }}
          >
            Account
          </Typography>

          <Typography
            sx={{ display: { xs: 'none', sm: 'block' } , color:'black' }}
          >
            Cart
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}