import React from 'react'
import { NavLink } from 'react-router-dom';
import {
    DropdownMenu,
    DropdownItem,
    Dropdown,
  } from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
         <Dropdown item text="Sepetiniz">
              <DropdownMenu>
                <DropdownItem>Acer Laptop</DropdownItem>
                <DropdownItem>Asus Laptop</DropdownItem>
                <DropdownItem>Dell Laptop</DropdownItem>
                <Dropdown.Divider/>
                <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
              </DropdownMenu>
            </Dropdown>
    </div>
  )
}
