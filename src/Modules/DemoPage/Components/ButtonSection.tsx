import * as React from "react";
import { observer } from "mobx-react";
import { css } from "emotion";
import MyThemedButton from "../../../Components/MyThemedButton/MyThemedButton";
import S from "../DemoPageSharedCss";

@observer
export default class ButtonSection extends React.Component<any> {
  render() {
    return (
      <S.ComponentSampleArea>
        <S.ComponentLabel>Buttons</S.ComponentLabel>
        <S.ComponentSampleArea>
          <button
            onClick={() => {
              console.log("yo");
            }}
          >
            Click Me
          </button>
        </S.ComponentSampleArea>

        <S.SmallVerticalSpacer />

        <S.ComponentSampleArea>
          <MyThemedButton
            onClick={() => {
              console.log("yo");
            }}
            className={css`
              width: 200px;
              align-self: center;
            `}
          >
            Click Me
          </MyThemedButton>
        </S.ComponentSampleArea>
      </S.ComponentSampleArea>
    );
  }
}
