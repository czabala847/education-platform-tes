import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageRender',
})
export class ImageRenderPipe implements PipeTransform {
  transform(imagePath: string): string {
    return `/assets/${imagePath}`;
  }
}
