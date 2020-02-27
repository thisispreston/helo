import React from 'react'
import "./Form.css"
import axios from 'axios'
import { connect } from 'react-redux'

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

  newPost = () => {
    const { title, content, img } = this.state
    const { user_id } = this.props
    axios
      .post(`/api/posts/${user_id}`, { title, content, img })
      .then(() => this.clearInput())
      .catch(err => console.log(err))
    
    this.props.history.push(`/dashboard`)
  }

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
          <textarea
            className="content Input"
            onChange={this.handleChangeContent}
            placeholder="Post Content"
            value={this.state.content}
            maxLength='250'
          />
        </div>
        <div className="buttons">
          <button
            className="cancelButton"
            onClick={this.clearInput}
          >
            Cancel
          </button>
          <button
            className="postButton"
            onClick={this.newPost}
          >
            Create Post
          </button>
        </div>
    </div>
    )
  }
}

const mapStateToProps = reduxState => {
  const { user_id, username, profile_pic } = reduxState.user
  return {
    user_id,
    username,
    profile_pic,
  }
}

export default connect(mapStateToProps)(Form);
