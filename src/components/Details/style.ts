import styled from "styled-components";

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailsContainer = styled(FlexContainerColumn)<{
  page?: string;
}>`
  ${(props) =>
    props.page === "Desktop"
      ? `width: 408px;
      height: 708px;
      margin-right: 32px;
      box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
      `
      : `width: 100%;
  position: fixed;
  height: 700px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `};
  gap: 40px;
  top: 46px;
  z-index: 1;
  overflow-y: scroll;
  background: #ffffff;
`;

export const InfoFrame = styled(FlexContainerColumn)`
  padding: 40px 0 0 0;
  width: 351px;
  // height: 242px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Title = styled.h3`
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 2.67px;
  text-transform: uppercase;
  margin: 0 0 40px 0;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const InputFiled = styled(FlexContainerColumn)`
  align-items: flex-start;
  padding: 0px;

  width: 327px;
  // height: 52px;
  border-bottom: 0.5px solid #000000;
  margin: 0 0 40px 0;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const InputTitle = styled.h5`
  height: 18px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1.97px;

  color: #000000;

  opacity: 0.4;
  margin: 0;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Input = styled.input.attrs({
  type: "text",
})`
  width: 327px;
  font-size: 14px;
  line-height: 18px;

  text-align: flex-start;
  letter-spacing: 1.97px;
  margin-bottom: 8px;
  color: #000000;
  border: none;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
