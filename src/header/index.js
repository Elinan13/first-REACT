import React, {Component} from 'react';
import Logo from './logo';
import Searchbar from './searchbar';
import Sections from './sections';


class Header extends Component {
    render() {
        return (<div>
                <div style={{backgroundColor: 'red'}} > This is Header</div>
                <Logo/>
                <Searchbar/>
                <Sections/>
            </div>

        )
    }

}

export default Header


//mer componenti anuny petqe hamapatasxani folderi anunin,