import { Input } from "@mantine/core";
import React from "react";
import { IconSearch } from "@tabler/icons";

const SearchBar = () => {
  return (
    <Input
      icon={<IconSearch />}
      placeholder="Enter city"
      size="lg"
      radius="lg"
    />
  );
};

export default SearchBar;
