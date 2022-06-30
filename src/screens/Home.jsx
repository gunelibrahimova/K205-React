import React, { useEffect, useState } from 'react'
import Category from '../components/Category/Category'
import Product from '../components/Product/Product'
import Slider from '../components/Slider/Slider'
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../api/Config';
import { getCategoriesAction } from '../redux/Actions/CategoryAction';

const Home = () => {
//   const [categories,setCategories] = useState([])

  const dispatch = useDispatch();

//   const getCategories = async () => {
//     await fetch(BASE_URL + "Category/getall")
//         .then((res) => res.json())
//         .then((data) => setCategories(data));
//     };


    const {categories} = useSelector((state) => state.category)

    useEffect(() => {
        dispatch(getCategoriesAction())
      }, []);

    return (
        <>
            <Product />
            <Slider />
            {
                categories.map((e)=>(
                    <div className="div">
                    <Category catName={e.name} />
                    </div>
                ))
            }
        </>
    )
}

export default Home