/** Atoms */
import ButtonTest from "../tests/Button.testsuite";
import DividerTest from "../tests/Divider.testsuite";
import LinkTest from "../tests/Link.testsuite";

/** Molecules */
import CardTest from "../tests/Card.testsuite";
import FormTest from "../tests/Form.testsuite";
import DrawerTest from "../tests/Drawer.testsuite";
import DropdownTest from "../tests/Dropdown.testsuite";
import HeaderTest from "../tests/Header.testsuite";
import ModalTest from "../tests/Modal.testsuite";
import PageTest from "../tests/Page.testsuite";

describe("\n** Modular-ui - Unit tests **", () => {
  describe("\n\n** Atoms **\n", () => {
    ButtonTest();
    DividerTest();
    LinkTest();
  });

  describe("\n\n** Molecules **\n", () => {
    CardTest();
    DrawerTest();
    DropdownTest();
    FormTest();
    HeaderTest();
    ModalTest();
    PageTest();
  });
});
