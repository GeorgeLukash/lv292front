import { DatePickerService } from '../date-picker.service';

export class DatePickerHeaderController {

  public static $inject = ['DatePickerService'];

  public date;
  public daysArray;
  public monthSwitch;

  constructor (private datePickerService: DatePickerService) { }

  public nextMonth() {
    this.date.add(1, 'M');
    this.daysArray = this.datePickerService.createCalendar(this.date);
    this.monthSwitch({
      daysArray: this.daysArray
    });
  }

  public previousMonth() {
    this.date.subtract(1, 'M');
    this.daysArray = this.datePickerService.createCalendar(this.date);
    this.monthSwitch({
      daysArray: this.daysArray
    });
  }

  public formatMonthName(format) {
    return this.date.format(format);
  }

}
