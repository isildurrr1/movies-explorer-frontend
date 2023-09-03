import './Container.css';
import Title from '../Title/Title';

const Container = ({ children, titleText }) => {
  return (
    <div className="container">
      <Title text={titleText}/>
      {children}
    </div>
  );
};

export default Container;