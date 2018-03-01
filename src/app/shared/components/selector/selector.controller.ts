export class SelectorController {
    public output: any; 
    
    public selectedData(item) {
         this.output({selection: item});
    }
}
