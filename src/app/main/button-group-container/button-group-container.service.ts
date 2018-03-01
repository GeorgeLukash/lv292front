export class ButtonGroupContainerService {
    
    public buttons: object[];    
    public items: object[];

    public getButton() {
        this.buttons = [
            {
             textName: 'Clicked button name is: ', 
             textColor: 'Clicked button color is: ', 
             name: 'Click', 
             color: 'Blue',
             disabled: false
            },
            {
              textName: 'Clicked button name is: ', 
              textColor: 'Clicked button color is: ',
              name: 'Danger', 
              color: 'Red', 
              disabled: false
            },
            {
              textName: 'Clicked button name is: ', 
              textColor: 'Clicked button color is: ',
              name: 'Success', 
              color: 'Green', 
              disabled: false
            },
            {
              textName: 'Clicked button name is: ', 
              textColor: 'Clicked button color is: ',
              name: 'Warning', 
              color: 'Yellow', 
              disabled: false
            },
            {  
              textName: 'Clicked button name is: ', 
              textColor: 'Clicked button color is: ',
              name: 'Secondary', 
              color: 'Gray', 
              disabled: false
            },
            {
             textName: 'Clicked button name is: ', 
             textColor: 'Clicked button color is: ',
             name: 'Disabled', 
             color: 'Gray', 
             disabled: true
            }
        ];
        return this.buttons;
    }
    public getButtonList() {
      this.items = [
        {
          'Inputs/Outputs': 'button-data (input)',
          'Type of': 'Array',
          'Options': "{[name: 'but_name' color: 'but_color']}"
      },
      {
          'Inputs/Outputs': 'buttonInfo (output)',
          'Type of': 'String',
          'Options': 'buttonInfo({clickedButton: singleButton})'
      },
      {
          'Inputs/Outputs': 'counter',
          'Type of': 'Number',
          'Options': 'Returns number of button clicks'
      }
      ];
      return this.items;
    }
}
