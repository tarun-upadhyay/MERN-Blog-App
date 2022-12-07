import Header from "../../Components/Header/Header"
import Posts from "../../Components/posts/Posts"
import Siderbar from "../../Components/Siderbar/Siderbar"
import "./home.css"

const Home = () => {
  return (
   <div >

    <Header/>
   <div className="home">
<Posts/>
<Siderbar/>
   </div>
   </div>
  )
}

export default Home