import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card, Container, Image } from "semantic-ui-react";

const Index = ({ workers }) => {
  return (
    <Container>
      <div className="workers-container">
        <h1>Workers</h1>
        <div className="grid wrapper">
          <Card.Group>
            {workers.map((worker) => {
              return (
                <Card key={worker._id}>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="tiny"
                      src={`https://react.semantic-ui.com/images/avatar/large/${
                        worker.gender == `m` ? `matthew` : `molly`
                      }.png`}
                    />
                    <Card.Header>{worker.fullName}</Card.Header>
                    <Card.Meta>
                      <strong>{worker.role}</strong>
                      <br />
                      <br />
                      <br />
                      <strong>Employee Id: {worker._id.slice(-6, -1)}</strong>  
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <a
                      href={`/worker/${worker._id}`}
                      className="ui blue basic fluid button"
                      color="violet"
                    >
                      View
                    </a>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
        </div>
      </div>
    </Container>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/workers/test1");
  const { data } = await res.json();

  return { workers: data };
};
export default Index;
