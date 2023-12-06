//Map callback
function double(arr){
    return arr.map(val =>{
        return val * 2;
    });
}


  function squareAndFindEvens(numbers){
    var squares = numbers.map(() =>{
        return num ** 2;
    });
    var eves = squares.filter(square => {
        return square % 2 === 0;
    });
    return evens; 
  }

  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }



  //Lets learn why this was wrong.
  Watch the videos and attempt to solve ebcasue this looks ike giberish
  