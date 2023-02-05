const squares = document.querySelectorAll('.square');
      let player = 'X';

      for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function() {
          if (squares[i].textContent === '') {
            squares[i].textContent = player;
            player = (player === 'X') ? 'O' : 'X';
          }
        });
      }