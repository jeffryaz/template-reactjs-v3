import React from "react";
import { Nav } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

const initialNavLists = [
  { id: "link-item-1", label: "Item 1" },
  { id: "link-item-2", label: "Item 2" },
  { id: "link-item-3", label: "Item 3" },
];

export default function Navs({
  navLists = initialNavLists,
  defaultActiveKey = navLists[0].id,
  handleSelect,
  ...other
}) {
  return (
    <Nav
      variant="pills"
      defaultActiveKey={defaultActiveKey}
      onSelect={handleSelect}
      {...other}
    >
      {navLists.map((item) => (
        <Nav.Item key={item.id}>
          <Nav.Link eventKey={item.id} style={{ fontWeight: 500 }}>
            <FormattedMessage id={item.label} />
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}
