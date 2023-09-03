import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline__box timeline__box_dark">1 неделя</div>
      <div className="timeline__box timeline__box_light">4 недели</div>
      <div className="timeline__sign">Back-end</div>
      <div className="timeline__sign">Front-end</div>
    </div>
  );
};

export default Timeline;