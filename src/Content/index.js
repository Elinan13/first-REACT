import React, {Component} from 'react';
import {Left} from './left';
import {Middle} from './middle';
import {Right} from './right';

export const Content = () => {
    return (
        <div>
            <div style={{backgroundColor: 'green'}}>
                This is Content
            </div>
            <Left/>
            <Middle/>
            <Right/>
        </div>

    )
};

//ete functional-v enq grum componenty,, apa import aneluc anpayman petqa dzevavor pakagci mej import anenq
//import {Content} from './content/index';
// class Content extends Component {
//     render() {
//         return (
//             <div>This is Content</div>
//         )
//     }
// }
//
// export default Content
