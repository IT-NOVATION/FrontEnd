import axios from "axios";
import { baseApi } from "./instance";

type Props = {
  title: string;
  content: string;
  date: Date;
};

export const createPost = ({ title, content, date }: Props) =>
  axios.post("http://localhost:4000/create-post", {
    title,
    content,
    date,
  });
