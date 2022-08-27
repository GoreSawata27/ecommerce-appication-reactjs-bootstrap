import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import IsLoading from '../Loader/IsLoading'

export default function Products() {

    const [Datas, setDatas] = useState([])
    const [isLoading, setisLoading] = useState(false)
  
    // https://dummyjson.com/products
    // https://fakestoreapi.com/products

    useEffect(() => {
        setisLoading(true)
        axios.get("https://dummyjson.com/products")         
            .then(res => {
                console.log(res);
                if(res.data && res.data.products){
                    setDatas(res.data.products);
                }else{
                    setDatas([ ])
                }
                setisLoading(false);
            })
            .catch(error => {
                console.log(error)
                setisLoading(false);
            })
    }, [])

    const abc =
        Datas.map((data) => (
            <div className='shadow-lg  bg-white rounded mx-3 my-2' key={data.id}>
                <div className="card h-90 text-center p-4 " key={data.id} style={{ width: '18rem' }}>
                    <img src={data.thumbnail} className="card-img-top " height='250px' alt={data.category} />
                    <div className="card-body">
                        <h5 className="card-title">{data.title.substring(0, 12)}</h5>
                        <div> ${data.price} </div>
                        <NavLink to={`SingleProduct/${data.id}`} className="btn shadow-lg btn-outline-dark my-2 mx-2"  >View</NavLink>
                        <NavLink to={"AddCart"}  className="btn shadow-lg  btn-outline-dark my-2 mx-2"  >AddToCart</NavLink>
                    </div>
                </div>
            </div>

        ))
        const abcd =
        Datas.map((data) => (
            <div className='shadow-lg  bg-white rounded mx-3 my-2' key={data.id}>
                <div className="card h-90 text-center p-4 " key={data.id} style={{ width: '18rem' }}>
                    <img src={data.thumbnail} className="card-img-top " height='250px' alt={data.category} />
                    <div className="card-body">
                        <h5 className="card-title">{data.title.substring(0, 12)}</h5>
                        <div> ${data.price} </div>
                        <NavLink to={`SingleProduct/${data.id}`} className="btn shadow-lg btn-outline-dark my-2 mx-2"  >View</NavLink>
                        <NavLink to={"AddCart"}  className="btn shadow-lg btn-outline-dark my-2 mx-2"  >AddToCart</NavLink>
                    </div>
                </div>
            </div>

        ))
       


    return isLoading ?( <div><IsLoading/></div> ): (
        <>  
        <div className="load shadow-lg  bg-white rounded">
            <div className='heading'>
                Products
            </div>
            <div class=" container center card-group ">
                {abc}
                {abcd}
            </div>
        </div>
        </>
    )
}
