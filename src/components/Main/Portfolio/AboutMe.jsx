import Container from '../Container/Container';
import './AboutMe.css';
import photo from '../../../images/photo.jpg'

const AboutMe = () => {
  return (
    <div id='student' className="aboutme">
      <Container titleText={'Студент'} >
        <div className="aboutme__container">
          <div className="aboutme__bio">
            <h2 className="aboutme__name">Андрей</h2>
            <p className="aboutme__prof">Фронтенд-разработчик, 28 лет</p>
            <p className="aboutme__description">Я родился и живу в Саратове,
              закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
              Недавно начал кодить. С 2015 года работал в компании
              «СКБ Контур». После того, как прошёл курс по веб-разработке,
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a href="https://github.com/isildurrr1" className="aboutme__githab-link">Github</a>
          </div>
          <img src={photo} alt='student' className="aboutme__photo" />
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;