import React from 'react';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
      photo: null
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.name === 'photo' ? target.files[0] : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('New product data:', this.state);
    this.setState({ 
        name: '', 
        description: '', 
        category: '', 
        quantity: '', 
        price: '', 
        photo: null 
      });
  }

  handleCancel = () => {
    this.setState({ 
      name: '', 
      description: '', 
      category: '', 
      quantity: '', 
      price: '', 
      photo: null 
    });
  }

  render() {
    return (
      <div style={{ maxWidth: '300px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '4px' }}>
        <h2>New Product</h2>
        
        <div>
          <label htmlFor="photoUpload" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', cursor: 'pointer', marginBottom: '20px' }}>
            UPLOAD PHOTO +
          </label>
          <input 
            type="file" 
            id="photoUpload"
            name="photo"
            style={{ display: 'none' }}
            accept="image/jpeg/png"
            onChange={this.handleInputChange}
          />
        </div>

        <form onSubmit={this.handleSubmit}>
        <div>
            <p></p>
            <label>Name</label>
            <input 
              type="text" 
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              style={{ width: '80%', padding: '10px', marginBottom: '10px', borderRadius: '10px', border: '1px solid #ccc' }} 
            />
          </div>

          <div>
            <label>Description</label>
            <input 
              type="text" 
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              style={{ width: '80%', padding: '10px', marginBottom: '10px', borderRadius: '10px', border: '1px solid #ccc' }} 
            />
          </div>

          <div>
            <p></p>
            <label>Category</label>
            <input 
              type="text" 
              name="category"
              value={this.state.category}
              onChange={this.handleInputChange}
              style={{ width: '80%', padding: '10px', marginBottom: '10px', borderRadius: '10px', border: '1px solid #ccc' }} 
            />
          </div>

          <div>
            <label>Quantity</label>
            <input 
              type="int32" 
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleInputChange}
              style={{ width: '80%', padding: '10px', marginBottom: '10px', borderRadius: '10px', border: '1px solid #ccc' }} 
            />
          </div>

          <div>
            <label>Price   </label>
            <input 
              type="double" 
              name="price"
              value={this.state.price}
              onChange={this.handleInputChange}
              style={{ width: '80%', padding: '10px', marginBottom: '10px', borderRadius: '10px', border: '1px solid #ccc' }} 
            />
          </div>

          <div>
            <button type="submit" style={{ backgroundColor: '#354B5F', color: 'white', padding: '10px 15px', border: 'none', cursor: 'pointer' }}>
              SUBMIT
            </button>
            <button type="button" onClick={this.handleCancel} style={{ marginLeft: '10px', padding: '10px 15px', border: 'none', cursor: 'pointer' }}>
              CANCEL
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;
