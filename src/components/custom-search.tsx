import { Input } from "@mantine/core";
import Search from "../assets/search.svg";

const CustomSearch = () => {
  return (
    <div
      style={{ display: "flex", position: "relative", alignItems: "center" }}
    >
      <Input w={450} size="sm" radius="xl" placeholder="Search for courses" />
      <img
        src={Search}
        style={{
          position: "absolute",
          right: 0,
          height: 35,
          bottom: 0,
          top: 0,
        }}
      />
    </div>
  );
};
export default CustomSearch;
