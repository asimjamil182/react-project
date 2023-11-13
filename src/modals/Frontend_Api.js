import Api from "../api/Api";

async function All_Product() {
    try {
        const response = await Api.get('/products')
        return response.data;
    } catch (error) {
        return null;
    }
}

async function Product(id = 1) {
    try {
        const response = await Api.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        return null;
    }
}
async function Contact() {
    try {
        const response = await Api.get('/contacts')
        return response.data;
    } catch (error) {
        return null;
    }
}




export { All_Product, Product, Contact };