import { ButtonGroupContainerService } from './button-group-container.service';

export class ButtonGroupContainerController {
    public static $inject: string[] = ['ButtonGroupContainerService'];
    
    public buttons: object[];    
    
    constructor(private buttonGroupContainerService: ButtonGroupContainerService ) {};

    public $onInit () {
        this.buttons = this.buttonGroupContainerService.getButton();        
    }
    public getData() {
        return this.buttonGroupContainerService.getButtonList();
    }
}
