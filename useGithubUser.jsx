import { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json());

const useGithubUser = (username) => {
  const { data: user, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  const refetchUser = () => {
    mutate();
  };

  return {
    user,
    loading: !user && !error,
    error,
    refetchUser
  };
};

export default useGithubUser;

