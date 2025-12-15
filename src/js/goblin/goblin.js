export class GoblinGame {
  constructor(body) {
    this._body = body;
  }

  rendering() {
    const board = document.createElement("div");
    this._body.classList.add("board");
    this._body.append(board);

    for (let i = 0; i < 4; i++) {
      const newRow = document.createElement("div");
      newRow.classList.add("row");
      board.append(newRow);
      for (let x = 0; x < 4; x++) {
        const col = document.createElement("div");
        col.classList.add("box");
        newRow.append(col);
      }
    }
  }

  start(Icon) {
    const boxs = this._body.querySelectorAll(".box");
    const imageGoblin = new Image();
    imageGoblin.src = Icon;
    imageGoblin.classList.add("icon_goblin");

    function random(max, min) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    setInterval(() => {
      let i;
      let x = random(1, 16);
      if (i == undefined || i != x) {
        boxs[x].append(imageGoblin);
      }
      i = x;
    }, 1000);
  }
}
