import { Grid } from "@material-ui/core";


import useForm, { FormContainer } from "../../components/useForm";
import controls from '../../components/control/controls';
import {State} from '../../enums/StateEnum';
import { Roles } from "../../enums/RolesEnum";
import { useEffect } from "react";




const initialValues = {
    id: 0,
    name: '',
    email: '',
    state : '',
    rolId: '',
}


function UserForm({roles, AddOrEdit, recordForEdit}) {

    const validation = (fieldsValues = values) => {
        let temp = {...errors};
        if('name' in fieldsValues)
        temp.name = fieldsValues.name? "":"Name is required";
        if('email' in fieldsValues)
        temp.email = fieldsValues.email? "":"Email is required";
        if('rolId' in fieldsValues)
        temp.rolId = fieldsValues.rolId.length !== 0 ? "":"Rol is required";
        if('state' in fieldsValues)
        temp.state = fieldsValues.state.length !== 0 ? "":"State is required";
        setErrors({
            ...temp
        })

        if(fieldsValues === values)
        return Object.values(temp).every(x => x === "");
    }

    const {values, setValues, handleInputChange, errors, setErrors, resetForm } = useForm(initialValues, true, validation);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validation()){
            let user = {
                name: values.name,
                state: values.state === 1 ? 'ACTIVE' : 'INACTIVE',
                email: values.email,
                rolesModel: {
                    id: values.rolId,
                    name: values.rolId === 1 ? Roles.admin :  values.rolId === 2 ? Roles.audi : Roles.auxi
                }
            }
            AddOrEdit(user, resetForm)
        }

    }

    useEffect(() => {
        if(recordForEdit !== null)
        setValues({
            id: recordForEdit.id,
            name: recordForEdit.name,
            email: recordForEdit.email,
            state : recordForEdit.state === 'ACTIVE' ? 1 : 2,
            rolId: recordForEdit.rolesModel.id,

        })
    },[recordForEdit])


    return (
        <FormContainer onSubmit={handleSubmit}>
            <Grid container >
                <Grid item xs={6}>
                    <controls.Input
                        label="Name"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange}
                        error={errors.name}
                    />
                    <controls.Input
                        label="Email"
                        value={values.email}
                        name="email"
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                </Grid>
                <Grid item xs={6}>

                   <controls.Select
                    name="rolId"
                    label="Rol"
                    value={values.rolId}
                    onChange={handleInputChange}
                    options={roles}
                    error={errors.rolId}
                   />
                   <controls.Select
                    name="state"
                    label="State"
                    value={values.state}
                    onChange={handleInputChange}
                    options={State}
                    error={errors.state}
                   />
                   <div>
                    <controls.Button
                    type="submit"
                    text="Submit"
                    />
                    <controls.Button
                    text="Cancel"
                    color="default"
                    onClick={resetForm}
                    />
                   </div>

                </Grid>
            </Grid>
        </FormContainer>
    )
}

export default UserForm