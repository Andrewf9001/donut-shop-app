import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faEnvelope,
  faLock,
  faBars,
  faHandPointDown
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faEnvelope,
    faLock,
    faBars,
    faHandPointDown
  );
};

export default Icons;
