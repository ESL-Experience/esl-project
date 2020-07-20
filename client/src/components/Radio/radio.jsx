// This code will be used for future development


// import React, { Component } from "react";

// class Radio extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedOption: "",
//       checked: false,
//     };
//   }

//   handleOptionChange = (e) => {
//     console.log(e.target.value);
//     this.setState({
//       selectedOption: e.target.value,
//       checked: !this.state.checked,
//     });
//   };

//   handleFormSubmit = (formSubmitEvent) => {
//     formSubmitEvent.preventDefault();

//     console.log("You've submitted: ", this.state.selectedOption);
//   };
//   render() {
//     return (
//       <div className="container">
//         <div className="row mt-5">
//           <div className="col-sm-12">
//             <form onSubmit={this.handleFormSubmit}>
//               <div className="form-check">
//                 <label>
//                   <input
//                     type="radio"
//                     name="react-tips"
//                     value={this.state.selectedOption}
//                     checked={this.state.checked}
//                     onChange={this.handleOptionChange}
//                     className="form-check-input"
//                   />
//                   {this.props.children}
//                 </label>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Radio;
