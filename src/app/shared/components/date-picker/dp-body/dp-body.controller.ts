import * as moment from 'moment';

import { DatePickerService } from '../date-picker.service';

export class DatePickerBodyController {

  public static $inject = ['DatePickerService'];

  private date;
  private daysArray;
  private weekDayNames;

  private selectedDate;
  private selectedFrom;
  private selectedTo;

  private defaultSelected;
  private defaultDateFormat;
  private selectionMode;
  private outputDate;

  constructor (private datePickerService: DatePickerService) { }

  public $onInit() {

    this.selectedDate = null;
    this.selectedFrom = null;
    this.selectedTo = null;
   
    this.setDefaultDate();  
    this.weekDayNames = this.datePickerService.getDayNames();
    this.daysArray = this.datePickerService.createCalendar(this.date);
  }

  public setDefaultDate() {
    if (this.checkDefaultDateSettings()) {
      return false;
    }

    let day = moment(this.defaultSelected);
    this.selectDay(day);     
  }

  public checkDefaultDateSettings() {
    return !this.defaultSelected || 
            this.selectionMode.selectRange || 
            !(this.defaultSelected instanceof Date);
  }

  public todayCheck(day) {
    return day && moment().format('L') === day.format('L');
  }

  public selectDay(day) {
    if (!day) {
      return false;
    }
    this.setSelect(day);
    this.sendOutput();
  }

  public setSelect(day) {
    if (this.selectionMode.rangeSelect) {
      this.nullRangeSelections();
      this.setRangeValues(day);
    } else {
      this.selectedDate = day.format(this.defaultDateFormat);
    }
  }

  public nullRangeSelections() {
    if (this.selectedFrom && this.selectedTo) {
      this.selectedFrom = null;
      this.selectedTo = null;
    }
  }

  public setRangeValues(day) {
    if (!this.selectedFrom) {
      this.selectedFrom = day.format(this.defaultDateFormat);  
    } else if (!this.selectedTo) {
      this.setRangeTo(day);
    } 
  }

  public setRangeTo(day) {
    if (this.checkRangeTo(day)) { 
      return false;
    }
    this.selectedTo = day.format(this.defaultDateFormat);  
  }

  public checkRangeTo(day) {
    return moment(this.selectedFrom, this.defaultDateFormat).isAfter(day);
  }

  public sendOutput() {
    if (this.selectionMode.rangeSelect) {
      this.makeOutput({
        rangeFrom: this.selectedFrom, 
        rangeTo: this.selectedTo
      });
    } else {
      this.makeOutput({ 
        singleSelected: this.selectedDate 
      });
    }
  }

  public makeOutput(selection) {
    this.outputDate({
      selectedDate: selection
    });
  }

  public currentSelected(day) {
    if (this.selectionMode.rangeSelect) {
      return this.currentSelectedRange(day); 
    }
    return day && moment(this.selectedDate, this.defaultDateFormat).isSame(day);
  }

  public currentSelectedRange(day) {
    return moment(this.selectedFrom, this.defaultDateFormat).isSame(day) || 
          moment(this.selectedFrom, this.defaultDateFormat).isSameOrBefore(day) && 
          moment(this.selectedTo, this.defaultDateFormat).isSameOrAfter(day);
  }
}
