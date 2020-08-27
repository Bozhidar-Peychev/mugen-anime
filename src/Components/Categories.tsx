import React, { useState, useEffect } from "react";
import TableTemp from "./TableTemplate";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
function Categories() {
  const [animelist, setAnimelist] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((response) => setAnimelist(response.data));
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "MAL ID",
        accessor: "series_animedb_id",
      },
      {
        Header: "Title",
        accessor: "series_title",
      },
      {
        Header: "Type",
        accessor: "series_type",
      },
      {
        Header: "Episodes",
        accessor: "series_episodes",
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

export default Categories;
