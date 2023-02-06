import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import styles from './contact.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class={{
      contact: true,
    }}>
     <h1>Contact me</h1>
     <p>email: umar.mw@gmail.com</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Contact',
};
