from models.classes import Post
from flask import Flask, app, jsonify, request
import utils
from datetime import datetime
app = Flask(__name__)
app = utils.criar_app()

@app.route('/GetPosts', methods=['POST'])
def GetPosts():
    if request.method == "POST":
        titulo = request.json.get('titulo', '')
        categoria = request.json.get('categoria', '')  
        autor = request.json.get('autor', '')
        dataStr = request.json.get('dataPublicacao', '')
        conteudo = request.json.get('conteudo', '')
        if dataStr:
            if dataStr.endswith("Z"):
                dataStr = dataStr[:-1]
                data = datetime.fromisoformat(dataStr)
            else:
                data = datetime.now()
        Post.criar( titulo, categoria, conteudo, autor, data)
        return (jsonify({"message": "Post criado com sucesso!"}), 201)
    return (jsonify({"message": "Método não permitido"}), 405)

@app.route('/GetAllPosts', methods=['GET'])
def Posts():
    if request.method == "GET":
        todos_posts = Post.obter_todos()
        lista_posts = []
        for post in todos_posts:
            post_dict = {
                'id': post.id,
                'titulo': post.titulo,
                'categoria': post.categoria,
                'conteudo': post.conteudo,
                'autor': post.autor,
                'dataPublicacao': post.dataPublicacao.strftime("%Y-%m-%d")
            }
            lista_posts.append(post_dict)
        return jsonify(lista_posts), 200
    return jsonify({"message": "Método não permitido"}), 405
@app.route('/GetPost/<int:post_id>', methods=['GET'])
def GetPost(post_id):
    if request.method == "GET":
        post = Post.obter_por_id(post_id)
        if post:
            post_dict = {
                'id': post.id,
                'titulo': post.titulo,
                'categoria': post.categoria,
                'conteudo': post.conteudo,
                'autor': post.autor,
                'data': post.dataPublicacao.strftime("%Y-%m-%d")
            }
            return jsonify(post_dict), 200
        else:
            return jsonify({"message": "Post não encontrado"}), 404
    return jsonify({"message": "Método não permitido"}), 405
# ---------------- Execução do Aplicativo ---------------- #
if __name__ == '__main__':
    app.run(debug=True)