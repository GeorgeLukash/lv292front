import { ColorPickerService } from './color-picker-spectrum.service';

export class ColorPickerSpectrumController {
    public static $inject = ['ColorPickerService'];
    public rgb;
    public hex;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private selectColor;
   
    constructor (private colorPickerService: ColorPickerService) { }
   
    public click(event) {
      this.canvas = <HTMLCanvasElement> document.getElementById('canvas_picker');
      this.context = this.canvas.getContext('2d');
      let cursorPosition = this.colorPickerService.getCursorPosition(event);
      let imgData = this.context.getImageData(cursorPosition.x, cursorPosition.y, 1, 1).data;
      let baseColor = this.colorPickerService.getColorFromImage(imgData);
      this.rgb = baseColor.red + ',' + baseColor.green + ',' + baseColor.blue;
      this.hex = `#${this.colorPickerService.rgbToHex(baseColor.red,
                                                      baseColor.green,
                                                      baseColor.blue)}`;
      this.selectColor({selectedColor: {
          'rgb': this.rgb,
          'hex': this.hex
     }});    
    }
}
