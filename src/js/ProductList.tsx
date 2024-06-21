import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/ProductList.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  weight?: number; // Optional weight property
}

interface ProductListProps {
  addToCart: (product: Product, weight: number) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Миндаль',
    description: 'Высококачественный миндаль с лучших ферм.',
    price: 12.99,
    image: 'https://media.istockphoto.com/id/1153088551/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B8%D0%BD%D0%B4%D0%B0%D0%BB%D1%8C-%D1%84%D0%BE%D0%BD%D1%8B-%D0%BE%D1%80%D0%B5%D1%85%D0%B8-%D0%B5%D0%B4%D0%B0-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D1%83%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D1%83%D1%80%D0%BE%D0%B6%D0%B0%D0%B9.jpg?s=612x612&w=0&k=20&c=F3VvoOdiTrRpClGZT2DaeL-WoVcaBx4Algc9aUSzHa0='
  },
  {
    id: 2,
    name: 'Курага',
    description: 'Вкусная и питательная курага.',
    price: 9.99,
    image: 'https://oreshkashop.ru/pictures/good_id2539/pic_name10fc09905902ed82907dddfe342751f5.jpg'
  },
  // Add more products as needed
];

const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>, product: Product) => {
    const weight = parseFloat(event.target.value);
    product.weight = weight;
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <Card key={product.id} className="product-card">
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>${product.price} за кг</Card.Text>
            <input
              type="number"
              placeholder="Вес в кг"
              min="0.1"
              step="0.1"
              className="weight-input"
              onChange={(e) => handleWeightChange(e, product)}
            />
            <Button onClick={() => addToCart(product, product.weight || 0)}>Добавить в корзину</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
