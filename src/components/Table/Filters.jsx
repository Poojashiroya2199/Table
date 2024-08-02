import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

//css
import * as Styles from "./index.styles";

const Filters = ({ rowSelection,handleModal, handleDelete, search, handleSearch }) => {
  return (
    <Styles.FiltersContainer>
        <Styles.SearchContainer>
          <SearchIcon />
          <Styles.SearchInput
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search..."
            size="small"
          />
        </Styles.SearchContainer>
        <Styles.ButtonsContainer>
          <Styles.IconButton onClick={() => handleModal("add", true)}>
            <AddCircleIcon color="primary" />
          </Styles.IconButton>
          <Styles.IconButton onClick={() => handleModal("edit", true)} disabled={!Object.keys(rowSelection).length}>
            <EditIcon color={Object.keys(rowSelection).length ? "primary" : "disabled"} />
          </Styles.IconButton>
          <Styles.IconButton onClick={handleDelete} disabled={!Object.keys(rowSelection).length}>
            <DeleteIcon color={Object.keys(rowSelection).length ? "error" : "disabled"} />
          </Styles.IconButton>
        </Styles.ButtonsContainer>
      </Styles.FiltersContainer>
  );
};

export default Filters;
