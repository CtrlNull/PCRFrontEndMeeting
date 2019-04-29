import { React, css, cx, observer, observable } from "../../../../Core";
import { MegaLabel } from "../../../../Components/ComponentList";

@observer
export default class JTBSpecificComponent extends React.Component<any> {
  @observable textValue: string = "Sample specific component";

  onInputChange = (e: any) => {
    this.textValue = e.target.value;
  };

  render() {
    return (
      <div className={MyStyles.JTBSpecificComponentContainer}>
        <MegaLabel fontSize="24px" text={this.textValue} />
        <div className={MyStyles.inputContainer}>
          <input
            className={MyStyles.inputStyle}
            type="text"
            value={this.textValue}
            onChange={this.onInputChange}
          />
        </div>
      </div>
    );
  }
}

const MyStyles = {
  JTBSpecificComponentContainer: cx(
    "jtb-specific-component-container",
    css`
      background-color: #fff8dc;
    `
  ),
  inputContainer: css`
    display: flex;
    width: 100%;
    justify-content: center;
  `,
  inputStyle: css`
    flex-grow: 1;
    text-align: center;
  `
};
