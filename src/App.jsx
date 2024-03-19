import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullIteml from "./components/ShowFullItem";

const App = () => {
  const [items] = useState ([
    {
      id: 1,
      title: 'Grey chair',
      img: 'chair-grey.webp',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicng.',
      category: 'chairs',
      price: '49.99',
    },
    {
      id: 2,
      title: 'Table',
      img: 'table.webp',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicng.',
      category: 'tables',
      price: '149.99',
    },
    {
      id: 3,
      title: 'Sofa',
      img: 'sofa.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicng.',
      category: 'sofa',
      price: '99.99',
    },
    {
      id: 4,
      title: 'Lamp',
      img: 'lamp.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicng.',
      category: 'light',
      price: '19.99',
    },
    {
      id: 5,
      title: 'Black chair',
      img: 'black-chair.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicng.',
      category: 'chairs',
      price: '49.99',
    }
  ]);
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState(items);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState();

  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const addToOrder = (order) => {
    setOrders(prevOrders => [...prevOrders, order]);
  };

  const chooseCategory = (category) => {
    if (category === 'all') {
      setCurrentItems(items);
      return;
    }
    setCurrentItems(items.filter(el => el.category === category));
  };

  const onShowItem = (item) => {
    setFullItem(item)
    setShowFullItem(showFullItem => !showFullItem)
  };

  
  return (
    <div className="wrapper">
      <Header orders = {orders} onDelete={deleteOrder}/>
      <Categories chooseCategory = {chooseCategory}/>
      <Items onShowItem={onShowItem} items = {currentItems} onAdd={addToOrder}/>
      {showFullItem && <ShowFullIteml item={fullItem} onAdd={addToOrder} onShowItem={onShowItem}/>}
      <Footer/>
    </div>
  );
};


export default App;
