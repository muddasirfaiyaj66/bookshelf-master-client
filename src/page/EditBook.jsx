import { useLoaderData, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";


const EditBook = () => {
  const {name,author_name,rating,description,price,image,quantity,category_name, _id} = useLoaderData();

  const goTO = useNavigate();
    const axios = useAxios();
    
       
       const handleUpdate = (event) => {
        event.preventDefault();
    
        const form = event.target;
    
        const name = form.name.value;
        const author_name = form.author_name.value;
        const category_name = form.category_name.value;
        const rating = form.rating.value;
        const quantity = parseInt(form.quantity.value);
        const description = form.description.value;
        const image = form.image.value;
        const price = form.price.value;
    
        const updatedBookData = {
          name,
          author_name,
          rating,
          category_name,
          price,
          description,
          image,
          quantity
          
        };
        console.log(updatedBookData,price);
    
        //send data to the server
        axios.put(`/all-book/${_id}`, updatedBookData)
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Successfully Updated your book",
            });
            goTO(`/details-book/${_id}`)
            
          }
        });
    }
    return (
        <div>
            <div>
      <div className="carousel-item relative mb-10 w-1/3 mx-auto">
        <img
          src="https://i.ibb.co/Df5fV0B/12832992-5063183.jpg"
          data-aos="fade-down"
          className="w-full"
        />
      </div>
      <div className="my-10 mb-20">
        <div className="max-w-screen-xl mx-auto bg-[#F4F3F0] p-10 rounded-xl shadow-lg">
          <div className="text-center space-y-8">
            <h1 className="md:text-5xl text-2xl my-5 font-bold">Update Book Information</h1>
          </div>

          <div>
            <form  onSubmit={handleUpdate}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-bold">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    required
                    placeholder="Enter Book Name"
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-bold">Author Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={author_name}
                    name="author_name"
                    required
                    placeholder="Enter Author Name"
                    className="input input-bordered w-full "
                  />
                </div>

                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-bold">Category</span>
                  </label>
                  <select
                    name="category_name"
                    defaultValue={author_name}
                    required
                    placeholder="Book Category"
                    className="input input-bordered w-full "
                  >
                    <option> {category_name}</option>
                    <option>Computers & Technology</option>
                    <option>Business & Investing</option>
                    <option>History</option>
                    <option>Science Fiction & Fantasy</option>
                  </select>
                </div>

                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-bold">Rating</span>
                  </label>
                  <select
                  defaultValue={rating}
                    name="rating"
                    required
                    placeholder="Rating"
                    className="input input-bordered w-full "
                  >
                    <option>{rating}</option>
                    <option>.5</option>
                    <option>1</option>
                    <option>1.5</option>
                    <option>2</option>
                    <option>2.5</option>
                    <option>3</option>
                    <option>3.5</option>
                    <option>4</option>
                    <option>4.5</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-bold">Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    defaultValue={price}
                    required
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text font-bold">
                      {" "}
                      Quantity of the book
                    </span>
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    defaultValue={quantity}
                   
                    required
                    className="input input-bordered w-full "
                  />
                </div>
              </div>

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">
                    {" "}
                    Short description
                  </span>
                </label>

                <textarea
                  name="description"
                  rows="3"
                  defaultValue={description}
                  className="block p-2.5 input input-bordered rounded-lg w-full text-sm"
                  placeholder="Write short description "
                ></textarea>
              </div>

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">Image Url</span>
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  required
                  placeholder="Paste your Book Image Url"
                  className="input input-bordered w-full"
                />
              </div>

              <button
                className="middle none center w-full rounded-lg my-5 bg-[#3839AF] py-3 px-6 font-sans text-xs font-bold uppercase text-white "
                data-ripple-light="true"
              >
                Update Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default EditBook;