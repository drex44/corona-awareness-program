import React from "react";
import { questions } from "../configs/questions";
import {Configs} from "../configs/app";
import { Question} from "../components/question";
import { saveData } from "../services/app";

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = { data: {} };
  }

  onSelect = (key, value) => {
    this.setState(prevState => ({ data: { ...prevState.data, [key]: value } }));
  };

  onSubmit = () => {
    saveData(this.state.data);
  };

  clearData = () => {
    this.setState({ data: {} });
  };

  render() {
    return (
      <div class="container">
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">{Configs.title}</h1>
              <h2 class="subtitle">{Configs.subtitle}</h2>
            </div>
          </div>
        </section>

        {questions.map(question => (
          <Question
            {...question}
            onSelect={this.onSelect}
            value={this.state.data[question.qKey]}
          />
        ))}

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" value={this.state.data.message} 
              onChange={(e) => this.onSelect("message", e.target.value)}></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={this.onSubmit}>Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light" onClick={this.clearData}>Clear</button>
          </div>
        </div>
      </div>
    );
  }
}
