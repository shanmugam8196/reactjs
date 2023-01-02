import '../node_modules/bootstrap/dist/css/bootstrap.css';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './organic/home';
import Menu1 from './organic/menu1';
import Works from './organic/works';
import About from './organic/about';
import Ourform from './organic/ourform';
import Products from './organic/products';
import Destimonial from './organic/destimonial';
import Organicfood from './organic/organicfood';
import Responsive from './organic/responsive';
import Menu from './menu';
import Congratscard from './congratscard'
import Superoverleague from './superoverleague';
import Socialbuttons from './socialbuttons';
import Nodification from './moodle/nodification';
import Login from './moodle/login';
import Technology_Card from './moodle/technology card';
import Hello from './helloworld';



import Feedback from './moodle/feedback';
import Feed from './moodle/feed';
import Increment from './moodle/increment';
import Fruitcounter from './moodle/fruitcounter';
import Datefunction from './moodle/datefunction';
import Smartphone from './moodle/smortphone';
import Fakeapi from './moodle/fakeapi';
import Fakeapidetail from './moodle/fakeapidetail';
import Jasondata from './moodle/jasondata';
import Destimonialscss from './moodle/scss';
import Technology_Cardscss from './moodle/technology cardscss';
function App() {
  return (
      <div className="">

        
       
        


         <BrowserRouter>
         <Routes>
          <Route path='/' element={<Menu/>}/>
          <Route path='/home' element={[<Menu/>,<Menu1/>,<Home/>,<About/>]}/>
          <Route path='/works' element={[<Menu/>,<Menu1/>,<Works/>]}/>
          <Route path='/about' element={[<Menu/>,<Menu1/>,<About/>]}/>
          <Route path='/ourform' element={[<Menu/>,<Menu1/>,<Ourform/>]}/>
          <Route path='/products' element={[<Menu/>,<Menu1/>,<Products/>]}/>
          <Route path='/destimonial' element={[<Menu/>,<Menu1/>,<Destimonial/>]}/>
          <Route path='/organicfood' element={[<Menu/>,<Menu1/>,<Organicfood/>]}/>
          <Route path='/responsive' element={[<Menu/>,<Menu1/>,<Responsive/>]}/>
          <Route path='/congratscard' element={<Congratscard/>}/>
          <Route path='/superoverleague' element={<Superoverleague/>}/>
          <Route path='/socialbutton' element={<Socialbuttons/>}/>
          <Route path='/nodification' element={<Nodification/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/technology card' element={<Technology_Card/>}/>
          <Route path='/helloworld' element={<Hello/>}/>
          <Route path='/feedback' element={[<Menu/>,<Feedback/>]}/>
          <Route path='/feed' element={[<Menu/>,<Feed/>]}/>
          <Route path='/increment' element={[<Menu/>,<Increment/>]}/>
          <Route path='/frootcounter' element={[<Menu/>,<Fruitcounter/>]}/>
          <Route path='/datefunction' element={[<Menu/>,<Datefunction/>]}/>
          <Route path='/smartphone' element={[<Menu/>,<Smartphone/>]}/>
          <Route path='/fakeapi' element={[<Menu/>,<Fakeapi/>]}/>
          <Route path='/fakeapi/:id' element={[<Menu/>,<Fakeapidetail/>]}/>
          <Route path='/jasondata' element={[<Menu/>,<Jasondata/>]}/>
          <Route path='/scss' element={[<Menu/>,<Destimonialscss/>,<Technology_Cardscss/>]}/>
         </Routes>
         </BrowserRouter>




       
      
    </div>
  );
}

export default App;
