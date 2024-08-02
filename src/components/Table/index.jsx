import { useMemo, useEffect, useState } from "react";
import { useMaterialReactTable } from "material-react-table";
import { Modal, Button, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

import AddData from "../AddData/index";
import EditData from "../EditData";
import { data } from "../../mock/table";
import Filters from "./Filters";

//css
import { TableContainer, StyledMaterialTable, FiltersContainer, SearchContainer, ButtonsContainer, IconButton, SearchInput } from "./index.styles";

//camelcase
export const camelCase = (input) => {
  if (typeof input !== "string") {
    return "";
  }

  const words = input.split(/[_\s]+/);

  const formattedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  const formattedOutput = input.includes("_")
    ? formattedWords.join("_")
    : formattedWords.join(" ");
  return formattedOutput;
};

const StyledTable = () => {
  const [tableData, setTableData] = useState(data);
  const [rowSelection, setRowSelection] = useState({});
  const [loading, setLoading] = useState(false);

  //search filter
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (value) => {
    setSearchInput(value);
    if (!value || value.length === 0) {
      setTableData(data);
    }
    if (value && value.length > 0) {
      const filteredData = data.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.type.toLowerCase().includes(value.toLowerCase()) ||
          item.size.toString().toLowerCase().includes(value.toLowerCase()) ||
          item.price.toString().toLowerCase().includes(value.toLowerCase())
      );
      setTableData(filteredData);
    }
  };

  // add modal details
  const [addModal, setAddModal] = useState(false);
  const [addData, setAddData] = useState({
    name: "",
    type: "",
    size: "",
    price: "",
  });
  // handle add submit modal
  const handleAdd = () => {
    if (
      addData &&
      addData?.name &&
      addData?.type &&
      addData?.size &&
      addData?.price
    ) {
      setTableData([addData, ...tableData]);
      setAddData({
        name: "",
        type: "",
        size: "",
        price: "",
      });
      setAddModal(false);
    }
  };
  // handle add modal input onRowSelectionChange
  const handleAddChange = (property, value) => {
    setAddData({ ...addData, [property]: value });
  };

  //handle delete items
  const handleDelete = () => {
    const checkVal = Object.keys(rowSelection);
    const filteredData = tableData.filter(
      (_item, index) => !checkVal.includes(index.toString())
    );
    setTableData(filteredData);
  };

  // Edit modal Data
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState({
    name: "",
    type: "",
    size: "",
    price: "",
  });
  // handle edit data
  const handleEdit = () => {
    if (
      editData &&
      editData?.name &&
      editData?.type &&
      editData?.size &&
      editData?.price
    ) {
      const selectedIndex = Object.keys(rowSelection);
      const selected = Number(selectedIndex[0]);
      const newData = tableData.map((item, index) => {
        if (Number(index) === Number(selected)) {
          return {
            name: editData.name,
            type: editData.type,
            size: editData.size,
            price: editData.price,
          };
        } else return item;
      });
      setTableData(newData);
    }
    setEditModal(false);
    setEditData({
      name: "",
      type: "",
      size: "",
      price: "",
    });
  };
  // handle edit modal input onRowSelectionChange
  const handleEditChange = (property, value) => {
    setEditData({ ...editData, [property]: value });
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 100,
        muiTableHeadCellProps: { sx: { color: "#113f67" } },
        Cell: ({ cell }) => <span>{camelCase(cell.getValue())}</span>,
      },
      {
        accessorKey: "type",
        header: "Type",
        size: 80,
        muiTableHeadCellProps: { sx: { color: "#113f67" } },
        Cell: ({ cell }) => <span>{camelCase(cell.getValue())}</span>,
      },
      {
        accessorKey: "size",
        header: "Size",
        size: 80,
        muiTableHeadCellProps: { sx: { color: "#113f67" } },
        Cell: ({ cell }) => <span>{cell.getValue()}</span>,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 80,
        muiTableHeadCellProps: { sx: { color: "#113f67" } },
        Cell: ({ cell }) => <span>{cell.getValue()}</span>,
        Header: () => <span>Rate &#8377;</span>,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: tableData,
    enableFilters: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableHiding: false,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    enablePagination: true,
    enableRowNumbers: true,
    positionToolbarAlertBanner: "bottom",
    state: { rowSelection },
  });

  useEffect(() => {
    const selectedIndex = Object.keys(rowSelection);
    const newData = tableData[Number(selectedIndex[0])];
    setEditData(newData);
  }, [rowSelection]);

  const handleModal = (name, val) => {
    if (name === "edit") setEditModal(val);
    if (name === "add") setAddModal(val);
  };

  return (
    <TableContainer>
     <Filters handleModal={handleModal} rowSelection={rowSelection} handleDelete={handleDelete} search={searchInput} handleSearch={handleSearch}/>
      <StyledMaterialTable table={table} />
      <Modal open={addModal} onClose={() => setAddModal(false)}>
        <AddData
          handleClose={() => setAddModal(false)}
          handleAdd={handleAdd}
          addData={addData}
          handleAddChange={handleAddChange}
        />
      </Modal>
      <Modal open={editModal} onClose={() => setEditModal(false)}>
        <EditData
          handleClose={() => setEditModal(false)}
          handleEdit={handleEdit}
          editData={editData}
          handleEditChange={handleEditChange}
        />
      </Modal>
    </TableContainer>
  );
};

export default StyledTable;
