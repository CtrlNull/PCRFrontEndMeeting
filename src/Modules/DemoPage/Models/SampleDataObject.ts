import { observable } from "mobx";

export default class SampleDataObject {
  @observable o: number = 0;
  @observable userId: number = 0;
  @observable id: number = 0;
  @observable title: string = "";
  @observable completed: boolean = false;
}
