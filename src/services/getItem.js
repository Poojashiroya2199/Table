import axios from "axios";

const getItem = async (id) => {
  try {
    const item = await axios.get("");
    if (item) {
      return item;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getItem;
