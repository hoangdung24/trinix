import { ButtonShape } from "../../components";

const NavItem = ({ title, ...props }) => {
  return <ButtonShape title={title} position="left" {...props} />;
};

export default NavItem;
