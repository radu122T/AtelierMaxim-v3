// const [form, setForm] = useState({lastName:'',firstName:'',email:'',adress:'', city: '', state: '', postal: '',phoneNo:''})
// const [errors, setErrors] = useState({})
// const setField = (field, value) => {
//     setForm ({
//         ...form,
//         [field]:value
//     })

//     if(!!errors[field])
//     setErrors ({
//         ...errors,
//         [field]:null
//     })
// }



// {cart.length>0 && <Form id='shippingForm'>
// <h2>Livrare</h2>
// <Form.Group controlId = "lastName">
// <Form.Label>Nume de familie</Form.Label>
// <Form.Control 
//     type="text"
//     value = {form.lastName}
//     onChange={(e)=> setField('lastName', e.target.value)}
//     isInvalid={!!errors.lastName}
// ></Form.Control>
// <Form.Control.Feedback type='invalid'>
//     {errors.lastName}
// </Form.Control.Feedback>
// </Form.Group>
// <Form.Group controlId = "firstName">
// <Form.Label>Prenume</Form.Label>
// <Form.Control 
//     type="text"
//     value = {form.firstName}
//     onChange={(e)=> setField('firstName', e.target.value)}
//     isInvalid={!!errors.firstName}
// ></Form.Control>
// <Form.Control.Feedback type='invalid'>
//     {errors.firstName}
// </Form.Control.Feedback>
// </Form.Group>
// <Form.Group controlId="email">
// <Form.Label>Email </Form.Label>
// <Form.Control 
//     type="email"
//     value = {form.email}
//     onChange={(e)=> setField('email', e.target.value)}
//     isInvalid={!!errors.email}
// ></Form.Control>
// <Form.Control.Feedback type='invalid'>
//     {errors.email}
// </Form.Control.Feedback>
// </Form.Group>
// <Form.Group controlId = "phoneNo">
// <Form.Label>Telefon</Form.Label>
// <Form.Control 
//     type="text"
//     value = {form.phoneNo}
//     onChange={(e)=> setField('phoneNo', e.target.value)}
//     isInvalid={!!errors.phoneNo}
// ></Form.Control>
// <Form.Control.Feedback type='invalid'>
//     {errors.phoneNo}
// </Form.Control.Feedback>
// </Form.Group>                    
// <Form.Group controlId="adress">
// <Form.Label>Adresa </Form.Label>
// <Form.Control 
//     type="adress"
//     value = {form.adress}
//     onChange={(e)=> setField('adress', e.target.value)}
//     isInvalid={!!errors.adress}
// ></Form.Control>
// <Form.Control.Feedback type='invalid'>
//     {errors.adress}
// </Form.Control.Feedback>
// </Form.Group>

// <Form.Group controlId="city">
// <Form.Label>Localitate </Form.Label>
// <Form.Control 
//     type="city"
//     value = {form.city}
//     onChange={(e)=> setField('city', e.target.value)}
//     isInvalid={!!errors.city}
// ></Form.Control>
// <Form.Control.Feedback type='invalid'>
//     {errors.city}
// </Form.Control.Feedback>
// </Form.Group>

// <Form.Group controlId="state">
// <Form.Label>Judet </Form.Label>
// <Form.Control 
//     type="state"
//     value = {form.state}
//     onChange={(e)=> setField('state', e.target.value)}
//     isInvalid={!!errors.state}
// ></Form.Control>
// <Form.Control.Feedback type='invalid'>
//     {errors.state}
// </Form.Control.Feedback>
// </Form.Group>

// <Form.Group controlId="postal">
// <Form.Label>Cod Postal </Form.Label>
// <Form.Control 
//     type="postal"
//     value = {form.postal}
//     onChange={(e)=> setField('postal', e.target.value)}
//     isInvalid={!!errors.postal}
// ></Form.Control>
// <Form.Control.Feedback type='invalid'>
//     {errors.postal}
// </Form.Control.Feedback>
// </Form.Group>
// <h2 className="facturare"><input id="fac" type="checkbox" value="Facturare" checked={isChecked} onChange={handleOnChange}/>Facturare cu aceleasi date </h2>
// </Form>}

// {cart.length>0 && !isChecked && <Form id='paymentForm'>
// <Form.Group controlId = "lastName">
// <Form.Label>Nume de familie</Form.Label>
// <Form.Control 
//     type="text"
//     value = {form.lastName}
//     onChange={(e)=> setField('lastName', e.target.value)}
//     isInvalid={!!errors.lastName}
// ></Form.Control>
// <Form.Control.Feedback type='invalid'>
//     {errors.lastName}
// </Form.Control.Feedback>
// </Form.Group>
// <Form.Group controlId = "firstName">
// <Form.Label>Prenume</Form.Label>
// <Form.Control 
//     type="text"
//     value = {form.firstName}
//     onChange={(e)=> setField('firstName', e.target.value)}
//     isInvalid={!!errors.firstName}
// ></Form.Control>
// <Form.Control.Feedback type='invalid'>
//     {errors.firstName}
// </Form.Control.Feedback>
// </Form.Group>

// <Form.Group controlId="adress">
// <Form.Label>Adresa </Form.Label>
// <Form.Control 
//     type="adress"
//     value = {form.adress}
//     onChange={(e)=> setField('adress', e.target.value)}
//     isInvalid={!!errors.adress}
// ></Form.Control>
// <Form.Control.Feedback type='invalid'>
//     {errors.adress}
// </Form.Control.Feedback>
// </Form.Group>

// <Form.Group controlId="city">
// <Form.Label>Localitate </Form.Label>
// <Form.Control 
//     type="city"
//     value = {form.city}
//     onChange={(e)=> setField('city', e.target.value)}
//     isInvalid={!!errors.city}
// ></Form.Control>
// <Form.Control.Feedback type='invalid'>
//     {errors.city}
// </Form.Control.Feedback>
// </Form.Group>

// <Form.Group controlId="state">
// <Form.Label>Judet </Form.Label>
// <Form.Control 
//     type="state"
//     value = {form.state}
//     onChange={(e)=> setField('state', e.target.value)}
//     isInvalid={!!errors.state}
// ></Form.Control>
// <Form.Control.Feedback type='invalid'>
//     {errors.state}
// </Form.Control.Feedback>
// </Form.Group>

// <Form.Group controlId="postal">
// <Form.Label>Cod Postal </Form.Label>
// <Form.Control 
//     type="postal"
//     value = {form.postal}
//     onChange={(e)=> setField('postal', e.target.value)}
//     isInvalid={!!errors.postal}
// ></Form.Control>
// <Form.Control.Feedback type='invalid'>
//     {errors.postal}
// </Form.Control.Feedback>
// </Form.Group>
// </Form>}