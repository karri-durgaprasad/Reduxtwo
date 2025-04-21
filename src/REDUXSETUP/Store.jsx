import Pizzareducer from '../REDUXSETUP/Pizzareducer'
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
       reducer:{
               pizzas:Pizzareducer,
       }
});
export default store;