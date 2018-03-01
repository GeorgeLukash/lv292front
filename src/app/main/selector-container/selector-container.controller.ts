import { SelectorService } from './selector-container.service';

export class SelectorContainerController {
    public static $inject: string[] = ['SelectorService'];

    public myCars: object[];

    constructor(private selectorService: SelectorService) {};

    public $onInit () {
       this.myCars = this.selectorService.getCars();
    }

    public getData() {
        return this.selectorService.getSelectorList();
    }
}
