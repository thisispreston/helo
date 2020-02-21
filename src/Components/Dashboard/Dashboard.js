import React from "react";
import './Dashboard.css'


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {

    // }
  }



  render() {
    return (
      <div className="dashboard-body">
        <div className='searchbar'>
          <div className='search'>
            <input
              className='search-input searchbar-items'
            
            />
            <img
              className='search-button searchbar-items'
              src="https://image.flaticon.com/icons/svg/49/49116.svg"
              height='35px'
              width='35px'
              // onClick={}
            />
            <button
              className='reset searchbar-items'
              // onClick={}
            >
              Reset
            </button>
          </div>
          <div className='checkbox'>
            <p>My Posts:</p>
            <input
              className='checkbox-box searchbar-items'
              type='checkbox'
              // onClick={}
            />
          </div>
        </div>
        <div className='posts'>
          {/* {posts} */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
