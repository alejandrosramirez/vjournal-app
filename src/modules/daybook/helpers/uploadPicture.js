import axios from "axios";

const uploadPicture = async (file) => {
	try {
		if (!file) {
			return;
		}

		const body = new FormData();
		body.append("upload_preset", "juploads");
		body.append("file", file);

		const url = "https://api.cloudinary.com/v1_1/anytesting/image/upload";

		const { data } = await axios.post(url, body);

		return data.secure_url;
	} catch (error) {
		console.error("Error al subir la imagen");

		return null;
	}
};

export default uploadPicture;
