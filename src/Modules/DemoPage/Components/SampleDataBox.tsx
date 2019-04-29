import * as React from "react";
import { observer } from "mobx-react";
import SampleDataObject from "../Models/SampleDataObject";
import styled from "@emotion/styled";

export interface SampleDataBoxProps {
  sampleDataObject: SampleDataObject;
}

@observer
export default class SampleDataBox extends React.Component<SampleDataBoxProps> {
  render() {
    const { id, title, completed } = this.props.sampleDataObject;
    return (
      <S.Container>
        <div>Todo: {id}</div>
        <div>{title}</div>
        <div>Completed: {completed.toString()}</div>
      </S.Container>
    );
  }
}

const S = {
  Container: styled.div`
    margin: 4px;
    padding: 4px;
    border: 1px solid black;
  `
};
