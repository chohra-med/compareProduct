import React, {Fragment, useEffect} from "react";
import "./css/App.css"
import Header from "../../component/commun/Header";
import Content from "../../component/commun/Content";
import {useDispatch, useSelector} from "react-redux";
import {dispatchAction} from "../../services/utils/function.service";
import productActions from "../../redux/product/actions";
import {Space, Spin, Layout} from "antd";
import ProductContainer from "./ProuductContainer";
import SiderProducts from "../../component/product/SiderProducts";

const {Footer} = Layout;


function App() {
    const {loading, products, selectedProducts} = useSelector(state => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(dispatchAction(productActions.GET_PRODUCTS))
    }, [])
    return (

        <Layout style={{minHeight: '100vh'}} style={{
            backgroundColor: '#F4F4F4'
        }}>
            {
                !loading && products.length !== 0 ? (
                    <>
                        <SiderProducts products={products} selectedProducts={selectedProducts}/>
                        <Layout className="site-layout">

                            <Content>
                                <Header/>


                                <Fragment>
                                    <ProductContainer products={products}/>
                                </Fragment>
                            </Content>
                        </Layout>
                    </>
                ) : (
                    <>
                        <Layout className="site-layout">
                            <Content>
                                <Space>
                                    <Spin size="large"/>
                                </Space>
                            </Content>
                        </Layout>
                    </>
                )

            }
            <Footer/>
        </Layout>
    )
}

export default App
