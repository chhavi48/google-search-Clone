
// AIzaSyAatRVKFGA7caySe7GyLbdUrIrNIoYKsaA
// cx =85a10e4292401458c

import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyAatRVKFGA7caySe7GyLbdUrIrNIoYKsaA",
    cx: "85a10e4292401458c",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};