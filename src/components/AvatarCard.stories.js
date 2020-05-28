import { action } from '@storybook/addon-actions';

import AvatarCard from './AvatarCard';

export default {
  title: 'AvatarCard'
}

export const WithLetters = () => ({
  components: { AvatarCard },
  template: `
    <AvatarCard 
      @click="onClick" 
      size="50" 
      name="super mario"
      title="This is me">
    </AvatarCard>
  `,
  methods: { onClick: action('card selected') },
});

export const WithImage = () => ({
  components: { AvatarCard },
  template: `
    <AvatarCard 
      @click="onClick" 
      size="50" 
      name="Your Father"
      title="I am"
      image="https://lh3.googleusercontent.com/proxy/sCLOGXLaLSQVzEmKw-7gKy4-KFSLSV2Q6UjyFBX3TtrqjmbMRh2ZRfaI2OsIcKD1uL2SDEzz5yWBYJKlK9gzWlVWUWtw6CzwNT0xOltrlUeW1YKPmvetMmVWRJlzp9H6QnAHeoox">
    </AvatarCard>
  `,
  methods: { onClick: action('card selected') },
});

export const Loading = () => ({
  components: { AvatarCard },
  template: `
    <AvatarCard loading="true">
    </AvatarCard>
  `,
});
