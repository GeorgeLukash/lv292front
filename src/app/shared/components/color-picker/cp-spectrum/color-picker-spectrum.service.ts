export class ColorPickerService {

    public rgbToHex(R, G, B) {
        return this.toHex(R) + this.toHex(G) + this.toHex(B);
      }
    
    public getCursorPosition(event) {
        return {
            x: event.offsetX,
            y: event.offsetY
        };
    }

    public getColorFromImage(imgData) {
        return {
            red: imgData[0],
            green: imgData[1],
            blue: imgData[2]
        };
    }

    private getHexColor(numberOfRgb) {
        const colorNumber = parseInt(numberOfRgb, 10);
        const searchNumber = Math.max(0, Math.min(colorNumber, 255));
        return this.getCharFromNumber(searchNumber);
      }
        
    private toHex(colorNumber: number): string {
        return isNaN(colorNumber) ? '00' : this.getHexColor(colorNumber);
      }
    
    private getCharFromNumber(colorNumber) {
        const chars: string = '0123456789ABCDEF';
        return chars.charAt((colorNumber - colorNumber % 16) / 16) + chars.charAt(colorNumber % 16);
    }

}
