import { useMemo, useEffect, useState } from "react";
import { useMaterialReactTable } from "material-react-table";
import { Modal } from "@mui/material";

import AddData from "../AddData/index";
import EditData from "../EditData";
import { data } from "../../mock/table";
import Filters from "./Filters";

//css
import { TableContainer, StyledMaterialTable } from "./index.styles";

//camelcase
export const camelCase = (input) => {
  if (typeof input !== "string") {
    return "";
  }

  // Split the input string by underscore or space
  const words = input.split(/[_\s]+/);

  // Map each word to title case (first letter uppercase, rest lowercase)
  const formattedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the formatted words with underscores or spaces based on original input
  const formattedOutput = input.includes("_")
    ? formattedWords.join("_")
    : formattedWords.join(" ");
  return formattedOutput;
};

const StyledTable = () => {
  const [tableData, setTableData] = useState(data);
  const [rowSelection, setRowSelection] = useState({});

  //search filter
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (value) => {
    console.log(value);
    setSearchInput(value);
    if (!value || value.length === 0) {
      setTableData(data);
    }
    if (value && value.length > 0) {
      const filteredData = tableData.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.type.toLowerCase().includes(value.toLowerCase()) ||
          item.size.toString().toLowerCase().includes(value.toLowerCase()) ||
          item.price.toString().toLowerCase().includes(value.toLowerCase()),
      );
      console.log(filteredData);
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
    }
    setAddData({
      name: "Enter Full Name",
      type: "Enter Type",
      size: "Enter Size",
      price: "Enter Price",
    });
    setAddModal(false);
  };
  // handle add modal input onRowSelectionChange
  const handleAddChange = (property, value) => {
    if (property === "name") setAddData({ ...addData, name: value });
    if (property === "type") setAddData({ ...addData, type: value });
    if (property === "size") setAddData({ ...addData, size: value });
    if (property === "price") setAddData({ ...addData, price: value });
  };

  //handle delete items
  const handleDelete = () => {
    const checkVal = Object.keys(rowSelection);
    const filteredData = tableData.filter(
      (_item, index) => !checkVal.includes(index.toString()),
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
  //  handle edit data
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
    if (property === "name") setEditData({ ...editData, name: value });
    if (property === "type") setEditData({ ...editData, type: value });
    if (property === "size") setEditData({ ...editData, size: value });
    if (property === "price") setEditData({ ...editData, price: value });
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "Name",
        size: 100,
        muiTableHeadCellProps: { sx: { color: "#113f67" } }, //optional custom props
        Cell: ({ cell }) => <span>{camelCase(cell.getValue())}</span>, //optional custom cell render
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
        muiTableHeadCellProps: {
          sx: { color: "#113f67" },
        },
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
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data: tableData,
    enableFilters: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableHiding: false,
    enableRowSelection: true, //give each row a more useful id
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
      <Filters
        search={searchInput}
        handleSearch={handleSearch}
        handleModal={handleModal}
        handleDelete={handleDelete}
      />
      <StyledMaterialTable table={table} />
      {/* add modal */}
      <Modal open={addModal} handleClose={() => setAddModal(false)}>
        <AddData
          handleClose={() => setAddModal(false)}
          handleAdd={handleAdd}
          addData={addData}
          handleAddChange={handleAddChange}
        />
      </Modal>
      {/* edit modal */}
      <Modal open={editModal} handleClose={() => setEditModal(false)}>
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
