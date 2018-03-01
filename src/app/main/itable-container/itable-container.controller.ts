import { DataList } from './itable-container.service';

export class ItableContainerController {
    public static $inject: string[] = ['DataList'];
    
    constructor(private dataList: DataList) { }

    public getData() {
        return this.dataList.getList();
    }
}
