import { FC, useState, useEffect } from 'react';
import Head from '@/components/head';
import Layout from '@/components/Layout';
import Card from '@/components/tasks/card';
import useFetch from '@/hooks/useFetch';
import classNames from '@/styles/tasks.module.scss';
import { task } from '@/components/constants/types';
import Accordion from '@/components/Accordion';

const TASKS_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/tasks`;

const renderCardList = (tasks: task[]) => tasks.map(
  (item: task) => <Card content={item} key={item.id} />,
);

const Active: FC = () => {
  const [tasks, setTasks] = useState<task[]>([]);
  const [activeTasks, setActiveTasks] = useState<any>(null);

  const {
    response,
    error,
    isLoading,
  } = useFetch(TASKS_URL);

  useEffect(() => {
    if ('tasks' in response) {
      setTasks(response.tasks);
      const active = tasks.filter(
        (item: task) => item.status === 'Active',
      );
      setActiveTasks(active);
    }
  }, [isLoading, response]);

  return (
    <Layout>
      <Head title="Tasks" />

      <div className="container">
        {
            (!!error) && (
            <p>Something went wrong, please contact admin!</p>
            )
        }
        {
            (isLoading)
              ? (
                <p>Loading...</p>
              )
              : (
                <div className={classNames.container}>
                  <Accordion title="Active">
                    {renderCardList(activeTasks)}
                  </Accordion>
                </div>
              )
        }
      </div>
    </Layout>
  );
};

export default Active;