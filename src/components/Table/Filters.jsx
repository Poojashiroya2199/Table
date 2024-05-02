import { Delete } from "@emotion-icons/fluentui-system-filled";
import { Edit2Outline } from "@emotion-icons/evaicons-outline";
import { AddCircle } from "@emotion-icons/fluentui-system-regular";

//css
import * as Styles from "./index.styles";

const Filters = ({ handleModal, handleDelete, search, handleSearch }) => {
  return (
    <Styles.FiltersContainer>
      <Styles.SearchContainer>
        <Styles.SearchIcon fill="#979797" />
        <Styles.SearchInput
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Styles.SearchContainer>
      <Styles.ButtonsContainer>
        <Styles.IconButton onClick={handleDelete}>
          <Delete fill="#113f67" width="28" height="28" />
        </Styles.IconButton>
        <Styles.IconButton onClick={() => handleModal("edit", true)}>
          <Edit2Outline fill="#113f67" width="28" height="28" />
        </Styles.IconButton>
        <Styles.IconButton onClick={() => handleModal("add", true)}>
          <AddCircle fill="#113f67" width="28" height="28" />
        </Styles.IconButton>
      </Styles.ButtonsContainer>
    </Styles.FiltersContainer>
  );
};

export default Filters;
