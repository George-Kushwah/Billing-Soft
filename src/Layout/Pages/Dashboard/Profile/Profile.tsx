import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const Details = React.lazy(() => import('./Detais'));

const Profile = () => {
  const { pages } = useParams();
  const navigate: any = useNavigate();

  React.useEffect(() => {
    if (pages === 'Logout') {
      Cookies.remove('login');
      Cookies.remove('token');
      navigate('/Login');
    }
  }, [pages]);

  return (
    <>
      <Suspense fallback={<>Loads</>}>
        {pages === 'Profile' && <Details />}
      </Suspense>
    </>
  );
};

export default Profile;
