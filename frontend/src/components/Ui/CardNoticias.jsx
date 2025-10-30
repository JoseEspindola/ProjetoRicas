import { Link } from "react-router-dom";

function CardNoticia({ id, titulo, categoria, conteudo, autor, data }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          🏷️ {categoria}
        </h6>
        <p className="card-text">
          {conteudo.length > 100 ? conteudo.slice(0, 100) + "..." : conteudo}
        </p>
        <p className="card-text">
          <small className="text-muted">
            📅 {data} | ✍️ {autor}
          </small>
        </p>
        <Link to={`/detalhes/${id}`}>Ver detalhes</Link>
      </div>
    </div>
  );
}

export default CardNoticia;
