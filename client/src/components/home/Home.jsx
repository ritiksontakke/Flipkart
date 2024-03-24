import { useEffect } from 'react';

//components
import NavBar from './NarBar'
import Banner from './Banner'
import Slide from './Slide';


import { Box, styled } from '@mui/material';

import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import MidSlide from './MidSlide';
import MidSection from './MidSection'

const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;

const Home = () =>{
       
    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(getProducts())
    }, [dispatch])

    return(
      <>
          <NavBar/>
         <Component>
          <Banner />
          <MidSlide products={products} title="Deal of the day" timer={true}/>
          <MidSection />
          <Slide products={products}  title="Discount for You" timer ={false}/>
          <Slide products={products}  title='Suggested Items' timer ={false}/>
          <Slide products={products} title='Top Selection' timer ={false}/>
          <Slide products={products} title='Recommended Items' timer ={false}/>
          </Component>  
      </>
      
    )
}

export default Home;