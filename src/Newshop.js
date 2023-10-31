import React from 'react';

class ShopForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      logo: null
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.name === 'logo' ? target.files[0] : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('New Shop data:', this.state);
    this.setState({ name: '', description: '', logo: null });
  }

  handleCancel = () => {
    this.setState({ name: '', description: '', logo: null });
  }

  render() {
    return (
      <div style={{ maxWidth: '300px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '4px' }}>
        <h2>New Shop</h2>
        
        <div>
          <label htmlFor="logoUpload" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', cursor: 'pointer', marginBottom: '20px' }}>
            UPLOAD LOGO +
          </label>
          <input 
            type="file" 
            id="logoUpload"
            name="logo"
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

export default ShopForm;
