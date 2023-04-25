import React, { useState, useEffect } from 'react';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}
function GithubLastCommitMessage(props) {
  const [lastCommitMessage, setLastCommitMessage] = useState('');
  const [lastCommitDate, setLastCommitDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/repos/${props.username}/${props.repo}/commits`);
      const data = await response.json();
      setLastCommitMessage(data[0].commit.message);
      setLastCommitDate(formatDate(data[0].commit.author.date));

    };
    fetchData();
  }, [props.username, props.repo]);

  return new Map([
    ['lastCommitMessage', lastCommitMessage],
    ['lastCommitDate', lastCommitDate]
  ]);
}

export default GithubLastCommitMessage;
