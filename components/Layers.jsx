import { getContent } from "../lib/i18n";

export default function Layers({ locale }) {
  const t = getContent(locale);
  return (
    <ol className="layers">
      {t.layers.map((layer, i) => (
        <li key={layer.name} className="layer">
          <span className="ai-tag">{i < 2 ? t.layersUi.noAi : t.layersUi.ai}</span>
          <h3>{layer.name}</h3>
          <p>{layer.when}</p>
          <p>{layer.fix}</p>
          <p className="eg">
            {t.layersUi.example} {layer.example}
          </p>
        </li>
      ))}
    </ol>
  );
}
