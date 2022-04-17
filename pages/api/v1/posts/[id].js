import axios from "axios";

const getPosts = async (req, res) => {
  try {
    const axiosRes = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${req.query.id}`
    );
    let post = axiosRes.data;
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).json({ message: "Api Error!" });
  }
};

export default getPosts;
