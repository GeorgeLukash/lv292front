import * as moment from 'moment';
import * as _ from 'lodash';

export class DatePickerService {

  public createCalendar(month) {

    let firstDay = moment(month).startOf('M');
    let monthLength = month.daysInMonth();
    let weekDayStart = firstDay.weekday();

    return this.addDays(firstDay, monthLength, weekDayStart);
  }

  public getDayNames() {
    return moment.weekdaysShort();
  }

  private addDays(firstDay, monthLength, weekDayStart) {

    const days = _(monthLength)
     .range()
     .map(day => moment(firstDay).add(day, 'd'))
     .value();
 
    return [..._.fill(_.range(weekDayStart), null), ...days];
  }

}
