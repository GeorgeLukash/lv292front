import * as moment from 'moment';
import { DatePickerService } from './date-picker.service';

export class DatePickerController {
  
  public static $inject = ['DatePickerService'];
  
  private defaultDateFormat;
  private date;
  private dateFormat;
  private selectionMode;
  private selection;
  private outputSelect;
  private showDatePicker;

  constructor (private datePickerService: DatePickerService) { }

  public $onInit() {
    this.showDatePicker = false;
    this.showInput();
    this.setDateFormat(); 
    this.date = moment();
  }

  public setDateFormat() {
    this.defaultDateFormat = !(this.dateFormat === 'MM/DD/YYYY') ? 'DD/MM/YYYY' : this.dateFormat;
  }

  public showInput() {
    if (!(this.selection === 'range')) {
      this.selectionMode = {singleSelect: true};
    } else {
      this.selectionMode = {rangeSelect: true};
    }
  }

  public getOutput(selected) {
    this.outputSelect({
      selectedDays: selected
    });
    return selected;
  }
  
  public showDatePickerBody(st) { 
    this.showDatePicker = !this.showDatePicker;
    return this.showDatePicker;
  }

}
