import { DatePickerContainerService } from './date-picker-container.service';

export class DatePickerContainerController {
  public static $inject: string[] = ['DatePickerContainerService'];
  public selectedDef = this.dateCreator();

    constructor(private DatePickerContainerService: DatePickerContainerService ) {};

  public dateCreator() {
    let day = new Date();
    let tomorrowDate = day.getDate();
    day.setDate(tomorrowDate);
    return day;
  }
  public getData() {
    return this.DatePickerContainerService.getDatePickerList();
  }
}
