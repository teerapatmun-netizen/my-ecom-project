import Stack from '@mui/material/Stack';



export default function TabbarTop() {
  return (
    <div>
      <Stack direction="row" spacing={2} sx={{
        display:'flex' , 
        justifyContent:'space-between',
        backgroundColor:'#034112',
        height:30,
        alignItems:'center',
        color:'white'
      }}>
        <p>+0988929171</p>
        <p>get 50% Off on Selected Items  |  Shop Now</p>
        <p>Eng  Location</p>
      </Stack>
    </div>
  );
}