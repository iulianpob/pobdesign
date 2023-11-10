import './reason.css';
import CodeIcon from '@mui/icons-material/Code';

export const Reason = () => {
  const tech: string[] = ['Angular', 'React', 'NodeJs', 'Native', 'Wordpress'];

  return (
    <div className='reason-container'>
      {tech.map((item) => (
        <div className='small-card'>
          <CodeIcon sx={{ fontSize: '50px', color: '#fff' }} />
          <h4>{item}</h4>
        </div>
      ))}
    </div>
  );
};
