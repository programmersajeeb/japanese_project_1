import axios from 'axios';

export const processFile = async (image) => {
	const data = new FormData();
	data.append("file", image);
	data.append("upload_preset", "mijapan");
	data.append("cloud_name", "nazim9290");
	try {
		const res = await axios.post(
			"https://api.cloudinary.com/v1_1/nazim9290/image/upload", data
		)
		console.log(res);
		const cloudinaryData = {
			url: res.data.secure_url,
			id: res.data.public_id
		}
		return cloudinaryData;

	} catch (err) {
		console.log(err);
	}
};