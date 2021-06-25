import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice2",
  templateUrl: "./exercice2.component.html",
  styleUrls: ["./exercice2.component.css"],
})
export class Exercice2Component implements OnInit {
  @ViewChild("mot") public ref!: ElementRef<HTMLInputElement>;

  public valeur: string;

  constructor() {}

  ngOnInit() {}

  public send() {
    this.valeur = this.ref.nativeElement.value;
  }
}
