import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enCine'
})
export class EnCinePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(args);
    if(value == 0) return "Ya estrenó y no está en cines.";
    else if ( value == 1) return "SI (Precio de entrada: $" + args[0] + ")";
    return "Pronto estreno";
  }

}
