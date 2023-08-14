import './Techs.css';
import Container from '../Container/Container';
import TechCard from './TechCard/TechCard';

const Techs = () => {
  const techsArray = [
    'HTML',
    'CSS',
    'JS',
    'React',
    'Git',
    'Express.js',
    'mongoDB'
  ]
  return (
    <section id='techs' className="techs">
      <Container titleText={'Технологии'}>
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии,
          которые применили в дипломном проекте.
        </p>
        <div className="techs__cards">
          {techsArray.map((tech, i) => (
            <TechCard key={i} text={tech} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Techs;
