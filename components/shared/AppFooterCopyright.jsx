function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        <a
          href="https://www.linkedin.com/in/danielaluciamartinez/"
          target="__blank"
          className="text-secondary-dark dark:text-secondary-light font-medium  hover:underline hover:text-accent-bright dark:hover:text-accent-bright ml-1 duration-500"
        >
          Daniela Martinez
        </a>
        &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default AppFooterCopyright;
