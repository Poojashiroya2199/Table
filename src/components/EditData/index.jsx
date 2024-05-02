import { Button } from "@mui/material";
import {
  FormContainer,
  ButtonsContainer,
  InputContainer,
  Input,
  Label,
} from "../AddData/index.styles";

const EditData = ({ editData, handleClose, handleEditChange, handleEdit }) => {
  return (
    <FormContainer>
      <InputContainer>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Enter Full Name"
          value={editData.name}
          onChange={(e) => handleEditChange("name", e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="type">Type</Label>
        <Input
          type="text"
          id="type"
          placeholder="Enter Type"
          value={editData.type}
          onChange={(e) => handleEditChange("type", e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="size">Size</Label>
        <Input
          type="text"
          id="size"
          placeholder="Enter Size"
          value={editData.size}
          onChange={(e) => handleEditChange("size", e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="price">Price</Label>
        <Input
          type="text"
          id="price"
          placeholder="Enter Price"
          value={editData.price}
          onChange={(e) => handleEditChange("price", e.target.value)}
        />
      </InputContainer>
      <ButtonsContainer>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleEdit}>
          Submit
        </Button>
      </ButtonsContainer>
    </FormContainer>
  );
};

export default EditData;
