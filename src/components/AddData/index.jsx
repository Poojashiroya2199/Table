import { Button } from "@mui/material";
//css
import {
  FormContainer,
  InputContainer,
  Label,
  Input,
  ButtonsContainer,
} from "./index.styles";

const AddData = ({ handleClose, handleAdd, handleAddChange, addData }) => {
  return (
    <FormContainer>
      <InputContainer>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Enter Full Name"
          value={addData.name}
          autoComplete
          onChange={(e) => handleAddChange("name", e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="type">Type</Label>
        <Input
          type="text"
          id="type"
          autoComplete
          placeholder="Enter Type"
          value={addData.type}
          onChange={(e) => handleAddChange("type", e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="size">Size</Label>
        <Input
          type="text"
          id="size"
          autoComplete
          placeholder="Enter Size"
          value={addData.size}
          onChange={(e) => handleAddChange("size", e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="price">Price</Label>
        <Input
          type="text"
          id="price"
          autoComplete
          placeholder="Enter Price"
          value={addData.price}
          onChange={(e) => handleAddChange("price", e.target.value)}
        />
      </InputContainer>
      <ButtonsContainer>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleAdd}>
          Submit
        </Button>
      </ButtonsContainer>
    </FormContainer>
  );
};

export default AddData;
