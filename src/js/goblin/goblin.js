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

  start() {
    const boxs = this._body.querySelectorAll(".box");
    setInterval(() => {
      const randomBox = Math.floor(Math.random() * boxs.length);
      boxs[randomBox].classList.add("active_goblin");
      setTimeout(() => boxs[randomBox].classList.remove("active_goblin"), 2000);
    }, 5000);
    
  }
}
