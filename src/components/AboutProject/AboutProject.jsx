import Container from '../Container/Container';
import './AboutProject.css'
import Element from '../Element/Element';
import Timeline from '../Timeline/Timeline';

const AboutProject = () => {
  return (
    <section id="about" className='about'>
      <Container titleText={'О проекте'}>
        <div className="about__elements">
          <Element
            title={'Дипломный проект включал 5 этапов'}
            paragraph={'Составление плана, работу над' +
              ' бэкендом, вёрстку, добавление функциональности' +
              ' и финальные доработки.'}
          />
          <Element
            title={'На выполнение диплома ушло 5 недель'}
            paragraph={'У каждого этапа был мягкий и жёсткий' +
              ' дедлайн, которые нужно было соблюдать, чтобы' +
              ' успешно защититься.'}
          />
        </div>
        <Timeline />
      </Container>
    </section>
  );
};

export default AboutProject;