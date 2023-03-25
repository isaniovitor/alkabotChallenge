import { useState } from 'react';
import api from '../services/api';

const useRequestGet = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState(false);

	const requestGet = async (url: string) => {
		setLoading(true);
		try {
			const result = await api.get(url);
			setData(result.data);
			setError('');
		} catch (err) {
			console.log(err);
      //toast
    } finally {
			setLoading(false);
			setLoaded(true);
		}
	};

	return {
		data,
		error,
		loading,
		loaded,
		requestGet,
	};
};

export default useRequestGet;
