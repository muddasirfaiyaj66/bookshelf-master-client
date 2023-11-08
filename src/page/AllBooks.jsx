import { useState } from "react";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import AllBooksCard from "../components/AllBooksCard";

const AllBooks = () => {
  const [order, setOrder] = useState("asc");
  const axios = useAxios();
  const { data, error, isLoading } = useQuery({
    queryKey: ["AllBooks", order],
    queryFn: async () => {
      return await axios.get(`/all-book?sortField=quantity&sortOrder=${order}`);
    },
  });

  return (
    <div>
      <div>
        <img src="https://i.ibb.co/HqTrV4d/9396104-3016.jpg" alt="" />
      </div>
      <div className="ml-8 my-5 form-control ">
        <label className="label">
          <span className="font-bold text-xl">Filter By Quantity</span>
        </label>
        <select
          className="input input-bordered w-3/6 md:w-2/6"
          onChange={(e) => setOrder(e.target.value)}
        >
          <option disabled selected>
            Choose One
          </option>
          <option value="asc">From low to high</option>
          <option value="desc">From high to low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.data?.map((book) => (
          <AllBooksCard book={book} key={book._id}></AllBooksCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
