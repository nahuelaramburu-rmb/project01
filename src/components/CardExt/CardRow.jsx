import { cardData } from "./CardData";
import CardExt from "./CardExt";
import "./CardExt.css";

export default function CardRow() {
  return (
    <div className="cardrow-container row">
      {cardData.map(({ ImgSrc, CrdTitle, CrdText }) => (
        <CardExt ImgSrc={ImgSrc} CrdTitle={CrdTitle} CrdText={CrdText} />
      ))}
    </div>
  );
}
