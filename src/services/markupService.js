const renderProductsMarkup = ({products}) => {
    const list = document.getElementById('allProducts');
    const items = products.map(product => (
        `
        <li>
            <p>Title: ${product.title}</p>
            <p>Description: ${product.description}</p>
            <p>Price: ${product.price}</p>
        </li>
        
        `
    )).join('');
    list.insertAdjacentHTML('beforeend', items);
}

const renderProductByIdMarkup = (product, section) => {
   console.log(product)
    section.insertAdjacentHTML('beforeend',         
    `
        <p>Title: ${product.title}</p>
        <p>Description: ${product.description}</p>
        <p>Price: ${product.price}</p>
    `);
}


export default {
    renderProductsMarkup,
    renderProductByIdMarkup,
}