import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number;

  @Output() private increase: EventEmitter<number> = new EventEmitter<number>();

  @Output() private decrease: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  public plus(i: number): void {
    this.increase.emit(i);
  }

  public moins(i: number): void {
    this.decrease.emit(i);
  }
}
