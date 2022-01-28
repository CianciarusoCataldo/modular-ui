const FooterContent = () => {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="flex flex-row mb-1">
        <img
          alt=""
          className="p-1"
          src="https://img.shields.io/npm/l/@cianciarusocataldo/modular-ui?label=License"
          height="25"
        />

        <img
          alt=""
          className="p-1"
          src="https://img.shields.io/npm/v/@cianciarusocataldo/modular-ui?color=blue&label=Latest%20version"
          height="25"
        />
      </div>

      <div className="flex flex-row">
        <img
          alt=""
          className="p-1"
          src="https://img.shields.io/codecov/c/github/CianciarusoCataldo/modular-ui?label=Codecov%20coverage"
          height="25"
        />
        <img
          alt=""
          className="p-1"
          src="https://github.com/CianciarusoCataldo/modular-ui/actions/workflows/modular-ui.yml/badge.svg?branch=main)](https://github.com/CianciarusoCataldo/modular-ui/actions/workflows/modular-ui.yml"
          height="25"
        />
      </div>
    </div>
  );
};

export default FooterContent;
