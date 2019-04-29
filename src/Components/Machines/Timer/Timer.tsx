import * as React from "react";
import Machine from "../../../MachineComponent";
import { observable } from "mobx";
import { css } from "emotion";

enum CountDirection {
  UP = "UP",
  DOWN = "DOWN"
}

export default class Timer extends Machine {
  //milliseconds
  @observable time: number = 0;
  //count direction
  @observable countDirection: CountDirection = CountDirection.UP;
  //initial start time in milliseconds
  @observable startTime: number = 0;
  //timer running
  @observable isRunning: boolean = false;

  constructor() {
    super();
    setInterval(this.timerLoop, 10);
  }

  timerLoop = () => {
    if (this.isRunning) {
      if (this.countDirection === CountDirection.UP) {
        this.time++;
      } else {
        this.time--;
      }
    }
  };

  startTimer = () => {
    //start the timer
    this.isRunning = true;
  };

  stopTimer = () => {
    //stop the timer
    this.isRunning = false;
  };

  resetTimer = () => {
    //reset timer
    this.time = this.startTime;
  };

  toggleCountDirection = () => {
    //toggle the direction of the counter
    if (this.countDirection === CountDirection.DOWN) {
      this.countDirection = CountDirection.UP;
    } else {
      this.countDirection = CountDirection.DOWN;
    }
  };

  render() {
    return (
      <div
        className={S.timerContainer(this.countDirection === CountDirection.UP)}
      >
        {this.time}
      </div>
    );
  }
}

const S = {
  timerContainer: (countingUp: boolean) => css`
    background-color: ${countingUp ? `green` : `red`};
    font-size: 24px;
    color: white;
    text-align: center;
  `
};
