const url = 'https://fakestoreapi.com/products'

const btn = document.getElementById('btn')
const display = document.getElementById('list')
btn.addEventListener('click', () => {
    axios.get(url)
        .then(response => {
            const products = response.data
            products.forEach(el => {
                const item = document.createElement('li')
                item.textContent = el.title
                display.appendChild(item)
            })
        })
        .catch(err => {
            console.error(err)
        });
});
