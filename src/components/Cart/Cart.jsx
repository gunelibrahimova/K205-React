import { Button } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { removeAllCartAction } from '../../redux/Actions/CartAction'
import { getUserAction } from '../../redux/Actions/UserAction'
import { CheckOutAction } from './../../redux/Actions/CheckOutAction';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

    const { cartItems } = useSelector((state) => state.cart)
    const [totalPrice, setTotalPrice] = useState(0);
    const dispach = useDispatch()
    const {userInfo} = useSelector((state) => state.user)
    const navigate = useNavigate()

    const addOrder =() => {

        if (userInfo.length !== 0) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
              })
              
              swalWithBootstrapButtons.fire({
                title: 'Sifarisi tamamlamaq istediyinizden eminsiniz?',
                text: `Sifarisin umumi meblegi ${totalPrice} Sifaris tamamlanandan sonra sebetdeki mehsullar silinecek.`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sifarisi tamamla',
                cancelButtonText: 'Legv et!',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire(
                    'Sifaris tamamlandi!',
                    'Zehmet olmazsa emailinize baxin',
                    'success'
                  )
    
                dispach((CheckOutAction(userInfo.id)))
                dispach((removeAllCartAction()))
                navigate("/")
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                  )
                }
              })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Evvelce daxil olmalisiniz!',
                footer: '<a href="">Why do I have this issue?</a>'
              }).then((result) =>{
                if (result.isConfirmed) {
                    navigate("/auth")
                }
              })
        }
    }
     
    const countTotal = () => {
        var price = 0;
        cartItems.map(cart => {
            price += cart.price * cart.quantity;
        })
        setTotalPrice(price)
    }

    useEffect(() => {
        countTotal()
        dispach(getUserAction())
    }, [totalPrice,cartItems])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {
                            cartItems.length > 0 ?
                                cartItems.map(product => (
                                    <div key={product.id} className="row">
                                        <div className="col-lg-2">
                                            <img className='img-fluid' src={product.img} alt='' />
                                        </div>
                                        <div className="col-lg-4">{product.name}</div>
                                        <div className="col-lg-4">
                                            <button >-</button>
                                            <input type="text" defaultValue={product.quantity} />
                                            <button >+</button>
                                            <button>Delete</button>
                                        </div>
                                        <div className="col-lg-2">{product.price} Total: {product.price * product.quantity}</div>
                                    </div>
                                ))

                                : (
                                    "Mehsul yoxdu"
                                )
                        }

                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h1 className='cart-title'>Order Description</h1>
                                <p>TotalPrice: {totalPrice}</p>
                            </div>
                            <div className="card-footer">
                                
                                    <Button onClick={() => addOrder()} variant="contained">
                                        Sifarisi tamamla
                                    </Button>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart