import {Component} from 'react'
import './index.css'
import DestinationItem from './components/DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  search = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachone =>
      eachone.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <input value={searchInput} onChange={this.search} type="search" />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
        <ul className="ul">
          {searchResults.map(each => (
            <DestinationItem lage={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
