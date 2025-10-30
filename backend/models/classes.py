import stat
from  bancoDados.dbAlchemy import db

class Post(db.Model):
    __tablename__ = 'post'
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(100), nullable=False)
    categoria = db.Column(db.String(50), nullable=False)
    conteudo = db.Column(db.Text, nullable=False)
    autor = db.Column(db.String(50), nullable=False)
    dataPublicacao = db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    
    @classmethod
    def criar(cls, titulo, categoria, conteudo, autor, dataPublicacao):
        novo_post = cls(
            titulo=titulo,
            categoria=categoria,
            conteudo=conteudo,
            autor=autor,
            dataPublicacao=dataPublicacao
        )
        db.session.add(novo_post)
        db.session.commit()
    @classmethod
    def obter_todos(cls):
        return cls.query.all()
    @classmethod
    def obter_por_id(cls, post_id):
        return cls.query.get(post_id)