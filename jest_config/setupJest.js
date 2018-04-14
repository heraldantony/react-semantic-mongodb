import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

global.fetch = require('isomorphic-fetch')
/** {@link: https://reactjs.org/blog/2017/09/26/react-v16.0.html#javascript-environment-requirements} */
global.requestAnimationFrame = function (cb) {
	setTimeout(cb, 0)
}
process.env.BASE_API = process.env.BASE_API || 'http://localhost:3000/api/v1'
process.env.BROWSER = false

const adapter = new Adapter()
configure({adapter})
