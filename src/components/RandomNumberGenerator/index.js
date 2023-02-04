// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  generateRandomNumber = () => {
    this.setState(prevState => ({randomNum: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {randomNum} = this.state

    return (
      <div className="main-container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              type="button"
              className="random-button"
              onClick={this.generateRandomNumber}
            >
              Generate
            </button>
          </div>
          <p className="text-count">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
