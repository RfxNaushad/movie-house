import React from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';

class Form extends React.Component {
    state = {
        data:{},
        errors: {}
    }
    validate = () => {
        const options = {abortEarly:false}
        const {error} = Joi.validate(this.state.data, this.schema, options)
        if(!error) return null

        const errors= {}
        for (let item of error.details) errors[item.path[0]] = item.message
        return errors
    }
    // for preventing default. error validate for form
    handleSubmit = e => {
        e.preventDefault()

        const errors = this.validate()
        this.setState({ errors: errors || {} })
        if (errors) return

        this.doSubmit()
    };
    validateProperty = ({ name, value}) => {
        const obj = {[name]: value}
        const schema = { [name]: this.schema[name]}
        const { error } = Joi.validate(obj, schema)
        return error ? error.details[0].message:null
    }
    // updating the form input value
    handleChange = ({currentTarget : input}) => {
        // for single input
        const errors = { ...this.state.errors }
        const errorMessage = this.validateProperty(input)
        if (errorMessage) errors[input.name] = errorMessage
        else delete errors[input.name]
        // for full form
        const data = {...this.state.data}
        data[input.name] = input.value
        this.setState({data})
    };
    renderButton(label){
        return (
            <button disabled={this.validate()} className="btn btn-primary">
                {label}
            </button>
        )
    }

    renderSelect(name, label, options) {
        const { data, errors } = this.state;

        return (
            <Select
              name={name}
              value={data[name]}
              label={label}
              options={options}
              onChange={this.handleChange}
              error={errors[name]}
            />
        )
    }

    renderInput(name, label, type='text'){
        const { data, errors } = this.state;

        return(
            <Input  
                    type={type}
                    name={name}
                    value={data[name]}
                    label={label}
                    onChange={this.handleChange}
                    error={errors[name]}
                />
        )
    }
}
 
export default Form;