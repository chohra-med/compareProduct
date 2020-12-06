import React, {useEffect} from "react";
import "./css/ProductContainer.css"
import {useSelector} from "react-redux";
import ListProducts from "../../component/product/ListProducts";


function ProductContainer({products}) {
    const {selectedProducts} = useSelector(state => state.products);


    let productsToRender = products.filter((product, index) => (
        selectedProducts.indexOf(product.name) !== -1));

    return (
        <div className={"card_list_container bggrey botTopMar flex_column brd_box"}>
            <ListProducts products={productsToRender}/>
        </div>
    )
}

export default ProductContainer
