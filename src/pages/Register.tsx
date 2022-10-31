import { RegisterContainer } from "../styles/pages/register.styles"

function Register() {
  return (
    <RegisterContainer>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </div>

        <div>
          <label htmlFor="symbol">Token symbol</label>
          <input id="symbol" type="text" />
        </div>

        <div>
          <label htmlFor="distribution">Token distribution</label>
          <input id="distribution" type="text" />
        </div>

        <div>
          <label htmlFor="chain">Select chain</label>
          <input id="chain" type="text" />
        </div>

        <button type="submit">Build</button>
      </form>
    </RegisterContainer>
  )
}

export default Register
