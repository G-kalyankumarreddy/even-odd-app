import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrementButton = () => {
    const {count} = this.state
    this.setState({count: count + parseInt(Math.random() * 100)})
    console.log(count)
  }

  render() {
    const {count} = this.state
    const numberType = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="number-type"> Count is {numberType}</p>
          <button
            className="button"
            type="button"
            onClick={this.onIncrementButton}
          >
            {' '}
            Increment{' '}
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
