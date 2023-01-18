import { Navigate } from "react-router-dom";

export const Landing = () => <h2>Landing page (Public)</h2>;
export const Home = ({ user }) => {
	return <h2>{user?.name} Home page (Private)</h2>;
};
export const Dashboard = () => <h2>Dashboard page (Private)</h2>;
export const Analytics = () => (
	<h2>Analytics page (Private, permission: 'analize')</h2>
);
export const Admin = () => <h2>Admin page (Private, permission: 'admin')</h2>;
