import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
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
      ],
      ShowFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCaterory = this.chooseCaterory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render () {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCaterory}/>
        <Items onShowItem = {this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} item={this.state.fullItem} onShowItem = {this.onShowItem}/>}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ShowFullItem: !this.state.ShowFullItem})
  }

  chooseCaterory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  
  addToOrder (item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
