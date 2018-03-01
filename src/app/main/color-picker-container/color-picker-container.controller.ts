import { ColorPickerContainerService } from './color-picker-container.service';

export class ColorPickerController {
    public static $inject: string[] = ['ColorPickerContainerService'];

        constructor(private ColorPickerContainerService: ColorPickerContainerService ) {};

    public getData() {
        return this.ColorPickerContainerService.getColorPickerList();
      }
}
