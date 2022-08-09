import UserForm from "../userForm/UserForm";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { useState } from "react";
import { useEffect } from "react";
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';

import controls from '../../components/control/controls';
import PageHeader from "../../components/PageHeader";
import useTable from "../../components/useTable";
import usersService from "../../services/usersService";
import Popup from "../../components/Popup";
import rolesService from "../../services/rolesService";

const useStyles = makeStyles(theme => ({
    pageContent : {
      margin: theme.spacing(4),
      padding: theme.spacing(2) 
    },
    searchInput: {
      width: '75%'
    },
    newButton: {
      position: "absolute",
      right: "10px",
    }
}))

const headCells = [
  {id: "id", label: "User Id"},
  {id: "name", label: "User Name"},
  {id: "email", label: "User Email"},
  {id: "state", label: "User State"},
  {id: "rol", label: "User Rol"}
]

function Users() {

  const [users, setUsers ] = useState();
  //const [filterFn, setFilterFn] = useState();
  const classes = useStyles();
  const { TblContainer, TblHead, TblPagination, recordsAndAfterPaginationAndSorting } = useTable(users, headCells);
  const [openPopup, setOpenPopup ] = useState(false);
  const [roles, setRoles] = useState();
  const [ recordForEdit, setRecordForEdit ] = useState(null)

  /*const handleSearch = (e) => {
      let target = e.target;
      setFilterFn({
        fn: items => {
          if (target.value == "")
          return items;
          else
          return items.filter(x => x.name.include(target.value))
        }
      })
  }*/


  const getAll = async() => {
    const response = await usersService.getAll();
    setUsers(response.body);
    
  }

  const getAllRoles = async() => {
    const response = await rolesService.getAll();
    setRoles(response.body);
  }

  

  useEffect(() => {
    getAll();
  },[])

  useEffect(() => {
    getAllRoles();
  },[])

  const AddOrEdit = async(user, resetForm) => {
      const response = await usersService.create(user);
      resetForm();
      setRecordForEdit(null)
      setOpenPopup(false);
      getAll();

  }

  const openInPopup = (user) => {
    console.log(user);
    setRecordForEdit(user);
    setOpenPopup(true);
  }


  return (
    <div>
        <PageHeader 
            icon={<PeopleOutlineTwoToneIcon fontSize="large"/>}
            title="Users"
            subtitle="user's manage"/
        >
          <Paper className={classes.pageContent}>
            <Toolbar>
              <controls.Input
                label="Search Users"
                InputProps= {{
                  startAdornment: (<InputAdornment position="start">
                    <SearchIcon/>
                  </InputAdornment>)
                }}
                onChange
                className={classes.searchInput}
              />
              <controls.Button
                text="Add new"
                variant="outlined"
                startIcon = {<AddIcon/>}
                className={classes.newButton}
                onClick={() => {setOpenPopup(true); setRecordForEdit(null)}}
              />
            </Toolbar>
            <TblContainer>
                <TblHead/>
                <TableBody>
                  {
                    recordsAndAfterPaginationAndSorting()?.map(user => 
                      (
                        <TableRow key={user.id}>
                          <TableCell>{user.id}</TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.state}</TableCell>
                          <TableCell>{user.rolesModel.name}</TableCell>
                          <TableCell>
                            <controls.ActionButton
                              color="primary"
                              onClick={()=>{openInPopup(user)}}
                              >
                                <EditOutlinedIcon fontSize="small"/>
                            </controls.ActionButton>
                            <controls.ActionButton
                              color="secondary">
                                <CloseIcon fontSize="small"/>
                            </controls.ActionButton>
                          </TableCell>
                        </TableRow>
                      ))
                  }
                </TableBody>
            </TblContainer>
            <TblPagination/>
          </Paper>
          <Popup
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            title="User Form"
          >
            <UserForm roles={roles} AddOrEdit={AddOrEdit} recordForEdit={recordForEdit}/>
          </Popup>
    </div>
  )
}

export default Users