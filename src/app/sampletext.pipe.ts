import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sampletext'
})
export class SampletextPipe implements PipeTransform {


  transform(value: string): any {
  	if (!value) return null;

  	let prepositions = [
  	'of',
  	'the'
  	];

  	let words = value.split(' ');
  	for (var i = 0; i < words.length; i++){
  		if (prepositions.includes(words[i]))
  			words[i] = words[i].toLowerCase();
  		else{
  			words[i] = this.toTitleCase(words[i]);
  		}
  	}
  	words[0]=this.toTitleCase(words[0]);
    return words.join(' ');
  }
  private toTitleCase(word:string){
  	return word.substr(0,1).toUpperCase()+word.substr(1).toLowerCase();
  }

}
