type Point = { x: number, y: number };

type SpriteObject = {
    position: Point;
    context: CanvasRenderingContext2D;
    imageSrc: string;
}
export class Sprite
{
    position: Point;
    context: CanvasRenderingContext2D;
    image: HTMLImageElement;
    ready: boolean = false;
    constructor({ context, position, imageSrc }: SpriteObject)
    {
        this.context = context;
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
        this.image.onload = () =>
        {
            this.ready = true;
        };
    }

    draw()
    {
        if (!this.ready) { return; }
        this.context.drawImage(this.image, this.position.x, this.position.y)
    }
}