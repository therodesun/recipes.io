import React, { Component } from 'react'

class App extends Component {
   state = {
      selectedFile: null,
      url: null
   }

   selectFileHelper = event => {
      this.setState({selectedFile: event.target.files[0]});
      this.setState({url: URL.createObjectURL(event.target.files[0])});
   }

   uploadHelper = () => {
      // Post call
      const fd = new FormData();
      fd.append("image", this.state.selectedFile);
      const config = {
          headers: {
             Authorization: "Client-ID ff3a3f659d1a390",
          }
       }
       axios.post('https://api.imgur.com/3/image', fd, config)
      // .then(res => 
      //    {console.log(res);
      // });
   }

   render() {
      return (
         <div className="App">
            <input type = "file" onChange={this.selectFileHelper}/>
            <img className = "class" src = {this.state.url} />
            <button onClick = {this.uploadHelper}>Upload</button>
         </div>
      )
   }
}

export default App
