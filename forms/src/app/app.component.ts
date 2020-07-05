import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  words : string = '';
  vowels : string = '';
  longest : string = '';
  shortest : string = '';
  name: string = ''; 
  longest_l : number ;
  shortest_l : number ;
  submit(value){
    value = value.replace(/ +(?= )/g,'');
    //Word Count
    
    this.words = value.trim().split(/\s+/).length;
    console.log(this.words);
    //Vowel Count
    this.vowels = value.toLowerCase();
    this.vowels = value.match(/[aeiou]/gi).length;
    console.log(this.vowels);
    
    // Find shortest word in string
    this.shortest = value.split(" ").reduce(function(shortestWord, currentWord) {
      if(currentWord.length < shortestWord.length)
         return currentWord;
      else
         return shortestWord;
    },value.split(" ")[0]);
    this.shortest_l = this.shortest.length;
    console.log("shortest",this.shortest);
    // Find longest word in string
    this.longest = value.split(" ").reduce(function(longestWord, currentWord) {
      if(currentWord.length > longestWord.length)
         return currentWord;
      else
         return longestWord;
    }, "");
    this.longest_l = this.longest.length;

    console.log("longest",this.longest);
    
  
  }


  
}
