/*
Create your own component.
  Must be interactable in some way.

*/

import { React, MachineComponent, css, cx } from "../../Core";
import JTBStyles from "./JTBStyles";
import JTBSpecificComponent from "./Components/JTBSpecificComponent/JTBSpecificComponent";

export default class JTB extends MachineComponent {
  render() {
    return (
      <div
        className={`jtb ${cx(
          JTBStyles.flexAndFill,
          JTBStyles.flexContentCenter,
          MyStyles.flexColumn
        )}`}
      >
        <div>Label that goes big!</div>
        <JTBSpecificComponent />
      </div>
    );
  }
}

const MyStyles = {
  flexColumn: css`
    flex-direction: column;
  `
};
