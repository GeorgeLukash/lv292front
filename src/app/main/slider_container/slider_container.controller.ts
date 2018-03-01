import { SliderContainerService } from './slider_container.service';

export class SliderContainerController {
    private static $inject: string[] = ['SliderContainerService'];
    public data: object[];
    public timeout: number;
    public imageName: string;

    constructor(private sliderContainerService: SliderContainerService) {};

    public $onInit() {
        this.data = this.sliderContainerService.getImages();
        this.timeout = 10000;
    }

    public getData() {
        return this.sliderContainerService.getSliderList();
    }
}
