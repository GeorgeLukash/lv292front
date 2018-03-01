import { ContentDataService } from './service/content.service';

export class AccordionContainerController {
    public static $inject = ['ContentDataService'];
    public contentData: any;

    public constructor(public serviceData: ContentDataService) { }

    public $onInit() {
        this.serviceData.getAllTitles()
            .then((res) => this.contentData = res.data);
    }
    public getData() {
        return this.serviceData.getAccordionList();
    }
}
