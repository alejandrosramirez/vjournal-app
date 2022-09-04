import axios from "axios";

const journalApi = axios.create({
	baseURL: "https://vdemo-e9069-default-rtdb.firebaseio.com",
});

export default journalApi;
