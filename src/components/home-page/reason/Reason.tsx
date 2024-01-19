import './reason.css';
import { ReactIcon, NodeIcon, AngularIcon, WordpressIcon } from '../../../assets/Icon/Icon';

const iconComponents = {
  ReactIcon,
  NodeIcon,
  AngularIcon,
  WordpressIcon,
};

interface ITech {
  name: string;
  link: string;
}

export const Reason = () => {
  const tech2: ITech[] = [
    {
      name: 'React',
      link: ''
    },
    {
      name: 'Node',
      link: ''
    },
    {
      name: 'Angular',
      link: ''
    },
    {
      name: 'Wordpress',
      link: ''
    }
  ];

  return (
    <div className='reason-container'>
      {tech2.map((tech, index) => {
        const IconComponent = iconComponents[tech.name + 'Icon'];
        return (
            <a href={tech.link} target="_blank" key={index} className='small-card'>
              <IconComponent />
            </a>
        );
      })}
    </div>
  );
};
