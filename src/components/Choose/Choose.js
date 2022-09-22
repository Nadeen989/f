import './Choose.css';
import Card from '../Card/Card';
import check from '../../assets/img/3-removebg-preview.png';
import report from '../../assets/img/istockphoto-1199234234-170667a-removebg-preview.png';
import { useNavigate } from 'react-router-dom';

const Choose = () => {
  const navigate = useNavigate();
  return (
    <div
      id='choose'
      className='d-flex flex-column align-items-center px-5  '
    >
      <h1>Choose One Of Them</h1>
      <div className='choose d-flex align-items-center'>
        <Card
          title='Check'
          desc='Click here to check if the sender of email is spam before replying to it.'
          image={check}
          btn='To Check'
          onClick={() => navigate('/Check')}
        />
        <Card
          title='Report'
          desc='Click here to check if the URL is spam before you click on it .'
          image={report}
          btn='To Report'
        />
      </div>
    </div>
  );
};
export default Choose;
