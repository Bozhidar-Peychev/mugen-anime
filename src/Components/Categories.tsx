import React from "react";
import TableTemp from "./TableTemplate";
import AnimeList from "./animeList.json";
import CssBaseline from "@material-ui/core/CssBaseline";

function Categories() {
  const columns = React.useMemo(
    () => [
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
      {
        Header: "MAL ID",
        accessor: "series_animedb_id",
      },
    ],
    []
  );
  const data = React.useMemo(() => AnimeList, []);

  return (
    <div>
      <CssBaseline />
      <TableTemp columns={columns} data={data} />
    </div>
  );
}

export default Categories;
