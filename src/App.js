import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      boxContents: [null,null,null,null,null,null,null,null,null],
      whoseTurn: 'X',
      winner: null,
      animate:false,
      xScore:0,
      oScore:0
    }
  }


  resetGame() {
    this.setState({
      boxContents: [null,null,null,null,null,null,null,null,null],
      whoseTurn: 'X',
      winner: null,
      animate:false
    })
  }

  resetStats() {
    this.setState({
      xScore:0,
      oScore:0
    })
  }

  handleClick(e) {
    if (this.state.winner) {
      return;
    }
    const validator = [[0,1,2], [3,4,5], [6,7,8],[0,3,6], [1,4,7], [2,5,8], [6,4,2], [0,4,8]];
    const blockNumber = Number(e.target.dataset.id);
    if (!this.state.boxContents[blockNumber]) {
      this.setState({
        boxContents: [...this.state.boxContents.map((box,index) => index === blockNumber ? this.state.whoseTurn : box)],
        whoseTurn: this.state.whoseTurn === 'X' ? 'O' : 'X',    
      }, () => {

        validator.forEach(arr => {
          const contents = this.state.boxContents;
          if (contents[arr[0]] && contents[arr[0]] === contents[arr[1]] && contents[arr[1]] === contents[arr[2]]) {
            return this.setState({
              winner: contents[arr[0]], 
              animate:true,
              xScore: contents[arr[0]] === 'X' ? this.state.xScore + 1 : this.state.xScore,
              oScore: contents[arr[0]] === 'O' ? this.state.oScore + 1 : this.state.oScore,
            })
          }
        })

      })
    }


  }

  render() {
    return (
      <div className="App">
        <main className='game-container'>
          <section className='game-title'>
            <h1>Tic Tac Toe</h1>
          </section> 
          <section className='indicator'>
            {this.state.winner ? this.state.winner + ' is the winner!' : this.state.whoseTurn ? this.state.whoseTurn + "'s turn" : ''}
          </section>
          <section className='game-box'>
            <div className='game-row'>
              <div className={this.state.animate ? 'game-unit animate' : 'game-unit'}data-id='0' onClick={e => this.handleClick(e)}>{this.state.boxContents[0] ? this.state.boxContents[0] : '' }</div>
              <div className={this.state.animate ? 'game-unit animate' : 'game-unit'} data-id='1' onClick={e => this.handleClick(e)}>{this.state.boxContents[1] ? this.state.boxContents[1] : '' }</div>
              <div className={this.state.animate ? 'game-unit animate' : 'game-unit'} data-id='2' onClick={e => this.handleClick(e)}>{this.state.boxContents[2] ? this.state.boxContents[2] : '' }</div>
            </div>
            <div className='game-row'>
              <div className={this.state.animate ? 'game-unit animate' : 'game-unit'} data-id='3' onClick={e => this.handleClick(e)}>{this.state.boxContents[3] ? this.state.boxContents[3] : '' }</div>
              <div className={this.state.animate ? 'game-unit animate' : 'game-unit'} data-id='4' onClick={e => this.handleClick(e)}>{this.state.boxContents[4] ? this.state.boxContents[4] : '' }</div>
              <div className={this.state.animate ? 'game-unit animate' : 'game-unit'} data-id='5' onClick={e => this.handleClick(e)}>{this.state.boxContents[5] ? this.state.boxContents[5] : '' }</div>
            </div>
            <div className='game-row'>
              <div className={this.state.animate ? 'game-unit animate' : 'game-unit'} data-id='6' onClick={e => this.handleClick(e)}>{this.state.boxContents[6] ? this.state.boxContents[6] : '' }</div>
              <div className={this.state.animate ? 'game-unit animate' : 'game-unit'} data-id='7' onClick={e => this.handleClick(e)}>{this.state.boxContents[7] ? this.state.boxContents[7] : '' }</div>
              <div className={this.state.animate ? 'game-unit animate' : 'game-unit'} data-id='8' onClick={e => this.handleClick(e)}>{this.state.boxContents[8] ? this.state.boxContents[8] : '' }</div>
            </div>
          </section>
          <div className='button-container'>
            <button onClick={() => this.resetGame()}className='reset-button'>
            Reset Game
            </button>
            <button onClick={() => this.resetStats()}className='reset-button'>
            Reset Stats
           </button>
          </div>
          <section className='stats-section'>
            <div className='stats-bubble'>
              X: {this.state.xScore}
            </div>
            <div className='stats-bubble'>
              O: {this.state.oScore}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
