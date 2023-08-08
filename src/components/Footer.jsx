const Footer = () => {
  return (
    <footer className="font-medium flex bg-[#0a192f] text-white w-full justify-center">
      <p className=" mb-5">
        Coded with <span className="text-pink-600">❤️</span> by{" "}
        <button
          className="text-pink-600"
          href="https://github.com/CodeJude"
          onClick={() => window.open("https://github.com/JudeVector")}
        >
          CodeJude
        </button>
      </p>
    </footer>
  );
};

export default Footer;
