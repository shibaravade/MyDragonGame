import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-gamewindow',
  templateUrl: './gamewindow.component.html',
  styleUrls: ['./gamewindow.component.css']
})
export class GamewindowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  public yourHealth: number = 100;
  public dragonHealth: number = 100;
  public valueAfterDraganAttack: number;
  public valueAfterYouAttack: number;
  public comnt = [{ Your: 0, drg: 0 }];
  public flag: boolean = false;
  public looseFlag = false;
  public looseDrgnFlag = false;

  performAction(flag) {
    debugger;
    switch (flag) {
      case 1:
        this.valueAfterDraganAttack = Math.floor(Math.random() * 10);
        this.valueAfterYouAttack = Math.floor(Math.random() * 8);
        this.yourHealth -= this.valueAfterYouAttack;
        this.dragonHealth -= this.valueAfterDraganAttack;
        this.comnt.unshift({ Your: this.valueAfterYouAttack, drg: this.valueAfterDraganAttack });
        break;
      case 2:
        this.yourHealth -= Math.floor(this.yourHealth * 0.2);
        this.dragonHealth -= Math.floor(this.dragonHealth * 0.2);
        break;
      case 3:
        this.yourHealth += Math.floor(this.yourHealth * 0.2);
        this.dragonHealth += Math.floor(this.dragonHealth * 0.2);
        break;
      case 4:
        this.flag = true;
        break;
    }
    if (this.yourHealth < 0) {
      this.yourHealth = 0;
      this.looseFlag = true;
    }
    else {
      this.yourHealth = this.yourHealth;
      this.looseFlag = false;
    }
    this.yourHealth = this.yourHealth >= 100 ? 100 : this.yourHealth;

    if (this.dragonHealth < 0) {
      this.dragonHealth = 0;
      this.looseDrgnFlag = true;
    }
    else {
      this.dragonHealth = this.dragonHealth;
      this.looseDrgnFlag = false;
    }
    this.dragonHealth = this.dragonHealth < 0 ? 0 : this.dragonHealth;
    this.dragonHealth = this.dragonHealth >= 100 ? 100 : this.dragonHealth;
  }
}
