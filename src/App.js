import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    const PI = 3.141593;
    let myName = "Mandip";
    let circleArea = (pi, r) => pi * r * r;
    let result = circleArea(3.14, 3);

    console.log(result);

    return (
      <div className="container">
        <header>
          <h1>ES6 and beyond feature demo</h1>
        </header>
        <h2>Const</h2>
        <p>The new const keyword makes it possible to declare constants, also known as immutable variables, to which we cannot reassign new content later.</p>
        <p>
          PI = {PI}
        </p>
        <h2>Let</h2>
        <p>Block-scoped binding constructs. let is the new var</p>
        <p>my name is {myName}</p>
        <h2>Arrow function</h2>
        <p>Arrows are a function shorthand using the => syntax.</p>
        <p>e.g.<br/>
        let circleArea = (pi, r) => pi * r * r;<br/>
        let result = circleArea(3.14, 3);</p>
        <p>Now view the console log and you should see 28.259999999999998</p>
      </div>
    );
  }
}

export default App;
