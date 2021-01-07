import { Button } from 'reactstrap';

import { useDispatch } from 'react-redux';

import Pricing from '../components/widgets/pricing';
import { useEffect } from 'react';
import { fetchPosts } from '../store/actions/postAction';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Pricing />
    </>
  );
}
