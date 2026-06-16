const FooterLogo = ({ logo, items }) => {
  return (
    <div className=" flex flex-col ">
      <img src={logo} className="w-36 mb-4" />
      {items.map((item, index) => (
        <p key={index} className="leading-6">{item}</p>
      ))}
    </div>
  );
};

export default FooterLogo;
