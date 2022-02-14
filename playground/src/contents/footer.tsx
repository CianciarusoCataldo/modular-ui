const FooterContent = () => {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="flex flex-row m-auto">
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
    </div>
  );
};

export default FooterContent;
