import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import styles from './team.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class={{
      team: true,
    }}>
      <h1>Team</h1>
      <div>
        <ul>
          <li>Person 1</li>
          <li>Person 2</li>
          <li>Person 3</li>
        </ul>
      </div>
  </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik The Team A',
};
