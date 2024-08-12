import { HeaderTitle } from "../styles/header";
import Socials from "./Socials";

export default function Content() {
  return (
    <div style={{ position: "relative", zIndex: 10 }} className="poppins">
      <HeaderTitle>
        <span style={{ opacity: 0.5 }}>Jakub</span>{" "}
        <span style={{ opacity: 1 }}>Urbański</span>
      </HeaderTitle>
      <Socials />
    </div>
  );
}
