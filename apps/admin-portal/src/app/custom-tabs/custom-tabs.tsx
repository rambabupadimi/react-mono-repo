import { Box, Tabs, Tab } from '@mui/material';
import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router';
import styles from './custom-tabs.module.scss';

/* eslint-disable-next-line */
export interface CustomTabsProps {}

export function CustomTabs(props: CustomTabsProps) {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  useEffect(()=>{
    console.log(value, params, location.pathname.split('/')[location.pathname.split('/').length-1]);

    const dataItem = location.pathname.split('/')[location.pathname.split('/').length-1];

     if(dataItem === 'products') {
        setValue(0);
     } else if(dataItem === 'checkout') {
        setValue(1);
     } else if(dataItem === 'cart') {
        setValue(2);
     } else {
        setValue(0);
     }
  },[]);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if(newValue === 0) {
      navigate('products');
    } else if(newValue === 1) {
      navigate('checkout');
    } else {
      navigate('cart');
    }
  };

  return (
    <div className={styles['container']}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Products" />
            <Tab label="Checkout" />
            <Tab label="Cart" />
          </Tabs>
        </Box>


        {/* {value === 0 && <Products value={value} index={0}></Products>}
        {value === 1 && <Checkout value={value} index={1}></Checkout>}
        {value === 2 && <Cart value={value} index={2}></Cart>} */}

        <Outlet></Outlet>
      </Box>
    </div>
  );
}

export default CustomTabs;
