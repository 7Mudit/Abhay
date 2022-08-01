import React, { Component } from "react";
import { Form, Label, Input, FormFeedback } from "reactstrap";
import FormData from "form-data";
import axios from "axios";
import '../CSS/FormAbhay.css'

export default class FormAbhay extends Component {
    constructor(props){
        super(props)
        this.state={
            AIN:'',
            description:'',
            category:'',
            allotedTo:'',
            location:'',
            status:'',
            specialCharacteristics:'',
            remark:'',
            date:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit=async(e)=>{
        e.preventDefault()
        const formData=new FormData();

        formData.append('AIN',this.state.AIN)
        formData.append('Description',this.state.description)
        formData.append('Category',this.state.category)
        formData.append('Alloted To',this.state.allotedTo)
        formData.append('Location',this.state.location)
        formData.append('Status',this.state.status)
        formData.append('Special Characteristics',this.state.specialCharacteristics)
        formData.append('Remark',this.state.remark)
        formData.append('Date',this.state.date)
        let res = await axios.post(
            "https://httpbin.org/post",
            formData,
            {
              headers: {
                Accept: "application/json",
              },
            }
          );
          let data = res.data;
          console.log(data);
          if (res.status === 200) {
            console.log("Succesfully Submitted");
          }
        };
        
    
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value,
        });
      };
     
  render() {
    return (
      <div>
        <h1>Assets Record Entry</h1>
        <Form method="Post" onSubmit={this.handleSubmit}>
          <div className="mb-3 mt-10">
            <Label for="exampleInputEmail1" className=" Label1">
              AIN
            </Label>
            <Input
              type="text"
              className="form-control w-auto"
              name="AIN"
              id='AIN'
              onChange={this.handleInputChange}
            />
          
          </div>
          <div className="mb-3 ">
            <Label for="exampleInputPassword1" className="form-label">
              Description
            </Label>
            <Input
              type="text"
              className="form-control w-auto"
              name="description"
              id="description"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3 ">
            <Label for="exampleInputPassword1" className="form-label">
              Category
            </Label>
            <Input
              type="text"
              className="form-control w-auto"
              name="category"
              id="category"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3 ">
            <Label for="exampleInputPassword1" className="form-label">
              Alloted To
            </Label>
            <Input
              type="text"
              className="form-control w-auto"
              name="allotedTo"
              id="allotedTo"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3 ">
            <Label for="exampleInputPassword1" className="form-label">
              Location
            </Label>
            <Input
              type="text"
              className="form-control w-auto"
              name="location"
              id="location"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3 ">
            <Label for="exampleInputPassword1" className="form-label">
              Status
            </Label>
            <Input
              type="text"
              className="form-control w-auto"
              name="status"
              id="status"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3 ">
            <Label for="exampleInputPassword1" className="form-label">
              Special Characteristics
            </Label>
            <Input
              type="text"
              className="form-control w-auto"
              id="specialCharacteristics"
              name="specialCharacteristics"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3">
            <Label for="exampleInputPassword1" className="form-label">
              Remarks
            </Label>
            <Input
              type="text"
              className="form-control w-auto "
              id="remark"
              name="remark"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-3 ">
            <Label for="exampleInputPassword1" className="form-label">
              Date
            </Label>
            <Input
              type="date"
              className="form-control  align-middle"
              id="date"
              name="date"
              onChange={this.handleInputChange}
            />
          </div>

          


          <button type="submit" onClick={this.handleSubmit} className="btn btn-primary ">
            Submit
          </button>
        </Form>
      </div>
    );
  }
}
