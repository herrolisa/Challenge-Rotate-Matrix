/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;

};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  // do work here
  var newArr = [];
  if (direction === Direction.CW){
    for (var i = 0; i < this.matrix.length; i++) {
      newArr.push([]);
      for (var j = this.matrix.length - 1; j >= 0; j--) {
        newArr[i].push(this.matrix[j][i]);
      }
    }
  }else{
    for (var k = 0; k < this.matrix.length; k++) {
      newArr.push([]);
      for (var l = 0; l < this.matrix.length; l++) {
        newArr[k].unshift(this.matrix[l][k]);
      }
    }
  }

  console.log(newArr);
  this.matrix = newArr;



  // must be a valid Direction, see Direction.js


};