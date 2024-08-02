import axios from "axios";

const getItems = async () => {
  try {
    const items = await axios.get("");
    if (items) {
      return items;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getItems;
