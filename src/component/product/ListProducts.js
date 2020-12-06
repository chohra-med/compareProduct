import React, {Fragment} from "react";

import "./css/ListProducts.css"
import {Row} from "antd";
import ProductItem from "./ProductItem";
import Title from "antd/es/typography/Title";
import {useSelector} from "react-redux";
import {
    AppstoreAddOutlined,
} from '@ant-design/icons';
import sentence from "../../constants/Constante";

function ListProducts({products}) {
    const {differentKeys} = useSelector(state => state.products);

    return (
        <Row gutter={12} style={{
            minHeight: 200,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white'

        }}>
            {products.length > 0 ?
                products.map((product, index) => (
                    <ProductItem key={product.name} product={product}
                                 differentKeys={differentKeys}/>
                ))
                :
                <>
                    <div className={'flex_column centerFlex'}>

                        <AppstoreAddOutlined style={{fontSize: 30}}/>
                        <Title level={5} style={{
                            alignSelf: 'center', textAlign: 'center', justifySelf: 'center',
                            paddingTop: 10,
                        }}> {sentence.error.NO_SELECTED_ITEM}</Title>
                    </div>
                </>
            }
        </Row>
    )
}

export default ListProducts
