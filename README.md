# Portal de Notícias Escolar 📰

Este é um **portal de notícias escolar** desenvolvido para divulgar informações, eventos e conquistas da comunidade escolar. O site permite visualizar notícias, filtrar por categoria e publicar novos conteúdos. O objetivo é aproximar alunos, professores e a comunidade em geral, oferecendo uma plataforma simples e interativa de comunicação.

---

## Tecnologias Utilizadas

### Frontend
- **React.js**: Biblioteca principal para construção da interface do usuário e gerenciamento de componentes.  
- **React Router**: Gerencia a navegação entre páginas (Home, Publicar, Detalhes).  
- **Bootstrap 5**: Framework CSS para estilização rápida e responsiva, incluindo cards, botões e layout.  
- **Fetch API**: Realiza requisições HTTP para o backend Flask e manipula os dados retornados.

### Backend
- **Python 3**: Linguagem utilizada para a construção do backend.  
- **Flask**: Framework web leve para criar a API REST que serve os dados das notícias.  
- **Flask SQLAlchemy**: ORM para gerenciar o banco de dados e facilitar operações com tabelas e modelos.  
- **SQLite**: Banco de dados local para armazenar notícias, autores, categorias e datas de publicação.  

### Outros
- **JSON**: Formato de troca de dados entre frontend e backend.  
- **Datetime (Python)**: Para manipulação de datas e horas de publicação das notícias.  

---

## Funcionalidades
- Listagem de notícias com título, categoria, conteúdo resumido, autor e data.  
- Visualização de detalhes de cada notícia.  
- Formulário para publicação de novas notícias.  
- Exemplo de notícia modelo na página inicial.  
- Layout responsivo utilizando Bootstrap.  
