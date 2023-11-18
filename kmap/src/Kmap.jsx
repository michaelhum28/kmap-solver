import React, { Component } from 'react';

class Kmap extends Component {
  // Constructor (optional)
  constructor(props) {
    super(props);

    // instance vairables

    this.rows = props.rows;
    this.cols = props.cols;   
    this.kmap = this.initializeKmap();



    // You can initialize state or bind methods here
    this.state = {
        kmap: this.initializeKmap(),
    };
  }

  componentDidMount() {
    console.log("Component did mount. Kmap:", this.state.kmap);
  } 

  // Custom methods
  initializeKmap() {
    const kmap = [];
    for (let r = 0; r < this.rows; r++) {
      const temp = [];
      for (let c = 0; c < this.cols; c++) {
        temp.push("0");
      }
      kmap.push(temp);
    }
    return kmap;
  }



  test = () => {
    // Your custom logic here
    console.log(`Row: ${this.row}, Col: ${this.col}`);
  };

  render() {
    console.log(this.state.kmap); // Log the content of kmap to the console
    console.log("alkdjalksjdlakjdslkj"); // Log the content of kmap to the console
    return (
      <div>
        <h1>Hello, I'm a React Component!</h1>

        {/* Display row and col values */}
        <p>Row: {this.rows}</p>
        <p>Col: {this.cols}</p>

        {/* Display Kmap values */}
        <p>Kmap:</p>
        <table>
          <tbody>
            {this.state.kmap.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Kmap;