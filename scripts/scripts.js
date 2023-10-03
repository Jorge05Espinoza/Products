// Clase del producto a ingresar
class Product {
    constructor(name, price, quantity, date) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.date = date;
    }
}


let form=document.getElementById("product-form");
 form.onsubmit= function mostrarProducto(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    const date = document.getElementById("date").value;
    
    let product =new Product(name,price,quantity,date);
    let ui = new UI();
    ui.addProduct(product);
    ui.resetForm();
 };

class UI{
    addProduct(product){
    const productList=document.getElementById('product-list');
    const element = document.createElement('div');
    element.innerHTML =`
    <div class="card-body"">
        <div class="card-body">
            <strong>Product: ${product.name} </strong>
            <strong>Product Quantity:${product.quantity}</strong>
            <strong>Product Price:${product.price} </strong>
            <strong>Product Date:${product.date}</strong>
            </div>
        </div> 
    `;
productList.appendChild(element);

    }
    resetForm(){
        document.getElementById('product-form').reset();
        document.getElementById('year').valueAsDate = new Date();        
    };

    deleteProduct(){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product deleted successfully', 'info');
        }
    }

    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        //Showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}


//Obtener los datos DOM
document.getElementById('year').valueAsDate = new Date();
document.getElementById('product-form')
    .addEventListener('submit', function(e){
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const quantity = document.getElementById('quantity').value;
        const year = document.getElementById('year').value;

        const product = new Product(name, price, quantity, year);

        const ui = new UI();

        if(name === '' || price === '' || quantity === '' || year === ''){
            return ui.showMessage('Complete fields please', 'danger');
        }
        
        ui.addProduct(product);
        ui.resetForm();
        ui.showMessage('Product added successfully', 'success');

        e.preventDefault();
    });

    document.getElementById('product-list')
        .addEventListener('click', function(e){
            const ui = new UI();
            ui.deleteProduct(e.target);

    });