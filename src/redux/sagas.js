import {all} from 'redux-saga/effects'
import product from "./product/sagas";

export default function* rootSaga() {
    yield all([
        product()
    ])
}
