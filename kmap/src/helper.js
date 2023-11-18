  //SOP
  //implicant = [[1,2], [1,3]]
  //numVariables = 3,4
  function findEquation(implicant, numVariables) {










  }

  //coordinate = [1,2]
  //numVariables = 3,4
  function equation(coordinate, numVariables) {

    const three = [
        ["A'B'C'", "A'B'C", "A'BC", "A'BC'"],
        ["AB'C'", "AB'C", "ABC", "ABC'"]
      ];

      const four = [
        ["A'B'C'D'", "A'B'C'D", "A'B'CD", "A'B'CD'"],
        ["A'BC'D'", "A'BC'D", "A'BC'D", "A'BC'D'"],
        ["ABC'D'", "ABC'D", "ABCD", "ABCD'"],
        ["AB'C'D'", "AB'C'D", "AB'CD", "AB'CD'"]
      ];

      if (numVariables == 3) {

        return three[coordinate[0]][coordinate[1]];


      } else if (numvariables == 4) {

        return four[coordinate[0]][coordinate[1]];


      }



  }