import { useState } from "react";

function Publicar() {
  const [formData, setFormData] = useState({
    titulo: "",
    autor: "",
    categoria: "Geral",
    conteudo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simula envio para API
    console.log("Dados enviados:", formData);
    const url = "http://127.0.0.1:5000/GetPosts"; 

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({titulo: formData.titulo, autor: formData.autor, categoria: formData.categoria, conteudo: formData.conteudo, dataPublicacao: new Date().toISOString()}),
    })
      .then((resposta) => resposta.json())
      .then((dados) => {
        alert("Notícia publicada com sucesso!");
      })
      .catch((erro) => {
        console.error("Erro ao enviar dados:", erro);
        setMensagem("Erro ao enviar dados");
      });

    setFormData({
      titulo: "",
      autor: "",
      categoria: "Geral",
      conteudo: "",
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Publicar Notícia</h2>

      <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded">
        <div className="mb-3">
          <label className="form-label fw-semibold">Título da Notícia </label>
          <input
            type="text"  className="form-control" name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            required/>
        </div>


        <div className="mb-3">
          <label className="form-label fw-semibold">Autor / Jornalista </label>
          <input
            type="text" className="form-control"
            name="autor"
            value={formData.autor}
            onChange={handleChange}
            required
          />
        </div>


        <div className="mb-3">
          <label className="form-label fw-semibold">Categoria </label>
          <select 
          className="form-select" name="categoria"
          value={formData.categoria} onChange={handleChange}
            required>
            <option value="Esportes">Esportes</option>
            <option value="Cultura">Cultura</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Educação">Educação</option>
            <option value="Geral">Geral</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Conteúdo da Notícia </label>
          <textarea className="form-control"
            name="conteudo" rows="6" value={formData.conteudo}
            onChange={handleChange} required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100 fw-semibold">
          Publicar Notícia
        </button>
      </form>
    </div>
  );
}
export default Publicar;