import React from "react";
import about from "../img/abou.jpg";
import me from "../img/me.png";

const Home = () => {
  return (
    <div>
      <section class="main">
        <div class="container">
          <h1>Bright emotions, quiet moments</h1>
          <img src={me} alt="" />
        </div>
      </section>

      <section class="me" id="me">
        <div class="container">
          <div class="text_block">
            <h2>About me</h2>
            <p>
              Hello! My name is Fariza and I am a Frontend Developer. My key
              qualities include responsibility, organization, and a desire for
              self-improvement. I am always open to new challenges and eager to
              learn something new. I am committed to achieving high results in
              everything I do and strive for continuous improvement. I believe
              that my energy and my skills will enable me to successfully tackle
              any task and be a valuable team member.
            </p>
          </div>
          <img src={about} alt="" />
        </div>
      </section>

      <section class="skills" id="skills">
        <div class="container">
          <h2>Skills</h2>
          <div class="general">
            <h3>General skills:</h3>
            <span class="skills_span">responsibility</span>
            <span class="skills_span">accuration</span>
            <span class="skills_span">self-development</span>
            <span class="skills_span">stability</span>
          </div>
          <hr />
          <div class="prof">
            <h3>Professional skills:</h3>
            <span class="skills_span">JavaScript</span>
            <span class="skills_span"> HTML/CSS</span>
            <span class="skills_span">PhotoShop</span>
            <span class="skills_span">Figma</span>
          </div>
        </div>
      </section>

      <section class="reaches" id="reaches">
        <div class="container">
          <h2>Reaches</h2>

          <div class="blocks">
            <div class="right">
              <span class="reach"> → English C1</span>
              <span class="reach"> → TOEFL PBT: 480points</span>
              <span class="reach">
                → Languages:Uzbek, Kyrgyz, Russian, English
              </span>
            </div>

            <div class="left">
              <span class="reach"> → Graphic Designer</span>
              <span class="reach"> → Freelance</span>
              <span class="reach"> → Digital Artist</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="container">
          <h3>Telegram: fanwwi</h3>
          <h3>Instagram: fanwwi_</h3>
          <h3>Phone number: +996 990 120 212</h3>
        </div>
      </footer>
    </div>
  );
};

export default Home;
