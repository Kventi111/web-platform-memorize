document.addEventListener('DOMContentLoaded', function (event) {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let rect = canvas.getClientRects();
  const resetBtn = document.querySelector('.winner_banner__reset__btn');

  const CANVAS_WIDTH = canvas.clientWidth;
  const CANVAS_HEIGHT = canvas.clientHeight;
  const DEFAULT_TEXT_COLOR = 'rgba(0,255,150,1)';

  const game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT, 4, 3, ctx);
  const ui = new UI();
  let arr = [];

  resetBtn.addEventListener('click', game.resetGame);

  function checkEqual(arr) {
    let isEqual;

    if (arr.length < 2) return;

    for (let i = arr.length - 1; i > 0; i--) {
      console.log(arr[i].value);
      console.log(arr[i - 1].value);

      if (arr[i].value === arr[i - 1].value) {
        isEqual = true;
        break;
      }

      // console.log(arr[i].value);
      // console.log(arr[i + 1].value);
    }

    return isEqual;
  }

  function hideNotEqual(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log('12', arr[i]);

      setTimeout(() => {
        arr[i].open = false;
        arr[i].show(ctx);
      }, 300);
    }
  }

  canvas.addEventListener('click', (event) => {
    for (let i = 0; i < game.gameGrid.length; i++) {
      let currentCell = game.gameGrid[i];

      if (
        currentCell.isIntersected(
          event.clientX - rect[0].left,
          event.clientY - rect[0].top,
          ctx
        )
      ) {
        currentCell.open = true;
        currentCell.show(ctx);

        arr.push(currentCell);
      }
    }

    console.log('123', arr);
    // console.log(
    //   arr.length >= 2 &&
    //     arr.every((curr, index, arr) => curr.value === arr[index + 1].value)
    // );

    if (checkEqual(arr)) {
      arr = [];
    }

    if (game.checkWin()) {
      console.log('win');

      ui.showWinnerBanner('Начать заново шоль ?');
    }

    if (!checkEqual(arr) && arr.length > 1) {
      // arr.forEach((cell) => {
      //   setTimeout(() => {
      //     cell.color = DEFAULT_TEXT_COLOR;
      //     cell.show(ctx);
      //   }, 300);
      // });

      hideNotEqual(arr);
      arr = [];
      console.log('false');
    }
  });
});
