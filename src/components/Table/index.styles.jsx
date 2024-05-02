import { Search } from "@emotion-icons/boxicons-regular";
import styled from "@emotion/styled";
import { MaterialReactTable } from "material-react-table";

export const TableContainer = styled.section`
  max-width: 100%;
  width: 100%;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f2f2f2;
  background: #fff;
  border-radius: 32px;
  padding: 8px;
  gap: 4px;
  width: max-content;
  min-width: 147px;
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;

  ::placeholder {
    color: #979797;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const IconButton = styled.button`
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 4px;
  background: #fff;

  :hover {
    border: 1px solid #979797;
  }
`;

export const StyledMaterialTable = styled(MaterialReactTable)`
  &.MuiTableContainer-root {
  }
`;
