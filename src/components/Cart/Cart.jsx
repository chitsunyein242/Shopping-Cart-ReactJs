import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQty, getAllCart, increaseQty, removeCart } from '../../features/carts/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart() {

  const carts = useSelector(getAllCart)

  const dispatch = useDispatch();

  const handleQty = (id,type) =>{
    
    if(type == 'increase'){
      dispatch(increaseQty(id))
    }    
    else if (type == 'decrease'){
      dispatch(decreaseQty(id))
    }
    else if (type == 'delete'){
      dispatch(removeCart(id))
    }
  }
  return (
    <>
      <TableContainer component={Container}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>QTY</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            carts ?
            carts.map((cart,key) => (              
                 <TableRow 
                  key={key}         
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img style={{
                  width : 120,
                  height : 90
                }} src= {cart.image}/>
              </TableCell>
              <TableCell >{cart.title.slice(0,50)}</TableCell>
              <TableCell >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  // justifyContent :'center',
                  width : '100%'
                }}>
                  <button style={{
                    border : 'none',
                    background : '#209',
                    padding : 10,
                    borderRadius : 5,
                    color : '#fff'
                  }} onClick={
                    () =>{
                      handleQty(cart.id,'increase')
                    }
                  }>
                    +</button>
                  <p style={{
                    padding : 10
                  }}>{cart.qty}</p>
                  <button style={{
                    border : 'none',
                    background : '#209',
                    padding : 10,
                    borderRadius : 5,
                    color : '#fff'
                  }} onClick={
                    () =>{
                      handleQty(cart.id,'decrease')
                    }
                  }>-</button>
                </div>
              </TableCell>
              <TableCell>{parseFloat(cart.price) * parseFloat(cart.qty)} $</TableCell>
              <TableCell>
                <DeleteIcon onClick={() => handleQty(cart.id,'delete')}
                style={{
                  color: 'red'
                }}>

                </DeleteIcon>
              </TableCell>
          </TableRow>
            )) :
            <h1>No Data</h1>
          }
         
        </TableBody>
      </Table>
      <Button variant='contained' style={{
        marginTop : 20
      }}>Checkout</Button>
    </TableContainer>
    
    </>
  );
}
