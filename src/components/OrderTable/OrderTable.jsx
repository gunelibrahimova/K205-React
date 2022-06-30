import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOrderAction } from "../../redux/Actions/OrderAction";

const OrderTable = () => {
  const { orderList } = useSelector((state) => state.order);
  const { userInfo } = useSelector((state) => state.user);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(getOrderAction(userInfo.id));
  }, []);

  console.log("Order", orderList);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          
          <TableRow>
            <TableCell>Product name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {orderList &&
            orderList.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.productName}</TableCell>
                <TableCell align="right">{order.totalPrice}</TableCell>
                <TableCell align="right">{order.totalQuantity}</TableCell>
                <TableCell align="right">{order.status}</TableCell>
              </TableRow>
            ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Umumi mehsul</TableCell>
            <TableCell align="right">500</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gozlemede olan</TableCell>
            <TableCell align="right">asdf</TableCell>
            <TableCell align="right">asdf</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">asdf</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
