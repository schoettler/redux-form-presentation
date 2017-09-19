import React from "react";
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  S,
  Text
} from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  xzibit: require("../assets/xzibit.png"),
  stick: require("../assets/stick-figure.svg"),
  sword: require("../assets/sword.svg"),
  swordsman: require("../assets/swordsman.svg"),
  shield: require("../assets/shield.svg"),
  rodelero: require("../assets/rodelero.svg"),
  walmart: require("../assets/walmart.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            redux-form
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            And the scaling of an old, painful problem.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading margin="2rem" size={4} textColor="tertiary" caps>Waddup?</Heading>
          <Text size={6} textColor="secondary">
            <S type="bold">Forms</S> typically require at least 3 features:
          </Text>
          <List ordered>
            <ListItem margin="1rem 0">Keeping track of changes</ListItem>
            <ListItem margin="1rem 0">Validation: prior to submit (and after submit, when applicable)</ListItem>
            <ListItem margin="1rem 0">Posting the data</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading margin="2rem" size={4} textColor="tertiary" caps>Ah, we got this.</Heading>
          <Text size={6} textColor="secondary">Using <S type="bold">fully featured</S> components:</Text>
          <List ordered>
            <ListItem margin="1rem 0">A reducer, an action dispatched, object gets merged</ListItem>
            <ListItem margin="1rem 0">Add and evaluate necessary conditionals</ListItem>
            <ListItem margin="1rem 0">Submit action dispatched, a selector and a saga</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading margin="2rem" size={4} textColor="primary" caps>Multiple forms?</Heading>
          <Text size={6} textColor="quartenary">Scalability will require <S type="bold">refactoring</S>:</Text>
          <List ordered textColor="quartenary">
            <ListItem margin="1rem 0">
              Perhaps will want to make the change tracking action reusable to avoid duplicates
            </ListItem>
            <ListItem margin="1rem 0">Will reuse some conditionals here, abstraction to utils</ListItem>
            <ListItem margin="1rem 0">Multiple saga/selector handlers</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading margin="2rem" size={4} textColor="primary" caps>Redux-form</Heading>
          <Text size={6} textColor="quartenary">
            Just create an HTML form:
          </Text>
          <CodePane
            margin="1rem 0"
            lang="jsx"
            source={require("raw-loader!../examples/simple-form.example")}
          />
        </Slide>
        <Slide
          bgImage={images.xzibit}
          bgDarken={0.6}
        >
          <BlockQuote>
            <Quote>
              Yo dawg, I heard you like Components. So i put a Component in your
              High-Order Component in your High-Order Component in your Component
            </Quote>
            <Cite>Qman</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading margin="2rem" size={4} textColor="primary" caps>We already use HoCs!</Heading>
          <Text size={6} textColor="quartenary">
            Redux's <Code>connect</Code> function is an HoC:
          </Text>
          <CodePane
            margin="1rem 0"
            lang="jsx"
            source={require("raw-loader!../examples/simple-container.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading margin="2rem" size={4} textColor="tertiary" caps>Wait, HoC, wat.</Heading>
          <Appear fid="1">
            <Text>He attacc, he protecc</Text>
          </Appear>
          <Layout>
            <Fill>
              <Image src={images.stick} height="20rem" width="10rem" />
              <Appear fid="2">
                <List>
                  <ListItem textSize="2rem">punch()</ListItem>
                  <ListItem textSize="2rem">run()</ListItem>
                </List>
              </Appear>
            </Fill>
            <Appear fid="3">
              <Fill>
                  <Image src={images.sword} height="20rem" width="10rem" />
                  <List>
                    <ListItem textSize="2rem">slash()</ListItem>
                  </List>
              </Fill>
            </Appear>
            <Appear fid="4">
              <Fill>
                  <Image src={images.swordsman} height="20rem" width="10rem" />
                  <List>
                    <ListItem textSize="2rem">punch()</ListItem>
                    <ListItem textSize="2rem">run()</ListItem>
                    <ListItem textSize="2rem">slash()</ListItem>
                  </List>
              </Fill>
            </Appear>
            <Appear fid="5">
              <Fill>
                  <Image src={images.shield} height="20rem" width="10rem" />
                  <List>
                    <ListItem textSize="2rem">block()</ListItem>
                  </List>
              </Fill>
            </Appear>
            <Appear fid="4">
              <Fill>
                  <Image src={images.rodelero} height="20rem" width="10rem" />
                  <List>
                    <ListItem textSize="2rem">punch()</ListItem>
                    <ListItem textSize="2rem">run()</ListItem>
                    <ListItem textSize="2rem">slash()</ListItem>
                    <ListItem textSize="2rem">block()</ListItem>
                  </List>
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading margin="2rem" size={4} textColor="primary" caps>HoCs & redux-form</Heading>
          <Text size={6} textColor="quartenary">
            We enhance our simple form with <Code>redux-form</Code> and <Code>connect</Code>:
          </Text>
          <CodePane
            margin="1rem 0"
            lang="jsx"
            source={require("raw-loader!../examples/enhanced-form.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading margin="2rem" size={4} textColor="primary" caps>HoCs & redux-form</Heading>
          <Text size={6} textColor="quartenary">
            We enhance our input with <Code>Field</Code>:
          </Text>
          <CodePane
            margin="1rem 0"
            lang="jsx"
            source={require("raw-loader!../examples/enhanced-field.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading margin="2rem" size={4} textColor="tertiary" caps>Redux-form</Heading>
          <Text size={6} textColor="secondary">
            For validation, we only need functions of this signature:
          </Text>
          <CodePane
            margin="1rem 0"
            lang="jsx"
            source={require("raw-loader!../examples/simple-rule.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading margin="2rem" size={4} textColor="tertiary" caps>Redux-form</Heading>
          <Text size={6} textColor="secondary">
            Field level validation example:
          </Text>
          <CodePane
            margin="1rem 0"
            lang="jsx"
            source={require("raw-loader!../examples/field-validation.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading margin="2rem" size={4} textColor="tertiary" caps>Redux-form</Heading>
          <Text size={6} textColor="secondary">
            Form level validation example:
          </Text>
          <CodePane
            margin="1rem 0"
            lang="jsx"
            source={require("raw-loader!../examples/form-validation.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading margin="2rem" size={4} textColor="tertiary" caps>Redux-form</Heading>
          <Text size={6} textColor="secondary">
            The redux-form enhanced component manages <Code>handleSubmit</Code>:
          </Text>
          <CodePane
            margin="1rem 0"
            lang="jsx"
            source={require("raw-loader!../examples/handle-submit.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading margin="2rem" size={4} textColor="tertiary" caps>What we really need:</Heading>
          <List ordered>
            <ListItem margin="1rem 0">{"<form>"}</ListItem>
            <ListItem margin="1rem 0">isUgly()</ListItem>
            <ListItem margin="1rem 0">A saga</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading margin="2rem" size={4} textColor="tertiary" caps>What we really need:</Heading>
          <CodePane
            margin="1rem 0"
            lang="jsx"
            source={require("raw-loader!../examples/saga.example")}
          />
        </Slide>
        <Slide>
          <Image src={images.walmart} />
          <Text>Questions?</Text>
        </Slide>
      </Deck>
    );
  }
}
