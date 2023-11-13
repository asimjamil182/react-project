import axios from "axios";
// baseURL:"http://localhost:3006/"
let token='c6ee66f27a159bc334a05cb36382eb9b';
export default axios.create({
    baseURL:"https://react.gipsyfare.com/server/",
    headers: {'Authorization': 'Bearer '+token},
});