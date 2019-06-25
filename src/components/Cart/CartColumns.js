import React from 'react'

const componentName = () => {
    return (
        <div className="container-fluid text-center d-none d-lg-block font-weight-bold">
            <div className="row">
               <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">product's name</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">product's price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">total</p>
                </div> 
            </div>
            
        </div>
    )
}

export default componentName