class Cell {
  constructor(x, y, width, height, value) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.value = value;
    this.color = 'rgba(0,255,150,1)';
  }

  show(ctx) {
    ctx.beginPath();

    ctx.fillStyle = 'rgba(0,255,150,1)';
    ctx.strokeStyle = 'red';
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.clearRect(this.x, this.y, this.width, this.height);

    ctx.stroke();
    ctx.fill();

    ctx.closePath();

    ctx.font = '48px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // ctx.fillStyle = this.color;
    ctx.fillStyle = 'black';
    ctx.fillText(
      this.value || '',
      this.x + this.width / 2,
      this.y + this.height / 2
    );
  }

  isIntersected(x, y) {
    const intersected =
      x < this.x ||
      x > this.x + this.width ||
      y < this.y ||
      y > this.y + this.height;

    return !intersected;
  }
}
