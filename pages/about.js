import { Header, Divider, List, Button, Form, TextArea } from 'semantic-ui-react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { nameState, charState } from '../store/states';

export default function About() {
  const charLen = useRecoilValue(charState);
  const [name, setName] = useRecoilState(nameState);

  return (
    <div>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        회사 소개
      </Header>
      <Divider />
      <List>
        <List.Item>
          <List.Icon name="users" />
          <List.Content>Semantic UI</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>New York, NY</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="http://www.semantic-ui.com">semantic-ui.com</a>
          </List.Content>
        </List.Item>
      </List>

      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        문의 사항
      </Header>
      <Divider />

      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
          <div>Hello, I'm {name}</div>
          <div>My name has {charLen} charactor</div>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <TextArea placeholder="Last Name" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
