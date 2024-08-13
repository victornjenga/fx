import { useRef, useState } from 'react'
import { useStateContext } from '../context/StateContext'
import Axios from 'axios'
import { useRouter } from 'next/router'
import { createElement } from 'react'
import { useContext } from 'react'

export default function App() {
  const [phone, setPhone] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [cart, setCart] = useState()
  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [buttonText, setButtonText] = useState('CONFIRM ORDER')
  const [location, setLocation] = useState('')

  const form = useRef()

  //   Form validation
  const [errors, setErrors] = useState({})

  const { totalPrice, cartItems } = useStateContext()


  // const [name, price] = cartItems

  const router = useRouter()

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (firstName.length <= 0) {
      tempErrors['firstName'] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors['email'] = true
      isValid = false
    }

    if (phone.length <= 0) {
      tempErrors['phone'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log('errors', errors)
    return isValid
  }
  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   let isValidForm = handleValidation()
  //   setButtonText('PROCESSING')

  //   if (isValidForm) {
  //     const res = await fetch('/api/sendgrid', {
  //       body: JSON.stringify({
  //         email: email,
  //         firstName: firstName,
  //         phone: phone,
  //         name: cartItems.map((item) => [item.name, item.price]),
  //         totalPrice: totalPrice,
  //         location: location,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       method: 'POST',
  //     })

  //     const { error } = await res.json()
  //     if (error) {
  //       console.log(error)
  //     }
  //   }
  //   console.log(email, firstName, phone, cartItems)
  // }

  const payMpesa = async (e) => {
    e.preventDefault()
    setButtonText('PROCESSING')

    Axios.post('https://payment.intasend.com/api/v1/checkout/', {
      public_key: 'ISPubKey_live_29497757-abc0-4f13-9b35-78d53484628d',
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phone,
      host: 'https://civrot.com',
      amount: totalPrice,
      currency: 'KES',
      api_ref: 'live',
    })
      .then((res) => {
        setData(res.data)

        fetch('/api/sendgrid', {
          body: JSON.stringify({
            email: email,
            firstName: firstName,
            phone: phone,
            name: cartItems.map((item) => [item.name, item.price]),
            totalPrice: totalPrice,
            location: location,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        })

        // router.push(res.data.url)
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
        setButtonText('Error')
      })
  }

  return (
    <div className="flex pt-24 relative justify-center items-center z-0 flex-col">
      <div className=" px-10  rounded-2xl  my-6 justify-center items-center  flex flex-col">
        <h1 className="text-xl font-semibold flex p-2">
          Pay
          <span className="pl-2 text-blue-600 ">
           Ksh {totalPrice}
          </span>
        </h1>
        {/* <p>{name}</p> */}
        <form
          ref={form}
          onSubmit={payMpesa}
          className="flex flex-col p-6  space-y-5"
        >
          {' '}
          <input
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className=" bg-slate-200 left-0 text-black  py-1 px-2 outline-none  rounded-sm"
          />{' '}
          <input
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className=" bg-slate-200 left-0 text-black  py-1 px-2 outline-none  rounded-sm"
          />{' '}
          <input
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location Address"
            className=" bg-slate-200 left-0 text-black  py-1 px-2 outline-none  rounded-sm"
          />{' '}
          <input
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className=" bg-slate-200 text-black py-1 px-2 outline-none  rounded-sm"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className=" bg-slate-200 left-0 text-black py-1 px-2 outline-none  rounded-sm"
          />{' '}
          <button
            disabled={firstName && lastName && email ? false : true}
            className="bg-black disabled:bg-gray-400 text-white px-2 py-1 "
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}
