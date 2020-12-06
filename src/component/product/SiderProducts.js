import React, {Fragment} from "react";

import "./css/ListProducts.css"
import {Layout, Col, Menu, Checkbox, Typography, Row, Divider} from "antd";
import ProductItem from "./ProductItem";
import {useDispatch} from "react-redux";
import {dispatchAction} from "../../services/utils/function.service";
import actions from "../../redux/product/actions";
import Title from "antd/es/typography/Title";

const {Sider} = Layout;
const {SubMenu} = Menu;

const {Text} = Typography;

function SiderProducts({products, selectedProducts}) {
    const dispatch = useDispatch()

    const addToSelectedProduct = (productId) => {
        dispatch(dispatchAction(actions.SET_SELECT_PRODUCT, {productId: productId}))
        console.log({selectedProducts});
    }
    const deleteFromSelectedProduct = (productId) => {
        dispatch(dispatchAction(actions.DELETE_SELECT_PRODUCT, {productId: productId}))
        console.log({selectedProducts});
    }

    const renderListProduct = () => {
        console.log(products);
        return (
            <Sider style={{
                backgroundColor: '#F4F4F4'
            }}>
                <Title level={5}
                       style={{
                           alignSelf: 'center',
                           textAlign: 'center',
                           margin: 20
                       }}> Select a Product</Title>

                <div style={{
                    backgroundColor: '#FAFAFA'
                }}>

                    {products.map((product, index) => {
                        let selected = selectedProducts.indexOf(product.name) !== -1;
                        return (
                            <Row key={index}
                                 style={{
                                     marginTop: 10,
                                 }}
                                 onClick={() => {
                                     selected ?
                                         deleteFromSelectedProduct(product.name)
                                         :
                                         addToSelectedProduct(product.name)
                                 }}
                            >
                                <Col span={4}
                                     style={{
                                         paddingLeft: 8,
                                         paddingTop: 3,

                                     }}>
                                    <Checkbox

                                        checked={selected}
                                        onClick={() => {
                                            selected ?
                                                deleteFromSelectedProduct(product.name)
                                                :
                                                addToSelectedProduct(product.name)
                                        }}
                                    />
                                </Col>
                                <Col span={20}>
                                    <Text strong>{product.name} </Text>
                                </Col>
                                {index !== products.length - 1 && <Divider/> }
                            </Row>
                        );

                    })
                    }

                </div>

            </Sider>

        )
    }
    return (
        <Row className={"list_product_container"}>
            {renderListProduct()}
        </Row>
    )
}

export default SiderProducts
