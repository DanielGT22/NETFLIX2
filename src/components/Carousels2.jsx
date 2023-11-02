import React, { Component } from 'react';

class Carousels2 extends Component {
  state = {
    data: {},
  };

  fetchData() {
    fetch("http://www.omdbapi.com/?apikey=a40a6351&s=" + this.props.title)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("ERRORE NELLA RESPONSE");
      }
    })
      .then((data) => {
        if (data.Response === 'True') {
          this.setState({ data: { ...this.state.data, ...{ Search: data.Search } } });
        } else {
          console.error('Prova di nuovo');
        }
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <>
        <h4>Trending Now</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.data.Search &&
            this.state.data.Search.map((e) => (
              <div key={e.imdbID} className="col mb-2 text-center px-1">
                <img className="img-fluid" src={e.Poster} alt="" />
                <p className='text-white'>{e.Title}</p>
                <p className='text-white'>{e.Year}</p>
              </div>
            ))}
        </div>
      </>
    );
  }
}

export default Carousels2;