import { useQuery } from "@tanstack/react-query";
import BooksCategoryCard from "../components/BooksCategoryCard";
import useAxios from "../hooks/useAxios";


const Home = () => {
   const axios = useAxios();
   const {
    data: categories,
    error,
    isLoading,

   }= useQuery({
    queryKey: ['allCategories'],
    queryFn: async()=>{
      return await axios.get('/categories');
    }
   });
   
    return (
        <div>
          <div className="mb-10 ">
            <img src="https://i.ibb.co/KVPvNwq/5467439-1733-1.jpg" alt="" />
          </div>
          <div className="mb-10 ">
            <img src="https://i.ibb.co/3sGqxhb/open-book-grass-1.jpg" alt="" className="w-full content-cover"/>
          </div>

          <div className="mb-10 max-w-screen-xl mx-auto p-5 ">
            <h2 className=" text-5xl text-center font-bold my-8 "> Book Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {
                categories?.data?.map(categoryData => <BooksCategoryCard categoryData={categoryData} key={categoryData._id} ></BooksCategoryCard> )
              }
               
            </div>
          </div>
        </div>
    );
};

export default Home;