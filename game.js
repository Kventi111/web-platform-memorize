class Game {
  constructor(width, height, col, row, ctx) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;

    this.gameGrid = [];

    this.elements = [1, 1, 2, 2, 3, 3];

    this.col = col || 3;
    this.row = row || 3;

    this.initGrid();
    this.renderGameField();
  }

  shutterElements = (randomArr) => {
    this.elements = randomArr.map((item) => this.elements[item]);
  };

  getRandom = (count, maxNum) => {
    let arr = [];
    while (arr.length < count) {
      let r = Math.floor(Math.random() * maxNum);
      if (arr.indexOf(r) === -1) arr.push(r);
    }

    this.shutterElements(arr);

    return arr;
  };

  resetGame = () => {
    const banner = document.querySelector('.winner_banner');
    banner.classList.remove('show');

    this.initGrid();
    this.renderGameField();
  };

  checkWin = () => {
    return this.gameGrid.every((i) => i.open);
  };

  initGrid = () => {
    let gameGrid = this.gameGrid;
    let j = 0;
    let i = 0;
    let arrIndex = 0;

    let random = this.getRandom(6, 6);

    console.log({ random });

    while (arrIndex < this.elements.length) {
      gameGrid[arrIndex] = new Cell(
        (i * this.width) / this.col,
        (j * this.height) / this.row,
        this.width / this.col,
        this.height / this.row,
        this.elements[random[arrIndex]]
      );

      // if (i == this.col) {
      //   j = 0;
      // } else {
      //   i++;
      //   j++;
      // }

      // console.log({ i, j });

      if (i == this.col - 1) {
        j++;
        i = 0;
      } else {
        i++;
      }
      arrIndex++;
    }

    console.log({ gameGrid });
  };

  renderGameField = () => {
    let gameGrid = this.gameGrid;

    for (let i = 0; i < gameGrid.length; i++) {
      gameGrid[i].show(this.ctx);
    }

    // console.log({ gameGrid });
  };
}
