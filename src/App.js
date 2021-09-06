import banner from './assets/banner.png';
import promo1 from './assets/promo1.png';
import promo2 from './assets/promo2.png';
import promo3 from './assets/promo3.png';
import promo4 from './assets/promo4.png';
import promo5 from './assets/promo5.png';
import promo6 from './assets/promo6.png';
import promo7 from './assets/promo7.png';
import promo8 from './assets/promo8.png';
import promo9 from './assets/promo9.png';
import promo10 from './assets/promo10.png';
import promo11 from './assets/promo11.png';
import { Carousel } from "react-bootstrap"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} className="App-logo" alt="banner" />
        <p className="mt-5 w-50">A single-player blockchain-based RPG where you fight monsters and reclaim lost lands in a fight against evil forces.</p>
      </header>
      <div className="py-5 bg-secondary">
        <iframe width="835" height="505" src="https://www.youtube.com/embed/MFj-iveWSZg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="bg-dark py-5">
        <h1 className="text-light mb-5">Features</h1>
        <div className="d-flex justify-content-center">
          <Carousel style={{ width: "50%" }} prevLabel={null} nextLabel={null}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={promo1}
                alt="First slide"
              />
              <Carousel.Caption style={{ backgroundColor: "black", borderRadius: 10, opacity: 0.85 }}>
                <h3>Enter a fantasy world</h3>
                <p>Embark on a grand quest in the realm of Frangalia.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={promo2}
                alt="Second slide"
              />
              <Carousel.Caption style={{ backgroundColor: "black", borderRadius: 10, opacity: 0.85 }}>
                <h3>Fight monsters</h3>
                <p>Use skills and magic in combat to win and gain XP.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={promo3}
                alt="Third slide"
              />
              <Carousel.Caption style={{ backgroundColor: "black", borderRadius: 10, opacity: 0.85 }}>
                <h3>Party members</h3>
                <p>Add members of your adventuring party.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={promo4}
                alt="Fourth slide"
              />
              <Carousel.Caption style={{ backgroundColor: "black", borderRadius: 10, opacity: 0.85 }}>
                <h3>A rich backstory</h3>
                <p>Frangalia is filled with lore.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={promo5}
                alt="Fourth slide"
              />
              <Carousel.Caption style={{ backgroundColor: "black", borderRadius: 10, opacity: 0.85 }}>
                <h3>Explore the world</h3>
                <p>There are many dungeons and hidden treasures!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={promo6}
                alt="Fourth slide"
              />
              <Carousel.Caption style={{ backgroundColor: "black", borderRadius: 10, opacity: 0.85 }}>
                <h3>Inns</h3>
                <p>Skip night cycles by sleeping at inns.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={promo7}
                alt="Fourth slide"
              />
              <Carousel.Caption style={{ backgroundColor: "black", borderRadius: 10, opacity: 0.85 }}>
                <h3>Shops</h3>
                <p>Buy and sell from shops using ERC20 tokens representing in-game currency.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={promo8}
                alt="Fourth slide"
              />
              <Carousel.Caption style={{ backgroundColor: "black", borderRadius: 10, opacity: 0.85 }}>
                <h3>Item inventory</h3>
                <p>Collect fungible and non-fungible in-game items.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={promo9}
                alt="Fourth slide"
              />
              <Carousel.Caption style={{ backgroundColor: "black", borderRadius: 10, opacity: 0.85 }}>
                <h3>Item inventory</h3>
                <p>Equip items that are tradeable on the blockchain.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={promo10}
                alt="Fourth slide"
              />
              <Carousel.Caption style={{ backgroundColor: "black", borderRadius: 10, opacity: 0.85 }}>
                <h3>Quests</h3>
                <p>Embark on quests to earn quest item rewards and XP.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={promo11}
                alt="Fourth slide"
              />
              <Carousel.Caption style={{ backgroundColor: "black", borderRadius: 10, opacity: 0.85 }}>
                <h3>Day and night cycles</h3>
                <p>Be wary of evil monsters that come out at night!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="py-5">
        <a href="https://twitter.com/frangaliagame?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @frangaliagame</a>
      </div>
    </div>
  );
}

export default App;
