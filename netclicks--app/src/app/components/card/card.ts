import { Component } from '@angular/core';
import { Input } from '@angular/core';

type TytleType = string | number
interface TytleInterface {


}

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() title : string = " "
}
