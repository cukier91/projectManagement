import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from 'react';
interface ProjectsContextType {
	projects: [];
	setProjects: Dispatch<SetStateAction<any>>;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(
	undefined
);
export const ProjectsProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [projects, setProjects] = useState<any | undefined>([]);

	return (
		<ProjectsContext.Provider value={{ projects, setProjects }}>
			{children}
		</ProjectsContext.Provider>
	);
};
export const useProjectsContext = () => {
	const ctx = useContext(ProjectsContext);

	if (!ctx) {
		// poza komponentem zwróci nulla
		throw new Error("Missing themeContext, it's not wrapped in ThemeProvider");
	}
	return ctx;
};
