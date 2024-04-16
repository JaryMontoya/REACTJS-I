import React, { useState, useEffect } from 'react';

function ProductList() {
  // Utiliza el hook useState para crear un estado local para los productos
  const [products, setProducts] = useState([]);

  // Utiliza el hook useEffect para realizar una consulta al API simulado al montar el componente
  useEffect(() => {
    // Realiza una consulta al API simulado
    fetch('https://fakestoreapi.com/products')
     .then(response => response.json())
     .then(products => setProducts(products));
  }, []); // La matriz vacía [] indica que el efecto solo se ejecutará una vez, al montar el componente

  return (
    <div>
      <h1>Lista de productos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>Precio: ${product.price}</p>
            <img src={iphone.img} alt={product.title} />
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;


fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'Televisor',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

            fetch('https://fakestoreapi.com/products/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'Teléfono',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

            fetch('https://fakestoreapi.com/products/7',{
                method:"PATCH",
                body:JSON.stringify(
                    {
                        title: 'Audífonos',
                        price: 13.5,
                        description: 'lorem ipsum set',
                        image: 'https://i.pravatar.cc',
                        category: 'electronic'
                    }
                )
            })
                .then(res=>res.json())
                .then(json=>console.log(json))

                fetch('https://fakestoreapi.com/products/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

            fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
            .then(json=>console.log(json))

            fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            body:JSON.stringify(
                {
                    userId:5,
                    date:"2020-02-03",
                    products:[{productId:5,quantity:1},{productId:1,quantity:5}]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))