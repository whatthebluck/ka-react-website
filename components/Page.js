import { connect } from 'react-redux'
import 'isomorphic-fetch'
import StripeCheckout from 'react-stripe-checkout';
import Login from './login/Login'


// TODO - move to an action
const onToken = async (token) => {
  const charge = await fetch('http://localhost:3001/charge', {
    method: 'POST',
    body: JSON.stringify({ token: token.id })
  })
  console.log(await charge.json())
}

const Page = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>

      <Login />

      <div>Purchase single product <StripeCheckout
        token={onToken}
        stripeKey="pk_test_fMqC4KwF8gDKdeO6HtmBFWTT"
        amount={6000}
        currency='USD'
        panelLabel="Pay"
      >
        Test
      </StripeCheckout></div>
    </div>
  )
}


export default connect(state => state)(Page)