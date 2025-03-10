import "./App.css";
import { Header } from "./components/Header";
import { Articles } from "./components/Articles";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import styled from "styled-components";
import { LinkButton } from "./components/UI-components/LinkButton";
import arrow from "./assets/ic-arrowdown.svg";
import { TextBlock } from "./components/UI-components/TextBlock";
import { Skills } from "./components/Skills";
import { AnimatedSection } from "./components/UI-components/AnimatedSection";
import { ProjectData } from "./data/projectData";
import { ArticleData } from "./data/articleData";

const SectionWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 128px 0;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => (props.tight ? "64px" : "128px")};
  background-color: ${(props) => (props.dark ? "#000000" : "#ffffff")};
  color: ${(props) => (props.dark ? "#ffffff" : "#000000")};
  padding: 64px 24px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 64px 24px;
    gap: 32px;
  }
`;

const ProjectLayout = styled(SectionWrapper)`
  align-items: stretch;

  @media (max-width: 768px) {
    h2 {
      padding: 0;
    }
  }
`;

const SkillsWrapper = styled(SectionWrapper)`
  @media (max-width: 768px) {
    padding: 0px;
    align-items: center;
    h2 {
      font-size: 80px;
    }
  }

  @media (max-width: 390px) {
    align-items: flex-start;
    margin-left: 24px;
    h2 {
      font-size: 60px;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const App = () => {
  return (
    <>
      <SectionWrapper dark tight>
        <Header />
      </SectionWrapper>
      <ProjectLayout id="projects">
        <AnimatedSection>
          <h2>Featured Projects</h2>
        </AnimatedSection>
        {ProjectData.map((project, index) => (
          <AnimatedSection key={project.title}>
            <Projects
              src={project.src}
              title={project.title}
              description={project.description}
              leftAligned={index % 2 === 0}
            />
          </AnimatedSection>
        ))}
        <AnimatedSection>
          <ButtonWrapper>
            <LinkButton
              color="#000000"
              text="See More Projects"
              href=""
              icon={arrow}
              borderColor="#000000"
            />
          </ButtonWrapper>
        </AnimatedSection>
      </ProjectLayout>
      <SectionWrapper dark id="tech">
        <TextBlock
          title="Tech"
          description="HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub."
        />
      </SectionWrapper>
      <SkillsWrapper id="skills">
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
      </SkillsWrapper>
      <SectionWrapper dark id="articles">
        <AnimatedSection>
          <h2>My Words</h2>
        </AnimatedSection>
        {ArticleData.map((article) => (
          <Articles
            title={article.title}
            description={article.description}
            src={article.src}
            key={article.title}
          />
        ))}
        <AnimatedSection>
          <ButtonWrapper>
            <LinkButton
              color="#ffffff"
              text="See More Articles"
              href=""
              icon={arrow}
              borderColor="#ffffff"
            />
          </ButtonWrapper>
        </AnimatedSection>
      </SectionWrapper>
      <SectionWrapper id="contact">
        <Footer />
      </SectionWrapper>
    </>
  );
};

export default App;
