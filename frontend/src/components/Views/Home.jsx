import React from "react";
import { Link } from "react-router-dom";

function Home() {
  // Exemplo de notícia
  const noticiaExemplo = {
    id: 0,
    titulo: "Time da escola vence campeonato",
    categoria: "Esportes",
    conteudo:
      "O time de futebol da escola conquistou o primeiro lugar no torneio municipal após uma emocionante final. A equipe demonstrou garra e espírito esportivo, trazendo orgulho para toda a comunidade escolar.",
    autor: "João Silva",
    data: "15/03/2024",
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Portal de Notícias Escolar 📰</h1>
        <p className="lead text-muted mt-3">
          Bem-vindo ao nosso portal! Aqui você encontra as últimas novidades,
          eventos e conquistas da comunidade escolar. Nosso objetivo é
          compartilhar conhecimento, divulgar projetos e aproximar alunos,
          professores e toda a comunidade.
        </p>
        <p className="text-muted">
          Explore as categorias, descubra histórias inspiradoras e{" "}
          <Link to="/publicar" className="text-decoration-none">
            publique sua própria notícia.
          </Link>
        </p>
      </div>

      <hr className="my-5" />

      <h3 className="text-center mb-4">🗞️ Exemplo de Notícia</h3>

      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{noticiaExemplo.titulo}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            🏷️ {noticiaExemplo.categoria}
          </h6>
          <p className="card-text">
            {noticiaExemplo.conteudo.length > 100
              ? noticiaExemplo.conteudo.slice(0, 100) + "..."
              : noticiaExemplo.conteudo}
          </p>
          <p className="card-text">
            <small className="text-muted">
              📅 {noticiaExemplo.data} | ✍️ {noticiaExemplo.autor}
            </small>
          </p>
          <Link
            to="#"
            className="btn btn-secondary disabled"
            tabIndex="-1"
            aria-disabled="true"
            >
            Ver detalhes
            </Link>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/publicar" className="btn btn-primary px-4">
          ✏️ Publicar uma notícia
        </Link>
      </div>
    </div>
  );
}

export default Home;
