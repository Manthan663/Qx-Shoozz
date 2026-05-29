import SubMenu from "./SubMenu";

const NavItem = ({ item }) => {
  return (
    <li className="group">
      
      <span className="cursor-pointer hover:text-red-500 transition">
        {item.label}
      </span>

      {item.submenu &&(
        <SubMenu items={item.submenu} images={item.images}/>
      )}

    </li>
  );
};

export default NavItem;