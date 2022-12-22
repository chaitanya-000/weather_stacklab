import { Input } from "@mantine/core";
import React from "react";
import { IconSearch } from "@tabler/icons";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <Input
      icon={<IconSearch />}
      placeholder="Enter city"
      size="lg"
      radius="md"
      className="seaarchBar"
    />
  );
};

export default SearchBar;
