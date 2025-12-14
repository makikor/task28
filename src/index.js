import "./css/style.css";
import { GoblinGame } from "./js/goblin/goblin";

const Game = new GoblinGame(document.body);
Game.rendering();
Game.start();
