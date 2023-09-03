import Container from '../Container/Container';
import './AboutMe.css';
import photo from '../../images/photo.jpg'

const AboutMe = () => {
  return (
    <section id='student' className="aboutMe">
      <Container titleText={'Студент'} >
        <div className="aboutMe__container">
          <div className="aboutMe__bio">
            <h2 className="aboutMe__name">Андрей</h2>
            <p className="aboutMe__subtitle">Фронтенд-разработчик, 28 лет</p>
            <p className="aboutMe__description">Я родился и живу в Саратове,
              закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
              Недавно начал кодить. С 2015 года работал в компании
              «СКБ Контур». После того, как прошёл курс по веб-разработке,
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a href="https://github.com/isildurrr1" className="aboutMe__githab-link">Github</a>
          </div>
          <img src={photo} alt='student' className="aboutMe__photo" />
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;