import React from 'react';
import JSON from './db.json';
import ProductList from './productListing';

class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Products Page',
            products: JSON
        }
    }

    render() {
        console.log(this.state.products);
        return (
            <div>
                <h2>
                    {this.state.title}
                </h2>
                <ProductList prodList={this.state.products}/>
            </div>
        )
    }
}

export default Products;