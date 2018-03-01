import { PageListService } from './sidebar.service';

export class SidebarController {

  public static $inject: string[] = ['PageListService'];

  public allPages: any[];
  
  constructor (private pageListService: PageListService) { }

  public $onInit() {
    this.allPages = this.pageListService.getPages();
  }
}
