import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {lage} = this.props
    const {imgUrl, name} = lage
    return (
      <li className="list">
        <img src={imgUrl} alt={name} className="photu" />
        <p className="para">
          {name}
          <br />
        </p>
      </li>
    )
  }
}

export default DestinationItem
