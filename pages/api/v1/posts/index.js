import axios from "axios";

const getPosts = async (req, res) => {
  try {
    const axiosRes = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    let posts = axiosRes.data;
    res.status(200).json(posts.slice(0, 10));
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).json({ message: "Api Error!" });
  }
};

export default getPosts;
