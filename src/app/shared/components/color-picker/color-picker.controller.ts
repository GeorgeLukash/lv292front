export class ColorPickerController {
  public outputSelect;
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private image;
  public $onInit() {
       this.canvas = <HTMLCanvasElement> document.getElementById('canvas_picker');
       this.context = this.canvas.getContext('2d');
       this.image = new Image();
       this.image.onload = () => {
         this.context.drawImage(this.image, 0, 0);
       };  
       this.image.src = './9d790a4878642e520083a43a2ffdab7c.jpg';
  }
  public getOutput(selected) {
    this.outputSelect({
      selectColor: selected
    });
    return selected;
  }
}
