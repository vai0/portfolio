import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div className="projects-container">
        {this.props.projects.map((project, index) => {
          return (
            <ProjectCard
              projectTitle={project.title}
              projectDescription={project.description}
              projectSkills={project.skills}
              projectLinks={project.links}
              projectScreenshot={project.screenshot}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

class ProjectCard extends React.Component {
  componentDidMount() {
    this.refs.screenshot.style.background =
      "url('images/" + this.props.projectScreenshot + "')";
    this.refs.screenshot.style.backgroundSize = 'cover';
    this.refs.screenshot.style.backgroundRepeat = 'no-repeat';
  }
  render() {
    return (
      <div className="project-card">
        <div className="project-screenshot" ref="screenshot" />
        <div className="project-background" />
        <div className="project-content">
          <h3>{this.props.projectTitle}</h3>
          <p
            dangerouslySetInnerHTML={{ __html: this.props.projectDescription }}
          />
          <ProjectSkills skills={this.props.projectSkills} />
          <ProjectLinks links={this.props.projectLinks} />
        </div>
      </div>
    );
  }
}

class ProjectSkills extends React.Component {
  render() {
    return (
      <div className="project-skills">
        {this.props.skills.map((skill, index) => {
          return <ProjectSkill skill={skill} key={index} />;
        })}
      </div>
    );
  }
}

class ProjectSkill extends React.Component {
  render() {
    return <span className="project-skill">{this.props.skill}</span>;
  }
}

class ProjectLinks extends React.Component {
  render() {
    return (
      <div className="project-links">
        {Object.keys(this.props.links).map((key, index) => {
          return (
            <ProjectLink site={key} link={this.props.links[key]} key={index} />
          );
        })}
      </div>
    );
  }
}

class ProjectLink extends React.Component {
  render() {
    const buttonText = this.props.site === 'github' ? 'view code' : 'try demo';
    return (
      <a href={this.props.link} className="project-link">
        {buttonText}
      </a>
    );
  }
}

export default Projects;
