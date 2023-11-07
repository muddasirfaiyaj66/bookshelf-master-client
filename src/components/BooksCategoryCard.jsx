

const BooksCategoryCard = ({categoryData }) => {
  const {category_name,image_url } =categoryData;
    return (
        <div>
            <div className="card card-compact bg-base-100 h-[500px] shadow-xl">
  <figure><img src={image_url} alt={category_name} className="h-full w-full object-cover" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{category_name}</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <div className="card-actions justify-end">
      <button className="btn w-full  bg-[#F47025] hover:bg-[#0CAFCD] text-white">See Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BooksCategoryCard;