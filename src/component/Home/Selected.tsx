import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

type filters = {
  type:string
  price:string,
  review:string,
  brand:string,
  connectivity:string
}

type props = {
  filters:filters
  setFilters:React.Dispatch<React.SetStateAction<filters>>;
}

export default function SelectSmall({filters , setFilters}:props) {

  const handleFilterChange = (event: SelectChangeEvent<string>) => {
  const { name, value } = event.target;

 
  let newFilters = { ...filters, [name]: value };

  
  if (name === 'price') {
    newFilters.review = '';
    newFilters.type = '';
    newFilters.brand = '' ;
    newFilters.connectivity = '' ;
  }


  if (name === 'review') {
    newFilters.price = ''; 
    newFilters.type = '';
    newFilters.brand = '' ;
    newFilters.connectivity = '' ;
  }

  if (name === 'type') {
    newFilters.price = ''; 
    newFilters.review = '';
    newFilters.brand = '' ;
    newFilters.connectivity = '' ;
  }

  if (name === 'brand') {
    newFilters.price = ''; 
    newFilters.review = '';
    newFilters.type = '' ;
    newFilters.connectivity = '' ;
  }

  if (name === 'connectivity') {
    newFilters.price = ''; 
    newFilters.review = '';
    newFilters.brand = '' ;
    newFilters.type = '' ;
  }

  
  setFilters(newFilters);
};

  return (<div className='Type'>
    <span>
    <FormControl sx={{ m: 1}} size="small">
      <Select
        name="type"
        sx={{borderRadius:10 , backgroundColor:'whitesmoke'}}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={filters.type}
        onChange={handleFilterChange}
        displayEmpty
      >
        <MenuItem value="" disabled>
          <em>Headphone Type</em>
        </MenuItem>
        <MenuItem value={'Headphone'}>Headphone</MenuItem>
        <MenuItem value={'Earphone'}>Earphone</MenuItem>
        <MenuItem value={'Airpods'}>Airpods</MenuItem>
      </Select>
    </FormControl>


    <FormControl sx={{ m: 1}} size="small">
      <Select
        name="price"
        sx={{borderRadius:10 , backgroundColor:'whitesmoke'}}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={filters.price}
        onChange={handleFilterChange}
        displayEmpty
      >
        <MenuItem value="" disabled>
          <em>Price</em>
        </MenuItem>
        <MenuItem value={'price-asc'}>Low to High</MenuItem>
        <MenuItem value={"price-desc"}>High to Low</MenuItem>
      </Select>
    </FormControl>


    <FormControl sx={{ m: 1}} size="small">
      <Select
        name="review"
        sx={{borderRadius:10 , backgroundColor:'whitesmoke'}}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={filters.review}
        onChange={handleFilterChange}
        displayEmpty
      >
        <MenuItem value="" disabled>
          <em>Review</em>
        </MenuItem>
        <MenuItem value={"top-rated"}>Top Rate</MenuItem>
        <MenuItem value={"low-rating"}>Row Rate</MenuItem>
      </Select>
    </FormControl>

    <FormControl sx={{ m: 1}} size="small">
      <Select
        name="brand"
        sx={{borderRadius:10 , backgroundColor:'whitesmoke'}}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={filters.brand}
        onChange={handleFilterChange}
        displayEmpty
      >
        <MenuItem value="" disabled>
          <em>brand</em>
        </MenuItem>
        <MenuItem value={'Apple'}>Apple</MenuItem>
        <MenuItem value={'Sony'}>Sony</MenuItem>
        <MenuItem value={'Huawei'}>Huawei</MenuItem>
      </Select>
    </FormControl>

    <FormControl sx={{ m: 1}} size="small">
      <Select
        name="connectivity"
        sx={{borderRadius:10 , backgroundColor:'whitesmoke'}}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={filters.connectivity}
        onChange={handleFilterChange}
        displayEmpty
      >
        <MenuItem value="" disabled>
          <em>Connectivity</em>
        </MenuItem>
        <MenuItem value={'Wired'}>Wired</MenuItem>
        <MenuItem value={'Wireless'}>Wireless</MenuItem>
        <MenuItem value={'Bluetooth'}>Bluetooth</MenuItem>
      </Select>
    </FormControl>


    </span>
</div>


  );
}


