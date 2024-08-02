import axios from "axios";

const addItem = async (data) => {
  try {
    const getItem = await axios.get();
  } catch (error) {
    console.log(error);
  }
};

export default addItem;
