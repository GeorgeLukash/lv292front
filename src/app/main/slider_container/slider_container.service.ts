export class SliderContainerService {
    public items: object[];
    private imagesData: object[];

    public getImages() {
        this.imagesData = [
            {
                url: 'https://image.ibb.co/k2VFUR/pexels_photo_237180_1.jpg',
                name: 'Winter Tree'
            },
            {
                url: 'https://image.ibb.co/dsxvUR/pexels_photo_245263.jpg',
                name: 'Red Fruit Handing on Tree Branch'
            },
            {
                url: 'https://image.ibb.co/ehBppR/pexels_photo_289416.jpg',
                name: 'Ice Crystals on Flowers'
            },
            {
                url: 'https://image.ibb.co/b2SUpR/pexels_photo_355411.jpg',
                name: 'Winter Lake'
            }
        ];
        return this.imagesData;
    }

    public getSliderList() {
        this.items = [
          {
        'Inputs/Outputs': 'date-format (input)',
        'Type of': 'Array',
        'Options': "[{url: 'testUri', name: 'My image'}]"
      },
      {
        'Inputs/Outputs': 'timeout (input)',
        'Type of': 'Number',
        'Options': '10000'
      },
      {
        'Inputs/Outputs': 'get-name (output)',
        'Type of': 'String',
        'Options': "({name: 'Images name'})"
      }
    ];
        return this.items;
      }
}
