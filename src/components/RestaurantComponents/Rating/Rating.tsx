import { RatingContainer, RowFrame, Rows, Title } from "./style";
import {
  StarIcon,
  StarsFrame,
} from "../../Cards/CardsDesktop/RestaurantsCards/style";
import { CheckBoxIcon } from "../../Order/OrderMobile/style";
import { ClearBtnFrame, ClearBtnTitle } from "../../buttons";

const Rating = () => {
  const renderRow = (starNum: number) => (
    <>
      <RowFrame>
        <CheckBoxIcon />
        <StarsFrame>
          {[...new Array(5)].map((arr, index) => {
            return (
              <StarIcon key={index} active={index < starNum ? true : false} />
            );
          })}
        </StarsFrame>
      </RowFrame>
    </>
  );

  return (
    <>
      <RatingContainer>
        <Title>Rating</Title>
        <Rows>
          {renderRow(1)}
          {renderRow(2)}
          {renderRow(3)}
          {renderRow(4)}
          {renderRow(5)}
        </Rows>

        {/* if clicked */}
        <ClearBtnFrame>
          <ClearBtnTitle>clear</ClearBtnTitle>
        </ClearBtnFrame>
      </RatingContainer>
    </>
  );
};

export default Rating;
