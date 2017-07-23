import { Component, Output, EventEmitter } from '@angular/core';
import { Joke } from '../../models/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();
  createJoke(setup: string, punchline: string): void {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
