import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import BorrowedBooksCard from "../components/BorrowedBooksCard";


const BorrowedBooks = () => {
    const{user}= useAuth()
    const axios = useAxios()
    const { data, refetch } = useQuery({
        queryKey: ["check-borrowed"],
        queryFn: async () => {
          return await axios.get(`/borrowed-book?email=${user?.email}`)
        },
      });
 
       
    return (
        <div>
            <div>
                <img src="https://i.ibb.co/PGkGM15/13741295-2011-i126-001-old-library-book-interior-set-22-1.jpg" alt="" />
            </div>
            <div className='max-w-screen-xl my-15 mx-auto p-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    data?.data?.result.map(data=><BorrowedBooksCard data={data} key={data._id} refetch={refetch}></BorrowedBooksCard>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;