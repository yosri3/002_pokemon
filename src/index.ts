import { Game } from "./scripts/Game";

const game = new Game();
game.initialize();

function animate()
{
    window.requestAnimationFrame(animate);
    game.update();
}
animate();
console.log(animate);