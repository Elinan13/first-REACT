import React, {Component} from 'react';
import Info from './info';
import Options from './options';
import Search from './search';

class Footer extends Component {
    render() {
        return (
            <div>
                <div style={{backgroundColor: 'darkgray'}}>This is Footer</div>
               <Info/>
               <Options/>
               <Search/>
            </div>

        )
    }
}

export default Footer
