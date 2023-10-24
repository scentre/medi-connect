import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import type { RootState } from "~/app/store";

const Home = () => {
  const data = useSelector((state: RootState) => state.book.bookList);

  return (
    <Box>
      {data.map((item) => (
        <Box>{item.author}</Box>
      ))}
    </Box>
  );
};

export default Home;
