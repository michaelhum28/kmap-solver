import React, { useState, useEffect } from 'react';

const Kmap = (props) => {
  const coord_to_cell = {
    "0,0": 0,
    "0,1": 1,
    "0,3": 2,
    "0,2": 3,
    "1,0": 4,
    "1,1": 5,
    "1,3": 6,
    "1,2": 7,
    "2,0": 12,
    "2,1": 13,
    "2,3": 14,
    "2,2": 15,
    "3,0": 8,
    "3,1": 9,
    "3,3": 10,
    "3,2": 11,
  };

  const void_state = -10;
  const vis = Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => Array.from({ length: 5 }, () => Array(5).fill(false))));

  const k_indexes = [0, 1, 3, 2, 4, 5, 7, 6, 12, 13, 15, 14, 8, 9, 11, 10];

  const k_sizes = [
    [4, 4],
    [2, 4],
    [4, 2],
    [1, 4],
    [4, 1],
    [2, 2],
    [1, 2],
    [2, 1],
    [1, 1]
  ];

  let groupCounter = 1;
  let xy = [void_state, void_state];

  const vars_count = props.var_count
  const rows = props.rows;
  const cols = props.cols;
  const ones = props.ones;
  const Xs = props.Xs;
  const ones_list = props.ones_list;
  const Xs_list = props.Xs_list;

  let smallestLength = 999;
  let smallestAnswer = "MICHAELHUM_FEIYULIN_CHRISTOPHERLIT_MICHAELHUM_FEIYULIN_CHRISTOPHERLIT_MICHAELHUM_FEIYULIN_CHRISTOPHERLIT_MICHAELHUM_FEIYULIN_CHRISTOPHERLIT_MICHAELHUM_FEIYULIN_CHRISTOPHERLIT_MICHAELHUM_FEIYULIN_CHRISTOPHERLIT";

  // WORK HERE
  // init indexes for 1s
  const indexes = [];

  for (let i = 0; i < 16; i++) {
    if (ones_list.includes(i))
      indexes.push(1)
    else
      indexes.push(0)
  }

  // Custom methods
  function initializeKmap() {
    const kmap = [];
    for (let r = 0; r < rows; r++) {
      const temp = [];
      for (let c = 0; c < cols; c++) {
        if (ones_list.includes(coord_to_cell[r + "," + c]))
          temp.push("1");
        else
          temp.push("0");
      }
      kmap.push(temp);
    }
    return kmap;
  };

  function allOnes(i, j, width, length, indexes, k_indexes) {
    for (let x = i; x < i + width; ++x)
      for (let y = j; y < j + length; ++y)
        if (indexes[k_indexes[((x + 4) % 4) * 4 + ((y + 4) % 4)]] === 0)
          return false;

    return true;
  };

  function setVisited(i, j, width, length, vis) {
    for (let x = i; x < i + width; ++x)
      for (let y = j; y < j + length; ++y)
        vis[(x + 4) % 4][(y + 4) % 4][width][length] = true;
  };

  function visited(i, j, width, length, vis) {
    for (let x = 1; x < 5; ++x)
      for (let y = 1; y < 5; ++y)
        if (vis[i][j][x][y]) return true;
    return false;
  };

  function check(width, length, indexes, k_indexes, vis) {
    for (let i = 0; i < 4; ++i) {
      for (let j = 0; j < 4; ++j) {
        if (!visited(i, j, width, length, vis)) {

          if (allOnes(i, j, width, length, indexes, k_indexes)) {
            setVisited(i, j, width, length, vis);
            return [i, j];
          }

          if (allOnes(i - width + 1, j, width, length, indexes, k_indexes)) {
            setVisited(i - width + 1, j, width, length, vis);
            return [i - width + 1, j];
          }

          if (allOnes(i - width + 1, j - length + 1, width, length, indexes, k_indexes)) {
            setVisited(i - width + 1, j - length + 1, width, length, vis);
            return [i - width + 1, j - length + 1];
          }

          if (allOnes(i, j - length + 1, width, length, indexes, k_indexes)) {
            setVisited(i, j - length + 1, width, length, vis);
            return [i, j - length + 1];
          }
        }
      }
    }
    return [void_state, void_state];
  };


  function gen_list_of_implicants(groupNumber, i, j, width, length, k_indexes) {
    let res = [];
    for (let x = i; x < i + width; ++x) {
      for (let y = j; y < j + length; ++y) {
        res.push(k_indexes[((x + 4) % 4) * 4 + ((y + 4) % 4)]);
      }
    }
    return res;
  };


  function get_boolean_expression() {

    //Loop for every combination in the array "Xs_list"
    //In the loop, create a temp array and make it equal to the pre existing array called "indexes" and push that combination in the temp array
    //Call the method "real_get_boolean_expression" and pass in the temp array

    function processCombinations(arr, callback, prefix = [], start = 0) {
      const n = arr.length;
      
      for (let i = start; i < n; i++) {
        // Include the current element in the combination
        const newPrefix = prefix.concat(arr[i]);
       
        
       
        const indexesWithCare = JSON.parse(JSON.stringify(indexes));
      
        for (let i = 0; i < newPrefix.length; i++) {

          indexesWithCare[newPrefix[i]] = 1;

        }
       
        // Send the combination to the callback method
        let temp = callback(indexesWithCare);
        let tempNoApostrophes = temp.replace(/'/g, ''); //Replaces apostrophes with nothing
        //console.log(temp)

        if (temp.length != 0) {

        //Compares if the indexes with the current combination of don't care values makes the boolean expression smaller than the current smallest one
        if (tempNoApostrophes.length < smallestLength) {
    
          smallestAnswer = temp;
          smallestLength = tempNoApostrophes.length;

         
        }

      }
    
        // Recursively generate combinations with the remaining elements
        processCombinations(arr, callback, newPrefix, i + 1);
      }
    }
    console.log("TEST")
    

    smallestAnswer = real_get_boolean_expression(indexes);
    smallestLength = smallestAnswer.replace(/'/g, '').length;

    processCombinations(Xs_list, real_get_boolean_expression);

    return smallestAnswer;
  }


  // this method generates the final boolean expression i.e. the answer
  function real_get_boolean_expression(indexesWithCare) {
    let res = "";

    for (let i = 0, e = k_sizes.length; i < e; ++i) {
      do {
        xy = check(k_sizes[i][0], k_sizes[i][1], indexesWithCare, k_indexes, vis);
        if (xy[0] !== void_state && xy[1] !== void_state) {
          let temp = gen_list_of_implicants(groupCounter++, xy[0], xy[1], k_sizes[i][0], k_sizes[i][1], k_indexes);
      
          res += findEquation(temp, vars_count);
          res += " + ";
        }
      }
      while (xy[0] !== void_state && xy[1] !== void_state);
    }



    return res;
  };


  // SOP
  function findEquation(implicant, numVariables) {
    const values = new Array(implicant.length);
    let tempValue = "";
    let answer = "";
    let compare = "";
    let different = false;

    for (let i = 0; i < implicant.length; i++) {
      tempValue = equation(implicant[i], numVariables);
      values[i] = tempValue;
    }

    if (numVariables === 3) {
      if (values.length === 8) {
        return "1";
      }

      for (let b = 0; b < 3; b++) {
        const firstString = values[0];
        compare = firstString[b];

        for (let a = 1; a < values.length; a++) {
          const nextString = values[a];

          if (nextString[b] !== compare) {
            different = true;
            break;
          }
        }

        if (different === false) {
          if (firstString[b] === "E") {
            answer += "A'";
          } else if (firstString[b] === "F") {
            answer += "B'";
          } else if (firstString[b] === "G") {
            answer += "C'";
          } else {
            answer += firstString[b];
          }
        }

        different = false;
      }
    } else if (numVariables === 4) {
      if (values.length === 16) {
        return "1";
      }

      for (let b = 0; b < 4; b++) {
        const firstString = values[0];
        compare = firstString[b];

        for (let a = 1; a < values.length; a++) {
          const nextString = values[a];

          if (nextString[b] !== compare) {
            different = true;
            break;
          }
        }

        if (different === false) {
          if (firstString[b] === "E") {
            answer += "A'";
          } else if (firstString[b] === "F") {
            answer += "B'";
          } else if (firstString[b] === "G") {
            answer += "C'";
          } else if (firstString[b] === "H") {
            answer += "D'";
          } else {
            answer += firstString[b];
          }
        }

        different = false;
      }
    }

    return answer;
  };

  // coordinate = 0,1,2,3,4,5, etc.
  // numVariables = 3,4
  function equation(coordinate, numVariables) {
    const three = [
      ["EFG", "EFC", "EBC", "EBG"],
      ["AFG", "AFC", "ABC", "ABG"]
    ];

    const four = [
      ["EFGH", "EFGD", "EFCD", "EFCH"],
      ["EBGH", "EBGD", "EBCD", "EBCH"],
      ["ABGH", "ABGD", "ABCD", "ABCH"],
      ["AFGH", "AFGD", "AFCD", "AFCH"]
    ];

    if (numVariables === 3) {
      if (coordinate === 0) {
        return "EFG";
      } else if (coordinate === 1) {
        return "EFC";
      } else if (coordinate === 2) {
        return "EBG";
      } else if (coordinate === 3) {
        return "EBC";
      } else if (coordinate === 4) {
        return "AFG";
      } else if (coordinate === 5) {
        return "AFC";
      } else if (coordinate === 6) {
        return "ABG";
      } else if (coordinate === 7) {
        return "ABC";
      }
    } else if (numVariables === 4) {
      if (coordinate === 0) {
        return "EFGH";
      } else if (coordinate === 1) {
        return "EFGD";
      } else if (coordinate === 2) {
        return "EFCH";
      } else if (coordinate === 3) {
        return "EFCD";
      } else if (coordinate === 4) {
        return "EBGH";
      } else if (coordinate === 5) {
        return "EBGD";
      } else if (coordinate === 6) {
        return "EBCH";
      } else if (coordinate === 7) {
        return "EBCD";

      } else if (coordinate === 12) {
        return "ABGH";
      } else if (coordinate === 13) {
        return "ABGD";
      } else if (coordinate === 14) {
        return "ABCH";
      } else if (coordinate === 15) {
        return "ABCD";

      } else if (coordinate === 8) {
        return "AFGH";
      } else if (coordinate === 9) {
        return "AFGD";
      } else if (coordinate === 10) {
        return "AFCH";
      } else if (coordinate === 11) {
        return "AFCD";
      }
    }
  };

  //   const [kmap, setKmap] = useState(initializeKmap());

  return (
    <div>
      {/* Display boolean expression */}
      <p>Boolean Expression test: {get_boolean_expression().slice(0, -3)}</p>
    </div>
  );
};

export default Kmap;