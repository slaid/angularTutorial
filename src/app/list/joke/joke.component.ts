import { Component, Input } from '@angular/core';
import { Joke } from '../../models/joke';

@Component({
  selector: 'app-list-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})

export class JokeComponent {
  @Input('joke') data: Joke;
}
