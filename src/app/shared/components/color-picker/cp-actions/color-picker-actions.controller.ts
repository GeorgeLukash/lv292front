export class ColorPickerActionsController {
    private rgb;
    private hex;
    public $onChanges(colors) {
        this.rgb = colors.onColorChange.currentValue.rgb;
        this.hex = colors.onColorChange.currentValue.hex;
    }
    public clearData() {
        this.hex = '';
        this.rgb = '';
    }
}
