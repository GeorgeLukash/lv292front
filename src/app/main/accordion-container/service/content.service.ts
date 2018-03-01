import { ApiService } from '../../service/api.service';

export class ContentDataService {
    public static $inject = ['ApiService'];
    public content: any;
    public items: object[];
    constructor(public http: ApiService) { };


    public getAllTitles() {
        return this.http.get('accordion');
    }

    public getAccordionList() {
        this.items = [
            {
                'Inputs/Outputs': 'some text',
                'Type of': 'some text',
                'Default': 'some text',
                'Options': 'some text'
            },
            {
                'Inputs/Outputs': 'some text',
                'Type of': 'some text',
                'Default': 'some text',
                'Options': 'some text'
            },
            {
                'Inputs/Outputs': 'some text',
                'Type of': 'some text',
                'Default': 'some text',
                'Options': 'some text'
            },
            {
                'Inputs/Outputs': 'some text',
                'Type of': 'some text',
                'Default': 'some text',
                'Options': 'some text'
            }
        ];
        return this.items;
    }
}
