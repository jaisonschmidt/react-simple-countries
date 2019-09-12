import React from 'react';
import ReactDOM from 'react-dom';

// API interface
import CountryService from './services/CountryService/CountryService';

// SCSS Import 
import './index.scss';

const Header = props => {
  const { handleSearch } = props;
  return (
    <header className="header">
      <input type="search" className="inputSearch" placeholder="Buscar país..." onChange={handleSearch} />
    </header>
  )
}

const CountryBox = props => {
  const { country } = props;
  return (
    <div className="countryBox">
      <div className="imageContainer">
        <img src={country.flag} className="image" alt="" />
      </div>
      <div className="title">
        {country.name}
      </div>
    </div>
  )
}

const CountryList = props => {
  const { countries } = props;
  return (
    <div className="countryList">
      {
        countries.map( (country, key) => <CountryBox country={country} key={key} /> )
      }
    </div>
  )
}

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      countries: [],
      filter: ""
    };

    this.handleSearch = this.handleSearch.bind(this);

    // create country service
    this.countryService = new CountryService();
  }

  componentDidMount() {
    this.countryService.getAllCountriesFromApi().then(countries => {
      return this.setState({ countries });
    });
  }

  handleSearch(e){
    this.setState({
      filter: e.target.value
    });
  }
  
  render(){    
    const { countries } = this.state;
      return countries.length === 0
      ? <div>Carregando...</div>
      : <React.Fragment>
        <Header handleSearch={this.handleSearch} />
        <CountryList countries={countries.filter(country => country.name.toUpperCase().includes(this.state.filter.toUpperCase()))} />
      </React.Fragment>
  }
  
}


ReactDOM.render(<App />, document.getElementById('root'));
