import { useEffect } from 'react';
import ProjectMatrix from '../components/ProjectsMatrix/ProjectMatrix';
import { useProjectsContext } from '../context/ProjectsContext';
import styles from '../styles/Home.module.css';

const Home = () => {
	const { projects, setProjects } = useProjectsContext();

	async function getAllProjects() {
		const resp = await fetch('http://localhost:3000/projects');
		const data = await resp.json();
		return setProjects(data);
	}

	useEffect(() => {
		getAllProjects();
	}, []);

	console.log(projects);

	return (
		<div className="py-3 px-8">
			<ProjectMatrix />
		</div>
	);
};

export default Home;
