import React from 'react';
import {Link} from 'react-router-dom';
import dummy from './data/product.json';
import './css/product.css';

function Yellow(props) {
  return (
    <>
    <article className="product">
      <h3 className="product_title">이런 여행 찾으셨나요?</h3>
      <ul className="product_list">
        {dummy.products.map(product=>(
          <li 
            key={product.id}
          >
            <img src={`${process.env.PUBLIC_URL}/${product.img}`} alt="" />
            <p><span className="p_title">{product.name}</span></p>
            <p><span className="p_price"> { Number(product.price.replace(/,/g,"")).toLocaleString() }원</span></p>
          </li>
        ))}
      </ul>
    </article>
    </>
  );
}

export default Yellow;