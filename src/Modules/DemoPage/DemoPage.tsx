import * as React from "react";
import Machine from "../../MachineComponent";
import { observable } from "mobx";
import Styles from "./DemoPageSharedCss";
import ButtonSection from "./Components/ButtonSection";
import Timer from "../../Components/Machines/Timer/Timer";
import * as Data from "./Data/TodosApi";
import SampleDataObject from "./Models/SampleDataObject";
import SampleDataBox from "./Components/SampleDataBox";

export default class DemoPage extends Machine {
  @observable inputValue: string = "";
  @observable timer: Timer = new Timer();

  @observable sData1: SampleDataObject = new SampleDataObject();
  @observable sData2: SampleDataObject = new SampleDataObject();
  @observable sData3: SampleDataObject = new SampleDataObject();
  @observable loading: boolean = false;

  constructor() {
    super();
    Data.retrieveAll(this);
  }

  inputOnChange = (e: any) => {
    this.inputValue = e.target.value;
  };

  render() {
    return (
      <Styles.PageContainer>
        <div>Demo Page</div>

        <ButtonSection />

        <Styles.VerticalSpacer />

        <Styles.ComponentSampleArea>
          <Styles.ComponentLabel>Inputs</Styles.ComponentLabel>
          <Styles.ComponentSampleArea>
            <input
              type="text"
              value={this.inputValue}
              placeholder="Type Here"
              onChange={this.inputOnChange}
            />
          </Styles.ComponentSampleArea>
        </Styles.ComponentSampleArea>

        <Styles.VerticalSpacer />

        <Styles.ComponentSampleArea>
          <Styles.ComponentLabel>Timer</Styles.ComponentLabel>
          <Styles.ComponentSampleArea>
            <this.timer.render />
            <button
              onClick={() => {
                this.timer.startTimer();
              }}
            >
              Start
            </button>
            <button
              onClick={() => {
                this.timer.stopTimer();
              }}
            >
              Stop
            </button>
            <button
              onClick={() => {
                this.timer.toggleCountDirection();
              }}
            >
              Toggle Counter Direction
            </button>
            <button
              onClick={() => {
                this.timer.resetTimer();
              }}
            >
              Reset
            </button>
            <input
              type="text"
              value={this.timer.startTime}
              onChange={e => {
                const value: number = parseInt(e.target.value);
                console.log(value);
                if (!Number.isNaN(value)) {
                  this.timer.startTime = value;
                } else {
                  this.timer.startTime = 0;
                }
              }}
            />
          </Styles.ComponentSampleArea>
        </Styles.ComponentSampleArea>
        <Styles.ComponentSampleArea>
          <Styles.ComponentLabel>Data</Styles.ComponentLabel>
          <Styles.ComponentSampleArea>
            <button
              onClick={() => {
                Data.retrieveAll(this);
              }}
            >
              Reload random todos
            </button>
            {this.loading ? <div>Loading</div> : <div>Done</div>}
            <SampleDataBox sampleDataObject={this.sData1} />
            <SampleDataBox sampleDataObject={this.sData2} />
            <SampleDataBox sampleDataObject={this.sData3} />
          </Styles.ComponentSampleArea>
        </Styles.ComponentSampleArea>
      </Styles.PageContainer>
    );
  }
}
