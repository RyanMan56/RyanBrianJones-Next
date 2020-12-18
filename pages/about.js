import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";
import Page from "../components/Page";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <Page>
      <div className={styles.container}>  
        <h1>About me</h1>
        <div className={styles.content}>
          <div>
            <p>Hello world</p>
          </div>
          <div>
            <Gitgraph options={{
              template: templateExtend(TemplateName.Metro, {
                colors: ['#fbeb6e', '#eb5fbd', '#399fdb'],
                commit: {
                  message: {
                    displayHash: false,
                    displayAuthor: false,
                  }
                },
                branch: {
                  label: {
                    display: false,
                  }
                }
              }),
              orientation: "vertical-reverse"
            }}>
              {(gitgraph) => {
                const education = gitgraph.branch("Eduction");

                education.commit("BSc (Hons) Software Engineering")
                         .tag({
                           name: "2014 - 2018",
                           style: {
                             color: '#1c1b1fe6'
                           }
                         })
                         
                education.commit("");

                const master = education.branch("Employment");

                master.commit("We Are Nova")
                      .tag("2016 - 2018")

                const freelance = master.branch("Freelance");
                freelance.commit("Part-time freelance")
                         .tag("2017 - 2020")

                education.commit("");

                master.commit("RentalStep")
                      .tag("2018 - 2019")

                master.commit("Monterosa")
                      .tag("2019 - 2020")

                master.commit("PropertyCloud")
                      .tag("2020 - 2020")

                freelance.commit("Full-time freelance")
                         .tag("2020 - Now")
              }}
            </Gitgraph>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default About;