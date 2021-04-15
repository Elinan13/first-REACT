// function App() {
//   return (
//     <div className="App">
// My first App
//     </div>
//   );
// }
//
// export default App;

import React, {Component} from 'react';
import Header from './header';
import Footer from './Footer';
import {Content} from './Content';


// const arr = ["Prod1", "Prod2", "Prod3"]

class App extends Component {
    render() {
        return (<div>
                <Header/>
                <Content/>
                <Footer/>
                {/*{*/}
                {/*    arr.map((item) => {*/}
                {/*        return <div className={'product'}> {item}</div>*/}
                {/*    })*/}
                {/*}*/}
                {/*<div>product 1</div>*/}
                {/*{false &&<div>product 2</div>}*/}
                {/*<div>product 3</div>*/}
                {/*<div>product 4</div>*/}
            </div>
        )
    }
}

export default App
// const App2 =()=>{
//    return(
//        <div>functional component</div>
//    )
// };


//14.04.2021
//linuma erku dzev, Class-ov u sovorakan function-ov, Classi depqum Extendy u Render partadir en, isk
//functioni jamanak petq chi, funkcian partadir petqa Const-ov lini
//functioni jamanaak karanq export anenq miangamic consti koxkic, voch te ira takic

//<div>-y react-um kochvuma "JSX", html-i poxaren, inqy aveli hzora
//return petqa ani mi hat vyorstka, voch te mi qani hat nuynic, petqa return anel mi hat divi mej
//kodery sirunacnelu hamar "CTRL ALT L"
//karanq voch te DIV-i mej grenq ayl datark kavichkaneri mej, orinak <> u stex tarber diver</>
//vyorstkai mej karanq nayev grenq js code, partadir dzevavor pakagceri mej, bayc sahmanapak JS, voch te amen inch
//if, for, while chenq kara grenq stex, vorovhetev sahmanapaka
//i tarberutyun CSS-i stex div-in talis enq voch te Class, ayl className, u anpayman dzevavor pakagic u mejy kavichkeq
//ay senc <div className={"first"}> </div>
//xorhurd chi trvum div-in tal id, petqa tal className
//ete petqa datark div lini karanqq uxxaki mi hatanoc senc grenq <div/> (orinak bac taracq toxelu hamar)
//inline style talu hamar karanq henc js-i mej grenq voch te css-i, <div style={{backgroundColor: 'red'}}>
//SPA- Single Page Application, vor yndameny 1 hat HTML eja
//
//folderneri anunnery anpayman petqa linen poqratarov, u space chunenan, petqa linen gcikov


