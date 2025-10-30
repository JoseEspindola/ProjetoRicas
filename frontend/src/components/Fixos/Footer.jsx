function Footer() {
  const data = new Date().toLocaleDateString("pt-BR");

  return (
    <footer className="bg-primary text-white text-center py-3 mt-auto">
      <p className="mb-0">
        Desenvolvido por José Espíndola — {data}
      </p>
    </footer>
  );
}
export default Footer;