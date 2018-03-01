export class PageListService {

  public list;

  public getPages() {

    this.list = [
      {
        name: 'Table',
        url: 'itable'
      },
      {
        name: 'Button Group',
        url: 'button-group'
      },
      { 
        name: 'Date Picker', 
        url: 'date-picker'
      },
      {
        name: 'Accordion',
        url: 'accordion'
      },
      { 
        name: 'Slider', 
        url: 'slider' 
      },
      { 
        name: 'Selector', 
        url: 'selector' 
      },
      {
        name: 'Color Picker',
        url: 'color-picker'
      }
    ];

    return this.list;
  }
}
