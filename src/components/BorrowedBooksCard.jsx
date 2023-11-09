import Swal from "sweetalert2";
import { AiFillEye} from "react-icons/ai";
import { GiReturnArrow ,GiRead} from "react-icons/gi";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";

const BorrowedBooksCard = ({data, refetch}) => {
    const axios = useAxios();
    const { name,
        author_name,
        rating,
        description,
        price,
        bookId,
        image,
        quantity,
        category_name,
        _id, return_date}= data;
    const handleDelete = _id =>{
        
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Return it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
    
           axios.delete(`/borrowed-book/${_id}`)
            .then(data => {
                if(data?.data?.deletedCount > 0){
                Swal.fire(
                'success',
                `Your ${name} book has been returned.`,
                'success'
              )
              const update = quantity + 1;
      const updateQuantity = { quantity: update };

      axios.put(`/all-book/${bookId}`, updateQuantity);
      refetch()

    
                }
            })
    
            }
          })
    }
    
    return (

        <div data-aos="fade-up"
        data-aos-duration="800" >
             
        
        <div className="shadow-xl bg-[#F5F4F1]   rounded-lg p-8">
             <div className="flex justify-around gap-5 items-center  ">
            <div>
                <figure><img className="md:h-[500px]" src={image} alt="" /></figure>
            </div>
           
           
        </div>
        <div className="flex justify-between gap-3 my-4">
    
                
    
        <div>
                    <Link to={`/read/${bookId}`}>
                    <button className="btn btn-md ">
                 
                    <span className="flex text-3xl dark:text-white text-gray-600">
                      <GiRead></GiRead>
                    </span>
                   
                  
                  </button></Link>
                  
                  </div>
    
    <div onClick={()=> handleDelete(_id)} className="w-[40px] h-[40px] btn flex justify-center items-center rounded-md bg-[#EA4744]"><span className="text-xl text-[white]"><GiReturnArrow></GiReturnArrow></span></div>
    
    </div>
    
        <div className="space-y-4 text-left">
                <h1 className="text-xl block font-medium">Name:<span className="text-[#5C5B5B]">{name}</span></h1>
                <h1 className="text-xl block font-medium">Author Name:<span className="text-[#5C5B5B]">{author_name}</span></h1>
                <h1 className="text-xl block font-medium">Category Name: <span className="text-[#5C5B5B]">{category_name}</span></h1>
                <h1 className="text-xl block font-medium">Return Date: <span className="text-[#5C5B5B]">{return_date}</span></h1>
              
            </div>
        
        </div>
        </div>
       
    );
    };
export default BorrowedBooksCard;

