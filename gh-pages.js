import { publish } from 'gh-pages';

publish (
    'build', {
        branch: 'main',
        repo: 'https://github.com/Orwellian-225/personal-website.git',
        user: {
            name: 'Orwellian-225',
            email: 'orwellian225@gmail.com'
        },
        dotfiles: true
    },
    () => console.log('Deployment complete')
);
