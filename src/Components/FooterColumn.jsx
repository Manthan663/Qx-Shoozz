const FooterColumn = ({ title, items }) => {
  return (
    <>
      <div>
        <h3 className="uppercase mb-4 font-semibold">{title}</h3>

        <ul className="flex flex-col  gap-4">
          {items.map((item, index) => (
            <li key={index} className="hover:text-red-500 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default FooterColumn;
