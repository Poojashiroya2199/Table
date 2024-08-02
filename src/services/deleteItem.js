import axios from "axios";

const deleteItem = async (id) => {
  try {
    const item = await axios.delete("");
    if (item) {
      return item;
    }
  } catch (error) {
    console.log(error);
  }
};

export default deleteItem;
