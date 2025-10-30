import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PaginaDetalhes() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/GetPost/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar post");
        return res.json();
      })
      .then((dados) => setPost(dados))
      .catch((erro) => setErro(erro.message));
  }, [id]);

  if (erro) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">{erro}</div>
      </div>
    );
  }
  return (
    <div className="container my-5">
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <h1 className="card-title mb-3 text-primary">{post.titulo}</h1>
          <span className="badge bg-secondary mb-3">{post.categoria}</span>

          <p className="card-text fs-5 text-muted" style={{ whiteSpace: "pre-line" }}>
            {post.conteudo}
          </p>

          <hr />

          <div className="d-flex justify-content-between text-muted small">
            <span>✍️ {post.autor}</span>
            <span>📅 {post.data}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaDetalhes;
