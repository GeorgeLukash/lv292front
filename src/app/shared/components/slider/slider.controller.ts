export class SliderController {
    private static $inject = ['$interval'];

    private activeElementIndex: number;
    private allSliders: NodeListOf<Element>;
    private sliderPlay: void;
    private getName: any;
    private imagesData: Image[];
    
    constructor(private $interval: any) {
    }

    public $onInit() {
        this.activeElementIndex = 0;
        this.allSliders = document.getElementsByClassName('slide');
        this.getName({name: this.imagesData[this.activeElementIndex].name});
    }

    public nextSlide(): void {
        this.allSliders[this.activeElementIndex].classList.remove('show');
        this.activeElementIndex += 1;

        if (this.activeElementIndex >= this.allSliders.length) {
            this.activeElementIndex = 0;
        }

        this.allSliders[this.activeElementIndex].classList.add('show'); 
        this.getName({name: this.imagesData[this.activeElementIndex].name});
    }

    public autoPlay(timeout: number): void {
        this.sliderPlay = this.$interval(() => {this.nextSlide(); }, timeout);
    }

    public stopPlay(): void {
        this.$interval.cancel(this.sliderPlay);
    }

    public previousSlide(): void {
        this.allSliders[this.activeElementIndex].classList.remove('show');
        this.activeElementIndex -= 1;

        if (this.activeElementIndex < 0) {
            this.activeElementIndex = this.allSliders.length - 1;    
        }

        this.allSliders[this.activeElementIndex].classList.add('show'); 
        this.getName({name: this.imagesData[this.activeElementIndex].name});
    }

    public $onDestroy() {
        this.stopPlay();
    }
}

export interface Image {
    url: string;
    name: string;
};
