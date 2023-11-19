  //SOP
  //implicant = [1, 2, 3]
  //numVariables = 3,4
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

    if (numVariables == 3) {

        if (values.length == 8) {

            return "1";

        }

        for (let b = 0; b < 3; b++) {

            const firstString = values[0];
            compare = firstString[b];

            for (let a = 1; a < values.length; a++) {

                const nextString = values[a];

                if (nextString[b] != compare) {

                    different = true;
                    break;

                    
                }  
            }

            if (different == false) {

                if (firstString[b] == "E") {

                    answer += "A'";

                } else if (firstString[b] == "F") {

                    answer += "B'";


                } else if (firstString[b] == "G") {
                    
                    answer += "C'";


                } else {

                    answer += firstString[b];

                }
            }

            different = false;
    }

    } else if (numVariables == 4) {

        if (values.length == 16) {

            return "1";
            
        }

        for (let b = 0; b < 4; b++) {

            const firstString = values[0];
            compare = firstString[b];

            for (let a = 1; a < values.length; a++) {

                const nextString = values[a];
                

                if (nextString[b] != compare) {

                    different = true;
                    break;

                    
                }  
            }

            if (different == false) {

                if (firstString[b] == "E") {

                    answer += "A'";

                } else if (firstString[b] == "F") {

                    answer += "B'";


                } else if (firstString[b] == "G") {
                    
                    answer += "C'";


                } else if (firstString[b] == "H") {

                    answer += "D'";


                } else {

                    answer += firstString[b];

                }
            }

            different = false;
    }

}

    return answer;

  }

  //coordinate = 0,1,2,3,4,5, etc.
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
        ["EBGH", "EBGD", "EBCD", "EBCH"],
        ["ABGH", "ABGD", "ABCD", "ABCH"],
        ["AFGH", "AFGD", "AFCD", "AFCH"]
      ];

      if (numVariables == 3) {

        if (coordinate == 0) {
            return "EFG";
          } else if (coordinate == 1) {
            return "EFC";
          } else if (coordinate == 2) {
            return "EBG";
          } else if (coordinate == 3) {
            return "EBC";

          } else if (coordinate == 4) {
            return "AFG";
          } else if (coordinate == 5) {
            return "AFC";
          } else if (coordinate == 6) {
            return "ABG";
          } else if (coordinate == 7) {
            return "ABC";
          }


      } else if (numVariables == 4) {

        if (coordinate == 0) {
            return "EFGH";
          } else if (coordinate == 1) {
            return "EFGD";
          } else if (coordinate == 2) {
            return "EFCH";
          } else if (coordinate == 3) {
            return "EFCD";

          } else if (coordinate == 4) {
            return "EBGH";
          } else if (coordinate == 5) {
            return "EBGD";
          } else if (coordinate == 6) {
            return "EBCH";
          } else if (coordinate == 7) {
            return "EBCD";

          } else if (coordinate == 8) {
            return "ABGH";
          } else if (coordinate == 9) {
            return "ABGD";
          } else if (coordinate == 10) {
            return "ABCH";
          } else if (coordinate == 11) {
            return "ABCD";

          } else if (coordinate == 12) {
            return "AFGH";
          } else if (coordinate == 13) {
            return "AFGD";
          } else if (coordinate == 14) {
            return "AFCH";
          } else if (coordinate == 15) {
            return "AFCD";
          }

        

      }
  }

  //TESTING, ADD COORDINATES HERE
  //EX, 0,1,2,3,8,7,5
        //EX, 1,2,3
  const temp = [
    
        
        7
      
    
  ];

console.log(findEquation(temp, 4));