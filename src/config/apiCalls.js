export const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const BASE_NAME = IS_DEV ? '' : '/products';

const URL='https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all';

export const API = (model = undefined, id = undefined) => {
    if (model && id) {
        return `${URL}/${model}/${id}`;
    }
    if (model) {
        return `${URL}/${model}`;
    }
    return `${URL}`;
};

export const ENABLE_IMAGE_URL = IS_DEV && true;


