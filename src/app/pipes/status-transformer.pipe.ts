import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'statusTransformer'
})
export class StatusTransformerPipe implements PipeTransform {

    transform(value: boolean): string {
        return value ? 'Completed' : 'Not Completed';
    }

}
