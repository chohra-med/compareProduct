import actions from "./actions";
import {all, takeEvery, put, call, select} from "redux-saga/effects"
import * as productService from "../../services/product.service"
import {failure, requestLoading, succes} from "../../services/utils/function.service";
import sentence from "../../constants/Constante";
import * as productHelper from "../../helpers/product.utils"

export function* GET_PRODUCTS() {
    console.log("get Products in saga")
    yield put(requestLoading(actions.SET_STATE, true))
    const response = yield call(productService.getProducts)
    console.log(response);
    if (response) {
        let listProduct = response;
        yield put(succes({products: listProduct, filterdFilm: []}, actions.SET_STATE))
    } else yield put(failure({error: sentence.error}))
    yield put(requestLoading(actions.SET_STATE, false))
}

export function* SET_SELECT_PRODUCT({payload}) {
    const {productId} = payload
    let {selectedProducts, products} = yield select(state => state.products);

    let newProducts = productHelper.addToSelection(selectedProducts, productId);
    let differentKeys = [];
    try {
        differentKeys = productHelper.setDifferentElement(products, selectedProducts);
    } catch (e) {
        console.log(e);
    }
    yield put(succes({selectedProducts: newProducts, differentKeys: differentKeys}, actions.SET_STATE))
}

export function* DELETE_SELECT_PRODUCT({payload}) {
    const {productId} = payload
    let {selectedProducts, products} = yield select(state => state.products);
    let newProducts = productHelper.deleteFromSelection(selectedProducts, productId)
    console.log({newProducts});
    let differentKeys = [];
    try {
        differentKeys = productHelper.setDifferentElement(products, selectedProducts);
    } catch (e) {
        console.log(e);
    }
    yield put(succes({selectedProducts: newProducts, differentKeys: differentKeys}, actions.SET_STATE))
}


export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_PRODUCTS, GET_PRODUCTS),
        takeEvery(actions.SET_SELECT_PRODUCT, SET_SELECT_PRODUCT),
        takeEvery(actions.DELETE_SELECT_PRODUCT, DELETE_SELECT_PRODUCT),
    ])
}
