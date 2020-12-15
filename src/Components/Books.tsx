import React, { useState, useEffect } from "react";
import TableTemp from "./Table-template";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";

export default function Books() {
  const [animelist, setAnimelist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((response) => setAnimelist(response.data));
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Author",
        accessor: "author",
      },
      {
        Header: "Genre",
        accessor: "genre",
      },
      {
        Header: "Pages",
        accessor: "height",
      },
      {
        Header: "Publisher",
        accessor: "publisher",
      },
    ],
    []
  );
  const data = React.useMemo(() => animelist, [animelist]);

  return (
    <div>
      <CssBaseline />
      <TableTemp columns={columns} data={data} />
    </div>
  );
}
