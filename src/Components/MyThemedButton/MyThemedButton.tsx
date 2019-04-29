import * as React from 'react';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';

export interface Props {
  children?: any;
  onClick?: (e: any) => void;
  className?: string;
}

@observer
export default class MyThemedButton extends React.Component<any> {
  render() {
    return (
      <S.ButtonStyled
        className={this.props.className && this.props.className}
        onClick={this.props.onClick && this.props.onClick}
      >
        <S.Label>{this.props.children && this.props.children}</S.Label>
      </S.ButtonStyled>
    );
  }
}

const S = {
  ButtonStyled: styled.div`
    background-color: #e8e8e8;
    display: flex;
    justify-content: center;
    box-shadow: inset 0px 0px 0px 1px #999999;
    cursor: pointer;
    transition: all 0.15s ease;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;

    &:active {
      box-shadow: inset 0px 0px 2px 2px #666666;
      background-color: #888888;
      color: #dedede;
    }

    &:hover {
      box-shadow: inset 0px 0px 0px 2px #666666;
    }
  `,
  Label: styled.div`
    font-size: 24px;
    margin: 4px;
    user-select: none;
  `
};
