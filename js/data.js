const baseUrl = 'https://back-place-api.vercel.app/api/users'


export async function getBydata() {
    try {
        const res = await fetch(baseUrl)
        const data = await res.json()
        return data.getBy
    } catch (error) {
        console.log(error);
    }
}

export async function newProductData() {
    try {
        const res = await fetch(baseUrl)
        const data = await res.json()
        return data.newProduct
    } catch (error) {
        console.log(error);
    }
}


export async function recomendedProductsData() {
    try {
        const res = await fetch(baseUrl)
        const data = await res.json()
        return data.recomendedProducts
    } catch (error) {
        console.log(error);
    }
}