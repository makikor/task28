import "./css/style.css";
import { GoblinGame } from "./js/goblin/goblin";
import Icon from "./img/goblin.png";

const Game = new GoblinGame(document.body);
Game.renderingBoard();
Game.goblinMove(Icon);
