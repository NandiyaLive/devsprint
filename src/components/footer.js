const Footer = () => {
  return (
    <footer>
      <section className="container mt-20 flex flex-col-reverse items-center justify-between gap-2 border-t py-8 sm:flex-row">
        <p>Copyright &copy; {new Date().getFullYear()} WIE AG UoV</p>

        <div className="flex items-center gap-8">
          <a
            href="https://tinyurl.com/rnxvejsy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 opacity-90 hover:opacity-100"
          >
            <p>LinkedIn</p>
          </a>
          <a
            href="https://tinyurl.com/y3ntbzfv"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 opacity-90 hover:opacity-100"
          >
            <p>Facebook</p>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
