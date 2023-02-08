import{BrowserRouter as Router,Routes,Route,Link} from  'react-router-dom';
import ShoppingComponent from '../Components/ShoppingComponent';
import Electonics from './Electronics';
import Fashion from './Fashion';
import Footwear from './Footwear';

export default function ShoppingIndex()
{
    return(
        <div className="container-fluid">
          <Router>
            <ul>
                <li><Link to="/electronics">Electonics</Link></li>
                <li><Link to="/footwear">Footwear</Link></li>
                <li><Link to="/fashion">Fashion</Link></li>
                <li><Link to="/shopping">Shopping</Link></li>
            </ul>
            <hr/>
            <Routes>
                <Route path="/electronics" element={<Electonics/>}></Route>
                <Route path="/footwear" element={<Footwear/>}></Route>
                <Route path="/fashion" element={<Fashion/>}></Route>
                <Route path="/shopping" element={<ShoppingComponent/>}></Route>
            </Routes>
          </Router>
        </div>
    )
}