import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SingleProduct.css'
import IsLoading from '../Loader/IsLoading'

export default function SingleProduct() {
  const {id} = useParams();
  const [data, setDatas] = useState([])
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
      setisLoading(true)
      axios.get(`https://fakestoreapi.com/products/${id}`)
          .then(res => {
              setDatas(res.data);
              setisLoading(false);
          })
          .catch(error => {
              console.log(error)
              setisLoading(false);
          })
  }, [])
   return isLoading ? ( <div> <IsLoading/>
   </div> ):(     
    <>
    <div className="shadow-lg  bg-white rounded container mt-5 mb-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-10">
            <div className="card">
                <div className="row">
                    <div className="col-md-6">
                        <div className="images p-3">
                            <div className="text-center p-4"> <img id="main-image" src={data.image}  alt='img' width="250" /> </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span className="ml-1">Back</span> </div> <i className="fa fa-shopping-cart text-muted"></i>
                            </div>
                            <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">Orianz</span>
                                <h5 className="text-uppercase">{data.title}</h5>
                                <div className="price d-flex flex-row align-items-center"> <span className="act-price">${data.price}</span>
                                </div>
                            </div>
                            <p className="about">{data.description} </p>
                            
                            <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4">Buy Now</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    
  
      
    </>
  )
}
