import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconProp;
  size: "lg" | "2x" | "3x" | "4x" | "5x" | "10x" | undefined;
}

const MyFontAwesomeIcon: React.FC<Props> = ({ icon, size = "lg" }) => {
  return (
    <FontAwesomeIcon
      className="px-1 hover:text-slate-600 dark:hover:text-slate-300 hover:translate-y-[-3px] transition-transform duration-250 ease-in-out"
      icon={icon}
      size={size}
    />
  );
};

export default MyFontAwesomeIcon;
