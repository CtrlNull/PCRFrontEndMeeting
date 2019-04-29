import { React, css, cx, observer } from "../../Core";

export interface JTBSpecificComponentProps {
  fontSize: string;
  text: string;
}

@observer
export default class JTBSpecificComponent extends React.Component<any> {
  render() {
    let text = this.props.text.toUpperCase();
    return (
      <div style={{ fontSize: this.props.fontSize }} className={MyStyles.label}>
        {text}
      </div>
    );
  }
}

const MyStyles = {
  label: cx(
    "mega-label",
    css`
      font-weight: 600;
    `
  )
};
