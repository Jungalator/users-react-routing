import { ThreeCircles } from "react-loader-spinner";

export default function Loader({ isVisible }) {
  return (
    <ThreeCircles
      wrapperStyle={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        justifyContent: "center",
        zIndex: "100",
      }}
      visible={isVisible}
      height={`${50}%`}
      width={`${50}%`}
      radius={9}
      color="#00bfff"
      ariaLabel="three-circles-loading"
    />
  );
}
