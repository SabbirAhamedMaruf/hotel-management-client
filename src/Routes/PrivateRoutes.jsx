import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <p>Loading</p>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};
PrivateRoutes.propTypes ={
    children: PropTypes.node
}
export default PrivateRoutes;