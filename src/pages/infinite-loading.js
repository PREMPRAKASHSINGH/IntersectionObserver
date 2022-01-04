import React, { Component } from 'react';
import Card from '../components/common/Card';
// import {Link} from 'react-router-dom';

class InfiniteLoading extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 1, data: [] };
  }
  componentDidMount() {
    this.fetchList();
  }
  fetchList = async () => {
    let url = `https://pixabay.com/api/?key=25083821-d75a837f9e0556f784aeb438e`;

    const response = await fetch(url);
    const result = await response.json();
    this.setState({ ...this.state, data: (result && result.hits) || [] });
  };
  render() {
    const { data } = this.state;
    return (
      <main>
        <h2>Infinite Loading!</h2>
        <p>Using intersection observer</p>
        <div className="container">
          <div className="row">
            {data.map((item, index) => {
              return (
                <div className="col-md-4" key={item.id}>
                  {/* {item.tags} - {item.previewURL} */}
                  <Card {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  }
}

// function InfiniteLoading() {
//     return (
//       <>
//         <main>
//           <h2>Infinite Loading!</h2>
//           <p>Using intersection observer</p>
//           <div className="container">
//             <div className="row">

//             </div>
//           </div>
//         </main>
//       </>
//     );
//   }

export default InfiniteLoading;
