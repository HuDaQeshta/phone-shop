import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { BtnContainer } from './Button'
class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } =
                        value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* product text */}
                            <div className="row">
                                <div className="col-10 mxauto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="Product" />
                                </div>
                                <div className="col-10 mxauto col-md-6 my-3 text-capitalize">
                                    <h3>model : {title}</h3>
                                    <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by : <span className="text-uppercase">{company}</span>
                                    </h5>
                                    <h5 className="text-blue">
                                        <strong>price : <span>$</span>{price}</strong>
                                    </h5>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product:
                            </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    <div>
                                        <Link to="/">
                                            <BtnContainer>
                                                back to product
                                    </BtnContainer>
                                        </Link>
                                        <BtnContainer cart disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? "inCart" : "add to cart"}
                                        </BtnContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

export default Details