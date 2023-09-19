import 'dotenv/config';
import axios from 'axios';

const api = axios.create({
  auth: {
    username: process.env.JIRA_EMAIL,
    password: process.env.JIRA_API_KEY,
  },
  baseURL: `${process.env.JIRA_DOMAIN}/rest/api/3`,
  headers: {
    'Accept': 'application/json',
  },
});

export async function start () {
  let reply;
  try {
    reply = await api.get(`/issue/FFAM-26601`);
    // console.log(reply.status,);
    // console.log(reply.data.fields.parent.key);
    // console.log(reply.data.fields.summary);
    // console.log(reply.data.fields.assignee.displayName);
    // console.log(reply.data.fields.issuetype.name);
    console.log('WHAT:', reply.data.fields.description);
// console.log(`
//   - ${reply.data.fields.summary}
//   - ${reply.data.fields.issue.name}
//   // - ${reply.data.fields.assignee.displayName}
//   // - ${reply.data.fields.parent.key}
// `);
    // console.log(reply.data.description.content);
  }
  catch (err) {
    console.error (err);
  }
}

start ();
