import "./Hero.css";

const Hero = ({ clubName }) => {
  return (
    <div className="Hero-parent">
      <div className="card">
        <img className="img" src="/assets/boxing1.jpeg" alt="boxing gloves" />
        <h3>{clubName}</h3>
        <h4>Detroit</h4>
        <a href="https://mayweather.fit/">
          <button>view website</button>
        </a>
      </div>
      <div className="card">
        <img className="img" src="/assets/boxing2.jpeg" alt="boxing gloves" />
        <h3>Legends Boxing</h3>
        <h4>Rochester</h4>
        <a href="https://www.legendsboxing.com/gym/rochester-mi">
          <button>view website</button>
        </a>
      </div>
      <div className="card">
        <img className="img" src="/assets/boxing3.jpeg" alt="boxing gloves" />
        <h3>New Way Training Center</h3>
        <h4>Clinton Twp</h4>
        <a href="https://newwaytrainingcenter.com/">
          <button>view website</button>
        </a>
      </div>
      <div className="card">
        <img className="img" src="/assets/boxing4.jpeg" alt="boxing gloves" />
        <h3>5 Star Boxing and Fitness</h3>
        <h4>Canton</h4>
        <a href="https://5starboxingandfitness.com/">
          <button>view website</button>
        </a>
      </div>
      <div className="card">
        <img className="img" src="/assets/boxing5.jpeg" alt="boxing gloves" />
        <h3>Kronk Boxing Gym</h3>
        <h4>Detroit</h4>
        <a href="https://5starboxingandfitness.com/">
          <button>view website</button>
        </a>
      </div>
      <div className="card">
        <img className="img" src="/assets/boxing6.jpeg" alt="boxing gloves" />
        <h3>Jabs Gym</h3>
        <h4>Detroit</h4>
        <a href="https://jabsgym.com/">
          <button>view website</button>
        </a>
      </div>
      <div className="card">
        <img className="img" src="/assets/boxing7.jpeg" alt="boxing gloves" />
        <h3>Courage Boxing Gym</h3>
        <h4>Ann Arbor</h4>
        <a href="https://mayweather.fit/">
          <button>view website</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
