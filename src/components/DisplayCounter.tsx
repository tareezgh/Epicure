import { getValue } from "@testing-library/user-event/dist/utils";
import { useSelector } from "react-redux";

interface IProps {
  counter: {value:number};
}

export default function DisplayCounter() {
  const count = useSelector((state: IProps) => state.counter.value);

  return (
    <>
     <div>
       DisplayCounter in another component! <br />
       {count}
     </div>
    </>
  );
}
