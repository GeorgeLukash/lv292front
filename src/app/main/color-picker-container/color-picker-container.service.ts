export class ColorPickerContainerService {
    
public items: object[];
    
public getColorPickerList() {
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
