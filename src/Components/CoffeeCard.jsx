/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee,coffees, setCoffees }) => {

     const { _id,name,quantity,supplier,taste,photo} = coffee;

     const handleDelete = _id => {
      console.log(_id);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          // Swal.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          //)

        fetch(`http://localhost:5000/coffee/${_id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0) {
             Swal.fire(
            'Deleted!',
            'Your Coffee has been deleted.',
            'success'
          )
        const remaining = coffees.filter(cof=> cof._id !==_id);
        setCoffees(remaining);

          }
        })

        }
      })

     }

    return (
        
        <div className="card card-side bg-base-100 shadow-xl mt-5">
  <figure><img  className="w-96 h-96 " src={photo} alt="Movie"/></figure>
  <div className="flex justify-between w-full pr-3">
    <div className="p-3">
    <h2 className="card-title">Name: {name}</h2>
    <p>{quantity}</p>
    <p>{supplier}</p>
    <p>{taste}</p>
    </div>
    <div className="card-actions justify-end">
    <div className="btn-group btn-group-vertical space-y-2">
  <button className="btn btn-active">View</button>
  <Link to={`updateCoffee/${_id}`}>
  <button className="btn">Update</button>
  </Link>
  <button
  onClick={() => handleDelete(_id)}
   className="btn bg-red-500">Deleted</button>
</div>
    </div>
  </div>
</div>    
        
    );
};

export default CoffeeCard;