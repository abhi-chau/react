import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

export default function SPAComponent()
{
    return(
        <div className="container-fluid">
          <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/html">HTML</Link></li>
                    <li><Link to="/css">CSS</Link></li>
                    <li><Link to="/js">JavaScript</Link></li>
                    <li><Link to="/home">Home</Link></li>
                </ul>
            </nav>
            <hr/>
            <Routes>
              <Route path="html" element={
                <main>
                    <h2>HTML</h2>
                    <p>It is a markup language.</p>
                </main>
              }/>
               <Route path="css" element={
                <main>
                    <h2>CSS</h2>
                    <p>It defines styles.</p>
                </main>
              }/>
               <Route path="js" element={
                <main>
                    <h2>JavaScript</h2>
                    <p>It is a language</p>
                </main>
              }/>
                <Route path="/home" element={
                <main>
                    <h2>Home</h2>
                    <p>Tutorial Home</p>
                </main>
              }/>
                <Route path="*" element={
                <main>
                  <code>Not Found : Page you requested Not found</code>
                </main>
              }/>
            </Routes>
          </BrowserRouter>
        </div>
    )
}