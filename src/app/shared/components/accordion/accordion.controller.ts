import { Content } from './model/content.data.model';

import * as _ from 'lodash';

export class AccordionController {
    public contentMenu: Content[] = [];

    public $onChanges(changes) {
        this.contentMenu = this.fillContentList(changes.contentData.currentValue);
    }
    public fillContentList(inputData): any[] {
        return _.map(inputData, (item) => ({ ...new Content(), ...item }));
    }
}
