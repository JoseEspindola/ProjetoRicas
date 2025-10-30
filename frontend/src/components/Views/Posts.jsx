import { useState, useEffect } from "react";
import CardNoticia from "../Ui/CardNoticias";
function Posts() {
  const [erro, setErro] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/GetAllPosts")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setLista(dados);
      })
      .catch((erro) => {
        setErro(erro.message);
        console.error("Erro na requisição:", erro);
      });
  }, []); 

  return (
  <>
    {erro && <p style={{ color: "red" }}>{erro}</p>}
    {lista.length > 0 ? (
      <div>
        {lista.map((post) => (
          <CardNoticia
            id={post.id}
            titulo={post.titulo}
            categoria={post.categoria}
            conteudo={post.conteudo}
            autor={post.autor}
            data={post.dataPublicacao}
          />
        ))}
      </div>
    ) : (
      <p>Nenhum post disponível.</p>
    )}
  </>
);


}

export default Posts;
