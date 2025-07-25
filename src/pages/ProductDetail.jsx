import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function ProductDetail(){
    const {id} = useParams();
    const url= `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[url])
    return(
        <>
            {product &&(
                <div className="col-12">
                    <div className="card">
                        <div className="row">
                            <div className="col-5 border-end d-flex">
                                <img src={product.image} className="mx-auto rouded" alt={product.title} />
                            </div>
                            <div className="col-7">
                                <div className="card-body px-1 d-flex flex-column h-100" key={product.id}>
                                    <h1 className="card-title mb-3">{product.title}</h1>
                                    <p className="card-text mb-2  fw-medium"><span className="fw-bold me-1 ">Categoria:</span>{product.category}</p>
                                    <p className="card-text mb-2  fw-medium"><span className="fw-bold me-1 ">Prezzo:</span>{product.price}€</p>
                                    <p className="card-text mb-2  fw-medium"><span className="fw-bold me-1 ">Descrizione:</span>{product.description}</p>
                                    <button className="btn btn-primary w-25 mt-4 ">Compra</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            )}
        </>
    )
}