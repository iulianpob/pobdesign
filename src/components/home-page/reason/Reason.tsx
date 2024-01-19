import './reason.css';
import * as Icons from '../../../assets/Icon/Icon';
const iconComponents = {
  ReactIcon: Icons.ReactIcon,
  NodeIcon: Icons.NodeIcon,
  AngularIcon: Icons.AngularIcon,
  WordpressIcon: Icons.WordpressIcon,
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
        const IconComponent = iconComponents[tech.name + 'Icon' as keyof typeof iconComponents];
        return (
            <a href={tech.link} key={index} className='small-card'>
              <IconComponent />
            </a>
        );
      })}
    </div>
  );
};
