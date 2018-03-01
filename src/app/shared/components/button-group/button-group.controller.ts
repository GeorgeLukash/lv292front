export class ButtonGroupController {
    public count = 0;
    public buttonInfo;
    public buttonData;
    
    public tmpData: any[];

    public $onInit() {
        this.tmpData = this.buttonData;
    }
    public getNameColor(singleButton) {
        this.buttonInfo({clickedButton: singleButton});
        this.count++;
    }
}
