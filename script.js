document.addEventListener('DOMContentLoaded', function (event) {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let rect = canvas.getClientRects();

  const CANVAS_WIDTH = canvas.clientWidth;
  const CANVAS_HEIGHT = canvas.clientHeight;
  const DEFAULT_TEXT_COLOR = 'rgba(0,255,150,1)';

  const game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT, 3, 2, ctx);
  let arr = [];

  function checkEqual(arr) {
    let isEqual;

    if (arr.length < 2) return;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].value === arr[i + 1].value) {
        isEqual = true;
        break;
      }

      console.log(arr[i].value);
      console.log(arr[i + 1].value);
    }

    return isEqual;
  }

  canvas.addEventListener('click', (event) => {
    for (let i = 0; i < game.gameGrid.length; i++) {
      for (let j = 0; j < game.gameGrid[i].length; j++) {
        let currentCell = game.gameGrid[i][j];

        if (
          currentCell.isIntersected(
            event.clientX - rect[0].left,
            event.clientY - rect[0].top,
            ctx
          )
        ) {
          currentCell.color = 'black';
          currentCell.show(ctx);

          arr.push(currentCell);
        }
      }
    }

    console.log(arr);
    // console.log(
    //   arr.length >= 2 &&
    //     arr.every((curr, index, arr) => curr.value === arr[index + 1].value)
    // );

    if (checkEqual(arr)) {
      console.log('true');
    }

    if (!checkEqual(arr) && arr.length === 2) {
      arr.forEach((cell) => {
        setTimeout(() => {
          cell.color = DEFAULT_TEXT_COLOR;
          cell.show(ctx);
        }, 300);
      }),
        (arr = []);
      console.log('false');
    }
  });
});
