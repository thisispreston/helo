import React from 'react'
import "./Form.css"
import axios from 'axios'

class Form extends React.Component {
  constructor (props) {
    super(props)
  
    this.state = {
      title: '',
      img: '',
      content: '',
      editingID: false,
    }
  }

  // componentDidUpdate(previousProps) {
  //   if (this.props !== previousProps)
  //     this.setState({
  //       img: this.props.editingProduct.img,
  //       name: this.props.editingProduct.name,
  //       price: this.props.editingProduct.price,
  //       id: this.props.editingProduct.product_id,
  //       editingID: true,
  //     })
  //   }

// Handler Functions for Inputs
  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  handleChangeImg = (e) => {
    this.setState({
      img: e.target.value
    })
  }
  handleChangeContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  // postProduct (name, price, img) {
  //   axios
  //     .post('/api/product', { name, price, img })
  //     .then(() => this.props.getProducts())
  //     .catch(err => console.log(err))
  //   this.clearInput()
  // }

  clearInput = () => {
    this.setState({
      title: '',
      img: '',
      content: '',
      editingID: false,
    })
  }

  // TO BE INVOKED ON SAVE BUTTON
  // editProduct (id, name, price, img) {
  //   // console.log(id, name, price, img)
  //   axios
  //     .put(`/api/products/${id}`, { name, price, img })
  //     .then(() => this.props.getProducts())
  //     .catch(err => console.log(err))
  //   this.clearInput()
  // }

  render () {
    return (
      <div className="formInput">
        <h1>
          Create New Post
        </h1>
        <div>
          {this.state.img ?
            (<img 
              src={this.state.img} 
              className="inputImg"
              alt='content' />
            ) : (
            <img 
              src={'https://img.icons8.com/plasticine/2x/camera.png'}
              className="inputImg"
              alt='content'
            />)}
          <input
            className="imgUrlInput"
            type='url'
            onChange={this.handleChangeImg}
            placeholder="Image URL"
            value={this.state.img}
          />
          <input
            className="titleInput"
            onChange={this.handleChangeTitle}
            placeholder="Post Title"
            value={this.state.title}
          />
          <input
            type='number'
            className="content Input"
            onChange={this.handleChangeContent}
            placeholder="Post Content"
            value={this.state.content}
          />
        </div>
        <div className="buttons">
          <button
            className="cancelButton"
            onClick={() => {this.clearInput()}}
          >
            Cancel
          </button>
          {this.state.editingID ?
            (<button
              className="saveButton"
              onClick={() => this.editProduct(this.state.id, this.state.name, this.state.price, this.state.img)} 
              >
                Save
              </button>
            ) : (
              <button
              className="addButton"
              onClick={() => {this.postProduct(this.state.name, this.state.price, this.state.img)}}
              >
                Add to Inventory
              </button>
            )}
        </div>
    </div>
    )
  }
}

export default Form
