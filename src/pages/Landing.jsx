import Header from  "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom"
function Landing() {
    const data = useLocation()
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md ">
        {/* Header */}
        < Header name={data.state.user} />
        {/* Card */}
        <div className="flex justify-between gap-7 flex-wrap">
          <Card bgColor={"#8272DA"} title={"23°"} subTitle={"Chennai"} Card />
          <Card bgColor={"#FD6663"} title={"February"} subTitle={"14.55.02"} Card />
          <Card bgColor={"#FCA201"} title={"Built Using"} subTitle={"React"} Card />
        </div>
        {/* TodoContainer */}
        <TodoContainer />
      </div>
    </div>
  );
}

export default Landing;
