import axios from "axios";

import { GET_GROUPS } from "./types";

export const getGroups = () => dispatch => {
    axios
        .get('/group/')
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_GROUPS,
                payload: res.data
            });
        })
        .catch(err=> console.log(err));
};