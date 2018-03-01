export class DatePickerContainerService {
    
public items: object[];

public getDatePickerList() {
    this.items = [
      {
        'Inputs/Outputs': 'date-format',
        'Type of': 'String',
        'Default': '"DD/MM/YYYY"',
        'Options': '"MM/DD/YYYY"'
      },
      {
        'Inputs/Outputs': 'default-selected',
        'Type of': 'Date',
        'Default': 'none',
        'Options': 'new Date()'
      },
      {
        'Inputs/Outputs': 'selection-mode',
        'Type of': 'String',
        'Default': 'none',
        'Options': '"range"'
      },
      {
        'Inputs/Outputs': 'output-select',
        'Type of': 'Date',
        'Default': 'Date',
        'Options': 'Returns selected date'
      }
    ];
    return this.items;
  }
}
