import axios from "axios";

const updateItem = async (id, data) => {
  try {
    const item = await axios.put("", data);
    if (item) {
      return item;
    }
  } catch (error) {
    console.log(error);
  }
};

export default updateItem;
