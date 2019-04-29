import styled from '@emotion/styled';

export default {
  PageContainer: styled.div`
    flex-grow: 1;
    margin: 20px;
    padding: 4px 8px;
    background-color: white;
    border-radius: 6px;
    overflow-y: auto;
    overflow-x: hidden;
  `,
  ComponentSampleArea: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ComponentLabel: styled.div`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  `,
  VerticalSpacer: styled.div`
    margin-top: 25px;
  `,
  SmallVerticalSpacer: styled.div`
    margin-top: 4px;
  `
};
