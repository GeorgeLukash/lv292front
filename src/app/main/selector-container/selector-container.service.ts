export class SelectorService {

    public cars: object[];
    public items: object[];

    public getCars() {
        this.cars = [
            {model : 'Ford Mustang', color : 'red'},
            {model : 'Fiat 500', color : 'white'},
            {model : 'Volvo XC90', color : 'black'}
        ];
        return this.cars;
    }

    public getSelectorList() {
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
