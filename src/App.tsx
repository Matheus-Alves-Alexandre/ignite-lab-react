
import { ApolloProvider } from "@apollo/client/react/context/ApolloProvider"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Router } from "./router"


function App() {

  return (
    <div>
      
    <ApolloProvider client = {client}>
      <BrowserRouter>
      
      <Router/>
      </BrowserRouter>


    </ApolloProvider>
    </div>
  )
}

export default App
