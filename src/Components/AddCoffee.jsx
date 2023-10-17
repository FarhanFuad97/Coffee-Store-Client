
import Swal from 'sweetalert2'

const AddCoffee = () => {

  const handleAddCoffee = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    
    const newCoffee = {name,quantity,supplier,taste,category,details,photo};
    console.log(newCoffee);

    //send to data to server//

    fetch('http://localhost:5000/coffee',{
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Successfully!',
          text: 'User Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        
        
      }

    })

  }

    return (
        <div className="bg-slate-400 p-24">
          <h2 className="text-4xl font-bold"> Add Coffee</h2>  
          <form onSubmit={handleAddCoffee}  >
            {/*---form  name and quantity row---*/}
         <div className="md:flex gap-3 ">
         <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffee Name</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="name" placeholder="Name"  className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Available Quantity</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="quantity"  placeholder="Available Quantity"  className="input input-bordered w-full" />
  </label>
</div>
         </div>

          {/*---form supplier row---*/}
          <div className="md:flex gap-3 ">
         <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Supplier</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="supplier"  placeholder="Supplier Name"  className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Teste</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="taste"  placeholder="Teste"  className="input input-bordered w-full" />
  </label>
</div>
         </div>

         {/*---form photoUrl row---*/}
         <div className="md:flex gap-3 ">
         <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Category</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="category"  placeholder="category"  className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="details"  placeholder="Details"  className="input input-bordered w-full" />
  </label>
</div>
         </div>

         <div className="gap-3 ">
         <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Photo URL</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="photo" placeholder="Photo"  className="input input-bordered w-full" />
  </label>
</div>
         </div> 
         <input type="submit" value="Add Coffee"  className="btn btn-block mt-3"/>
          </form>     
        </div>
    );
};

export default AddCoffee;