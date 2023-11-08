import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Rating } from "@mui/material";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Swal from "sweetalert2";
const DetailsBook = () => {
    const {id}= useParams();
    const location = useLocation();
  const navigate = useNavigate();
    const axios = useAxios();
    const {
        data,
        error,
        isLoading,
        refetch
    
       }= useQuery({
        queryKey: ['Book-details'],
        queryFn: async()=>{
          return await axios.get(`/all-book/${id}`);
        }
       });
       const {name,author_name,rating,description,price,image,quantity,category_name,_id}= data?.data || {};
       const handleDelete = ()=>{

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`/all-book/${_id}`)
        .then(res=>{
          if(res?.data?.deletedCount >0){
            Swal.fire(`${name}`, "has been Deleted", "success");
            refetch();
            // navigate(location?.state ? location.state : "/");
            navigate(`/category-books/${category_name}`)
          }
        })
            
          }
        });
        
       
       }
    return (
        <div>
          
      <section className="overflow-hidden p-5 md:P-10 bg-white py-11 font-poppins ">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                  <img
                    src={image}
                    alt=""
                    className="object-cover w-full lg:h-full "
                  />
                </div>
                <div className="flex-wrap hidden md:flex "></div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8 ">
                  <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold  md:text-4xl">
                    {name}
                  </h2>

                  <p>
                    by{" "}
                    <span className="ml-2 font-bold text-xl">{author_name}</span>
                  </p>
                  <p className="block font-sans my-3 text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                 {category_name}
                  </p>
                  <Rating name="size-large" style={{color:'tomato'}} defaultValue={rating} precision={0.5} size="large" />
                  <div className="flex ml-2 text-xl items-center mt-5 font-bold mb-6">
                   <span className="mr-2">Quantity:</span> {quantity}
                  </div>

                  <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                    <span className="flex text-gray-600">
                      <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
                      {price}
                    </span>
                  </p>

                  <p className="max-w-md mb-8 text-gray-700 dark:text-gray-700">
                    <p className="text-2xl font-bold ">Short Description:</p>
                    {description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 items-center  ">
                  <div className="w-full mb-4  lg:mb-0">
                    <button
                    //   onClick={handleAddToCart}
                      className=" w-full flex items-center justify-center btn-md p-4 text-green-500 border border-green-500 rounded-md dark:text-gray-200 dark:border-green-600 hover:bg-green-600 hover:border-green-600 hover:text-gray-100 dark:bg-green-600 dark:hover:bg-green-700 dark:hover:border-green-700 dark:hover:text-gray-300"
                    >
                      Borrow
                    </button>
                  </div>
                  <div className="w-full mb-4 lg:mb-0">
                    <Link to={`/edit-book/${_id}`}>
                      <button className=" w-full flex items-center justify-center btn-md p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                        Edit
                      </button>
                    </Link>
                  </div>
                  <div className="w-full  mb-4 lg:mb-0 ">
                   
                      <button onClick={handleDelete} className="flex items-center justify-center w-full btn-md p-4 text-red-500 border border-red-500 rounded-md dark:text-gray-200 dark:border-red-600 hover:bg-red-600 hover:border-red-600 hover:text-gray-100 dark:bg-red-600 dark:hover:bg-red-700 dark:hover:border-red-700 dark:hover:text-gray-300">
                        Delete
                      </button>
                    
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
  
        </div>
    );
};

export default DetailsBook;