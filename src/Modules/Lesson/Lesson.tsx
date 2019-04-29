import { React, MachineComponent, css, cx, observable } from "../../Core";
import S from "./LessonStyles";

export default class Lesson extends MachineComponent {
  @observable ourList: Array<number> = [1, 2, 3, 4, 5];
  @observable ourRef: any = null;
  @observable inputVal: string = "";

  constructor() {
    super();
    this.ourRef = React.createRef();
  }

  onButtonClick = () => {
    //console.log(this.ourRef.current);
    //this.ourRef.current.focus();
  };

  onInputChange = (e: any) => {
    this.inputVal = e.target.value;
  };

  render() {
    return (
      <div className={`jtb ${cx(S.flexAndFill, MyStyles.flexColumn)}`}>
        <div>Test</div>
        <div>
          {this.ourList.map((listItem: number, index: number) => {
            return (
              <div
                className={css`
                  display: flex;
                `}
              >
                <div>item: {listItem} -></div>
                <div>index: {index}</div>
              </div>
            );
          })}
        </div>
        <div>
          <input
            type="text"
            value={this.inputVal}
            onChange={this.onInputChange}
            ref={this.ourRef}
          />
          <button onClick={this.onButtonClick}>Focus</button>
        </div>
      </div>
    );
  }
}

const MyStyles = {
  flexColumn: css`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `
};
