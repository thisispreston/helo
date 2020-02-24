import React from "react";
import { connect } from 'react-redux'
import { getUser } from '../../redux/reducer'

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      img: '',
      content: '',
      authorName: '',
      authorPic: '',
    }
  }



  render() {
  console.log(this.props)
    return (
      <div
        className="post-body"
      >
        <h1>
          {this.props.title}
        </h1>
        <p>
          {this.props.id}
        </p>
        <img
          src={this.props.img}
        />
      </div>
    );
  }
}

export default connect(null, {getUser})(Post);


// render() {
//   console.log(this.props)
//   return (
//     <>
//       {this.props.location.pathname === "/dashboard" ? (
//         <div className="post-body">
//           <h1>
//             {this.props.title}
//           </h1>
//           <p>
//             {this.props.id}
//           </p>
//           <img
//             src={this.props.img}
//           />
//         </div>
//     ) : (
//       <div className="post-body">
//         <h1>
//           {this.props.title}
//         </h1>
//         <p>
//           by: {this.props.id}
//         </p>
//         <img
//           src={this.props.img}
//         />
//       </div>
//     )}
//     </>
//   );
// }
// }