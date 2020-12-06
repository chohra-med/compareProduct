export const addToSelection = (selectedProducts, productId) => {
    let index = selectedProducts.findIndex((product => product === productId));
    let newSelectedProducts = selectedProducts
    if (index > -1) {
        return newSelectedProducts;
    } else {
        newSelectedProducts.push(productId);
        return newSelectedProducts
    }
}
export const deleteFromSelection = (selectedProducts, productId) => {
    let index = selectedProducts.findIndex((product => product === productId));
    if (index > -1) {
        selectedProducts.splice(index, 1);
    }
    return selectedProducts;
}

export const orderAlphabetacallyKey = (product) => {
    return Object.keys(product).sort((a, b) => {
        if (a.charAt(0).toLowerCase() < b.charAt(0).toLowerCase()) {
            return -1;
        }
        if (a.charAt(0).toLowerCase() >= b.charAt(0).toLowerCase()) {
            return 1;
        }
        return 0;

    });

}




export const setDifferentElement = (products, selectedProducts) => {
    let ourProducts = products.filter(value => (
        selectedProducts.includes(value.name)
    ));
    let elementsDifferent = [];
    Object.keys(ourProducts[0]).map(key => {
        let i = 0;
        let different = false;
        while (i < ourProducts.length - 1 && !different) {
            different = !(ourProducts[i][key].toString() === ourProducts[i + 1][key].toString());
            if (different) {
                elementsDifferent.push(key)
                break;
            }
            i++;
        }

    })
    return elementsDifferent;

}
