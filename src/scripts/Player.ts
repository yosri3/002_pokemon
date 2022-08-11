const playerImage = require('../assets/img/playerDown.png').default;

export class Player
{
    context: CanvasRenderingContext2D;
    image: HTMLImageElement;

    keys = {
        w: { pressed: false },
        a: { pressed: false },
        s: { pressed: false },
        d: { pressed: false },
    }

    private _imageMask: { startX: number; startY: number; endX: number; endY: number; };
    private _initialPosition: { x: number; y: number }
    private _scale: number;
    private _imageDimensions: { width: number; height: number }
    constructor(context: CanvasRenderingContext2D)
    {
        this.context = context;
        this.image = new Image();
        this.image.src = playerImage;

        this._imageDimensions = {
            width: this.image.width / 4,
            height: this.image.height
        }

        this._imageMask = {
            startX: 0,
            startY: 0,
            endX: this._imageDimensions.width,
            endY: this._imageDimensions.height
        }

        this._initialPosition = {
            x: (this.context.canvas.width / 2) - this._imageDimensions.width / 2,
            y: (this.context.canvas.height / 2) - this._imageDimensions.height / 2
        };

        this._scale = 5.5;

        this.addListeners();
    }

    addListeners()
    {
        addEventListener('keydown', (e) =>
        {
            switch (e.code)
            {
                case 'KeyW':
                    this.keys.w.pressed = true;
                    break;
                case 'KeyA':
                    this.keys.a.pressed = true;
                    break;
                case 'KeyS':
                    this.keys.s.pressed = true;
                    break;
                case 'KeyD':
                    this.keys.d.pressed = true;
                    break;
            }
        })
    }

    initialize()
    {

    }

    update()
    {
        this.draw();
    }

    draw()
    {
        this.context.imageSmoothingEnabled = false;
        this.context.drawImage(
            this.image,
            this._imageMask.startX,
            this._imageMask.startY,
            this._imageMask.endX,
            this._imageMask.endY,
            this._initialPosition.x,
            this._initialPosition.y,
            this._imageDimensions.width * this._scale,
            this._imageDimensions.height * this._scale
        );
    }


}