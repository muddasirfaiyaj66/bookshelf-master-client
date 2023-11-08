import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import CategoryDataCard from "../components/layout/CategoryDataCard";

const SeeCategoryData = () => {
    const {category_name} = useParams() ;
    const encodedCategory = encodeURIComponent(category_name);
    
    const axios = useAxios();
    const {
        data: categories,
        error,
        isLoading,
    
       }= useQuery({
        queryKey: ['DataOfCategory'],
        queryFn: async()=>{
          return await axios.get(`/all-book?category_name=${encodedCategory}`);
        }
       });
        console.log(categories);
    return (
        

        <div>
            <div>
            <img src={category_name==='Business & Investing'? 'https://i.ibb.co/x3LjLZQ/16027450-1905-i003-014-digital-investment-text-1.jpg' : category_name==='History'? 'https://i.ibb.co/Tcxwq0L/12120863-1075-1.jpg' : category_name==='Science Fiction & Fantasy'? 'https://i.ibb.co/02qVjWL/4758667-1488-1.jpg' :category_name==='Computers & Technology'? 'https://i.ibb.co/NsT3xSD/6871649-29498-1.jpg' : ''} alt="" />
            </div>
            <div className="text-center my-8 p-5 font-bold text-4xl"> Books Of {category_name}</div>
           <div  className="max-w-screen-xl mx-auto my-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                categories?.data?.map(cardData=> <CategoryDataCard cardData={cardData} key={cardData._id}></CategoryDataCard>)
            }
           </div>
        </div>
    );
};

export default SeeCategoryData;