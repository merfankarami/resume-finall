import Typed from "react-typed";

export default function CustomTyped({ string, className }) {
  return (
    <Typed
      strings={[string]}
      typeSpeed={40}
      backSpeed={50}
      className={className}
      loop />
  );
}
