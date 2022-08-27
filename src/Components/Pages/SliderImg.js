import React from 'react'
export default function SliderImg() {
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="https://opencart.templatemela.com/OPC10/OPC100247/OPC4/image/cache/catalog/Main-Banner-1-1903x700.jpg" className="d-block h-100 w-100" alt="..." />
                    </div>
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src="https://opencart.templatemela.com/OPC10/OPC100247/OPC4/image/cache/catalog/Main-Banner-2-1903x700.jpg" className="d-block h-100 w-100" alt="..." />
                    </div>

                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="https://opencart.templatemela.com/OPC10/OPC100247/OPC5/image/cache/catalog/Main-Banner-2-1903x680.jpg" className="d-block h-100  w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>




        </div>
    )
}
