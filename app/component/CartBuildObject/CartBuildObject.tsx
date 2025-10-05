import { BuiltObjectsData } from "../BuildObjects/types";
import "./CartBuildObject.scss";

interface CartBuildObjectProps {
  data: BuiltObjectsData;
}

export default function CartBuildObject({ data }: CartBuildObjectProps) {
  return (
    <aside className="CartBuildObject">
      <img src="CartBuildObject_Top.svg" className="CartBuildObject_Top" />
      <header>
        <p>{data.year} р.</p>
        <div>{data.type}</div>
      </header>
      <img src={data.img} className="CartBuildObject__img" />
      <h3>{data.name}</h3>
      <p>{data.adress}</p>
      <footer>
        <h6>Види робіт:</h6>
        <div>
          {data.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
      </footer>
      <img src="CartBuildObject_Down.svg" className="CartBuildObject_Down" />
    </aside>
  );
}
