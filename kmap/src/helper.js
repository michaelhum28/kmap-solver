  //SOP
  //implicant = [[1,2], [1,3]]
  //numVariables = 3,4
  function findEquation(implicant, numVariables) {

    const values = new Array(implicant.length);
    let tempValue = "";
    let compare = "";
    let answer = "";

    for (let i = 0; i < implicant.length; i++) {

        tempValue = equation(implicant[i]);
        values[i] = tempValue;


    }

    if (numvariables == 3) {

        for (let a = 0; a < values.length; a++) {

            const first = values[0];
            const second = values[1];
            const third = values[2];

            if (first[a] == second[a] && second[a] == third[a]) {

                if (first[a] == "E") {

                    answer += "A'";

                } else if (first[a] == "F") {

                    answer += "B'";


                } else if (first[a] == "G") {
                    
                    answer += "C'";


                } else {

                    answer += first[a];

                }
            }
        }

    } else if (numVariables == 4) {

        for (let a = 0; a < values.length; a++) {

            const first = values[0];
            const second = values[1];
            const third = values[2];
            const fourth = values[3];

            if (first[a] == second[a] && second[a] == third[a] && third[a] == fourth[a]) {

                if (first[a] == "E") {

                    answer += "A'";

                } else if (first[a] == "F") {

                    answer += "B'";


                } else if (first[a] == "G") {
                    
                    answer += "C'";


                } else if (first[a] == "H") {

                    answer += "D'";


                } else {

                    answer += first[a];

                }
            }
        }
    }

    return answer;

  }

  //coordinate = [1,2]
  //numVariables = 3,4
  function equation(coordinate, numVariables) {

    //E = A'
    //F = B'
    //G = C'
    //H = D'

    const three = [
        ["EFG", "EFC", "EBC", "EBG"],
        ["AFG", "AFC", "ABC", "ABG"]
      ];

      const four = [
        ["EFGH", "EFGD", "EFCD", "EFCH"],
        ["EBGH", "EBGD", "EBGD", "EBGH"],
        ["ABGH", "ABGD", "ABCD", "ABCH"],
        ["AFGH", "AFGD", "AFCD", "AFCH"]
      ];

      if (numVariables == 3) {

        return three[coordinate[0]][coordinate[1]];


      } else if (numvariables == 4) {

        return four[coordinate[0]][coordinate[1]];


      }


  }