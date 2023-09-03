import './Element.css'

const Element = ({title, paragraph}) => {
  return (
    <div className="element">
      <h3 className="element__title">{title}</h3>
      <p className="element__paragraph">{paragraph}</p>
    </div>
  );
};

export default Element;