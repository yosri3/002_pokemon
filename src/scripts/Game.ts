const BGIMAGE = require('../assets/img/PalletTown.png').default;
import { Player } from "./Player";
import { Sprite } from "./Sprite";

export class Game
{
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    player: Player;
    background: Sprite;
    constructor()
    {
        this.canvas = document.querySelector('canvas')!;
        this.context = this.canvas.getContext('2d')!;

        this.background = new Sprite({
            context: this.context,
            imageSrc: BGIMAGE,
            position: { x: -1500, y: -900 }
        });

        this.player = new Player(this.context);
    }

    update()
    {
        this.draw();
        this.player.update();
    }


    initialize()
    {
        this.initializeCanvas();
    }

    initializeCanvas()
    {
        this.canvas.width = 1024;
        this.canvas.height = 576;
        this.drawCanvas();
    }

    drawCanvas()
    {
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBackgroundImage()
    {
    }

    draw()
    {
        this.background.draw();
        this.player.draw();
    }
}