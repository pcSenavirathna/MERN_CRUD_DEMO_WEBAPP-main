import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({rows,selectedUser,deleteUser}) => {
    return(
     <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.length > 0 ? rows.map(row =>(
                        <TableRow key={row.id} sx={{'&:last-child th, &:last-child td' : {border: 0}}}>
                        <TableCell component='th' scope="row">{row.id}</TableCell>
                        <TableCell component='th' scope="row">{row.name}</TableCell>
                        <TableCell >
                            <Button 
                                sx={{margin:'0px 10px'}}
                                onClick={() => selectedUser({id:row.id, name:row.name})}
                            
                            >
                                Update
                            </Button>
                            <Button 
                                sx={{margin:'0px 10px'}}
                                onClick={() => deleteUser({id: row.id})}
                            
                            >
                                Delete 
                            </Button>
                        </TableCell>
                        
                        </TableRow>
                    )) : (
                        <TableRow sx={{'&:last-child th, &:last-child td' : {border: 0}}}>
                            <TableCell component='th' scope="row">No Data</TableCell>
                        
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
     </TableContainer>
    );
}

export default UsersTable;