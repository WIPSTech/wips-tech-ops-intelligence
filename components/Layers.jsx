import { layers } from "../data/services";

export default function Layers() {
  return (
    <ol className="layers">
      {layers.map((layer, i) => (
        <li key={layer.name} className="layer">
          <span className="ai-tag">{i < 2 ? "No AI" : "AI, with limits"}</span>
          <h3>{layer.name}</h3>
          <p>{layer.when}</p>
          <p>{layer.fix}</p>
          <p className="eg">Example: {layer.example}</p>
        </li>
      ))}
    </ol>
  );
}
