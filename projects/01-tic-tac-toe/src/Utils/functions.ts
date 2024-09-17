export const checWinner = (boardToCheck: string[], index: number) => {
    
    let elemento = boardToCheck[index];

    if(index == 0 || index == 3 || index == 6)
    {
      if(elemento !== null && elemento == boardToCheck[index+1] && elemento == boardToCheck[index + 2]) return elemento;
      else if (boardToCheck[index] !== null && boardToCheck[0] == boardToCheck[3] && boardToCheck[0] == boardToCheck[6]) return elemento;
      else if(index == 0 && elemento == boardToCheck[4] && elemento == boardToCheck[8]) return elemento
    }

    else if(index == 1 || index == 4 || index == 7)
    {
      if(elemento !== null && elemento == boardToCheck[index+1] && elemento == boardToCheck[index -1]) return elemento;
      else if (boardToCheck[index] !== null && boardToCheck[1] == boardToCheck[4] && boardToCheck[1] == boardToCheck[7]) return elemento;
      else if(index == 4 && elemento == boardToCheck[0] && elemento == boardToCheck[8]) return elemento
      else if(index == 4 && elemento == boardToCheck[6] && elemento == boardToCheck[2]) return elemento
    }

    else if(index == 2 || index == 5 || index == 8)
    {
      if(elemento !== null && elemento == boardToCheck[index-1] && elemento == boardToCheck[index -2]) return elemento;
      else if (boardToCheck[index] !== null && boardToCheck[2] == boardToCheck[5] && boardToCheck[2] == boardToCheck[8]) return elemento;
      else if(index == 8 && elemento == boardToCheck[0] && elemento == boardToCheck[4]) return elemento
    }

    return null;
  }

// ** Lo que hacemos es comprobar si el tablero esta lleno
export const checkEndGame = (newBoard: string[]) => {
    // return newBoard.every((square) => square !== null) // ?? El array.every --> comprueba la condición descrita como argumento en todos los valores del array
                                                          // ?? como en el map o foreach se pasa una función en la que como parametros pasamos el elemento, dentro de esta comprobamos si el elemento es === null
                                                          // ?? Otra manera de hacerlo es mediante un foreach y comprobando si existe 

    // ** Ejemplo de la otra manera 
    let empate = true;
    newBoard.map((elemento) => {
      if(elemento == null)
      empate = false; 
    })

    return empate
  }
