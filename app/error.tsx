export default function Error() {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-white">
      Parece que ocorreu um erro, talvez seu aparelho não consiga renderizar o
      site <br /> Tente uma versão alternativa{" "}
      <a href="https://ln-solutions.netlify.app/" className="text-purple">
        Aqui
      </a>
    </div>
  );
}
